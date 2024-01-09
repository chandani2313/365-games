<template>
   <v-carousel height="850px" hide-delimiters :show-arrows="false" :cycle="true">
    <div class="random">
      <div class="random-text">Random drop in</div>
      <div v-if="countDownDate" class="random-number" id="demo1"></div>
      <div v-else class="random-number">00:00</div>
    </div>
    <div class="short_description_container">
      <div class="short_description_content" v-html="description">
      </div>
    </div>
    <v-carousel-item
      v-for="(item,i) in sliders"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
        
    <v-img class="desktop-carosel"   :src="`https://ps-mg.s3.amazonaws.com/${item.imageDesktop}`" ></v-img>
    
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import axios from "axios";
  export default {
    data () {
      return {
        sliders: [],
          countDownDate: "",
          minutes: 0,
          seconds: 59,
          description: ''
      }
    },
  created: function () {
    setInterval(() => {
      if(this.countDownDate) {
        // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      if(days && hours && minutes && seconds) {
        document.getElementById("demo1").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      }
    }
        
      
    }, 1000);
  },
  computed: {
    // randomDropTimer() {
    //   return this.minutes + " : " + this.seconds;
    // },
  },
    methods: {
    getRandomDrop() {
      axios.post("/random-drop/find/all", { criteria: {} }).then((res) => {
        this.countDownDate = new Date(res.data[0].startDate).getTime();
        this.description = res.data[0].shortDescription
      });
    },
    getSlider() {
         axios
        .post('/vertical-slider/find/all', {
            criteria: {},
        })
        .then((response) => {
            this.sliders = response.data;
            // console.log("sliders>>>>",this.sliders)
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log('err', e);
          }
        });
    }

    },
    mounted() {
      this.getRandomDrop();
      this.getSlider()
    }
  }
</script>

<style scoped lang="scss">
::v-deep .mdi-magnify {
  opacity: 0.6;
}
.random {
  // background: #330e6b;
    border: 4px solid #1e12cf;
    border-radius: 0px;
    width: 100%;
    color: #f9f9f9;
    text-align: center;
  // border-radius: 4px;
  // border-right: 1px solid #330e6b;
  padding: 15px 0px 8px;
  .random-text {
    font: normal normal normal 12px/18px Poppins;
    padding: 5px;
    font-size: 1.2em;
    text-transform: uppercase;
    text-shadow: 2px 2px 3px #002bff;
  
  }
  .random-number {
    // font: normal normal bold 16px/25px Poppins;
        text-shadow: 3px 3px 5px #f60000;
    text-transform: uppercase;
    font-size: 1.3em;
  }
}
.v-window__container{
    height: 850px;
    /* text-align: center; */
    align-items: center;
}
.random{
    position: absolute;
    z-index: 1;
}
.short_description_container{
      position: absolute;
    z-index: 1;
    color: #FFFFFF;
    text-align: center;
    margin: 90px auto;
  .short_description_content{
    // position: absolute;
    z-index: 1;
    color: #FFFFFF;
    text-align: center;
    margin: 60px 30px;
  }

}


</style>