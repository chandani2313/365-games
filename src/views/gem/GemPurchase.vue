<template>
  <div class="redeem_outer_container">
    <div class="redeem_container">
      <div class="content1">
        <div class="product_heading_wrap">
          <div class="product_heading">Gem List</div>
          <div class="see_all_wrap">see all</div>
        </div>
        <div class="product_card_container">
          <v-hover
            v-slot:default="{ hover }"
            v-for="gem in gemsArray"
            :key="gem._id"
          >
            <div class="product_cards">
              <div class="product_img_wrap">
                <img src="/img/assets/Gem/gems.png" alt="product image" />
              </div>
              <div class="gems_wrap">{{ gem.gems }} gems</div>
              <v-expand-transition>
                <div class="card_overcontent" v-if="hover">
                  <div class="gems_content">
                    <div class="gems_wrap">{{ gem.price }} gems</div>
                    <span>only 5 AED</span>
                  </div>
                  <!-- <div class="add_btn" @click.stop="buyNow(gem._id)">By now</div> -->
                  <div class="add_btn"><router-link
                    class="add_btn"
                    :to="{name: 'MyGem', params: {id: gem._id}}"
                  >
                    By now
                  </router-link></div>
                </div>
              </v-expand-transition>
            </div>
          </v-hover>
        </div>
        <div class="product_heading_wrap">
          <div class="product_heading">SUBSCRIPTION LIST</div>
          <div class="see_all_wrap">see all</div>
        </div>
         <div class="product_card_container">
          <v-hover
            v-slot:default="{ hover }"
            v-for="sub in subscriptionArray"
            :key="sub._id"
          >
            <div class="product_cards">
              <div class="product_img_wrap">
                <img src="/img/assets/Gem/gems.png" alt="product image" />
              </div>
              <div class="gems_wrap">{{ sub.duration }} DAYS </div>
              <v-expand-transition>
                <div class="card_overcontent" v-if="hover">
                  <div class="gems_content">
                    <div class="gems_wrap">{{  sub.price }} $</div>
                    <span>{{sub.offer}} % OFFER</span>
                  </div>
                  <!-- <div class="add_btn" @click.stop="buyNow(gem._id)">By now</div> -->
                  <div class="add_btn"><router-link
                    class="add_btn"
                    :to="{name: 'MySubs', params: {id: sub._id}}"
                  >
                    Buy now
                  </router-link></div>
                </div>
              </v-expand-transition>
            </div>
          </v-hover>
        </div>


      </div>
      <div class="content2">
          <VerticleSlider/>
      </div>
    </div>
    <v-snackbar
      v-model="snackbar"
      top
      :color="color"
      absolute
      elevation="24"
      :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import axios from "axios";
import VerticleSlider from "../../components/Verticle-slider.vue"

export default {
  name: "GemPurchase",
  components: {VerticleSlider},
  data() {
    return {
      gemsArray: [],
      color: "",
      snackbar: false,
      snackbarText: "",
      timeout: "-1",
      subscriptionArray : []
    };
  },
  methods: {
    getGemList() {
      this.$Progress.start()
      axios
        .post("/gem-pack/find/all", {
          criteria: {},
        })
        .then((response) => {
          this.gemsArray = response.data;
          this.$Progress.finish()
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    buyNow(gemId) {
      axios
        .post("/gem-pack/purchase", {
          criteria: {
            _id: gemId,
          },
        })
        .then((response) => {
          this.color = "green";
          this.snackbar = true;
          this.snackbarText = response.data.message;
          this.timeout = 3000;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    isDuplicate(product) {
      const cart = this.$store.getters.cart;
      if (!cart?.length) return false;
      const isProductPresent = (element) => element.product._id === product._id;
      return !!cart.find(isProductPresent);
    },
    getSubscriptionPack() {
      axios
        .post("subscription-pack/find/all", {
          criteria: {},
        })
        .then((response) => {
          this.subscriptionArray = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
  },
  mounted() {
    this.getGemList();
    this.getSubscriptionPack();
  },
};


</script>
<style scoped>
.redeem_outer_container {
  background-color: #210654;
    padding:10px;
}
.redeem_container{
    padding: 10px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}
.content1 {
  background-color: #1E0741;
  width: 80%;
  margin-right: 10px;
  padding:20px;
  border-radius: 5px;
}
.content2 {
  width: 18%;
  background-color: #1e0741;
  border-radius: 5px;
}

.product_heading_wrap {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding: 15px 0px 15px;
  text-transform: capitalize;
  border-bottom: 1px solid #877b9a;
  font: normal normal normal 18px/22px Poppins;
}
.see_all_wrap {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.see_all_wrap:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: -1px;
  right: -20px;
  transition: 0.5s;
}
.see_all_wrap:hover {
  padding-right: 24px;
  padding-left: 8px;
}
.see_all_wrap:hover:after {
  opacity: 1;
  right: 10px;
}
.product_card_container {
  grid-template-columns: repeat(auto-fill, minmax(143px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  margin-bottom: 30px;
  grid-gap: 1rem 1rem;
  margin-top: 38px;
}
.product_cards {
  position: relative;
  width: fit-content;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  width: 150px;
  animation: swing-in-left-fwd 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s both;
}
@keyframes swing-in-left-fwd {
  0% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
}
.product_cards:hover {
  transform: scale(1.1);
  transition-delay: 0.1ms;
  background: linear-gradient(180deg, #00000000 0%, #000000 100%);
}
.product_cards:nth-child(2):before,
.product_cards:nth-child(3):before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
.product_img_wrap {
  overflow: hidden;
  border-radius: 10px;
}
.gems_wrap {
  color: black;
  text-align: center;
  padding: 3px;
  font: normal normal bold 15px/23px Poppins;
  white-space: nowrap;
}
.card_overcontent {
  position: absolute;
  color: #fff;
  bottom: -77px;
  text-align: center;
  white-space: nowrap;
  left: 50%;
  padding: 0.8em 1.2em;
  color: white;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.gems_content {
  background: #ffffff;
  opacity: 0.97;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  text-align: center;
}
.gems_wrap_over {
  color: black;
  font-weight: 800;
  font-size: 1.2em;
}
.gems_content span {
  color: black;
  font: normal normal normal 10px/16px Poppins;
}
.add_btn {
  background-color: #fff;
  color: black;
  margin: 8px;
  border-radius: 4px;
  margin: 14px 12px 0px 12px;
  text-transform: capitalize;
  font: normal normal 600 10px/16px Poppins;
  padding: 3px 5px 3px 3px;
  cursor: pointer;
}
.add_btn:hover{
  background-color: #ce0daef3;
  color: #fff;
}
.product_number {
  margin-top: 15px;
}
.product_number > input:nth-child(2) {
  text-align: center;
  color: #ffffff;
}
.product_number > input:nth-child(1) {
  background-color: #ffffff;
  padding: 1px 11px;
  color: black;
  border-radius: 4px;
}
.product_number > input:nth-child(3) {
  background-color: #ffffff;
  padding: 1px 9px;
  color: black;
  border-radius: 4px;
}

@media (min-width: 320px) and (max-width: 767px) {
  .redeem_outer_container {
      padding: 0px;
  }
  .redeem_container{
      padding: 0px;
  }
  .content1 {
    width: 100%;
    margin-right: 0px;
    padding: 10px;
  }
  .content2 {
    display: none;
  }
  .product_cards {
    width: unset;
  }
  .product_heading_wrap {
    padding: 15px 0px 5px;
    font: normal normal normal 12px/22px Poppins;
  }
  .product_card_container {
    margin-top: 20px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 1rem 1rem;
  }
  .card_overcontent {
    bottom: -66px;
  }
  .gems_content {
    padding: 0px 10px 0px 10px;
  }
  
}
</style>
