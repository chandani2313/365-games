<template>
  <div class="Pubg_leaderBoard_ovr">
    <div class="inner_container">
      <div class="inner_container0">
        <div class="inner_container2">
          <!-- <div class="inner_subwrapper">
            <div class="header_wrap">event details</div>
          </div> -->
          <div class="inner_container3">
            <div class="inner_subwrapper1">
              <div class="header_wrap1">game details</div>
              <div class="content_wrap">
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">game</div>
            
                  <div class="content_wrap_inner_game">
                    {{ selectedTournament.game.shortName }}
                  </div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">bracket type</div>
   
                  <div class="content_wrap_inner_game">single elimination</div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">event mode</div>

                  <!-- <div class="content_wrap_inner">5 vs 5</div> -->
                  <div class="content_wrap_inner_game">
                    {{ selectedTournament.mode }}
                  </div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">platform</div>
       
                  <div class="content_wrap_inner_game">
                    {{ selectedTournament.platform }}
                  </div>
                </div>
              </div>
            </div>
            <div class="inner_subwrapper2">
              <div class="header_wrap1">Event details</div>
              <div
                v-if="selectedTournament"
                class="description_wrapper"
                v-html="selectedTournament.shortDescription"
              ></div>
              <!-- <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TournamentOverview",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["selectedTournament"]),
  },
};
</script>

<style scoped>
.content_wrap_inner_game{
  width: 42%;
  text-transform: capitalize;
  
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 19px;
/* identical to box height */


color: #FFFFFF;

}
.content_wrap_inner1:nth-child( even ) {
  background: #323232;
      padding: 8px 25px;
}
.content_wrap_inner1:nth-child( odd ) {

    /* background: #1f1f1f; */
    padding: 16px 25px;
}
.content_wrap {
    border-radius: 8px;
    overflow: hidden;   
    text-transform: capitalize;
    background: #1f1f1f;
}
.content_wrap_inner{
  font: normal normal 400 13px/19px Poppins;
  color: #CECECE;
}
img {
  width: 100%;
  display: block;
}
.description_wrapper{
  color: #CDCADB;
    /* height: 100%; */
    padding: 10px;
background: #1F1F1F;
border-radius: 10px;
height: 190px;
/* width: 635px; */
left: 730px;
top: 671px;
border-radius: 10px;
font: normal normal normal 14px/24px Poppins;
}
.inner_container {
  border-radius: 8px;
  width: 100%;
}
.inner_container1 {
  display: flex;
}
.inner_subwrap {
  margin: 10px 0px 0px 0px;
  min-width: 115px;
  height: 30px;
  border-radius: 5px;
  border: 0.25px solid #ffffff;
  text-align: center;
  font: 300 16px / Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  padding: 5px;
  
}
.inner_container2 {
    /* background: #1e0741; */
    /* padding: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100%, -webkit-max-content));
    grid-template-columns: repeat(auto-fit, minmax(100%, max-content)); */
}
.inner_subwrapper {
  background: #323232;
  border-radius: 5px;
}
.header_wrap {
  text-align: left;
  font: 18px/22px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  background: #1e0741;
  border-bottom: 1px solid #ffffff;
  padding: 5px;
  text-transform: capitalize;
}
.inner_container3 {
    display: grid;
    grid-template-columns: 33% 65%;
    grid-column-gap: 28px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 2rem 2.5rem;
    border-radius: 0px 10px 0px 0px;
}
.inner_subwrapper1
{
  /* background: #323232;
  border-radius: 8px; */
  /* margin-bottom: 15px;
  padding: 10px; */
}
.inner_subwrapper2 {

}
.header_wrap1 {
  font: normal normal 600 18px/27px Poppins;
  color: #ffffff;
  text-transform: capitalize;
  margin: 15px 0px 18px;
  /* identical to box height */
  display: flex;
  align-items: center;
}
.content_wrap {
  font: 16px/19px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  text-align: left;
  margin-top: 10px;
  height: 190px;
 
}
.content_wrap_inner1 {
  /* width: 378px; */
/* height: 34px; */
  display: flex;
  justify-content: space-between;
}
.content_wrap1 {
  text-align: left;
  font: 16px/22px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
p {
  padding: 5px;
  margin-bottom: 5px;
  text-align: left;
  font: 14px/21px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 0px !important;
}

@media screen and (max-width: 640px) {
  .inner_container3 {
    display: block;
  }
}
</style>
