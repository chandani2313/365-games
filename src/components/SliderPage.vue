<template>
  <v-carousel height="230px" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in sliders"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <v-img class="desktop-carosel" :src="`https://ps-mg.s3.amazonaws.com/${item.imageDesktop}`" ></v-img>
    <v-img class="mobile-carosel" :src="`https://ps-mg.s3.amazonaws.com/${item.imageMobile}`" ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";
  export default {
    data () {
      return {
        sliders: []
      }
    },
    methods: {
    getSlider() {
         axios
        .post('/slider/find/all', {
            criteria: {},
        })
        .then((response) => {
            this.sliders = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log('err', e);
          }
        });
    }

    },
    mounted() {
      this.getSlider()
    }
  }
</script>
<style scoped>
.desktop-carosel {
    display: block !important;
  }
.mobile-carosel {
    display: none !important;
}
@media (min-width: 320px) and (max-width: 767px) {
    .desktop-carosel {
        display: none !important;
    }
    .mobile-carosel {
        display: block !important;
    }
    .v-carousel{
      height: 400px;
    }
}
</style>