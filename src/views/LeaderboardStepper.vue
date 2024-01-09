<template>
  <v-dialog persistent max-width="800px" v-model="isDialogOpen">
    <v-stepper v-model="e1" >
      <v-stepper-header>
        <v-stepper-step color="#1e0741" :complete="e1 > 1" step="1"
          >Step 1</v-stepper-step
        >

        <v-divider></v-divider>

        <v-stepper-step color="#1e0741" :complete="e1 > 2" step="2"
          >Step 2</v-stepper-step
        >

        <v-divider></v-divider>

        <v-stepper-step color="#1e0741" step="3">Step 3</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <div class="stepper">
             <h3 style="text-transform: uppercase;">your subscription expires on</h3>
             <div class="time">{{changeDate(selectedLeaderboard.expiryDate)}}</div>
             <div class="buttons">
               <div class="extend" @click="goToMarketPage">
                  <button>Extend</button>
               </div>
             </div>
           </div>

          <v-btn dark color="#1e0741" @click="e1 = 2">
            Next
          </v-btn>

          <v-btn text @click="closeStepper">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
        <div class="stepper">
           <form v-for="game in games" :key="game._id">
            <template v-if="gameId === game._id">
              <v-card-title class="pb-0 d-flex justify-center">Your {{ game.name }} Details</v-card-title>
          <div class="game_id" v-if="game.isIdRequired"> <input type="text"  v-model="game.gameId"  :placeholder="game.gameIdTag"></div>
          <div class="game_name" v-if="game.isIgnRequired"><input type="text"  v-model="game.gameIgn" :placeholder="game.gameIgnTag"></div>
          <!-- <div class="game_id_value"><span class="game-id">GAME ID VALUE</span></div> -->
          <div class="update_btn">
            <button @click.prevent="updateGameDetails(game._id, game.gameId, game.gameIgn)">Update</button>
          </div>
            </template>
           </form>
        </div>
          <v-btn dark color="#1e0741" @click="e1 = 3">
            Next
          </v-btn>

          <v-btn text @click="closeStepper">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
         <div class="stepper">
        <h3>Confirm Submission</h3>
        <div class="terms">Important terms and conditions</div>
        <div class="agree-btn">
          <button @click="joinLeaderboard">Agree and Join</button>
        </div>
      </div>
        <v-btn text @click="closeStepper">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <!-- <v-stepper v-model="e1" v-if="isGameIdUpdated">
      <v-stepper-header>
        <v-stepper-step color="#1e0741" :complete="e1 > 1" step="1"
          >Step 1</v-stepper-step
        >

        <v-divider></v-divider>

        <v-stepper-step color="#1e0741" :complete="e1 > 2" step="2"
          >Step 2</v-stepper-step
        >

        <v-divider></v-divider>

      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <div class="stepper">
             <h3>your subscription expires on</h3>
             <div class="time">9:00PM,11 Dec 2021</div>
             <div class="buttons">
               <div class="extend">
                  <button>Extend</button>
               </div>
             </div>
           </div>
          <v-btn color="#1e0741" dark @click="e1 = 2">
            Continue
          </v-btn>

          <v-btn text @click="closeStepper">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
        <div class="stepper">
           <form v-for="game in games" :key="game._id">
            <template v-if="gameId === game._id">
              <v-card-title class="pb-0 d-flex justify-center">{{ game.name }}</v-card-title>
          <div class="game_id" v-if="game.isIdRequired"><input type="text" id="fname" name="fname" v-model="game.gameId"  :placeholder="game.gameIdTag"></div>
          <div class="game_name" v-if="game.isIgnRequired"><input type="text" id="fname" name="fname" v-model="game.gameIgn" :placeholder="game.gameIgnTag"></div>
          <div class="update_btn">
            <button @click.prevent="updateGameDetails(game._id, game.gameId, game.gameIgn)">Update</button>
          </div>
            </template>
           </form>
        </div>

          <v-btn color="#1e0741" dark @click="joinLeaderboard">
            Purchase
          </v-btn>

          <v-btn text @click="closeStepper">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper> -->
    <v-snackbar
      v-model="snackbar"
      top
      :color="color"
      absolute
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
  </v-dialog>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import moment from 'moment';
export default {
  props: ["isGameIdUpdated", "gameId"],
  data: () => ({
    isDialogOpen: true,
    e1: 1,
    games: [],
    color: "",
    snackbar: false,
    snackbarText: "",
    timeout: "-1",
  }),
   computed: {
    ...mapGetters(["selectedLeaderboard"]),
  },
  methods: {
    goToMarketPage() {
      this.$router.push({ name: 'MarketPlace' });
    },
       changeDate(date) {
    return moment(date).format('LLL');
    },
    closeStepper() {
      this.$emit("closeStepper");
    },
    joinLeaderboard() {
      if (this.isGameIdUpdated) this.join();
      else {
        this.snackbarText = "Update Game Id";
        this.color = "red darken-4";
        this.snackbar = true;
        this.timeout = 3000;
      }
    },
    join() {
      axios
        .post("/leaderboard/join", {
          criteria: {
            _id: this.$route.params.id,
          },
        })
        .then((response) => {
          console.log("join res", response.data);
          this.alreadyJoined = true;
          this.closeStepper();
          window.location.reload(true);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
            if (e.response.data.type === "not-enough-gem") {
              const gemData = e.response.data.message;
              this.snackbarText = gemData;
              this.color = "red darken-4";
              this.snackbar = true;
              this.timeout = 3000;
            } else {
              this.snackbarText = "";
            }
          }
        });
    },
    updateGameDetails(game, gameId, gameIgn) {
      const data = { game };
      if (gameId) data["gameId"] = gameId;
      if (gameIgn) data["gameIgn"] = gameIgn;
      axios
        .post("/user/update/game-id", { data })
        .then((response) => {
          console.log("res", response.data);
          this.isGameIdUpdated = true;
          this.color = "green";
          this.snackbar = true;
          this.snackbarText = "Game Id Updated successfully";
          this.timeout = 3000;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },
  },
  async created() {
    this.games = await axios
      .get(`/user/find/game-ids`)
      .then((res) => res.data.gameIds);
    console.log("game updated", this.isGameIdUpdated);
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
.form_wrapper {
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
.image-wrapper {
  position: relative;
}
.join_tour{
  width: 142px;
    height: 46px;
    /* left: 335px; */
    /* top: 424px; */
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    /* text-align: center; */
    /* align-content: center; */
    justify-content: center;
    margin: 18px 0px 6px 0px;
}
.v-stepper__header, .v-stepper__content {
    background-color: #1b1b1b;
}
::v-deep .v-stepper__step__step{
    background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%)!important;
}
.stepper {
    background: #1B1B1B;
    color: #FFFFFF;
}
.theme--light.v-stepper .v-stepper__step--active .v-stepper__label {
    color: #9672FF;
}
.v-stepper__header,.v-stepper__content {
    background-color: #1b1b1b;
    color: white;
}
::v-deep .theme--light.v-stepper .v-stepper__label {
    color: white;
}
::v-deep .theme--light.v-stepper .v-stepper__step--active .v-stepper__label {
  color: #9672FF;
}
::v-deep .theme--light.v-stepper .v-stepper__step--complete .v-stepper__label {
    color: white;
}
.stepper{
  background: #1B1B1B;
color: #FFFFFF;

}
::v-deep .v-stepper__step__step{
    background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%)!important;
}
::v-deep.theme--light.v-stepper .v-stepper__header .v-divider {
  border-color: #9672ff;
}
.theme--dark.v-btn.v-btn--has-bg{
    background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
border-radius: 8px;
    padding: 9px 30px;
}
.v-btn:not(.v-btn--round).v-size--default {
color: #FFFFFF;
}
.gems{
      display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}
.purchase{
  background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
border-radius: 8px;
    padding: 9px 30px;
    font-size: 18px;
    cursor: pointer;
}
.conti{
  background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
border-radius: 8px;
    padding: 9px 30px;
    font-size: 18px;
    cursor: pointer;
}
.pur_con{
display: flex;
justify-items: center;
    justify-content: center;
    gap: 20px;
    padding-bottom: 30px;
}
.current_gem{
  background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
border-radius: 8px;
padding: 10px;
}
.game-id{
background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
    border-radius: 8px;
    padding: 9px 30px;
    font-size: 18px;
}
.game_id>input,.game_name>input{
    color: #FFFFFF;
    border: 1px solid #9672ff;
    padding: 10px 20px;
    border-radius: 10px;
}
.v-btn{
  margin: 15px;
}
.terms{
      text-align: center;
    margin-bottom: 20px;
}

.para{
  text-align: center;
  margin-bottom: 15px;
}
h3{
    /* margin: 24px; */
    padding: 30px;
    text-align: center;
}
.time{
      text-align: center;
    margin-bottom: 15px;
}
.buttons{
  display: flex;
    justify-content: center;
    gap: 20px;
        padding-bottom: 30px;
}
.terms{

}
.agree-btn{
text-align: center;
padding-bottom: 30px;
}
.agree-btn>button{
  background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
border-radius: 8px;
padding: 10px;
}
.extend,.continue{
  background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
border-radius: 8px;
    padding: 9px 30px;
    font-size: 18px;
    
}
.game_continue>button{
      background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
    border-radius: 8px;
    padding: 9px 30px;
    font-size: 18px;
    // float: right;
}
.game_continue{
      margin-right: 50px;
    text-align: end;
    /* margin: 19px; */
    padding: 22px;
}
.update_btn{
      text-align: center;
    padding-bottom: 20px;
}
.update_btn>button{
        background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
    border-radius: 8px;
    padding: 9px 30px;
    font-size: 18px;
    text-align: center;
}
.game_name{
      text-align: center;
    margin-bottom: 30px;
    // font-size: 18px;
    // font-weight: 600;
}
.game_id{
  text-align: center;
  padding: 25px;
}
.game_id_value{
      text-align: center;
      margin-bottom: 25px;
}
.v-stepper__content{
  padding: 0px!important;
}
</style>
