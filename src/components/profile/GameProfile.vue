<template>
  <v-dialog persistent max-width="500px" v-model="isDialogOpen" >
    <v-card> 
      <div class="form_wrapper">
          <form >
            <template>
              <v-card-title class="pl-0">{{ game.name }}</v-card-title>
          <div class="input-wrapper" v-if="game.isIdRequired">
            <i class="fa fa-gamepad icon" aria-hidden="true"></i>
            <input type="text" class="my-input" v-model="game.gameId"  :placeholder="game.gameIdTag" />
            <!-- <div v-if="emailError" class="err-text">{{emailError}}</div> -->
          </div>
          <div class="input-wrapper" v-if="game.isIgnRequired">
            <i class="fa fa-gamepad icon"></i>
            <input type="text" class="my-input" v-model="game.gameIgn" :placeholder="game.gameIgnTag" />
            <!-- <div v-if="passwordError" class="err-text">{{passwordError}}</div> -->
          </div>
           <v-card-actions class="justify-center">
          <v-btn
            dark
            color="#1e0741"
            @click="updateGameDetails(game._id, game.gameId, game.gameIgn)"
          >
            Submit
          </v-btn>
        <v-btn dark
          color="#1e0741" @click="close">Close</v-btn>
        </v-card-actions>
        </template>
        </form>
        </div>
       
        </v-card>
    <v-snackbar v-model="snackbar" top :color="color" absolute
        elevation="24" :timeout="timeout">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
  
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Basic',
  props: ['game'],
  data: () => ({
    games: [],
    isDialogOpen: true,
    color: "",
    snackbar: false,
    snackbarText: "",
    timeout: "-1",
  }),
  methods: {
    updateGameDetails(game, gameId, gameIgn) {
      const data = { game };
      if (gameId) data["gameId"] = gameId;
      if (gameIgn) data["gameIgn"] = gameIgn;
      axios.post('/user/update/game-id', { data })
        .then(( response) => {
          console.log("update game response", response.data);
          this.isDialogOpen = false;
          this.color = 'green'
          this.snackbar = true
          this.text = 'Game Id Updated successfully'
          this.timeout = 3000
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log(e)
          }
        });
    },
    close() {
      this.$emit("closePopup");
    },

  },
  async created() {
    this.games = await axios.get(`/user/find/game-ids`).then(res => res.data.gameIds)
    console.log("game profile create", this.game)
  },
};
</script>

<style lang="scss" scoped>
.fill-height {
  background-color: rgba(0, 0, 0, 0.1);
}
::v-deep {
  .v-slide-group__prev,
  .v-slide-group__next {
    display: flex !important;
    pointer-events: unset !important;
  }
}
.mask-boy {
     position: absolute;
    right: 0;
    bottom: 50px;
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