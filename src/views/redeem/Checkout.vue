<template>
      <div class="bottom-container">
        <div class="checkout_empty_wrapper">
          <div class="checkout_empty_wrapper_inner">
            <div class="checkout_empty_wrapper_inner_card">
              <div class="empty_card_bg"></div>
              <div class="empty_card_text">Oops! Your Cart is Empty</div>
              <div class="empty_card_subtext">Get some amazing products</div>
              <div class="empty_card_btn">
                <router-link  tag="a" :to="{ name: 'Redeem'}"  active-class="active" exact>
                <button class="empty_card_button">Visit Redeem</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Checkout',
  data() {
    return {
    };
  },
  components: {
  },
  methods: {

  },
  mounted() {
  },
};
</script>

<style scoped>
.bottom-container{
  max-width: 1460px;
  margin-left: auto;
  margin-right: auto;
}
.checkout_empty_wrapper{
    position: relative;
    min-height: 400px;
    padding: 16px;
}
.checkout_empty_wrapper_inner_card {
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #330e6b;
    margin-bottom: 16px;
    text-align: center;
    border-radius: 10px;
}
.empty_card_bg{
    background: url(/img/assets/redeem/empty.png) no-repeat;
    width: 190px;
    height: 254px;
    display: inline-block;
    background-size: cover;
    margin-top: 15px;
}
.empty_card_text{
    font-size: 1.4rem;
    color: #becde3;
    margin-top: 10px;
}
.empty_card_subtext{
    font-size: 1.1rem;
    color: #becde3;
    text-align: center;
    margin-top: 10px;
}
.empty_card_btn{
    padding: 10px 0;
    width: 160px;
    margin: auto;
}
.empty_card_button{
    padding: 14px 0;
    cursor: pointer;
    color: #1E0741;
    background-color: #fff;
    font-size: 20px;
    white-space: pre;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin:20px 0;
}
.empty_card_button:hover{
    color: #1E0741;
    font-weight: bold;
    box-shadow: 0px 0px 5px 0px #fff;
}
</style>
