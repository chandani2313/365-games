<template>
  <div class="bottom_container" id="blur">
    <div class="accomplishment_wrap">
      <div class="accomplishment">
        <div class="accomplishment_head">accomplishments</div>
        <div class="more_btn">See more</div>
      </div>
      <template v-if="accomplishmentList.length">
        <div class="accomplishment_container" v-for="(accomplishment, index) in accomplishmentList" :key="index">
          <div class="accomplishment_card">
            <div class="game_banner">
              <div class="badge_img">
                <img src="@/assets/NewProfile/badge-star.png" alt="" />
                <span style="color: #9672ff">Winner</span>
                <div
                  style="
                    opacity: 0.3;
                    border: 1px solid #9672ff;
                    transform: rotate(0deg);
                    height: 30px;
                    margin: 25px;
                  "
                ></div>
              </div>
              <div class="winning_content">{{accomplishment.rewardFor.name}} | {{accomplishment.type}}</div>
              <div class="banner_image">
                <!-- <img src="@/assets/NewProfile/apex-img.png" alt="" /> -->
                <img v-if="accomplishment.type === 'Tournament'" :src="`https://ps-mg.s3.amazonaws.com/${accomplishment.rewardFor.assets.logo}`"/>
                <img v-else :src="`https://ps-mg.s3.amazonaws.com/${accomplishment.rewardFor.logo}`" />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="accomplishment_container">
          <div class="accomplishment_card">
            <div class="game_banner">
              <div class="winning_content1">Win any Tournament or Leaderboard to gain accomplishment.</div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="level_bar">
      <div class="level_bar_wrap">
        <div class="level_bar_head">Level 5</div>
        <div class="level_bar_points">344/500</div>
      </div>
      <div class="level_wrap">
        <div class="level_left">
          <div class="level_left_inner">
            <img src="@/assets/NewProfile/right-wrap.png" />
            <span><img src="@/assets/NewProfile/left-wrap.png" /></span>
          </div>
          <div class="level_right">
            <div class="level_right_rank">6</div>
            <img src="@/assets/NewProfile/star-rank.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="details_wrap">
      <div class="achivements_bottom">
        <div class="achive_title">
          achievements
          <div class="achive_btn">See more</div>
        </div>
        <!-- <div class="achieve_cards_container">
          <div class="achieve_cards_info">
            <div class="achieve_img">
              <img src="@/assets/NewProfile/badge-star2.png" alt="" />
            </div>
            <div class="achieve_name">kill machine</div>
          </div>
          <div class="achieve_values">
            <div class="achieve_wrap">75/100</div>
            <div class="achieve_values_img">
              <img src="@/assets/NewProfile/cod_small_icon.png" alt="" />
            </div>
          </div>
        </div> -->
        <div class="achieve_cards_container">
          <div class="achieve_cards_info">
            <div class="achieve_img">
              <img src="@/assets/NewProfile/badge-star2.png" alt="" />
            </div>
            <div class="achieve_name">Play more games to gain achievements</div>
          </div>
          <!-- <div class="achieve_values">
            <div class="achieve_wrap">75/100</div>
            <div class="achieve_values_img">
              <img src="@/assets/NewProfile/cod_small_icon.png" alt="" />
            </div>
          </div> -->
        </div>
        <!-- <div class="achieve_cards_container">
          <div class="achieve_cards_info">
            <div class="achieve_img">
              <img src="@/assets/NewProfile/badge-star2.png" alt="" />
            </div>
            <div class="achieve_name">kill machine</div>
          </div>
          <div class="achieve_values">
            <div class="achieve_wrap_achieved">achieved!</div>
            <div class="achieve_values_img">
              <img src="@/assets/NewProfile/cod_small_icon.png" alt="" />
            </div>
          </div>
        </div>
        <div class="achieve_cards_container">
          <div class="achieve_cards_info">
            <div class="achieve_img">
              <img src="@/assets/NewProfile/badge-star2.png" alt="" />
            </div>
            <div class="achieve_name">kill machine</div>
          </div>
          <div class="achieve_values">
            <div class="achieve_wrap_achieved">achieved!</div>
            <div class="achieve_values_img">
              <img src="@/assets/NewProfile/cod_small_icon.png" alt="" />
            </div>
          </div>
        </div> -->
      </div>

      <div class="leaderboard">
        <div class="achive_title">
          leaderboard
          <div class="achive_btn">See more</div>
        </div>
        <div class="leaderboard_cards_container">
          <div class="leaderboard_cards_info">
            <div class="leaderboard_cards_info_text">25</div>
            <div class="text_info">th place</div>
            <div
              style="
                opacity: 0.3;
                border: 1px solid #9672ff;
                transform: rotate(0deg);
                height: 30px;
                margin: 20px;
              "
            ></div>
            <div class="leaderboard_cards_text_wrap">
              <span> Call Of Duty Warzone </span>
            </div>
          </div>
          <div class="leaderboard_cards_img_wrap">
            <img src="@/assets/NewProfile/fortnite_small_icon.png" alt="" />
          </div>
        </div>
        <div class="leaderboard_cards_container">
          <div class="leaderboard_cards_info">
            <div class="leaderboard_cards_info_text">25</div>
            <div class="text_info">th place</div>
            <div
              style="
                opacity: 0.3;
                border: 1px solid #9672ff;
                transform: rotate(0deg);
                height: 30px;
                margin: 20px;
              "
            ></div>
            <div class="leaderboard_cards_text_wrap">
              <span> Call Of Duty Warzone </span>
            </div>
          </div>
          <div class="leaderboard_cards_img_wrap">
            <img src="@/assets/NewProfile/apex_small_icon.png" alt="" />
          </div>
        </div>
        <div class="leaderboard_cards_container">
          <div class="leaderboard_cards_info">
            <div class="leaderboard_cards_info_text">25</div>
            <div class="text_info">th place</div>
            <div
              style="
                opacity: 0.3;
                border: 1px solid #9672ff;
                transform: rotate(0deg);
                height: 30px;
                margin: 20px;
              "
            ></div>
            <div class="leaderboard_cards_text_wrap">
              <span> Call Of Duty Warzone </span>
            </div>
          </div>
          <div class="leaderboard_cards_img_wrap">
            <img src="@/assets/NewProfile/pubg_small_icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="game_profile">
      <div class="game_title">
        game profile
        <!-- <div class="game_btn">See more</div> -->
      </div>
      <div class="player_game_details">
        <div v-for="game in games" :key="game._id">
          <div class="table-head">
            <div class="game_bg">
              <div class="game_bgimage">
                <div class="title_text">{{game.name}}</div>
                <div class="game_edit">
                  <img src="../../assets/myteam/edit.svg" v-if="game.gameId === '' || game.gameIgn ===''" @click="editGameId(game)" />
                </div>
              </div>
            </div>
            <div class="content_wrap">
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">ID</div>            
                  <div class="content_wrap_inner_game">{{game.gameId}}</div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">IGN</div>
                  <div class="content_wrap_inner_game">{{game.gameIgn}}</div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">Matches played</div>
                  <!-- <div class="content_wrap_inner">5 vs 5</div> -->
                  <div class="content_wrap_inner_game">3456</div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">Matches won</div>
                  <div class="content_wrap_inner_game">1234</div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">Total kills</div>
                  <div class="content_wrap_inner_game">6789</div>
                </div>
                <div class="content_wrap_inner1">
                  <div class="content_wrap_inner">Total deaths</div>
                  <div class="content_wrap_inner_game">2345</div>
                </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <NewGameProfile
      v-if="isAddEditOpen"
      @closePopup="closeDialog"
      @closeEmitPopup="closeEmitDialog"
      :game = selectedGame
      @update-game="updateGame"
     />
     <v-snackbar v-model="snackbar" bottom :color="color" absolute
        elevation="24" :timeout="timeout">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="#9672ff" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import NewGameProfile from "./NewGameProfile.vue";

export default {
  name: "NewProfileBottom",
  components: {
    NewGameProfile,
  },
  data: () => ({
    gameProfilePopup: false,
    color: "",
    snackbar: false,
    snackbarText: "",
    timeout: "-1",
    games: [],
    isAddEditOpen: false,
    selectedGame:null,
    accomplishmentList: [],
  }),
  methods: {
    updateGameDetails(game, gameId, gameIgn) {
      const data = { game };
      if (gameId) data["gameId"] = gameId;
      if (gameIgn) data["gameIgn"] = gameIgn;
      axios.post('/user/update/game-id', { data })
        .then((response) => {
          console.log('profile bottom', response.data)
          this.color = '#45108A'
          this.snackbar = true
          this.text = 'Game Id updated Successfully'
          this.timeout = 3000
          this.gameProfilePopup = false;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log('err', e.response.data);
          }
        });
    },
    closeDialog() {
      this.isAddEditOpen = false;
    },
    closeEmitDialog() {
      this.isAddEditOpen = false;
      this.color = '#9672ff'
      this.snackbar = true
      this.snackbarText = 'Game Id Updated successfully'
      this.timeout = 3000
    },
    editGameId(game) {
      this.selectedGame = game;
      this.isAddEditOpen = true;
    },
    updateGame() {
      this.isAddEditOpen = false;
    },
    accomplishment() {
      const data = { 
        "project":"rewardFor type",
        limit:3,
        sort:"-createdAt"
       };
      axios.post('/reward/accomplishments', data)
        .then((response) => {
          console.log('accomplshment', response.data)
          this.accomplishmentList = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log('err', e.response.data);
          }
        });
    }

  },
  async created() {
    // this.games = await axios.get(`/user/find/game-ids`).then(res => res.data.gameIds)
     await axios.get(`/user/find/game-ids`).then((res) => {
      console.log("profileBottom", res.data);
      this.games = res.data.gameIds
      this.accomplishment();
    //  this.gameProfilePopup = true
    })
  },
};
</script>
<style scoped>
/* width */
.flex {
  display: flex;
  flex-wrap: nowrap;
  width: 33%;
}
.accomplishment_wrap {
  /* padding: 35px 15px 22x 83px; */
  margin-top: 10px;
  /* background-color: #1e0741; */
  /* padding: 1.2em; */
}
.accomplishment {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 320px) and (max-width: 767px) {
  .accomplishment_wrap {
    display: none;
  }
}
.accomplishment_head {
  color: #ffffff;
  text-transform: capitalize;
  margin: 25px 0px 25px 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
}
.more_btn {
  cursor: pointer;
  color: #9672ff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
}
.accomplishment_container {
  position: relative;
}
.accomplishment_card {
  position: relative;
  display: flex;
  padding: 0px 0px 8px;
}
.game_banner {
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 800px;
  height: 65px;
  font-family: "Poppins";
  background: #1b1b1b;
}
.badge_img {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.winning_content_card {
  display: flex;
}
.badge_img span {
  color: rgb(150, 114, 255);
  margin-left: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
}
.level_bar {
  margin: 25px 0px 45px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
/* @media (min-width: 320px) and (max-width: 767px) {
  .level_bar {
    padding: 30px 15px 25px;
    height: 125px;
    width: 50%;
  }
} */
.level_left_inner:after {
  top: -8px;
  right: 0;
  width: 31px;
  height: 33px;
}
.level_bar_head {
  font-family: "Poppins";
  text-transform: capitalize;
  margin: 25px 0px 25px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
}
.level_bar_wrap {
  display: flex;
  align-items: center;
}
.level_bar_points {
  color: #9672ff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  margin-left: 35px;
}
.level_left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15px;
  margin: 0;
  background-color: #1b1b1b;
  border-radius: 10px;
  box-shadow: none;
  overflow: visible;
  width: 100%;
}

.level_left_inner {
  display: flex;
  justify-content: center;
  position: relative;
  background: #9672ff;
  height: 15px;
  margin: 0;
  border-width: 1px 0 0 0;
  border-radius: 10px;
  box-shadow: none;
  width: 75%;
  /* border: 1px solid #ffffff; */
  /* filter: drop-shadow(0 0 0.2rem #ffffff); */
  transition: width 0.6s ease;
}
.level_left_inner span {
  position: relative;
  right: 18px;
}
/* .level_left_inner span {
  float: left;
  margin-left: 4em;
} */
.level_right {
  display: flex;
}
.level_right img {
  display: flex;
  position: relative;
  left: 5px;
}
.level_right_rank {
  display: flex;
  align-items: center;
  right: -38px;
  top: 3px;
  position: relative;
  z-index: 1;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  /* line-height: 27px; */
  color: #ffffff;
}
.winning_content, .winning_content1 {
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  align-items: center;
}
.winning_content1 {
  padding-left: 20px;
}
.banner_image img {
  clip-path: polygon(27% 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  border-radius: 0px 10px 10px 0px;
  position: absolute;
  right: 0;
  object-fit: cover;
  height: 100%;
  max-width: 300px;
  width: 100%;
}
.details_wrap {
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  margin-bottom: 10px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .details_wrap {
    flex-direction: column;
    column-gap: 10px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .achivements_bottom {
    width: 100%;
  }
  .leaderboard {
    width: 100%;
  }
}

.achive_title {
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  display: flex;
}
.achive_btn {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  color: #9672ff;
  margin-left: 40px;
  cursor: pointer;
}
.achieve_cards_container {
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 65px;
  background: #1b1b1b;
  border-radius: 10px;
  justify-content: space-between;
  margin: 0 0 8px 0;
  text-transform: capitalize;
}
.achieve_cards_info {
  display: flex;
  align-items: center;
}
.achieve_img {
  margin: 0px 20px 0 20px;
}
.achieve_img img {
  width: 100%;
  border-radius: 2px;
}
.achieve_name {
  text-transform: capitalize;
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
}
.achieve_values {
  display: flex;
}
.achieve_wrap {
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  color: #9672ff;
  margin-right: 25px;
}
.achieve_wrap_achieved {
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  color: #27ae60;
  margin-right: 25px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .leaderboard {
    width: 100%;
  }
}
.leaderboard_cards_container {
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 65px;
  background: #1b1b1b;
  color: #ffffff;
  border-radius: 10px;
  justify-content: space-between;
  margin: 0 0 8px 0;
  text-transform: capitalize;
}
.leaderboard_cards_info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
}
.leaderboard_cards_info_text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: #9672ff;
}
.text_info {
  font-family: "Poppins";
  font-style: normal;
  color: #9672ff;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  text-transform: lowercase;
  margin-top: 3.5px;
  padding-left: 2px;
}
.leaderboard_cards_text_wrap {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  color: #ffffff;
}
#game_name {
  text-transform: uppercase;
}
.game_profile {
  margin-top: 30px;
}
.game_title {
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  justify-content: space-between;
}
.game_btn {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;
  color: #9672ff;
  margin-left: 40px;
  cursor: pointer;
}
.player_game_details {
  grid-template-columns: repeat(auto-fill, minmax(253px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 1rem;
}
@media (min-width: 320px) and (max-width: 767px) {
  .player_game_details {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}

.table-head {
  background: #1B1B1B;
  border-radius: 10px;
}
.game_bg {
  /* background-image: url("../../assets/NewProfile/apex-legends.png"); */
  background-image: url("../../assets/NewProfile/GameIdBanner.png");
  /* background-size: contain; */
  width: 253px;
  height: 67px;
  display: flex;
}
.game_bgimage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 253px;
}
.game_edit {
  cursor: pointer;
  padding-right: 5px;
}
.game_edit img {
  background: #000;
  border-radius: 50%;
}
table {
  width: 253px;
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 400;
  background: #1b1b1b;
  color: #cdcadb;
  border-radius: 10px;
  border-collapse: collapse;
}
td {
  text-align: left;
  margin: 0 10px 0 0;
  padding: 9.5px 9.5px 9.5px 20px;
}
tr:nth-child(odd) {
  background-color: #212121;
  line-height: 1px;
}
.title_text {
  /* position: relative; */
  display: flex;
  justify-content: center;
  font: normal normal 600 14px/29px Poppins;
  color: #ffffff;
  text-overflow: ellipsis;
  padding-left: 10px;
}
.content_wrap_inner_game{
  font: normal normal 400 13px/29px Poppins;
  color: #CDCADB;
  text-transform: capitalize;
}
.content_wrap_inner1 {
  display: flex;
  justify-content: space-between;
}
.content_wrap_inner1:nth-child( even ) {
  background: #212121;
  padding: 3px 25px;
}
.content_wrap_inner1:nth-child( odd ) {

    /* background: #1f1f1f; */
    padding: 6px 25px;
}
.content_wrap {
    border-radius: 8px;
    overflow: hidden;   
    text-transform: capitalize;
    background: #1B1B1B;
}
.content_wrap_inner{
  font: normal normal 400 13px/29px Poppins;
  color: #CDCADB;
}
</style>