<template>
  <!-- <div class="inner_container2">
        <div class="inner_subwrapper">
      <div class="image_wrap blur">
          <img src="/img/assets/tournaments/trophy icon 2.svg">
          <div class="rank"><span></span>1</div>
          <div class="prize_container prize1">
            <div class="inner">
            <div class="amount">1000,000</div>
            <div class="currency">AED</div>
            </div>
          </div>
      </div>
      </div>
        <div class="inner_subwrapper">
      <div class="image_wrap">
          <img src="/img/assets/tournamentprize/1st Prize@2x.png"> -->
          <!-- <img
              :src="`/img/assets/tournamentprize/${index+1}Prize.png`"
              alt=""
          />
          <img src="/img/assets/tournaments/trophy icon 3.svg">
            <div class="rank shadow2"><span></span>2</div>
          <div class="prize_container prize23">
            <div class="inner">
            <div class="amount">1000,000</div>
            <div class="currency">AED</div>
            </div>
          </div>
      </div>
      </div>

      
      <div class="inner_subwrapper" v-for="(prizeList, index) in prize" :key="index">
        <div class="inner_subwrapper">
      <div class="image_wrap">
          <img src="/img/assets/tournamentprize/1st Prize@2x.png">
          <img
              :src="`/img/assets/tournamentprize/${index+1}Prize.png`"
              alt=""
          />
          <img src="/img/assets/tournaments/trophy icon 4.svg">
            <div class="rank shadow3"><span></span>3</div>
          <div class="prize_container prize23">
            <div class="inner">
            <div class="amount">1000,000</div>
            <div class="currency">AED</div>
            </div>
          </div>
      </div>
      <div class="content_wrap">
          <div class="icon_wrap"><img src="/img/assets/tournamentprize/Leaderboard - Prizepool-star.png"></div>
          <div class="prize_wrap">{{prizeList.gem}} Gem</div>
          <div class="icon_wrap"><img src="/img/assets/tournamentprize/Leaderboard - Prizepool-star.png"></div>
      </div>
      </div>

  </div> -->
  
  <div class="inner_container2">
                     <div class="inner_subwrapper">
                    <div class="prize_wrapper">
                      <div class="first_wrap"><img src="../assets/Leaderboardprize/first.svg"></div>
                      <div class="prize1_amount_wrap">
                        <img src="../assets/Leaderboardprize/star.svg">
                        <div class="currency">+1000 000 AED</div>
                        <img src="../assets/Leaderboardprize/star.svg">
                      </div>
                    </div>
                   </div>

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
                   </div>

                </div>
</template>

<script>
import axios from "axios";

export default {
name: "TournamentPrizepool",
data() {
    return {
      prize:"",
    };
  },
methods:{
    getTournamentDetails() {
        axios
        .get("/tournament/find/".concat(this.$route.params.id))
        .then((response) => {
        //   console.log("tour prize detail ",  response.data.prizes);
          this.prize = response.data.prizes;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
},
mounted() {
    this.getTournamentDetails();
  }
}
</script>

<style scoped>
/* .prize_container{
width: 150px;
height: 168px;
left: 345px;
top: 708px;

border-radius: 10px;
}
.currency{
  font: normal normal 400 24px/36px Poppins;
}
.amount{
  margin-top: 80px;
  font: normal normal 600 24px/36px Poppins;
  display: flex;
  align-items: center;
  text-align: center;
}
.inner{
  
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.shadow1{
  text-shadow: 0px 0px 3px #d39e47;
}
.shadow2{
  text-shadow: 0px 0px 3px #979797;
}
.shadow3{
  text-shadow: 0px 0px 3px  #C36828;
}
.blur::after{
    content: '';
    width: 74px;
    background: #FFFFFF;
    opacity: 0.3;
    filter: blur(31px);
    position: absolute;
    width: 74px;
    height: 74px;
    left: 8px;
    top: 88px;
    background: #FFFFFF;
    opacity: 0.3;
    filter: blur(31px);
}
.prize1{
  background: #7255E9;
}
.prize23{
background: #3E3E3E;
}
img{
  width: 100%;
  display: block;
}
.Pubg_leaderBoard{
width: 100%;
}
.rank{
    position: absolute;
    width: 12px;
    height: 29px;
    left: 68px;
    top: 130px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 29px;
    color: #FFFFFF;

  
}
.inner_container{
    padding: 2rem;
}
.inner_container1{
display: flex;
justify-content: space-between;
}
.inner_subwrap{
margin: 10px 0px 5px 5px;
min-width: 115px;
height: 30px;
border-radius: 5px;
border: 0.25px solid #FFFFFF;
text-align: center;
font:300 16px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: capitalize;
padding:5px;
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inner_container2 {
  background-color: rgba(0, 0, 0, 0.3);
  grid-template-columns: repeat(auto-fill, minmax(151px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 2rem;
  padding: 0rem 3rem 3rem 3rem;
  border-radius: 10px 10px 0px 0px;
}
.inner_subwrapper{
position: relative;
 margin: 0 auto;
}
.image_wrap>img{
    margin: 0 auto;
    position: relative;
    top: 85px;
}
.image_wrap{
position: relative;
}
.inner{
      font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.content_wrap{
display: flex;
justify-content: space-between;
}
.icon_wrap{
background: #F0F0F0;
box-shadow: 0px 3px 6px #00000029;
padding: 7px;
text-align: center;
}
.prize_wrap{
text-align: center;
font:16px/22px Poppins;
letter-spacing: 0px;
color: #1E0741;
background: #F0F0F0;
box-shadow: inset 0px 0px 26px #00000029;
padding: 5px;
min-width: 149px;
width:100%;
} */

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