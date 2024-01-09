<template>
  <div class="Pubg_leaderBoard">
    <div class="top_wrap">
      <div v-if="tournament" class="title_wrapper">
        {{ tournament.game.shortName }} tournaments
      </div>
      <div class="top_bar">
        <div><img src="../assets/Tournament/Search.svg" /></div>
        <div class="current_wrap">
          Current<img src="../assets/Tournament/CurrentArrow.svg" />
        </div>
        <div class="game_wrap">
          Pubg<img src="../assets/Tournament/GameArrow.svg" />
        </div>
      </div>
    </div>
    <div class="inner_container">
      <div class="inner_container1">
        <div class="adv_wrap">
          <!-- <v-img class="desktop-carosel" :src="`https://ps-mg.s3.amazonaws.com/${tournament.assets.desktopPoster}`" ></v-img> -->
          <!-- <v-img class="mobile-carosel" :src="`https://ps-mg.s3.amazonaws.com/${tournament.assets.mobilePoster}`" ></v-img> -->
          <!-- <v-img class="desktop-carosel" src="assets/TournamentDetails/MaskGroup.png" ></v-img> -->
          <!-- <img
            class="desktop-carosel"
            src="/img/assets/TournamentDetails/tournament-banner-img.png"
          /> -->
          <img
            class="desktop-carosel"
            src="/img/assets/TournamentDetails/TournamentBanner.png"
          />
          <!-- <div class="join-btn join" v-if="!alreadyJoined && joinStatus === 'not-joined' && tournament.status ==='Starting Soon' "    @click="openStepper">Join Now<i class="fa fa-arrow-right"></i></div>
          <div class="join-btn leave" v-if="joinStatus=== 'joined' || alreadyJoined" @click="leave">Leave<i class="fa fa-arrow-right"></i></div> -->
          <div class="tournament_join">
            <div class="tournament_name" v-if="tournament">
              {{ tournament.game.shortName }} Tournament
            </div>
            <div class="tournament_fee">
              <div class="money_img">
                <img class="" src="/img/assets/TournamentDetails/money.svg" />
              </div>
              <span class="fee"
                >Entry Fee:&nbsp;<span class="amount">100</span></span
              >
            </div>
            <div
              class="join_btn join"
              v-if="
                !alreadyJoined &&
                joinStatus === 'not-joined' &&
                tournament.status === 'Registration Open'
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
      <div class="inner_container0">
        <div class="inner_subshell">
          <router-link
            class="inner_subwrap"
            data-animation="ripple"
            tag="a"
            :to="{
              name: 'Overview',
              params: { id: this.$route.params.id },
            }"
            active-class="active"
            exact
            >overview</router-link
          >
          <router-link
            class="inner_subwrap"
            data-animation="ripple"
            tag="a"
            :to="{
              name: 'Prize',
              params: { id: this.$route.params.id },
            }"
            active-class="active"
            exact
            >Prize</router-link
          >
          <router-link
            class="inner_subwrap"
            data-animation="ripple"
            tag="a"
            :to="{
              name: 'Participants',
              params: { id: this.$route.params.id },
            }"
            active-class="active"
            exact
            >participants</router-link
          >
          <router-link
            class="inner_subwrap"
            data-animation="ripple"
            tag="a"
            :to="{
              name: 'Winners',
              params: { id: this.$route.params.id },
            }"
            active-class="active"
            exact
            >Winners</router-link
          >
          <router-link
            class="inner_subwrap"
            data-animation="ripple"
            tag="a"
            :to="{
              name: 'Brackets',
              params: { id: this.$route.params.id },
            }"
            active-class="active"
            exact
            >Bracket</router-link
          >
          <!-- <router-link
            class="inner_subwrap"
            data-animation="ripple"
            tag="a"
            :to="{
              name: 'Schedule',
              params: { id: this.$route.params.id },
            }"
            active-class="active"
            exact
            >Schedule</router-link
          >
            <router-link
            class="inner_subwrap"
            data-animation="ripple"
            tag="a"
            :to="{
              name: 'Info',
              params: { id: this.$route.params.id },
            }"
            active-class="active"
            exact
            >Info</router-link
          > -->
        </div>
        <div class="inner_wrapright">
          <div class="drop_down mobile">
            <select class="select_option" @change="onChange($event)">
              <option value="Overview">Overview</option>
              <option value="Prize">Prize</option>
              <option value="Participants">Participants</option>
              <option value="Winners">Winners</option>
              <option value="Brackets">Brackets</option>
            </select>
          </div>
        </div>
        <div class="inner_container2">
          <router-view />
        </div>
      </div>
    </div>
    <TournamentStepper
      :isGameIdUpdated="isGameIdUpdated"
      :gameId="tournament.game._id"
      v-if="showStepper"
      @closeStepper="closeStepper"
    />
  </div>
</template>

<script>
import axios from "axios";
import TournamentStepper from "./TournamentStepper.vue";
export default {
  name: "TournamentDetails",
  components: { TournamentStepper },
  data() {
    return {
      alreadyJoined: false,
      joinStatus: "",
      showStepper: false,
      isGameIdUpdated: "",
      tournament: "",
    };
  },
  methods: {
    onChange(event) {
      this.$router.push({ name: event.target.value });
    },
    join() {
      axios
        .post("/tournament/join", {
          criteria: {
            _id: this.$route.params.id,
          },
        })
        .then((response) => {
          console.log("join res", response.data);
          this.alreadyJoined = true;
          window.location.reload(true);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },
    leave() {
      axios
        .post("/tournament/leave", {
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
            console.log("err", e);
          }
        });
    },
    getTournamentDetails() {
      axios
        .get("/tournament/find/".concat(this.$route.params.id))
        .then((response) => {
          console.log("tour detail ", response.data);
          this.tournament = response.data;
          this.joinStatus = response.data.joinStatus;
          this.isGameIdUpdated = response.data.hasPlayerUpdatedGameDetails;
          this.$store.commit("SET_TOURNAMENT_DATA", response.data);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    openStepper() {
      this.showStepper = true;
    },
    closeStepper() {
      this.showStepper = false;
    },
  },
  mounted() {
    this.getTournamentDetails();
  },
};
</script>

<style scoped>
.tournament_join {
  position: absolute;
  bottom: 30px;
  left: 45px;
}
.tournament_name {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #ffffff;
}
.tournament_fee {
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-left: 7px;
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

  color: #9672ff;
}
.arrow {
  margin-left: 0px;
  width: 14px;
}
.fee {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 29px;
  /* identical to box height, or 153% */
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
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
img {
  width: 100%;
  display: block;
}
.Pubg_leaderBoard {
  /* padding: 24px; */
  padding: 1rem 2.5rem;
  /* width: 1120px; */
  margin: 16px auto 0px auto;
}
.inner_container0 {
  margin-top: 30px;
}
.title_wrapper {
  text-align: left;
  font: 22px/33px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  padding-top: 8px;
}
.top_wrap {
  display: flex;
  justify-content: space-between;
}
.top_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  column-gap: 8px;
  margin-bottom: 25px;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: rgba(151, 151, 151, 1);
  background: #53525b;
  width: 90px;
  border-radius: 8px;
  margin: 0px 10px 0px 10px;
  width: 115px;
  height: 46px;
  left: 1119px;
  top: 122px;
  background: #53525b;
  border-radius: 10px;
  background: #53525b;
}
.game_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  background: rgba(114, 85, 233, 1);
  width: 120px;
  border-radius: 8px;
  width: 156px;
  height: 46px;
  left: 1249px;
  top: 122px;
  background: #7255e9;
  border-radius: 10px;
  padding: 8px 15px 8px 45px;
  text-transform: uppercase;
}
.current_wrap > img,
.game_wrap > img {
  width: 12px;
}
.inner_container {
  border-radius: 8px;
  /* padding: 1rem; */
}
.inner_container1 {
  display: flex;
}
.adv_wrap {
  /* opacity: 0.83; */
  width: 100%;
  position: relative;
}
.join-btn {
  background: #1e0741;
  width: 140px;
  padding: 5px;
  outline: none;
  border-radius: 5px;
  border-style: none;
  margin: 15px auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid white;
  /* box-shadow: 5px 10px 20px #141f28; */
  color: white;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 83%;
  left: 51%;
  transform: translate(-50%, -50%);
}

.leave {
  color: red;
}
.inner_subshell {
  display: flex;
  width: 100%;
}
.inner_subwrap {
  /* margin: 10px 0px 5px 5px; */
  min-width: 115px;
  height: 30px;
  /* border-radius: 5px; */
  /* border: 0.25px solid #ffffff; */
  text-align: center;
  font: 300 16px / Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  padding: 5px;
  width: 160px;
  height: 50px;
  /* left: 285px; */
  /* top: 534px; */
  /* background: #000000; */
  /* opacity: 0.3; */
  /* border-radius: 10px 10px 0px 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 29px;
  /* identical to box height, or 193% */
  display: flex;
  align-items: center;
  text-align: center;
  color: #979797;
}
.active {
  /* margin: 10px 2px 0px 0px !important; */
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  width: 160px;
  height: 50px;
  color: #ffffff;
  border-radius: 10px 10px 0px 0px;
}
.active::after {
  content: "";
  width: 113px;
  /* height: 74px; */
  /* left: 368px; */
  top: 48px;
  /* bottom: 51px; */
  position: absolute;
  border-bottom: 2px solid #9672ff;
}
.inner_container2 {
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
.inner_subwrapper2 {
}
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
  height: 266px;
  object-fit: cover;
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
