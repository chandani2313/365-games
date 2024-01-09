<template>
  <div class="inner_cont">
      <router-link v-for="leaderboard in leaderboards" :key="leaderboard._id" tag="a" :to="{ name: 'LeaderboardDetails' ,params: {id: leaderboard._id}}" class="inner_wrapper">
          <div class="image_wrap">
            <img class="img_card" :src="`https://ps-mg.s3.amazonaws.com/${leaderboard.logo}`">
              <!-- <div class="leaderboard_name"><span style="font-size: 15px;">{{leaderboard.name}}</span></div> -->
          </div>  
          <div class="leaderboard_details_wrap">
            <div class="content_wrap">{{leaderboard.status}}</div>
            <!-- <div class="Description_wrap"> -->
                <div class="Description_wrap_left">
                  <div class="icon_wrap" ><img src="/img/assets/leaderboard/Vector 7.svg" style="width:28px"></div>
                  <div class="des_wrap">
                    <div class="middle_wrap">
                      <div class="des_wrap_inner1">Prize pools</div>
                      <div class="des_wrap_inner2">
                          <span>{{leaderboard.prizePool}}</span>
                            <img src="/img/assets/leaderboard/bonus.svg">
                      </div>
                      </div>
                      <div class="icon_wrap"><img src="/img/assets/leaderboard/game.svg" style="width:22px"></div>
                  </div> 
                <div class="Description_wrap_right">

                      <div class="des_details">
                          <div class="des_wrap_inner1">Game mode</div>
                          <div class="des_wrap_inner3">5 vs 5</div>
                      </div>   
                </div>
                </div>

            <!-- </div> -->
          </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "LeaderboardCard",
  props: ['leaderboards'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  display: block;
}
.inner_container {
  width: 100%;
  /* background: #1e0741; */
  border-radius: 8px;
  animation: scale-in-ver-top 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.img_card{
  border-radius: 10px 10px 0 0;
      height: 203px;
    /* width: 359px; */
    object-fit: cover;
}
.inner_cont {
      margin-bottom: 10rem;
      /* padding: 0rem 1rem; */
  /* grid-template-columns: repeat(auto-fill, minmax(284px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(359px, 359px));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 1rem;
  margin-top: 20px;
  animation: swing-in-top-bck 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1s both;
}
/* @keyframes swing-in-top-bck {
  0% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
} */
/* .inner_wrapper:hover{
  animation: heartbeat 1s ease-in-out infinite both;
}
@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.98);
    animation-timing-function: ease-in;
  }
  27% {
    transform: scale(0.99);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.97);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
} */
.inner_wrapper {
    /* width: 359px; */
    background-color: #1b1b1b;
    position: relative;
    border-radius: 10px     ;
    overflow: hidden;
    /* animation: shadow-pop-tl 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both; */
}
/* @keyframes shadow-pop-tl {
  0% {
    box-shadow: 0 0 #ce0daef3, 0 0 #ce0daef3, 0 0 #ce0daef3, 0 0 #ce0daef3, 0 0 #ce0daef3, 0 0 #ce0daef3, 0 0 #ce0daef3, 0 0 #ce0daef3;
    transform: translateX(0) translateY(0);
  }
  100% {
    box-shadow: -0px -0px #ce0daef3, -1px -1px #ce0daef3, -1px -1px #ce0daef3, -2px -2px #ce0daef3, -3px -3px #ce0daef3, -3px -3px #ce0daef3, -4px -4px #ce0daef3, -4px -4px #ce0daef3;
    transform: translateX(8px) translateY(8px);
  }
} */
.image_wrap {
  /* margin: -5px; */
  position: relative;
  /* height: 203px;
    width: 359px; */
  /* background: #000000 0% 0%;
  opacity: 0.65; */
}
.image_wrap::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background: #000000; */
    /* border-radius: 0px 0px 10px 10px; */
    /* opacity: 0.3; */
}
.leaderboard_name{
    position: absolute;
    bottom: 10px;
    z-index: 1;
    width: 100%;
    text-align: center;
}
.leaderboard_details_wrap{
     padding: 0.5rem 1rem;
}
.content_wrap {
    font-size: 14px;
    font-weight: 500;
    color: #FFF;
    font-family: Poppins;
    font-weight: 600;
}
.Description_wrap {
  margin: 10px -5px -5px -5px;
  display: flex;
}
.Description_wrap_left {
  display: flex;
justify-content: space-between;
  /* width: 50%;
  min-height: 40px; */
  column-gap: 15px;
  margin: 5px 0px;
}

.icon_wrap {
    /* padding-right: 18px; */
    /* margin: 5px; */
    /* width: 7%; */
    /* min-width: 23px; */
    display: flex;
    align-items: center;
    /* min-width: 23px; */
}
.des_details{
padding-left: 10px;
}
.des_wrap {
    display: flex;
    padding: 0px 16px 0px 10px;
    position: relative;
    column-gap: 45px;
    width: 60%;
    justify-content: space-between;
}
/* left line before text*/
.des_wrap::before {
    content: '';
    position: absolute;
    background-color: #9672FF;
    width: 1px;
    height: 47px;
    bottom: 7px;
    left: -7px;
    opacity: 0.3;
}

/* left line after text*/
.des_wrap::after{
    content: '';
    position: absolute;
    background-color: #9672FF;
    width: 1px;
    height: 47px;
    bottom: 8px;
    /* left: 0px; */
    opacity: 0.3;
    right: 0;
 
}

.des_wrap_inner1 {
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 220%;
color: #CDCADB;
white-space: nowrap;
}
.des_wrap_inner2 {
  display: flex;
      align-items: baseline;
  /* margin-top: 6px;
  flex-wrap: wrap; */
}
.des_wrap_inner2 > img {
  width: 30%;
  margin-left: 5px;
}
span {
    margin-left: -1px;
        white-space: nowrap;
    /* min-width: 37px; */
    /* min-height: 8px; */
    /* text-align: center; */
    font: 600 14px/16px Poppins;
    /* letter-spacing: 0px; */
    color: #ffffff;
    /* flex-wrap: wrap; */
        font-family: Poppins;
    /* font-style: normal; */
    font-weight: 500;
    font-size: 18px;
    /* line-height: 220%; */
}
.Description_wrap_right {
  display: flex;
  /* width: 50%; */
  position: relative;
  /* justify-content: center; */
  width: 30%;
}
.des_wrap_inner3 {
  display: flex;
  margin-top: 5px;
  flex-wrap: wrap;
  min-width: 37px;
  min-height: 15px;
  text-align: left;
  /* font: 600 14px/18px Poppins; */
  letter-spacing: 0px;
  color: #ffffff;
  margin: 4px;
      font-family: Poppins;
    /* font-style: normal; */
    font-weight: 500;
    font-size: 18px;
    /* line-height: 220%; */
}

.pagination{
        text-align: center;
    margin-top: 35px;
}
#pagination{
  display: flex;
  justify-content: center;
}
.blocks{
  width: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
      width: 40px;
    height: 40px;

    
    border-radius: 50%;
        font-family: Poppins;
    font-size: 15px;

    font-weight: 600;

color: #787686;

}
.blocks:not(:first-child){
  margin-left: 5px;
}

.blocks:hover{
  background-color: #DDDDDD;
}
#pagination a.active_page{
  background-color: #4CAF50;
}
.active_page{
    background-image: linear-gradient(
180deg, #7255E9 0%, #7255E9 100%);
color: #FFFFFF;
}
@media (min-width: 320px) and (max-width: 1286px) {
  .des_wrap{
          padding: 0px 8px 0px 7px;
        column-gap: 25px;
  }
  .des_details{
    padding-left: 0px;
  }
  .Description_wrap_right{
    width: 25%;
  }
}
</style>
