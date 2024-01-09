<template>
    <div class="redeem_outer_container">
        <div class="redeem_container">
            <div class="product_heading_wrap">
                <div class="product_heading">shopping cart</div>
                <div class="see_all_wrap">see all</div>
            </div>
            <div class="product_card_container">
                <div class="product_cards">
                    <div class="product_img_wrap">
                        <img src="@/assets/Redeem/Redeem@2x.png" alt="product image">
                    </div>
                    <div class="gems_wrap">100 gems</div>
                </div>
                <div class="product_details_wrap">
                    <div class="product_top_outer">
                        <div class="product_top">
                            <div class="product_name">product name here</div>
                            <div class="product_amount"><span>&#x20b9;</span>1250.00</div>
                        </div>
                        <div class="product_details">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,                
                        </div>
                    </div>
                    <div class="product_quantity">
                        <select name="quantity" >
                            <i class="fas fa-caret-down"></i>
                            <option value="qty" disabled="" selected=""> Qty </option>
                            <option value="qty 1"> 1</option>
                            <option value="qty 2">   2</option>
                            <option value="qty 3">  3</option>
                            <option value="qty 4">  4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="total_items_outer">
                <div class="total_items">
                    <div class="items">total items</div>
                <div class="amount"> <span>&#x20b9; 1250.00</span></div>
                </div>
                <div class="buy_button">proceed to buy</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.redeem_outer_container{
    background-color: #1E0741;
    height: 100vh;
}
.redeem_container{
    padding: 1em;
    background-color: #1E0741;
}
.product_heading_wrap{
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    padding: 15px 0px 15px;
    text-transform: capitalize;
    border-bottom: 1px solid #877b9a;
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
}
.gems_wrap{
    color: black;
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
@media(min-width:320px) and (max-width:767px){
.product_details{
    font-size: 2.4vw;
}
.product_top{
     font-size: 3.1vw !important; 
}
.total_items_outer{
    display: grid;
    justify-content: center;
 }
}
.product_top{
    justify-content: space-between;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    /* padding: 15px 0px 15px; */
    text-transform: capitalize;
    font-size: 1.4em;
    font-weight: 500;
}
.product_details{
    text-align: left;
    color: #FFFFFF;
    word-spacing: 1px;
    letter-spacing: 0.1px;
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
select{
    padding:4px 45px 5px 7px;
 }
}
.items{
    margin-right: 25px;
    font-weight: 300;
}
.total_items{
    color: #FFFFFF;
    display: flex;
    justify-content: flex-end;
    text-transform: capitalize;
    font-size: 1.3rem;
    margin: 15px 0px;
}
.amount{
    font-weight: 600;
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
}
@media(min-width:320px) and (max-width:767px){
    .buy_button
    {    
        margin: auto;
    }
    .gems_wrap{
        font-size: 1em;
    }
}
</style>