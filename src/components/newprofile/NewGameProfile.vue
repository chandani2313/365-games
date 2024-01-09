<template>
  <div class="player_list">
    <div class="main__container">
      <div class="table__wrapper animated zoomIn">
        <div class="top_container">
          <div class="game_heading">
            <div class="navbar_text">{{ game.name }}</div>
            <div class="close" @click="close()">x</div>
          </div>
        </div>
        <div class="bottom_container">
          <div class="card_container">
            <div class="input-wrapper" v-if="game.isIdRequired">
              <!-- <img src="/img/assets/profile/Gameinputicon.png" /> -->
              <i class="fa fa-gamepad icon" aria-hidden="true"></i>
              <input type="text" class="my-input input_image" v-model="game.gameId"  :placeholder="game.gameIdTag" />
              
            </div>
            <div v-if="gameIdError" class="err-text">{{ gameIdError }}</div>
            <div class="input-wrapper" v-if="game.isIgnRequired">
              <i class="fa fa-gamepad icon"></i>
              <input type="text" class="my-input input_image" v-model="game.gameIgn" :placeholder="game.gameIgnTag" />
            </div>
          <div v-if="gameIgnError" class="err-text">{{ gameIgnError }}</div>
            <div class="input-wrapper">
              <!-- <button class="btn" @click="updateGameDetails(game._id, game.gameId, game.gameIgn)"> -->
              <button class="btn" @click="validate(game._id, game.gameId, game.gameIgn)">
                Submit
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <!-- <v-snackbar v-model="snackbar" top :color="color" absolute
        elevation="24" :timeout="timeout">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="#9672ff" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  // name: 'Basic',
  props: ['game'],
  data: () => ({
    games: [],
    gameIdError: '',
    gameIgnError: '',
  }),
  methods: {
    validate(game, gameId, gameIgn) {
      if (game.gameId === "") {
        this.gameIdError = "GameId is required.";
      } else {
        this.gameIdError = "";
      }
      if (game.gameIgn === "") {
        this.gameIgnError = "GameIgn is required.";
      } else {
        this.gameIgnError = "";
      }
      if (
        game.gameId !== "" &&
        game.gameIgn !== ""
      ) {
        this.updateGameDetails(game, gameId, gameIgn);
      }
    },
    updateGameDetails(game, gameId, gameIgn) {
      const data = { game };
      if (gameId) data["gameId"] = gameId;
      if (gameIgn) data["gameIgn"] = gameIgn;
      axios.post('/user/update/game-id', { data })
        .then(() => {
          this.$emit("closeEmitPopup");
        })
        .catch((e) => {
          if (e.response.status === 400) {
            // console.log("error",e)
            if (e.response.data.type === "invalid-pubg-ign") {
              const phoneData = e.response.data.message;
              this.gameIgnError = phoneData;
            } else {
              this.gameIgnError = "";
            }
          }
        });
    },
    close() {
      this.$emit("closePopup");
    },

  },
  async created() {
    this.games = await axios.get(`/user/find/game-ids`).then(res => res.data.gameIds)
    // console.log("game profile create", this.game)
  },
};
</script>

<style lang="scss" scoped>
.main__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(19, 19, 19, 0.7);
  backdrop-filter: blur(7px);
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__container .table__wrapper {
  width: 400px;
  height: 333px;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: -6px 7px 20px 3px rgba(0, 0, 0, 0.16);
  // margin: 0px auto;
}
.table__wrapper  {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.top_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.game_heading {
  width: 304px;
  display: flex;
  justify-content: space-between;
}
.navbar_text {
  color: #ffffff;
  font: normal normal 700 18px/27px Poppins;
}
.close {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #9672ff;
  cursor: pointer;
}
.bottom_container {
  display: flex;
  justify-content: center;
  // padding: 15px 35px 40px 35px;
}
.card_container {
  width: 304px;
  display: flex;
  flex-wrap: wrap;
}
.btn {
  background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
  border-radius: 8px;
  width: 304px;
  height: 60px;
  outline: none;
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  // color: var(--v-info-base);
  font: normal normal 700 16px/20px Poppins;
  margin-top: 12px;
}

.my-input {
  background: rgba(88, 88, 88, 0.2);
  border-radius: 8px;
  color: #B0B0B0;
  padding: 10px 10px 10px 70px;
  width: 304px;
  height: 60px;
  margin-bottom: 10px;
  font: normal normal 400 16px/20px Poppins;
}
.icon {
  margin-left: 30px;
  position: absolute;
  color: #9672FF;
  margin-top: 22px;
  background-image: url("/img/assets/profile/Gameinputicon.png");
}
.fa-gamepad {
  width: 22px;
  height: 15px;
}
.my-input::placeholder {
  color: #B0B0B0;
}
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  padding: 5px;
  font-weight: 500;
  line-height: 0;
}

</style>