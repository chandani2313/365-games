<template>
  <div class="inner_container">
    <div class="inner_container0">
        <div class="outer_shell">
        <div class="inner_container2">
            <div class="inner_subwrapper" v-for="participant in selectedTournament.participatedPlayers" :key="participant._id">
            <div class="image_wrap"><img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" alt=""></div>
            <div class="player_content">
              <div class="player_name">{{participant.username}}</div>
              <div class="player_name1">{{selectedTournament.game.shortName}}</div>  
            </div>
            </div>
            </div>
        </div>
    </div>
    <div class="player_count">Total Player : 250</div>
    <div class="slider_wrap">
      <div class="slider_wrapper">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9L1 4.98864L5 0.977275" stroke="#9672FF" stroke-width="1.22449" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="text_wrap">1 of 10 - 100</div>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9L5 4.98864L1 0.977275" stroke="#9672FF" stroke-width="1.22449" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="page_wrapper">
        <div class="text_wrap">10</div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5.01136 5L9.02272 1" stroke="#9672FF" stroke-width="1.22449" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
name: "TournamentParticipants",
data() {
  return{}
},
 computed: {
    ...mapGetters(["selectedTournament"]),
  },
}
</script>

<style scoped>

body{
  display: block;
  margin: 0px;
  /* background: transparent linear-gradient(26deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%); */
}
img{
  width: 100%;
  display: block;
}
/* .Pubg_leaderBoard{
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0px 0px;
} */
.inner_container{
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0px 0px;
}
.inner_subwrap{
margin: 10px 5% 0px 5px;
min-width: 115px;
height: 30px;
border-radius: 5px;
border: 0.25px solid #FFFFFF;
text-align: center;
font:300 16px//*25px*/ Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: capitalize;
padding:5px;
}
.outer_shell{
/* background: #1E0741; */
padding: 24px;
width: 100%;	
}
.inner_container2{
  grid-template-columns: repeat(auto-fill, minmax(202px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 15px;
}
.inner_subwrapper{
/* background: rgba(31, 31, 31, 1); */
background:  #1f1f1f;
width: 202px;
height: 64px;
border-radius: 10px;
display: flex!important;
padding: 10px;
align-items: center;
}
.inner_subwrapper:hover {
  background: #7255E9;
  cursor: pointer;
}
.image_wrap{
width: 40px;
height: 40px;
border-radius: 50%;
overflow: hidden;
box-shadow: 2px 3px 6px rgb(0 0 0 / 50%);
}
.player_content{
margin-left: 10px;
}
.player_name{
text-transform: capitalize;
align-items: center;
font: normal normal 600 15px/23px Poppins;
letter-spacing: 0px;
color: #fff;
}
.player_name1{
  font: normal normal 400 12px/18px Poppins;
font-size: 10px;
color: #FFF;
text-transform: capitalize;
align-items: center;
letter-spacing: 0px;
padding: 2px;
}
.player_count{
color: rgba(255, 255, 255, 1);
margin-left: 2%;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 29px;
text-align: left;
}
/* .slider_wrap{
display: flex;
min-width: 54px;
min-height: 35px;
margin-top: 10px;
} */
.slider_wrapper{
display: flex;
justify-content: space-evenly;
}
.text_wrap{
margin: -9px 10px 0px 10px;
}
.text_wrap>svg{
  margin-top: 3px;
}
.slider_wrap{
display: flex;
justify-content: center;
align-items: center;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 29px;
text-align: left;
color: rgba(255, 255, 255, 1);
}
.page_wrapper{
  display: flex;
}
.outer_wrap{
background: #FFFFFF;
}
.prev_next_wrap{
color: #38065D;
border: hidden;
min-height: 35px;
background: #FFFFFF;
font:900 16px/25px Poppins;
}
.total_pagecount{
min-width: 151px;
background: #FFFFFF;
padding: 3px;
color: #38065D;
text-align: center;
font:600 16px/25px Poppins;
box-shadow: inset 0px 3px 9px #00000029;
}
.page_wrap{
text-align: center;
font:600 16px/25px Poppins;
letter-spacing: 0px;
background: #FFFFFF;
display: flex;
margin-left: 15px;
}
select{
  color: #38065D;
  text-align: center;
  padding: 4px;
  font:600 16px/25px Poppins;
}
</style>