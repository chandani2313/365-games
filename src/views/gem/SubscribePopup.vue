<template>
  <div>
    <v-dialog persistent hide-overlay max-width="1125px" v-model="isDialogOpen">
      <div class="redeem_outer_container">
        <div class="redeem_container">
          <div class="content1">
            <div class="product_heading_wrap">
              <div class="product_heading">Choose your Subscription Plan</div>
              <!-- <div class="see_all_wrap">see all</div> -->
            </div>

            <div class="subscription_wrap">
              <!-- <div class="subscription_wrap_title_text">Subscriptions</div> -->
              <div class="subscription_card_wrap">
                <div class="subscription_card">
                  <div class="subscription_background_card1">
                    <img src="@/assets/Marketplace/card-left.png" />
                  </div>
                  <div class="subscription_text_wrap">
                    <div class="subscription_card_title">1 month</div>
                    <div class="subscription_card_price">
                      <div class="dollar">$</div>
                      <div class="subscription_price">29</div>
                      <div class="subscription_price_month">/mo</div>
                    </div>
                    <div class="total_price">Total 29$</div>
                    <div class="dot1">.</div>
                    <div class="dot2">.</div>
                    <div class="card_details_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div class="sub_buy_btn">Buy</div>
                  </div>
                </div>
                <div class="subscription_card sub_card">
                  <div class="subscription_background_card2">
                    <img src="@/assets/Marketplace/card-center.png" />
                  </div>
                  <div class="subscription_text_wrap">
                    <div class="subscription_card_title">3 month</div>
                    <div class="subscription_card_price">
                      <div class="dollar second">$</div>
                      <div class="subscription_price">25</div>
                      <div class="subscription_price_month sub-month">/mo</div>
                    </div>
                    <div class="total_price total_price_center">
                      Total <span>75$</span>
                    </div>
                    <div class="dot1">.</div>
                    <div class="dot2">.</div>
                    <div class="card_details_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div class="sub_buy_btn">Buy</div>
                  </div>
                </div>
                <div class="subscription_card">
                  <div class="subscription_background_card3">
                    <img src="@/assets/Marketplace/card-right.png" />
                  </div>
                  <div class="subscription_text_wrap">
                    <div class="subscription_card_title">6 month</div>
                    <div class="subscription_card_price">
                      <div class="dollar">$</div>
                      <div class="subscription_price">20</div>
                      <div class="subscription_price_month">/mo</div>
                    </div>
                    <div class="total_price">Total 120$</div>
                    <div class="dot1">.</div>
                    <div class="dot2">.</div>
                    <div class="card_details_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div class="sub_buy_btn">Buy</div>
                  </div>
                </div>
              </div>
              <div class="logout_button" @click.prevent="logout()">
                <button>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>

    <v-dialog persistent max-width="400px" v-model="isDialogComplete">
      <div class="container">
        <div
          class="panel"
          ref="panel"
          @mousemove="transformPanel"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div ref="subpanel" class="panel-container">
            <div class="panel-content">
              <div>Are you sure want to subscribe this pack?</div>
              <br />
              <button class="btn" @click="close()">Cancel</button>
              <button class="btn" @click="buyNow()">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      top
      elevation="24"
      :color="color"
      :timeout="timeout"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubscribePopup",
  components: {},
  data() {
    return {
      isDialogOpen: true,
      isDialogComplete: false,
      color: "",
      snackbar: false,
      text: "",
      timeout: "-1",
      subscriptionArray: [],
      mouseX: "",
      mouseY: "",
      transformAmount: 5,
      buySubscribeNow: {},
    };
  },
  methods: {
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
    buyNow() {
      axios
        .post("subscription-pack/purchase", {
          criteria: {
            _id: this.buySubscribeNow._id,
          },
        })
        .then(() => {
          // this.color = "green";
          // this.snackbar = true;
          // this.snackbarText = response.data.message;
          // this.timeout = 3000;
          this.$router.push("/");
          window.location.reload();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    buySubscribe(sub) {
      this.isDialogComplete = true;
      this.buySubscribeNow = sub;
    },
    close() {
      this.isDialogComplete = false;
    },
    transformPanel(mouseEvent) {
      console.log("mouseEvent", mouseEvent);
      this.mouseX = mouseEvent.pageX;
      this.mouseY = mouseEvent.pageY;
      let centerX =
        this.$refs.panel.offsetLeft + this.$refs.panel.clientWidth / 2;
      let centerY =
        this.$refs.panel.offsetTop + this.$refs.panel.clientHeight / 2;
      let percentX =
        (this.mouseX - centerX) / (this.$refs.panel.clientWidth / 2);
      let percentY = -(
        (this.mouseY - centerY) /
        (this.$refs.panel.clientHeight / 2)
      );
      this.$refs.subpanel.style.transform =
        "perspective(400px) rotateY(" +
        percentX * this.transformAmount +
        "deg) rotateX(" +
        percentY * this.transformAmount +
        "deg)";
    },
    handleMouseEnter() {
      console.log("handleMouseEnter");
      setTimeout(() => {
        this.$refs.subpanel.style.transition = "";
      }, 100);
      this.$refs.subpanel.style.transition = "transform 0.1s";
    },
    handleMouseLeave() {
      console.log("handleMouseLeave");
      this.$refs.subpanel.style.transition = "transform 0.1s";
      setTimeout(() => {
        this.$refs.subpanel.style.transition = "";
      }, 100);
      this.$refs.subpanel.style.transform =
        "perspective(400px) rotateY(0deg) rotateX(0deg)";
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  mounted() {
    this.getSubscriptionPack();
  },
};
</script>

<style scoped>
.redeem_outer_container {
  background: #1b1b1b;
  border-radius: 10px;
}
.redeem_container {
  /* padding: 10px; */
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.content1 {
  width: 100%;
  /* padding:10px; */
  border-radius: 10px;
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
  padding: 15px 35px 15px;
  text-transform: capitalize;
  /* border-bottom: 1px solid #877b9a; */
  font: normal normal normal 18px/22px Poppins;
  border-radius: 10px 10px 0px 0px;

  background: #272331;
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
  margin-top: 38px;
}
.product_cards {
  position: relative;
  width: fit-content;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  width: 150px;
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel,
.panel-container {
  width: 400px;
  height: 200px;
}

.panel-container {
  position: absolute;
  /* background: url("https://images.unsplash.com/photo-1550587542-1668407b73d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80") center top; */
  background-color: #320c6a;
  background-size: cover;
  transform: perspective(400px) rotateX(0deg) rotateY(0deg);
  transform-style: preserve-3d;
  /* box-shadow: 1.5rem 2.5rem 5rem 0.7rem rgba(0,0,0,0.13); */
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-content {
  color: #fff;
  text-align: center;
  padding: 20px;
  transform: translateZ(80px) scale(0.8);
  transform-style: preserve-3d;
  overflow-wrap: break-word;
}
.gem-price {
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.image-gem {
  width: 20px;
}
.btn,
.btn-complete {
  background-color: #320c6a;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  color: white;
  border-color: #ffffff;
  text-align: center;
  cursor: pointer;
  margin-right: 7px;
  border: 1px solid #fff;
}
.btn {
  width: 5em;
}
.btn:hover,
.btn-complete:hover {
  background-color: #ffffff;
  color: #320c6a;
}
.btn:hover::after,
.btn-complete:hover::after {
  color: #ffffff;
}
.v-dialog {
  box-shadow: unset;
}
.logout_button {
  cursor: pointer;
  width: 100px;
  text-transform: capitalize;
  padding: 5px;
  margin: 0 auto !important;
  text-align: center;
  display: block;
  border-radius: 4px !important;
  font-size: 17px;
  background: linear-gradient(90.37deg, #9672ff 12.05%, #6b4fe8 102.75%);
  border-radius: 8px;
  color: #ffffff;
  width: 171px;
  height: 40px;
}

@media (min-width: 320px) and (max-width: 767px) {
  .redeem_outer_container {
    padding: 0px;
  }
  .redeem_container {
    padding: 0px;
  }
  .content1 {
    width: 100%;
    margin-right: 0px;
    /* padding: 10px; */
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
.subscription_wrap {
  padding: 30px 40px 30px 40px;
}
.subscription_wrap_title_text {
  margin: 55px 0 50px 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
}
.subscription_card_wrap {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  margin-bottom: 30px;
  grid-gap: 1rem 1rem;
}
.subscription_card {
  position: relative;
  width: 330px;
  height: 501px;
  background: linear-gradient(
    143.67deg,
    rgba(78, 106, 240, 0.3) -65.58%,
    rgba(174, 85, 244, 0.3) 112.26%
  );
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.sub_card {
  background: linear-gradient(143.67deg, #4e6af0 -65.58%, #ae55f4 112.26%);
}
.subscription_card:hover {
  transform: scale(1.09);
  transition: all 0.5s ease-in-out;
}
.subscription_background_card1 {
  position: absolute;
  bottom: 0;
  right: 0;
}
.subscription_background_card2 {
  position: absolute;
  right: 0;
  top: 0;
}
.subscription_background_card2 img {
  max-height: 500px;
  width: 360px;
  mix-blend-mode: normal;
}
.subscription_background_card3 {
  position: absolute;
}
.subscription_text_wrap {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 25px;
  position: relative;
}
.subscription_card_title {
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
  margin-top: 20px;
}
.subscription_card_price {
  display: flex;
}
.dollar {
  font-weight: 600;
  font-size: 36px;
  color: rgb(150, 115, 255, 0.5);
  padding: 1px;
}
.second {
  color: rgb(255, 255, 255, 0.5);
}
.subscription_price {
  font-weight: 600;
  font-size: 64px;
  /* line-height: 96px; */
  color: #ffffff;
  padding: 1px;
}
.subscription_price_month {
  font-weight: 600;
  font-size: 18px;
  /* line-height: 160%; */
  color: rgb(150, 114, 255, 0.5);
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}
.sub-month {
  color: rgb(255, 255, 255, 0.5);
}
.total_price {
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  color: rgba(150, 114, 255, 0.5);
  margin-top: -20px;
}
.total_price_center {
  color: rgb(255, 255, 255, 0.5);
}
.total_price span {
  color: #ffffff;
}
.dot1 {
  position: absolute;
  left: 50px;
  top: 200px;
  border-radius: 50px;
  width: 8px;
  height: 8px;
  background: #9672ff;
}
.dot2 {
  width: 4px;
  height: 4px;
  border-radius: 50px;
  background: #9672ff;
}
.card_details_text {
  font-size: 18px;
  /* line-height: 160%; */
  color: #ffffff;
}
.sub_buy_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 19px;
  /* line-height: 124.5%; */
  color: rgba(255, 255, 255, 0.9);
  width: 147px;
  height: 46px;
  border: 2px solid #9672ff;
  border-radius: 8px;
  cursor: pointer;
}
.sub_buy_btn:hover {
  background: #ffffff;
  color: #9672ff;
}
::v-deep.v-dialog {
  overflow-y: hidden !important;
}
</style>
