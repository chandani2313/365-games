<template>
    <div class="payment_outer_wrap">
        <div class="leftside_wrap">
            <div class="payment_img_wrap"><img src="../assets/Payment/Paymentimg.svg" /></div>
            <div class="payment_details_wrap">
                <div class="step1_wrap">
                    <div class="textwrap">STEP 1</div>
                    <div class="titlewrap">Choose a payment method</div>
                    <div class="payment_icon_wrap">
                        <div class="icon_wrapper"><img src="../assets/Payment/Paypal.svg" /></div>
                        <div class="icon_wrapper"><img src="../assets/Payment/Payu.svg" /></div>
                        <div class="icon_wrapper"><img src="../assets/Payment/Gpay.svg" /></div>
                        <!-- <div class="icon_wrapper"><img src="../assets/Payment/Applepay.svg" /></div> -->
                        <div class="icon_wrapper active2" @click="paymentGateway">Stripe</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightside_wrap">
            <div class="prize_details_wrap">
                <div class="prize_details_content">Price details</div>
                <div class="prize_details_img"><img src="../assets/Payment/Prize.svg" /></div>
            </div>
             <div class="prize_details_wrap">
                <div class="prize_details_content1">AKM Gun Skin pink</div>
               <div class="prize_details_content2">1400</div>
             </div>
              <div class="prize_details_wrap">
                <div class="prize_details_content1">Discount Amount</div>
               <div class="prize_details_content2" style="padding-right:8%;">0</div>
             </div>
             <div class="total_wrap">
               <div class="prize_details_content3">Total</div>
               <div class="prize_details_content4">1400</div>  
             </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "payment",
  methods: {
    paymentGateway() {
      const stripe = window.Stripe('pk_test_51HUSksLaOByw9fVstcwGy60zrikfWY3tPX0d6veda5qO6VXql55M3mgTd3ERkOsCeGrnFhzunD5L4NLJ2JJvzXkY00zWZDoYRj');

        axios.get('/payment/stripe/test').then(session => {
            return stripe.redirectToCheckout({ sessionId: session.data.id });
        }).then(result => {
            console.log("result payment", result);
        });
    },
  },
};
</script>
<style scoped>
.payment_outer_wrap{
    width: 100%;
    padding: 20px;
    display:flex;
    column-gap: 3%;
}
.leftside_wrap{
    width: 1131px;
   height: 670px;
   display: flex;
   background: rgba(27, 27, 27, 1);
   border-radius: 10px;
    column-gap: 4%;
}
.payment_img_wrap{
height: 670px;
width: 434px;
}
.step1_wrap{
    padding: 5% 0% 5% 5%;
}
.textwrap{
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 27px;
color: #929292;
text-align: left;
padding-bottom: 5px;
}
.titlewrap{
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 27px;
text-align: left;
color:#FFFFFF;
padding-bottom: 5px;
}
.payment_icon_wrap{
    padding: 10px 0px;
    display: flex;
    column-gap: 2%;
}
.icon_wrapper{
height: 54px;
width: 139px;
border-radius: 10px;
background: rgb(35 32 44);
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}
.active2{
    background: rgba(150, 114, 255, 1);
}
.rightside_wrap{
    width: 415px;
    height: 670px;
    padding: 3%;
    background: rgba(27, 27, 27, 1);
   border-radius: 10px;
   position: relative;
}
.prize_details_wrap{
display: flex;
justify-content: space-between;
align-items: center;
padding: 4% 0%;
}
.prize_details_content,.prize_details_content1,.prize_details_content2,
.prize_details_content3,.prize_details_content4{
font-family: Poppins;
font-style: normal;
text-align: left;
color: #FFFFFF;
}
.prize_details_content{
font-size: 24px;
font-weight: 700;
line-height: 36px;
}
.prize_details_img{
    padding-right: 7%;
}
.prize_details_content1{
font-size: 18px;
font-weight: 400;
line-height: 27px;
}
.prize_details_content2{
font-size: 18px;
font-weight: 500;
line-height: 27px;
padding-right: 11px;
}
.prize_details_content3{
font-size: 24px;
font-weight: 400;
line-height: 36px;
}
.prize_details_content4{
font-size: 24px;
font-weight: 500;
line-height: 36px;
}
.total_wrap{
position: absolute;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0% 12%;
height: 107px;
width: 415px;
top: 84%;
left: 0%;
background: rgba(39, 39, 39, 1);
}
</style>