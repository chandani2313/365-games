<template>
  <div class="teams_outerwrap">
    <div class="teams_inner_wrap">
      <!-- <div class="teams_image"><img src="/img/assets/Team/Createteam.svg"></div> -->
      <div class="teams_image">
        <img src="/img/assets/Team/createteamprofile.png" />
      </div>
      <div class="teams_inner_subwrap">
        <input type="text" v-model="name" placeholder="Team Name Here" />
        <div v-if="teamNameErr" class="err-text">{{ teamNameErr }}</div>
        <input type="text" v-model="alias" placeholder="Team Alias" />
        <div v-if="teamAliasErr" class="err-text">{{ teamAliasErr }}</div>
        <select v-model="game">
          <option value="" placeholder="Select game">Select game</option>
          <option
            :value="game._id"
            placeholder=""
            v-for="game in games"
            :key="game._id"
          >
            {{ game.shortName }}
          </option>
        </select>
        <div v-if="gameErr" class="err-text">{{ gameErr }}</div>
        <!-- <div> -->
        <country-select
          v-model="country"
          :country="country"
          class="my-input1"
          placeholder="Country"
          topCountry="IN"
        />
        <div v-if="countryErr" class="err-text">{{ countryErr }}</div>
        <!-- </div> -->
        <div class="teams_country">
          <VuePhoneNumberInput
            :default-country-code="country"
            @update="updatePhoneNumber"
            :required="true"
            :dark="true"
            :dark-color="'rgb(24 24 24)'"
            v-model="phone"
            class="my-input"
          />
        </div>
        <div v-if="phoneNumberError" class="err-text">
          {{ phoneNumberError }}
        </div>
        <!-- <div class="checkbox-wrapper">
            <div class="checkbox">
              <input
                type="checkbox"
                class="checkbox-wrap"
                v-model="checked"
              />
            </div>
            <div class="forgot">I agree to the <span style="font-weight: 600; color:#ffffff;" @click="SignupPopup()">Terms & Condition</span></div>
          </div> -->
        <button class="teams_update" @click="validate">create team</button>
      </div>
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
    </div>
    <TermsPopup v-if="showModal" @closeSignupPopup="closePopup" />
  </div>
</template>
<script>
import axios from "axios";
import TermsPopup from "../../views/TermsPopup.vue";
export default {
  name: "CreateTeam",
  components: { TermsPopup },

  data() {
    return {
      name: "",
      alias: "",
      game: "",
      games: [],
      country: "",
      checked: "",
      countryCode: "",
      phone: "",
      teamNameErr: "",
      teamAliasErr: "",
      gameErr: "",
      countryErr: "",
      phoneNumberError: "",
      showModal: "",
      color: "",
      snackbar: false,
      snackbarText: "",
      timeout: "-1",
    };
  },
  methods: {
    SignupPopup() {
      this.showModal = true;
    },
    closePopup() {
      this.showModal = false;
    },
    updatePhoneNumber(data) {
      if (!data.isValid && this.phone) {
        this.phoneNumberError = "Invalid Phone Number.";
      } else {
        if (this.phone) {
          this.phoneNumberError = null;
          this.countryCode = data.countryCallingCode;
        }
      }
    },
    validate() {
      if (this.name === "") {
        this.teamNameErr = "This Field Is Required.";
      } else {
        this.teamNameErr = "";
      }
      if (this.alias === "") {
        this.teamAliasErr = "This Field Is Required.";
      } else {
        this.teamAliasErr = "";
      }
      if (!this.phone) {
        this.phoneNumberError = "Phone Number is required.";
      } else {
        this.phoneNumberError = "";
      }
      if (this.game === "") {
        this.gameErr = "This Field Is Required.";
      } else {
        this.gameErr = "";
      }
      if (this.country === "") {
        this.countryErr = "This Field Is Required.";
      } else {
        this.countryErr = "";
      }
      if (
        this.name !== "" &&
        this.alias !== "" &&
        this.game !== "" &&
        this.country !== "" &&
        this.phone !== ""
      ) {
        this.createTeam();
      }
    },
    getAllTeams() {
      axios
        .post("/game/find/all", {
          criteria: {},
        })
        .then((response) => {
          this.games = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    createTeam() {
      axios
        .post("/team/create", {
          data: {
            name: this.name,
            alias: this.alias,
            game: this.game,
            location: this.country,
            countryCode: this.countryCode,
            phone: this.phone,
          },
        })
        .then(() => {
          this.$router.push("/teams");
        })
        .catch((e) => {
          console.log("err", e.response.data);
          const teamData = e.response.data;
          this.snackbarText = teamData;
          this.color = "red darken-4";
          this.snackbar = true;
          this.timeout = 3000;
        });
    },
  },
  mounted() {
    this.getAllTeams();
  },
};
</script>
<style scoped>
.teams_outerwrap {
  margin: 0 auto;
  width: 1110px;
}
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  line-height: 0;
  font-weight: 500;
}
img {
  width: 100%;
  display: block;
}
.teams_header {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 5px;
}
.teams_image > img {
  height: 501px;
  width: 504px;
}
.button_wrapper {
  position: absolute;
  right: 0;
  padding: 5px;
}
.active {
  background: #1e0741;
  border: 0.25px solid #1e0741;
}
.teams_inner_wrap {
  display: flex;
  justify-content: space-between;
}
.teams_inner_subwrap {
  border-radius: 5px;
  display: grid;
}
input,
select {
  width: 567px;
  height: 60px;
  text-align: left;
  outline: none;
  background: rgba(88, 88, 88, 0.2);
  padding: 0px 0px 0px 16px;
  color: #b0b0b0;
  border-radius: 8px;
  text-transform: capitalize;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
input::placeholder {
  color: #b0b0b0;
  font-weight: 400;
}
.teams_country {
  /* margin: 15px 0px !important; */
  display: flex;
}
.teams_country > .my-input {
  text-align: left;
  background: none;
  /* padding: 8px; */
  color: white;
  margin: 0px !important;
  color: rgba(88, 88, 88, 0.2);
  /* color: #B0B0B0; */
}
.checkbox-wrapper {
  display: flex;
  align-items: center;
}
.checkbox-wrap {
  margin-right: 4px;
  width: 17px;
  height: 17px;
  background: rgba(88, 88, 88, 0.3);
  border-radius: 50%;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;
}
.checkbox {
  margin-top: -17px;
}
.checkbox-wrap:checked {
  background-color: #6b4fe8;
}
.forgot {
  /* color: #747474!important; */
  color: rgba(176, 176, 176, 0.8) !important;
  cursor: pointer;
  /* font-size: 12px; */
  padding: 5px;
  margin-top: -15px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 17px;
  font-style: normal;
  font-weight: 300;
}
.teams_country > .my-input,
country-select > .my-input1 {
  /* background: rgba(88, 88, 88, 0.2)!important; */
  color: #b0b0b0 !important;
}
.teams_update {
  width: 567px;
  height: 60px;
  background: linear-gradient(90.37deg, #9672ff 12.05%, #6b4fe8 102.75%);
  cursor: pointer;
  text-transform: capitalize;
  padding: 5px;
  margin: 0 auto !important;
  display: block;
  border-radius: 8px !important;
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
}
@media screen and (max-width: 640px) {
  .teams_outerwrap {
    display: block;
    width: 100%;
    padding: 10px;
  }
  .teams_inner_wrap {
    width: 450px;
    display: flex;
    flex-wrap: wrap;
  }
  button {
    text-align: center !important;
    padding: 0 !important;
  }
  .button_wrapper {
    display: flex;
  }
}
@media screen and (max-width: 560px) {
  .teams_outerwrap {
    display: block;
    width: 100%;
    padding: 10px;
  }
  .teams_inner_wrap {
    width: 450px;
    display: flex;
    flex-wrap: wrap;
  }
  button {
    text-align: center !important;
    padding: 0 !important;
  }
  .button_wrapper {
    display: flex;
  }
}
@media screen and (max-width: 480px) {
  .teams_outerwrap {
    display: block;
    width: 100%;
    padding: 10px;
  }
  .teams_inner_wrap {
    width: 450px;
    display: flex;
    flex-wrap: wrap;
  }
  .teams_outerwrap,
  .teams_title_wrap {
    padding: 0px 0px 10px 1px !important;
  }
  button {
    text-align: center !important;
    padding: 0 !important;
  }
  .button_wrapper {
    display: flex;
  }
}
</style>
