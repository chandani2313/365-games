<template>
     <!-- <div class="Pubg_leaderBoard">
        <div class="inner_container">
            <div class="inner_container2">
                <div class="inner_subwrapper" v-for="prizeList,index in prize" :key="index">
                <div class="image_wrap">
                  <img src="/img/assets/pubgleaderboardprizepool/1st Prize@2x.png">
                  <img :src="`/img/assets/pubgleaderboardprizepool/${index+1}Prize.png`" alt="" />
                  </div>
                <div class="content_wrap">
                    <div class="icon_wrap"><img src="/img/assets/tournamentprize/Leaderboard - Prizepool-star.png"></div>
                    <div class="prize_wrap">{{prizeList.gem}} Gem</div>
                    <div class="icon_wrap"><img src="/img/assets/tournamentprize/Leaderboard - Prizepool-star.png"></div>
                </div>
                </div>
            </div>
        </div>
    </div> -->
                <div class="inner_container2">
                     <div class="inner_subwrapper" v-for="prize in selectedLeaderboard.prizes" :key="prize._id">
                    <div class="prize_wrapper">
                      <div class="first_wrap"><img src="../assets/Leaderboardprize/first.svg"></div>
                      <div class="prize1_amount_wrap">
                        <img src="../assets/Leaderboardprize/star.svg">
                        <div class="currency">+1000 000 AED</div>
                        <img src="../assets/Leaderboardprize/star.svg">
                      </div>
                    </div>
                   </div>
<!-- 
                   <div class="inner_subwrapper">
                    <div class="prize_wrapper">
                      <div class="first_wrap"><img src="../assets/Leaderboardprize/second.svg"></div>
                      <div class="prize2_amount_wrap">
                        <img src="../assets/Leaderboardprize/star.svg">
                        <div class="currency">+1000 000 AED</div>
                        <img src="../assets/Leaderboardprize/star.svg">
                      </div>
                    </div>
                   </div>

                   <div class="inner_subwrapper">
                    <div class="prize_wrapper">
                      <div class="first_wrap"><img src="../assets/Leaderboardprize/third.svg"></div>
                      <div class="prize3_amount_wrap">
                        <img src="../assets/Leaderboardprize/star.svg">
                        <div class="currency">+1000 000 AED</div>
                        <img src="../assets/Leaderboardprize/star.svg">
                      </div>
                    </div>
                   </div> -->

                </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
export default {
name: "LeaderboardPrizepool",
data() {
  return{
    prizeList:"",
  }
},
methods: {
  getLeaderboardDetails() {
    axios
    .get("/leaderboard/find/".concat(this.$route.params.id))
    .then((response) => {
    //   console.log("lead prize detail ",  response.data.prizes);
      this.prizeList = response.data.prizes;
    })
    .catch((e) => {
      if (e.response.status === 400) {
        console.log("err", e);
      }
    });
  },
},
 computed: {
    ...mapGetters(["selectedLeaderboard"]),
  },
  mounted() {
    this.getLeaderboardDetails();
  }
}
</script>

<style scoped>
.prize_wrapper{
height: 176px;
width: 265px;
border-radius: 10px;
background: rgba(27, 27, 27, 1);
position: relative;
}
.first_wrap{
display: flex;
justify-content: center;
padding-top: 11%;
}
.prize1_amount_wrap, .prize2_amount_wrap, .prize3_amount_wrap{
  position: absolute;
  height: 33px;
  width: 265px;
  bottom: 0;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: space-around;
}
.prize1_amount_wrap{
background: linear-gradient(91.68deg, #FF9B3F 7.33%, rgba(255, 201, 63, 0.98) 84.35%);
}
.prize2_amount_wrap{
background: linear-gradient(270.71deg, #EEF6FF -62.36%, #889AB0 101.38%);
}
.prize3_amount_wrap{
background: linear-gradient(270.71deg, #E9975C 3.28%, #B4703F 97.39%);
}
.prize1_amount_wrap>img, .prize2_amount_wrap>img, .prize3_amount_wrap>img{
  width: 12px;
}
.currency{
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 20px;
color: #FFFFFF;
text-align: center;
align-items: center;
padding-top: 8px;
}
.Pubg_leaderBoard{
width: 100%;
}
.inner_container1{
display: flex;
justify-content: space-between;
}
.inner_container2 {
  background-color: rgba(0, 0, 0, 0.3);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 2rem;
  padding: 2rem 3rem 3rem 3rem;
  border-radius: 10px 10px 0px 0px;
}
.inner_subwrapper{
 margin-top: 10%;
}
</style>