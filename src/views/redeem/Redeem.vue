<template>
    <div class="redeem_outer_container">
        <div class="redeem_container">
            <div class="content1">
                <div class="product_heading_wrap">
                    <div class="product_heading">Product List</div>
                    <div class="see_all_wrap">see all</div>
                </div>
                <div class="product_card_container">
                    <v-hover v-slot:default="{ hover }" v-for="product in productArray" :key="product._id">
                    <div class="product_cards" >
                        <div class="product_img_wrap">
                            <img :src="'https://ps-mg.s3.amazonaws.com/' + product.images" alt="product image">
                        </div>
                        <div class="gems_wrap" >{{product.price}} gems</div>
                        <v-expand-transition>
                        <div class="card_overcontent" v-if="hover">
                            <div class="gems_content">
                                <div class="gems_wrap">{{product.price}} gems</div>
                                <span>only 5 AED</span>
                            </div>
                            <div v-if="!isDuplicate(product)" class="add_btn" @click.stop="addToCart(product)">add to cart</div>
                            <div v-else class="add_btn" @click.stop="viewCart(product)">go to cart</div>
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

    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import VerticleSlider from "../../components/Verticle-slider.vue"

export default {
   name:"Redeem",
   components: {VerticleSlider},
   data() {
    return{
        // selectedCategory: '',
        images: ['https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png',
        'https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png',
        'https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png',
        'https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png',
        'https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png'
        ],
        productArray : []
    }
   },
   computed: {
        ...mapGetters(["products"]),
    },
   methods: {
       redeemProductList() {
      this.$Progress.start()
        axios
            .post('/product/find/all', {
                criteria: {},
            })
            .then((response) => {
                this.productArray = response.data;
          this.$Progress.finish()

            })
            .catch((e) => {
                if (e.response.status === 400) {
                console.log('err', e);
                }
            });
        },
        addToCart(product) {
            this.$store.dispatch("addToCart", product);
        },
        viewCart() {
            this.$router.push({ name: 'MyCart' });
        },
        incrementValue() {
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            if(value<10){
                value++;
                document.getElementById('number').value = value;
            }
        },
        decrementValue() {
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            if(value>1){
                value--;
                document.getElementById('number').value = value;
            }
        },
        isDuplicate(product) {
            const cart = this.$store.getters.cart;
            if (!cart?.length) return false;
            const isProductPresent = element => element.product._id === product._id;
            return !!cart.find(isProductPresent);
        },
    },
  mounted() {
      this.redeemProductList();
  }
}
</script>
<style scoped>
.redeem_outer_container{
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
.product_heading {
  text-align: left;
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
    grid-template-columns: repeat(auto-fill, minmax(143px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    margin-bottom: 30px;
    grid-gap: 1rem 1rem;
    margin-top: 38px;
}
.product_cards{
    position: relative;
    width: fit-content;
    background-color: #F8F8F8 ;
    border-radius: 10px;
    overflow: hidden;
    width: 150px;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}
@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
.product_cards:hover{
    transform: scale(1.1);
    transition-delay: .1ms;
    background: linear-gradient(180deg, #00000000 0%, #000000 100%);
}
.product_cards:nth-child(2):before,.product_cards:nth-child(3):before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
}
.product_img_wrap{
    overflow: hidden;
    border-radius: 10px;
}
.gems_wrap{
    color: black;
    text-align: center;
    padding: 3px;
    font: normal normal bold 15px/23px Poppins;
    white-space: nowrap;
}
.card_overcontent{
    position: absolute;
    color: #FFF;
    bottom: -77px;
    text-align: center;
    white-space: nowrap;
    left: 50%;
    padding: .8em 1.2em;
    color: white;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}
.gems_content{
    background: #FFFFFF;
    opacity: 0.97;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    text-align: center;
}
.gems_wrap_over{
    color: black;
    font-weight: 800;
    font-size: 1.2em;
}
.gems_content span{
    color: black;
    font: normal normal normal 10px/16px Poppins;
}
.add_btn{
    background-color: #FFF;
    color: black;
    margin: 8px;
    border-radius: 4px;
    margin: 14px 12px 0px 12px;
    text-transform: capitalize;
    font: normal normal 600 10px/16px Poppins;
    padding: 3px 5px 3px 3px;
    cursor: pointer;
}
.product_number{
    margin-top: 15px;
}
.product_number>input:nth-child(2){
    text-align: center;
    color: #FFFFFF;
}
.product_number>input:nth-child(1){
background-color: #FFFFFF;
padding:1px 11px;
color: black;
border-radius: 4px;
}
.product_number>input:nth-child(3){
background-color: #FFFFFF;
padding: 1px 9px;
color: black;
border-radius: 4px;
}

@media(min-width:320px) and (max-width:767px) {
    .redeem_outer_container {
        padding: 0px;
    }
    .redeem_container{
        padding: 0px;
    }
    .content1 {
        width: 100%;
        margin-right: 0px;
        padding:10px;
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