<template>
  <div class="container_wrapper">
    <div class="title_wrap">
      <div class="title_head">
        Marketplace header Lorem ipsum <br />Lorem ipsum
        <!-- <img src="../assets/Marketplace/.png" /> -->
      </div>
      <div class="title_btns">
        <button class="buy-btn" @click="scrollToBottom">Buy</button>
      </div>
    </div>
    <div class="gems_wrap" id="scrollTarget">
      <div class="gems_wrap_title_text">Gems</div>
      <div class="gems_card_wrap">
        <div class="gems_card apex">
          <div class="gem_card_apex_logo">
            <img src="../assets/Marketplace/apex-icon.png" />
          </div>
          <div class="apex_logo">
            <img src="../assets/Marketplace/apex-logo.png" />
          </div>
          <div class="card_wrapper">
            <div class="gem_card_title">Apex Gems</div>
            <div class="gem_card_details">
              <div class="gem_card_details_text">100 Gem</div>
              <!-- <div class="gem_card_details_text">Lorem Iprum</div> -->
              <div class="button">
                <button
                  class="add_btn"
                  @click="gemPayment('61cb55e2ad8e4bb6e0a7c5a9')"
                >
                  BUY
                </button>
              </div>
            </div>
            <div class="gem_card_text">
              <div class="lorem_left_text">$ 10</div>
              <!-- <div class="lorem_right_text">LOREM</div> -->
            </div>
          </div>
        </div>
        <div class="gems_card cod">
          <div class="gem_card_cod_logo">
            <img src="../assets/Marketplace/cod-icon.png" />
          </div>
          <div class="cod_logo">
            <img src="../assets/Marketplace/cod-logo.png" />
          </div>
          <div class="card_wrapper">
            <div class="gem_card_title">Warzone Gems</div>
            <div class="gem_card_details">
              <div class="gem_card_details_text">100 Gem</div>
              <!-- <div class="gem_card_details_text">Lorem Iprum</div> -->
              <div class="button">
                <button
                  class="add_btn"
                  @click="gemPayment('61cb569ead8e4bb6e0a7c5ad')"
                >
                  BUY
                </button>
              </div>
            </div>
            <div class="gem_card_text">
              <div class="lorem_left_text">$ 10</div>
              <!-- <div class="lorem_right_text">LOREM</div> -->
            </div>
            <!-- <div class="button">
                <button class="add_btn">Buy Now</button>
              </div> -->
          </div>
        </div>
        <div class="gems_card pubg">
          <div class="gem_card_pubg_logo">
            <img src="../assets/Marketplace/pubg-icon.png" />
          </div>
          <div class="pubg_logo">
            <img src="../assets/Marketplace/pubg-logo.png" />
          </div>
          <div class="card_wrapper">
            <div class="gem_card_title">Pubg Gems</div>
            <div class="gem_card_details">
              <div class="gem_card_details_text">100 Gem</div>
              <!-- <div class="gem_card_details_text">Lorem Iprum</div> -->
              <div class="button">
                <button
                  class="add_btn"
                  @click="gemPayment('61cb56b3ad8e4bb6e0a7c5b1')"
                >
                  BUY
                </button>
              </div>
            </div>
            <div class="gem_card_text">
              <div class="lorem_left_text">$ 10</div>
              x
              <!-- <div class="lorem_right_text">LOREM</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="subscription_wrap">
      <div class="subscription_wrap_title_text">Subscriptions</div>
      <div class="subscription_card_wrap">
        <div class="subscription_card">
          <div class="subscription_background_card1">
            <img src="../assets/Marketplace/card-left.png" />
          </div>
          <div class="subscription_text_wrap">
            <div class="subscription_card_title">1 month</div>
            <div class="subscription_card_price">
              <div class="dollar">$</div>
              <div class="subscription_price">29</div>
              <div class="subscription_price_month">/mo</div>
            </div>
            <div class="total_price">Total 29<span>$</span></div>
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="card_details_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div
              class="sub_buy_btn"
              @click="subscriptionPayment('price_1KYwo6LaOByw9fVsb6shzDSG')"
            >
              Buy
            </div>
          </div>
        </div>
        <div class="subscription_card sub_card">
          <div class="subscription_background_card2">
            <img src="../assets/Marketplace/card-center.png" />
          </div>
          <div class="subscription_text_wrap">
            <div class="subscription_card_title sub_title">3 month</div>
            <div class="subscription_card_price sub_price">
              <div class="dollar second">$</div>
              <div class="subscription_price">25</div>
              <div class="subscription_price_month sub-month">/mo</div>
            </div>
            <div class="total_price total_price_center">
              Total <span>75$</span>
            </div>
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="card_details_text sub_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div
              class="btn2"
              @click="subscriptionPayment('price_1KYwpALaOByw9fVsSVJHSia3')"
            >
              Buy
            </div>
          </div>
        </div>
        <div class="subscription_card">
          <div class="subscription_background_card3">
            <img src="../assets/Marketplace/card-right.png" />
          </div>
          <div class="subscription_text_wrap">
            <div class="subscription_card_title">6 month</div>
            <div class="subscription_card_price">
              <div class="dollar">$</div>
              <div class="subscription_price">20</div>
              <div class="subscription_price_month">/mo</div>
            </div>
            <div class="total_price">Total 120<span>$</span></div>
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="card_details_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div
              class="sub_buy_btn"
              @click="subscriptionPayment('price_1KYwpVLaOByw9fVsSZwR4seo')"
            >
              Buy
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MarketPlace",
  data() {
    return {
      allGemPack: [],
    };
  },
  methods: {
    subscriptionPayment(priceId) {
      const stripe = window.Stripe(
        "pk_test_51HUSksLaOByw9fVstcwGy60zrikfWY3tPX0d6veda5qO6VXql55M3mgTd3ERkOsCeGrnFhzunD5L4NLJ2JJvzXkY00zWZDoYRj"
      );

      axios
        .post("/payment/stripe/subscription/test", { priceId })
        .then((session) => {
          return stripe.redirectToCheckout({ sessionId: session.data.id });
        })
        .then((result) => {
          console.log("result payment", result);
        });
    },
    gemPayment(gemId) {
      const stripe = window.Stripe(
        "pk_test_51HUSksLaOByw9fVstcwGy60zrikfWY3tPX0d6veda5qO6VXql55M3mgTd3ERkOsCeGrnFhzunD5L4NLJ2JJvzXkY00zWZDoYRj"
      );
      const criteria = {
        _id: gemId,
      };
      axios
        .post("/payment/stripe/gem/test", { criteria })
        .then((session) => {
          return stripe.redirectToCheckout({ sessionId: session.data.id });
        })
        .then((result) => {
          console.log("result gem payment", result);
        });
    },
    scrollToBottom() {
      document.getElementById("scrollTarget").scrollIntoView({
        behavior: "smooth",
      });
    },
    gemPack() {
      axios
        .post("/gem-pack/find/all", {
          criteria: {},
        })
        .then((response) => {
          console.log("gem pack", response.data);
          this.allGemPack = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
  },
  mounted() {
    this.gemPack();
  },
};
</script>

<style scoped>
.container_wrapper {
  padding: 45px;
}
.title_wrap {
  max-width: 1480px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 33px;
  padding: 0 90px;
  background: #252238;
  border-radius: 30px;
  background-image: url("../assets/Marketplace/title-bg.png");
}
.title_head {
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  color: #ffffff;
  /* width: 60%; */
}
.title_btns {
  display: flex;
  gap: 20px;
}
.buy-btn {
  width: 194px;
  height: 60px;
  border: 2px solid #9672ff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 25px;
  line-height: 124.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
}
.buy-btn:hover {
  font-weight: 700;
  background: linear-gradient(90.37deg, #9672ff 12.05%, #6b4fe8 102.75%);
  border: none;
}
/* .gems_wrap {

} */
.gems_wrap_title_text {
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  color: #ffffff;
  margin: 66px 0 35px 0;
}
.gems_card_wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.gems_card {
  width: 475px;
  height: 410px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
/* .gem_card_logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 180px;
  height: 100px;
} */
.gem_card_apex_logo {
  position: relative;
  width: 135px;
  height: 100px;
}
.gem_card_apex_logo img {
  position: absolute;
  object-fit: contain;
  top: -10px;
  left: 12px;
}
.apex_logo img {
  position: relative;
  bottom: 4px;
  left: 12px;
}
.gem_card_cod_logo {
  position: relative;
  width: 151px;
  height: 100px;
}
.gem_card_cod_logo img {
  position: absolute;
  object-fit: contain;
  top: -25px;
}
.gem_card_pubg_logo {
  position: relative;
  width: 289px;
  height: 100px;
}
.gem_card_pubg_logo img {
  position: absolute;
  object-fit: contain;
  top: -86px;
}
.apex {
  background: url("../assets/Marketplace/apex-bg.png");
}
.cod {
  background: url("../assets/Marketplace/cod-bg.png");
}
.pubg {
  background: url("../assets/Marketplace/pubg-bg.png");
}
.card_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 16px 18px 14px 26px;
  margin-bottom: 10px;
  width: 450px;
  height: 120px;
  background: #1b1b1b;
  border-radius: 18px;
}
.gem_card_title {
  font-weight: bold;
  font-size: 19px;
  line-height: 124.5%;
  color: #ffffff;
}
.gem_card_details {
  display: flex;
  justify-content: space-between;
}
.gem_card_details_text {
  font-size: 16px;
  line-height: 124.5%;
  color: #cdcadb;
}
.gem_card_text {
  display: flex;
  justify-content: space-between;
}
.lorem_left_text {
  font-weight: bold;
  font-size: 19px;
  line-height: 124.5%;
  text-transform: uppercase;
  color: #9672ff;
}
.lorem_right_text {
  font-weight: bold;
  font-size: 14px;
  line-height: 124.5%;
  text-transform: uppercase;
  color: #ffffff;
}
.subscription_wrap {
  margin-bottom: 30px;
}
.subscription_wrap_title_text {
  margin: 80px 0 80px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}
.subscription_card_wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.subscription_card {
  position: relative;
  width: 475px;
  height: 660px;
  background: linear-gradient(
    143.67deg,
    rgba(78, 106, 240, 0.3) -65.58%,
    rgba(174, 85, 244, 0.3) 112.26%
  );
  border-radius: 13px;
  padding: 40px;
}
.sub_card {
  background: linear-gradient(143.67deg, #4e6af0 -65.58%, #ae55f4 112.26%);
  /* transform: scale(1.07); */
  height: 722px;
  position: relative;
  bottom: 32px;
}
@media screen and (max-width: 1368px) and (min-width: 1260px) {
  .sub_card {
    bottom: 0;
  }
}
@media screen and (max-width: 1060px) {
  .sub_card {
    bottom: 0;
  }
}
/* .subscription_card:hover {
  transform: scale(1.09);
  transition: all 0.5s ease-in-out;
} */
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
  height: 722px;
  /* width: 360px; */
  mix-blend-mode: normal;
}
.subscription_background_card3 {
  position: absolute;
  top: 0;
  left: 0;
}
.subscription_background_card3 img {
  width: 474px;
  height: 660px;
}
.subscription_text_wrap {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  position: relative;
}
.subscription_card_title {
  font-weight: 500;
  font-size: 48px;
  line-height: 71px;
  color: #ffffff;
  margin-top: 20px;
}
.subscription_card_price {
  display: flex;
}
.dollar {
  font-weight: 600;
  font-size: 48px;
  color: rgb(150, 115, 255, 0.5);
  padding: 1px;
}
.second {
  color: rgb(255, 255, 255, 0.5);
}
.subscription_price {
  font-weight: 600;
  font-size: 85px;
  /* line-height: 126px; */
  color: #ffffff;
  padding: 1px;
}
.subscription_price_month {
  font-weight: 600;
  font-size: 24px;
  /* line-height: 160%; */
  color: rgb(150, 114, 255, 0.5);
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
}
.sub-month {
  color: rgb(255, 255, 255, 0.5);
}
.total_price {
  font-weight: 500;
  font-size: 32px;
  line-height: 160%;
  color: rgb(150, 114, 255, 0.5);
  margin-top: -20px;
}
.total_price_center {
  color: rgb(255, 255, 255, 0.5);
}
.total_price span {
  color: rgb(150, 114, 255);
}
.total_price_center span {
  color: #ffffff;
}
.dot1 {
  position: absolute;
  left: 50px;
  top: 200px;
  border-radius: 50px;
  width: 11px;
  height: 11px;
  background: #9672ff;
}
.dot2 {
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background: #9672ff;
}
.card_details_text {
  font-size: 24px;
  line-height: 160%;
  color: #ffffff;
}
.sub_buy_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
  /* line-height: 124.5%; */
  color: rgba(255, 255, 255, 0.9);
  width: 194px;
  height: 60px;
  border: 2px solid #9672ff;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
}
.sub_buy_btn:hover {
  background: #ffffff;
  color: #9672ff;
  border: none;
}
.btn2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
  width: 194px;
  height: 60px;
  background: #ffffff;
  color: #9672ff;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
}
.sub_title {
  padding-top: 56px;
}
.button {
  right: 18px;
  top: 65px;
  position: absolute;
  color: #ffffff;
  background: #7255e9;
  border-radius: 7px;
  font-size: 17px;
  padding: 7px 40px;
  font-weight: 700;
}
</style>