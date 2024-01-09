<template>
    <div class="paymentsuccess_outer_wrapper">
        <div class="paymentsuccess_inner_wrapper">
            <div class="image">
                <div class="success_img">
                    <img src="../assets/Payment/circle.svg" style="width:190.83px;"/>
                    <div class="right_img">
                        <img src="../assets/Payment/success.svg" style="width:81px;"/>
                    </div>
                </div>
            </div>
            <div class="success_msg">
                Payment Successful!
            </div>
            <div class="confirm_msg">
                Your order is confirmed, you will recieve an email with the receipt
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "PaymentSuccess",
    async mounted() {
        await axios.get('/subscription-pack/update/test')
    }
}
</script>
<style scoped>
.paymentsuccess_outer_wrapper{
    display: flex;
    justify-content: center;
    margin: 155px auto;
}
.success_img{
    display: flex;
    justify-content: center;
    position: relative;
}
.image{
    margin-bottom: 25px;
}
.success_msg{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 90px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
.confirm_msg{
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.right_img{
    position: absolute;
    margin: 70px auto;
}
</style>