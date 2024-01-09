<template>
  <div class="player_list">
    <div class="main__container">
      <div class="table__wrapper animated zoomIn">
        <div class="top_container">
          <div class="navbar_text">Choose your Subscription Plan</div>
        </div>
        <div class="bottom_container">
          <div class="subscription_wrap">
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
                  <div class="total_price">Total 29<span>$</span></div>
                  <div class="dot1">.</div>
                  <div class="dot2">.</div>
                  <div class="card_details_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div
                    class="sub_buy_btn"
                    @click="
                      subscriptionPayment('price_1KYwo6LaOByw9fVsb6shzDSG')
                    "
                  >
                    Buy
                  </div>
                </div>
              </div>
              <div class="subscription_card sub_card">
                <div class="subscription_background_card2">
                  <img src="@/assets/Marketplace/card-center.png" />
                </div>
                <div class="subscription_text_wrap">
                  <div class="subscription_card_title sub_title">3 month</div>
                  <div class="subscription_card_price sub_price">
                    <div class="dollar second">$</div>
                    <div class="subscription_price">25</div>
                    <div class="subscription_price_month sub_month">/mo</div>
                  </div>
                  <div class="total_price total_price_center">
                    Total <span>75$</span>
                  </div>
                  <div class="dot1">.</div>
                  <div class="dot2">.</div>
                  <div class="card_details_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div
                    class="btn2"
                    @click="
                      subscriptionPayment('price_1KYwpALaOByw9fVsSVJHSia3')
                    "
                  >
                    Buy
                  </div>
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
                  <div class="total_price">Total 120<span>$</span></div>
                  <div class="dot1">.</div>
                  <div class="dot2">.</div>
                  <div class="card_details_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div
                    class="sub_buy_btn"
                    @click="
                      subscriptionPayment('price_1KYwpVLaOByw9fVsSZwR4seo')
                    "
                  >
                    Buy
                  </div>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubscribePopup",
  data() {
    return {};
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
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.main__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #00000073; */
  background: rgba(19, 19, 19, 0.7);
  backdrop-filter: blur(7px);
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__container .table__wrapper {
  width: 1520px;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: -6px 7px 20px 3px rgba(0, 0, 0, 0.16);
  /* margin: 90px auto; */
}
.table__wrapper .top_container {
  width: 100%;
  height: 65px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  /* background-image: url('../../assets/img/table__img.png'); */
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
}
.top_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 57px;
  background: rgb(150, 114, 255, 0.1);
  border-radius: 10px 10px 0px 0px;
  padding: 3px 35px 0 35px;
}
.navbar_text {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
.close {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #9672ff;
  cursor: pointer;
}
/* .bottom_container {
  padding: 15px 35px 40px 35px;
} */
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
  grid-template-columns: repeat(auto-fill, minmax(475px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 1rem 1rem;
  margin: 50px 30px 20px 30px;
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
.logout_button {
  cursor: pointer;
  width: 100px;
  text-transform: capitalize;
  padding: 10px;
  margin: 0 auto !important;
  text-align: center;
  display: block;
  border-radius: 4px !important;
  font-size: 17px;
  background: linear-gradient(90.37deg, #9672ff 12.05%, #6b4fe8 102.75%);
  border-radius: 8px;
  color: #ffffff;
  width: 171px;
  height: 48px;
}
</style>