<template>
    <div class="paymentfailure_outer_wrapper">
        <div class="paymentfailure_inner_wrapper">
            <div class="image">
                <div class="failure_img">
                    <img src="../assets/Payment/circle.svg" style="width:190.83px;"/>
                    <div class="right_img">
                        <img src="../assets/Payment/right.svg" style="width:81px;"/>
                    </div>
                    <div class="right_img">
                        <img src="../assets/Payment/left.svg" style="width:81px;"/>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="failure_msg">
                    Transaction Failed
                </div>
                <div class="confirm_msg">
                    Your payment was not successfully processed. Please contact our customer support.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.paymentfailure_outer_wrapper{
    display: flex;
    justify-content: center;
    margin: 135px auto;
}
.failure_img{
    display: flex;
    justify-content: center;
    position: relative;
}
.image{
    margin-bottom: 25px;
}
.content{
    width: 565px;
}
.failure_msg{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 90px;
    margin-bottom: 10px;
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
    color: #FFFFFF;
}
.right_img{
    position: absolute;
    margin: 55px auto;
}
</style>