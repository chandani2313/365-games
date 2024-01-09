<template>
  <main>
    <div class="redeem_container">
      <div class="content1">
        <div class="page_nav_market"><i class="fas fa-cart-arrow-down"></i>  Sub Checkout </div>
        <div>
          <SubList />
        </div>
      </div>
      <div class="content2">
         <VerticleSlider/>
      </div>
    </div>  
  </main>
</template>
<script>
// @ is an alias to /src
// import Checkout from './Checkout.vue';
import VerticleSlider from "../../components/Verticle-slider.vue"
import SubList from './SubList.vue';

export default {
  name: 'MySub',
  data() {
    return {
    };
  },
  components: {
    //   Checkout,
    VerticleSlider,
      SubList,
  },
  methods: {

  },
  mounted() {
  },
};
</script>

<style scoped>
.page_nav_market{
  color: white;
  /* padding: 30px 1rem 13px; */
  font: normal normal medium 22px/33px Poppins;
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
@media (min-width: 320px) and (max-width: 767px) {
  .content2 {
    display:none;
  }
}
</style>
