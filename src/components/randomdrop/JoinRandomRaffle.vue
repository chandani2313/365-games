<template>
  <div>
    <v-dialog
      persistent
      max-width="420px"
      v-model="isJoinRandomRafflePopupOpen"
    >
      <div class="raffle-container">
        <div class="panel">
          <div ref="subpanel" class="panel-container">
            <div class="panel-content">
              <v-row>
                <v-col class="py-0" cols="12">
                  <v-radio-group
                    :error-messages="platformError"
                    dark
                    label="Platform"
                    v-model="platform"
                  >
                    <v-radio label="PC" value="pc"></v-radio>
                    <v-radio label="PS" value="ps"></v-radio>
                    <v-radio label="Mobile" value="mobile"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col class="pt-0" cols="12">
                  <v-radio-group
                    :error-messages="gameError"
                    dark
                    label="Game"
                    v-model="game"
                  >
                    <v-radio
                      v-for="game in games"
                      :key="game._id"
                      :label="game.name"
                      :value="game._id"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <button
                class="btn"
                @click="$emit('update:isJoinRandomRafflePopupOpen', false)"
              >
                Cancel
              </button>
              <button class="btn" @click="joinRandomRaffle()">Join</button>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      :color="color"
      elevation="24"
      :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JoinRandomRaffle",
  props: {
    random: {
      type: Object,
    },
    isJoinRandomRafflePopupOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      games: [],
      platform: "pc",
      game: "",
      platformError: "",
      gameError: "",
      snackbar: false,
      snackbarText: "",
      timeout: "-1",
      color: "",
    };
  },
  created() {
    this.getGames();
  },
  methods: {
    getGames() {
      axios.post("/game/find/all", {}).then((res) => {
        this.games = res.data;
      });
    },
    joinRandomRaffle() {
      if (!this.platform) this.platformError = "Platform is required";
      else this.platformError = "";
      if (!this.game) this.gameError = "Game is required";
      else this.gameError = "";
      if (this.platform && this.game) {
        axios
          .post("/random-drop/join/random-raffle", {
            criteria: {
              _id: this.random._id,
            },
            data: {
              platform: this.platform,
              game: this.game,
            },
          })
          .then(() => {
            this.color = "green";
            this.snackbar = true;
            this.snackbarText = "Joined successfully";
            this.timeout = 3000;
            this.$emit("update:isJoinRandomRafflePopupOpen", false);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.raffle-container {
  /* width: 100%;
	height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel,
.panel-container {
  width: 420px;
}

.panel-container {
  /* background: url("https://images.unsplash.com/photo-1550587542-1668407b73d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80") center top; */
  // background-color: #363636;
  // background-size: cover;
  /* box-shadow: 1.5rem 2.5rem 5rem 0.7rem rgba(0,0,0,0.13); */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: -6px 7px 20px 3px rgb(0 0 0 / 16%);
}

.panel-content {
  color: #fff;
  text-align: center;
  padding: 20px;
  overflow-wrap: break-word;
}
.btn,
.btn-complete {
  // background-color: transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  color: #ffffff;
  border-color: #ffffff;
  text-align: center;
  cursor: pointer;
  margin-right: 7px;
  // border: 1px solid #fff;
  background: linear-gradient(90.37deg, #9672ff4d 12.05%, #6b4fe84d 102.75%);
}
.btn {
  width: 6.5em;
  margin-top: 10px;
}
.btn:hover,
.btn-complete:hover {
  // background-color: #ffffff;
  // color: #320c6a;
}
.btn:hover::after,
.btn-complete:hover::after {
  color: #ffffff;
}
::v-deep .v-application .white--text {
  color: #7153eb !important;
  caret-color: #7153eb !important;
}
.v-dialog__content--active {
  background: rgba(19, 19, 19, 0.7);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}
</style>