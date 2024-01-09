<template>
    <div class="redeem_outer_container">
        <div class="redeem_container">
            <div class="product_heading_wrap">
                <div class="product_heading">Gem Purchase</div>
            </div>
            <div class="product_card_container" >
                <div class="product_cards">
                    <div class="product_img_wrap">
                        <img src="/img/assets/Gem/gems.png" alt="product image">
                        <!-- <img :src="'https://ps-mg.s3.amazonaws.com/' + product.images" alt="product image"> -->
                    </div>
                    <div class="gems_wrap">{{gemData.price}} gems</div>
                </div>
                <div class="product_details_wrap">
                    <div class="product_top_outer">
                        <div class="product_top">
                            <div class="product_name">{{gemData.name}}</div>
                            <div class="amount"><span>&#x24;</span> {{ gemData.price }}</div>
                            <!-- <div class="product_amount"><span><img style="padding-right:5px;" width="25px" src="/img/assets/Gem/gem_icon.png" /></span> {{ gemData.price }}</div> -->
                        </div>
                    </div>                  
                </div>
            </div>
            <div class="total_items_outer">
                <div class="total_items">
                    <div class="items">Total Gem</div>
                <div class="amount"> <span>&#x24; {{gemData.price}}</span></div>
                <!-- <div class="product_amount"><span><img style="padding-right:5px;" width="25px" src="/img/assets/Gem/gem_icon.png" /></span>{{gemData.gems}}</div> -->
                </div>
                <div class="buy_button" @click="buyNow(gemData._id)">proceed to buy</div>
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
import axios from 'axios';

export default {
  name: "GemList",
  data() {
    return {
      gemData: {},
      color: "",
      snackbar: false,
      snackbarText: "",
      timeout: "-1",
    };
  },
  methods: {
    getGemList() {
      axios
        .get("/gem-pack/find/".concat(this.$route.params.id))
        .then((response) => {
          this.gemData = response.data;
          console.log("gem list", this.gemData);
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
            this.$router.push("/gem")
            window.location.reload();
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
  }
};
</script>

<style scoped lang="scss">
.minusplusnumber {
  border: 1px solid silver;
  border-radius: 5px;
  /* background-color: rgb(21, 35, 46); */
  background-color: #330e6b;
  margin: 0 5px 0 5px;
  display: inline-block;
  user-select: none;
  color: white;
}
.minusplusnumber div {
  display: inline-block;
}
.minusplusnumber #field_container input {
  width: 50px;
  text-align: center;
  font-size: 15px;
  padding: 3px;
  border: none;
  color: white;
  background: transparent;
  margin-left: 10px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}
.minusplusnumber .mpbtn {
  padding: 3px 10px 3px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.minusplusnumber .mpbtn:hover {
  /* background-color: #ddd; */
   background-color:#1E0741;
}
.minusplusnumber .mpbtn:active {
  background-color: #c5c5c5;
}
.redeem_outer_container{
    background-color: #1E0741;
    height: 100vh;
}
.redeem_container{
    padding: 1em;
    background-color: #1E0741;
}
.checkout_product_card_product_count {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .delete_team {
        color: #c5c5c5;
        cursor: pointer;
        i {
            padding-right: 10px;
        }      
    }
}
.product_heading_wrap{
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
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
.product_card_container{
    display: flex;
    column-gap: 26px;
    padding: 38px 0px 38px;
    border-bottom: 1px solid #877b9a;
}
.product_cards{
    position: relative;
    width: fit-content;
    background-color: #F8F8F8 ;
    border-radius: 10px;
    overflow: hidden;
    height: fit-content;
	}
.product_cards::before{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-image: transparent linear-gradient(180deg, #00000000 0%, #000000 100%);
}
.product_img_wrap{
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 200px;
    }
}
.gems_wrap{
    color: rgb(48, 22, 22);
    text-align: center;
    padding: 3px;
    font-weight: 800;
    font-size: 1.2em;
    white-space: nowrap;
}
.product_details_wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: -moz-available;
    width: -webkit-stretch;
    width: stretch;
}
.product_name {
    font: normal normal bold 22px/33px Poppins;
}
@media(min-width:320px) and (max-width:767px){
  .product_heading_wrap {
    font: normal normal normal 12px/22px Poppins;
    padding: 10px 0px 0px;
  }
  .product_card_container {
      column-gap: 10px;
      padding: 20px 0px 10px;
  }
  .total_items_outer{
      display: grid;
      justify-content: center;
  }
  .minusplusnumber #field_container input {
    width: 25px;
    margin-left: 0px;
    padding: 0px;
  }
  .minusplusnumber .mpbtn {
    padding: 0px 5px 0px 5px;
  }
  .checkout_product_card_product_count {
    .delete_team {
        font: normal normal normal 12px/21px Poppins;
        i {
            padding-right: 5px;
        }      
    }
}
}
.product_top{
    justify-content: space-between;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    /* padding: 15px 0px 15px; */
    text-transform: capitalize;
    font: normal normal bold 22px/33px Poppins;
}
.product_details{
    text-align: left;
    color: #FFFFFF;
    word-spacing: 1px;
    letter-spacing: 0.1px;
    font: normal normal normal 18px/27px Poppins;
}
.product_amount {
  display: flex;
  align-items: center;
}
select{
    position: relative;
    text-transform: capitalize;
    color: #090909;
    background: #F5F5F5;
    border-radius: 4px;
    padding:5px 45px 6px 10px;
    outline: none;
    line-height: 1;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #ddd;
    background-position-x: 54px;
    background-size: 12px;
}
@media(min-width: 320px) and (max-width:767px){
  .product_details {
      font: normal normal normal 9px/15px Poppins;
  }
  .product_top, .product_name {
      font: normal normal bold 11px/22px Poppins;
  }
select{
    padding:4px 45px 5px 7px;
 }
}
.items{
    margin-right: 25px;
    font: normal normal normal 22px/33px Poppins;
}
.total_items{
    color: #FFFFFF;
    display: flex;
    justify-content: flex-end;
    text-transform: capitalize;
    font: normal normal normal 22px/33px Poppins;
    margin: 15px 0px;
}
.amount{
    font: normal normal normal 22px/33px Poppins;
}
.buy_button{
    background: #FFFFFF;
    border-radius: 6px;
    padding: 8px 15px;
    margin-left: 86px;
    cursor: pointer;
    width: fit-content;
    display: flex;
    justify-items: flex-end;
    float: right;
    justify-content: unset;
    text-transform: capitalize;
}
@media(min-width:320px) and (max-width:767px){
    .buy_button
    {    
        margin: auto;
        font: normal normal normal 12px/22px Poppins;
    }
    .gems_wrap{
        font-size: 1em;
    }
    .total_items { 
      font: normal normal normal 11px/22px Poppins;
    }
    .items {
      margin-right: 12px;
      font: normal normal normal 12px/22px Poppins;
    }
    .amount{
        font: normal normal normal 12px/22px Poppins;
    }
    .product_img_wrap{
        img {
            width: 150px;
            height: 75px;
            object-fit: contain;
        }
    }
}
</style>