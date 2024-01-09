<template>
  <div class="Pubg_leaderBoard">
    <div class="top_wrap">
      <div class="title_wrapper">{{ leaderboard.name }} Leaderboards</div>
      <div class="top_bar">
        <div><img src="../assets/Tournament/Search.svg" /></div>
        <div class="current_wrap">
          Current<img src="../assets/Tournament/CurrentArrow.svg" />
        </div>
        <div class="game_wrap" v-if="leaderboard">
          {{ leaderboard.game.shortName
          }}<img src="../assets/Tournament/GameArrow.svg" />
        </div>
      </div>
    </div>
    <div class="inner_container">
      <div class="inner_container1">
        <div class="adv_wrap">
          <!-- <v-img class="desktop-carosel" :src="`https://ps-mg.s3.amazonaws.com/${tournament.assets.desktopPoster}`" ></v-img> -->
          <!-- <v-img class="mobile-carosel" :src="`https://ps-mg.s3.amazonaws.com/${tournament.assets.mobilePoster}`" ></v-img> -->
          <!-- <v-img class="desktop-carosel" src="assets/TournamentDetails/MaskGroup.png" ></v-img> -->
          <!-- <img  class="desktop-carosel" src="../../assets/LeaderboardRanking/Adv.svg"> -->
          <!-- <img
            class="desktop-carosel"
            src="../assets/LeaderboardRanking/leaderboardslider.png"
          />LeaderboardBanner -->
          <img
            class="desktop-carosel"
            src="../assets/LeaderboardRanking/LeaderboardBanner.png"
          />
          <!-- <div class="join_btn leave">
            <span class="join_tour"> leave
              <div class="arrow"><img class="" src="/img/assets/TournamentDetails/arrow.svg"></div>
            </span>
          </div> -->
          <div class="leaderboard_join">
            <div class="leaderboard_name">
              {{ leaderboard.name }} Leaderboard
            </div>
            <div class="leaderboard_duration">
              Duration:&nbsp;{{ leaderboard.duration }}
            </div>
            <div
              class="join_btn join"
              v-if="
                !alreadyJoined &&
                joinStatus === 'not-joined' &&
                leaderboard.status === 'Registration Open'
              "
            >
              <span class="join_tour" @click="openStepper">
                join now
                <div class="arrow">
                  <img class="" src="/img/assets/TournamentDetails/arrow.svg" />
                </div>
              </span>
            </div>
            <div
              class="join_btn leave"
              v-if="joinStatus === 'joined' || alreadyJoined"
              @click="leave"
            >
              <span class="join_tour leave">
                leave
                <div class="arrow">
                  <img class="" src="/img/assets/TournamentDetails/arrow.svg" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inner_container0">
      <!-- <div class="inner_wrapleft1">Pubg Leaderboards</div> -->
      <div class="inner_subshell">
        <router-link
          class="inner_subwrap"
          data-animation="ripple"
          tag="a"
          :to="{
            name: 'Ranking',
            params: { id: this.$route.params.id },
          }"
          active-class="active1"
          exact
          >Ranking</router-link
        >
        <router-link
          class="inner_subwrap"
          data-animation="ripple"
          tag="a"
          :to="{
            name: 'Prizepool',
            params: { id: this.$route.params.id },
          }"
          active-class="active1"
          exact
          >Prize pool</router-link
        >
        <router-link
          class="inner_subwrap"
          data-animation="ripple"
          tag="a"
          :to="{
            name: 'Rules',
            params: { id: this.$route.params.id },
          }"
          active-class="active1"
          exact
          >Rules & Regulations</router-link
        >
      </div>
      <!-- <div class="line_wrap"></div> -->
      <div class="inner_wrapright">
        <div class="drop_down mobile">
          <select class="select_option" @change="onChange($event)">
            <option value="Overview">Overview</option>
            <option value="Prizepool">Prize pool</option>
            <option value="Rules">Rules & regulations</option>
          </select>
        </div>
      </div>
      <div class="inner_container2">
        <router-view />
      </div>
    </div>
    <LeaderboardStepper
      :isGameIdUpdated="isGameIdUpdated"
      :gameId="leaderboard.game._id"
      v-if="showStepper"
      @closeStepper="closeStepper"
    />
  </div>
</template>

<script>
import axios from "axios";
import LeaderboardStepper from "./LeaderboardStepper.vue";
// import LeaderboardStepper from "../LeaderboardStepper.vue"

export default {
  name: "LeaderboardDetails",
  components: { LeaderboardStepper },
  data() {
    return {
      alreadyJoined: false,
      joinStatus: "",
      showStepper: false,
      isGameIdUpdated: "",
      leaderboard: "",
    };
  },
  methods: {
    openStepper() {
      this.showStepper = true;
    },
    closeStepper() {
      this.showStepper = false;
    },
    onChange(event) {
      this.$router.push({ name: event.target.value });
    },
    join() {
      axios
        .post("/leaderboard/join", {
          criteria: {
            _id: this.$route.params.id,
          },
        })
        .then((response) => {
          this.alreadyJoined = true;
          window.location.reload(true);
          console.log("join res", response.data);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },
    leave() {
      axios
        .post("/leaderboard/leave", {
          criteria: {
            _id: this.$route.params.id,
          },
        })
        .then((response) => {
          console.log("leave", response.data);
          this.alreadyJoined = false;
          window.location.reload(true);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },
    getLeaderboardDetails() {
      axios
        .get("/leaderboard/find/".concat(this.$route.params.id))
        .then((response) => {
          this.leaderboard = response.data;
          this.joinStatus = response.data.joinStatus;
          this.isGameIdUpdated = response.data.hasPlayerUpdatedGameDetails;
          console.log("leaderboard data", response.data);
          this.$store.commit("SET_LEADERBOARD_DATA", response.data);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
  },
  mounted() {
    this.getLeaderboardDetails();
  },
};
</script>

<style scoped>
img {
  /* width: 100%; */
  display: block;
}
.leave {
  color: red;
}
.Pubg_leaderBoard {
  /* padding: 24px; */
  /* padding: 1rem 2.5rem; */
  /* width: 1120px; */
  margin: 40px;
}
.title_wrapper {
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  padding-top: 8px;
}
.top_wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.top_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
}
.current_wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: rgba(151, 151, 151, 1);
  background: #53525b;
  width: 115px;
  height: 46px;
  border-radius: 8px;
  margin: 0px 10px 0px 10px;
}
.game_wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  background: rgba(114, 85, 233, 1);
  width: 156px;
  height: 46px;
  border-radius: 8px;
}
.inner_container {
  width: 100%;
  /* background: #1e0741; */
  border-radius: 8px;
  /* padding: 2% 2% 0% 2%; */
}
.title_wrapper {
  text-align: left;
  font: 22px/33px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  padding-top: 8px;
}

/* .inner_wrapleft1 {
  display: flex;
  justify-content: space-between;
}
.top_bar{
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 29px;
letter-spacing: 0px;
text-align: left;
} */
.inner_container {
  border-radius: 8px;
  width: 100%;
  /* padding: 1rem; */
}
.inner_container1 {
  display: flex;
}
/* .line_wrap{
  width:100%; 
  background:#3E3E3E;
  margin: -6px 0px 20px 0px;
  height: 1px;
} */
.adv_wrap {
  /* opacity: 0.83; */
  position: relative;
  width: 100%;
}
.inner_subwrap {
  min-width: 150px;
  height: 50px;
  text-transform: capitalize;
  padding: 5px;
  justify-content: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #979797;
}
.active1 {
  background-color: rgba(0, 0, 0, 0.3);
  /* background-color: rgba(0, 0, 0, 0.3); */
  width: 160px;
  /* height: 50px; */
  color: #ffffff;
  border-radius: 10px 10px 0px 0px;
}
.active1::after {
  content: "";
  width: 120px;
  /* top: 480px; */
  top: 455px;
  position: absolute;
  border-bottom: 2px solid #9672ff;
}
.full_cover {
  /* background: #000000; */
  background-color: rgba(0, 0, 0, 0.3);

  float: left;
  min-width: 100%;
  border-radius: 10px;
}
.join_btn {
  width: 142px;
  height: 46px;
  /* left: 335px; */
  /* top: 424px; */
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* text-align: center; */
  /* align-content: center; */
  justify-content: center;
  color: #9672ff;
  margin: 18px 0px 6px 0px;
}

.join_tour {
  cursor: pointer;
  column-gap: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 29px;
  /* identical to box height, or 193% */
  text-transform: capitalize;
  display: flex;
  align-items: center;
  text-align: center;

  /* color: #9672FF; */
}
.arrow {
  margin-left: 0px;
  width: 14px;
}
.join_btn {
  width: 142px;
  height: 46px;
  /* left: 335px; */
  /* top: 424px; */
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* text-align: center; */
  /* align-content: center; */
  justify-content: center;
  margin: 18px 0px 6px 0px;
}
.inner_container0 {
  margin-top: 2%;
}
.inner_subshell {
  display: flex;
  width: 100%;
}

.inner_subwrapper {
  /* background: #310a69; */
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
  grid-template-columns: 30% 68%;
  background-color: rgba(0, 0, 0, 0.3);
  grid-column-gap: 15px;
  /* padding: 20px; */
}
.inner_subwrapper1 {
  background: #310a69;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 10px;
}
/* .inner_subwrapper2 {

} */
.header_wrap1 {
  font: bold 18px/22px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  margin: 2px;
}
.content_wrap {
  font: 16px/19px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  text-align: left;
  padding: 5px;
  margin-top: 10px;
}
.content_wrap_inner1 {
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
.inner_wrapright {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 40px;
}
.leaderboard_join {
  position: absolute;
  bottom: 30px;
  left: 45px;
}
.leaderboard_name {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.leaderboard_duration {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
@media screen and (max-width: 768px) {
  .inner_subwrap {
    display: none;
  }
  select:not([multiple]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    /* background-image: url('../assets/dropdown.png'); */
    padding: 0.5em;
    padding-right: 1.5em;
    color: white;
    border: 1px solid;
    border-radius: 5px;
  }
  option {
    color: black;
  }
}
@media screen and (min-width: 780px) {
  .drop_down {
    display: none;
  }
}
.desktop-carosel {
  background: #4d2d92;
  border-radius: 10px;
  /* height: 320px; */
  height: 266px;
  object-fit: cover;
  /* max-width: 1490px; */
  width: 100%;
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
  .v-carousel {
    height: 400px;
  }
}
</style>
