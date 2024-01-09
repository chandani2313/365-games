<template>
  <div class="bottom_container" id="blur">
    <div class="accomplishment_wrap">
      <div class="accomplishment_head">accomplishments</div>
      <div class="accomplishment_container">
        <div v-for="i in 5" :key="i" class="accomplishment_card">
          <div class="accomplishment_img_wrap">
            <img style="object-fit: contain" src="@/assets/profile/Accomplishments - Icon@2x.png" alt="" />
          </div>
          <div class="game_banner_img">
            <img src="@/assets/profile/Accomplishments@2x.png" alt="" />
            <div class="winning_content">call 0f duty-warzone winner</div>
          </div>
        </div>
      </div>
    </div>

    <div class="level_bar">
      <div class="level_left">
        <div class="level_left_inner">
          <div class="level_img">
            <img src="@/assets/profile/Levelup1.png" alt="" />
          </div>
          <span>345/500</span>
        </div>
      </div>
      <div class="level_right">
        <div class="level_right_inner progress-bar">
          <div class="level_right_img">
            <img src="@/assets/profile/Level up.png" alt="" />
          </div>
          level 5
        </div>
      </div>
    </div>
    <div class="details_wrap">
      <div class="achivements_bottom">
        <div class="achive_title">achievements</div>
        <div class="achieve_cards_container">
          <div v-for="i in 3" :key="i" class="achieve_cards">
            <div class="achieve_cards_info">
              <div class="achieve_img">
                <img src="@/assets/profile/Artboard – 1.png" alt="" />
              </div>
              <div class="achieve_name">kill machine</div>
            </div>
            <div class="achieve_values">
              <div class="achieve_wrap">achieve</div>
            </div>
          </div>
        </div>
      </div>
      <div class="leaderboard">
        <div class="achive_title">leaderboard</div>
        <div class="leaderboard_cards_container">
          <div v-for="i in 3" :key="i" class="leaderboard_cards">
            <div class="leaderboard_cards_info">
              <span id="game_name"> pubg </span>
              <span> 25th place </span>
            </div>
            <div class="leaderboard_cards_img_wrap">
              <img src="@/assets/profile/Artboard – 1@2x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="game_profile">
      <div class="game_profile_title">game profile</div>
      <div class="game_profile_container">
        <div v-for="game in games" :key="game._id" class="game_profile_card">
          <div class="game-id-flex">
            <div class="game_name_head">{{game.name}}</div>
            <!-- <div class="game_edit" v-if="game.gameId === '' || game.gameIgn ===''" @click="editGameId(game)">Edit</div> -->
            <div class="game_edit">
              <img src="/img/assets/profile/Edit@2x.png" v-if="game.gameId === '' || game.gameIgn ===''" @click="editGameId(game)" />
            </div>
          </div>

          <div class="player_game_details">
            <img
              src="@/assets/profile/Game Profile - Apex Legends@2x.png"
              alt=""
            />
            <div class="player_game_details_content">
              <div class="player_id_content_wrapper">
                <div class="player_id_content">
                  <div class="player_inner_details_left">id</div>
                  <div class="player_inner_details_center">:</div>
                  <div class="player_inner_details_right">{{game.gameId}}</div>
                </div>
                <div class="player_id_content">
                  <div class="player_inner_details_left">ign</div>
                  <div class="player_inner_details_center">:</div>
                  <div class="player_inner_details_right">{{game.gameIgn}}</div>
                </div>
              </div>
              <div class="match_details_wrap">
                <div class="match_details">
                  <div class="match_title">matches played</div>
                  <div class="match_value">6768</div>
                </div>
                <div class="match_details">
                  <div class="match_title">matches won</div>
                  <div class="match_value">24343</div>
                </div>
                <div class="match_details">
                  <div class="match_title">total kills</div>
                  <div class="match_value">36463</div>
                </div>
                <div class="match_details">
                  <div class="match_title">total deaths</div>
                  <div class="match_value">5634</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GameProfile
      v-if="isAddEditOpen"
      @closePopup="closeDialog"
      :game = selectedGame
      @update-game="updateGame"
     />
    <v-snackbar
        v-model="snackbar"
        bottom
        :color="color"
        :timeout="timeout"
        >
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
    </v-snackbar>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import GameProfile from "./GameProfile.vue";

export default {
  name: "ProfileBottom",
  components: {
    GameProfile,
  },
 data: () => ({
    gameProfilePopup: false,
    color: '',
    snackbar: false,
    text: '',
    timeout: '-1',
    games: [],
    isAddEditOpen: false,
    selectedGame:null
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
    editGameId(game) {
      this.selectedGame = game;
      this.isAddEditOpen = true;
    },
    updateGame() {
      this.isAddEditOpen = false;
    },

  },
  async created() {
    // this.games = await axios.get(`/user/find/game-ids`).then(res => res.data.gameIds)
     await axios.get(`/user/find/game-ids`).then((res) => {
      console.log("profileBottom", res.data);
      this.games = res.data.gameIds
    //  this.gameProfilePopup = true
    })
  },
};
</script>
<style scoped>
/* width */
.flex {
  display: flex;
  flex-wrap:nowrap;
  width:33%
}
.accomplishment_container::-webkit-scrollbar {
  width: 25px;
}

/* Track */
.accomplishment_container::-webkit-scrollbar-track {
  background: #35136f 0% 0% no-repeat padding-box;
  border-radius: 2px;
}

/* Handle */
.accomplishment_container::-webkit-scrollbar-thumb {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 2px;
  height: 50px;
}

/* Handle on hover */
.accomplishment_container::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 144, 180);
}
.accomplishment_wrap {
  padding: 35px 15px 22x 83px;
  margin-top: 10px;
  background-color: #1e0741;
  padding: 1.2em;
}
.game_edit {
  color: #fff;
  cursor: pointer;
}
@media (min-width: 320px) and (max-width: 767px) {
  .accomplishment_wrap {
    display: none;
  }
}
.accomplishment_head {
  color: #ffffff;
  text-transform: capitalize;
  font-weight: 500;
  margin: 0px 0px 5px 10px;
  font-size: 1.2em;
}
.accomplishment_container {
  position: relative;
  height: 170px;
  overflow-y: scroll;
}
.accomplishment_card {
  position: relative;
  display: flex;
  padding: 0px 8px 8px;
}
.accomplishment_img_wrap {
  display: flex;
  border: 1px solid #ffffff;
  border-right: none;
  border-radius: 4px 0px 0px 4px;
}
.game_banner_img {
  position: relative;
  border-radius: 2px;
  opacity: 0.7;
  width: 100%;
}
.game_banner_img img {
  width: 100%;
  height: 100%;
}
.game_banner_img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000;
  border-radius: 2px;
  opacity: 0.7;
}
.level_bar {
  height: 75px;
  background-color: #1e0741;
  margin: 30px 0px 30px 0px;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  justify-content: space-between;
  column-gap: 10px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .level_bar {
    padding: 30px 15px 25px;
    height: 125px;
    width: 100%;
  }
}
.level_left_inner:after {
  top: -8px;
  right: 0;
  width: 31px;
  height: 33px;
}

.level_left {
  position: relative;
  height: 20px;
  margin: 0;
  background-color: #46396e;
  border-radius: 10px;
  box-shadow: none;
  overflow: visible;
  width: 70%;
}

.level_left_inner {
  position: relative;
  background: #330e6b;
  height: 20px;
  margin: 0;
  border: 1px solid #c3c3c3;
  border-width: 1px 0 0 0;
  border-radius: 10px;
  box-shadow: none;
  width: 75%;
  border: 1px solid #ffffff;
  filter: drop-shadow(0 0 0.2rem #ffffff);
  transition: width 0.6s ease;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
}
.level_img {
  top: -20px;
  position: absolute;
  left: -11px;
}
.level_left_inner::after {
  content: "";
  position: absolute;
  z-index: 10;
  top: -8px;
  right: -4px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #330e6b;
  border: 2px solid #ffffff;
}
.level_right_img {
  position: absolute;
  top: -10px;
  left: -4px;
}
.level_left_inner span {
  float: left;
  margin-left: 4em;
}
.level_right_inner:after {
  top: -8px;
  right: 0;
  width: 31px;
  height: 33px;
}
.progress-bar {
  color: #fff;
  text-align: center;
  transition: width 0.6s ease;
}

.level_right_inner {
  border: 1px solid #ffffff;
  position: relative;
  /* height: 20px; */
  margin: 0;
  border: 1px solid #c3c3c3;
  border-width: 1px 0 0 0;
  border-radius: 10px;
  box-shadow: none;
  width: 160px;
  text-transform: capitalize;
  font-weight: bold;
  line-height: 20px;
  border: 1px solid #ffffff;
}

.winning_content {
  position: absolute;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 900;
  bottom: 0px;
  z-index: 1;
  margin: 18px 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70%;
  color: #ffffff;
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
.achivements_bottom {
  background-color: #1e0741;
  padding: 1em 1em 1em;
  border-radius: 8px;
  width: 52%;
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
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 1.2em;
}
/* .achieve_cards_container {
} */
.achieve_cards {
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #330e6b;
  padding: 12px 10px 10px 20px;
  align-items: center;
  width: 100%;
  row-gap: 14px;
  margin-bottom: 10px;
}
.achieve_cards::before,
.leaderboard_cards::before {
  content: "";
  display: block;
  position: absolute;
  width: 6px;
  left: 0;
  top: 0;
  bottom: 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
}
.achieve_cards_info {
  display: flex;
  align-items: center;
}
.achieve_img {
  width: 55px;
}
.achieve_img img {
  width: 100%;
  border-radius: 2px;
}
.achieve_name {
  margin-left: 10px;
  text-transform: capitalize;
  font-size: 15px;
  color: #ffffff;
}

.achieve_wrap {
  background: #24c45e 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 0.43;
  padding: 5px 15px 5px 15px;
}

.leaderboard {
  background-color: #1e0741;
  border-radius: 8px;
  padding: 1em 1em 1em;
  width: 48%;
}
@media (min-width: 320px) and (max-width: 767px) {
  .leaderboard {
    width: 100%;
  }
}
.leaderboard_cards_container {
  row-gap: 10px;
  display: flex;
  flex-direction: column;
}
.leaderboard_cards {
  display: flex;
  position: relative;
  justify-content: space-between;
  row-gap: 10px;
  background-color: #330e6b;
  color: #ffffff;
}
.leaderboard_cards_info {
  display: flex;
  flex-flow: column;
  margin-left: 25px;
  justify-content: space-evenly;
}
#game_name {
  text-transform: uppercase;
}
.leaderboard_cards_img_wrap {
  width: 70px;
  display: flex;
}
.game_profile {
  background: #1e0741;
  border-radius: 8px;
  padding: 2em 1em 3em;
}
.game_profile_title {
  color: #ffffff;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.2em;
}
.game_profile_container {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 1.5rem;
}
.game_profile_card {
  background-color: #330e6b;
  border-radius: 4px;
}
.game-id-flex {
  display:flex;
  justify-content: space-between;
  margin: 10px 10px;
}
.game_name_head {
  color: #ffffff;
  text-transform: capitalize;
  /* margin: 15px 0px; */
  font-weight: 500;
}
.player_game_details {
  position: relative;
}
.player_game_details img {
  width: 100%;
  display: block;
  border-radius: 10px;
}
.player_game_details::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(180deg, #35065cd6 0%, #1e0741 100%);
  opacity: 1;
}
/* .player_game_details_content {
} */
.player_id_content_wrapper {
  position: absolute;
  top: 25px;
  left: 18px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
}
.player_id_content {
  display: grid;
  grid-template-columns: 18% 20px 14%;
  color: white;
  text-transform: capitalize;
  white-space: nowrap;
  margin-bottom: 5px;
}
.player_inner_details_left,
.player_inner_details_right {
  padding: 0px;
  /* text-align: right; */
  text-transform: uppercase;
}
.player_inner_details_center {
  align-items: center;
  justify-content: center;
  display: flex;
}
.match_details_wrap {
  position: absolute;
  width: 100%;
  top: 70px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 300;
  color: #ffffff;
}
.match_details {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  line-height: 30px;
  padding: 0px 20px;
}

.form_wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-wrapper {
  padding-bottom: 10px;
}
.my-input {
  border: 2px solid #1e0741;
  background: #1e0741;
  border-radius: 4px;
  padding: 10px;
  width: 350px;
  padding-left: 50px;
  color: white;
  margin-bottom: 10px;
  font-size: 13px;
}
.icon {
        margin-left: 12px;
    position: absolute;
    color: white;
    margin-top: 12px;
}
.my-input::placeholder {
  color: white;
}
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  font-weight: 500;
  line-height: 0;
}
.image-wrapper{
  position: relative;
}
</style>