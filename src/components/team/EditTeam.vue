<template>
  <div class="teams_outerwrap">
    <div class="teams_inner_wrap">
      <div class="teams_inner_subwrap">
        <input
          type="text"
          v-model="name"
          name="text"
          placeholder="Team Name Here"
        />
        <input
          type="text"
          v-model="alias"
          name="text"
          placeholder="Team Alias"
        />
          <country-select
            v-model="country"
            :country="country"
            class="my-input"
            placeholder="Country"
            topCountry="IN"
          />
        <div class="teams_country">
          <VuePhoneNumberInput
            :default-country-code="country"
            @update="updatePhoneNumber"
            :required="true"
            style="font-size:20px;color: black;"
            v-model="phone"
          />
        </div>
        <button class="teams_update" @click="updateTeam">update</button>
      </div>
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
</template>
<script>
import axios from "axios";

export default {
  name: "EditTeam",
  components: {},
  props: {
    team: {},
  },
  data() {
    return {
      name:"",
      alias: "",
      country: "",
      countryCode: "",
      phone: "",
      color: "",
    snackbar: false,
    snackbarText: "",
    timeout: "-1",
    };
  },
   created() {
          if (this.team) {
        console.log('team uh', this.team),
      (this.name = this.team.name),
        (this.alias = this.team.alias),
        (this.phone = this.team.phone),
        (this.country = this.team.location);
      (this.countryCode = this.team.countryCode)
    }
    },
  methods: {
     updatePhoneNumber(data) {
      if (!data.isValid) {
        this.phone_error = "Invalid Phone Number.";
      } else {
        this.phone_error = null;
        this.countryCode = data.countryCallingCode;
      }
    },
    updateTeam() {
        axios
        .post("/team/update", {
          criteria: {_id: this.team._id},
          data: {
            name: this.name,
            alias:this.alias,
            location: this.country,
            countryCode:this.countryCode,
            phone:this.phone
          },
        })
        .then((response) => {
          console.log('updaaaate', response.data)
           this.color = "green";
          this.snackbar = true;
          this.snackbarText = "Team Updated successfully";
          this.timeout = 3000;
          // this.$emit("closePopup");
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
             if (e.response.data.message) {
              const teamData = e.response.data.message;
              this.snackbarText = teamData;
              this.color = "red darken-4";
              this.snackbar = true;
              this.timeout = 3000;
            }
          }
        });
    }
  },
  mounted() {
  },
};
</script>
<style scoped>
img {
  width: 100%;
  display: block;
}
/* .teams_outerwrap {
  padding: 20px;
} */
.teams_header {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 5px;
}
.button_wrapper {
  position: absolute;
  right: 0;
  padding: 5px;
}
/* button {
  border: 0.5px solid #ffffff;
  background: #180550;
  color: white;
  cursor: pointer;
  text-transform: capitalize;
  padding: 5px;
  margin: 15px 10px 10px 0px;
  border-radius: 4px;
} */
.active {
  background: #1e0741;
  border: 0.25px solid #1e0741;
}
.teams_title_wrap {
  padding: 10px;
  font: 22px/33px Poppins;
  color: #ffffff;
  text-transform: capitalize;
  margin: 15px 10px 10px 0px;
}
/* .teams_inner_wrap {
  background: #1e0741;
  padding: 12px;
  width: 450px;
  margin: auto;
} */
.teams_inner_subwrap {
  background: #310a69;
  /* border-radius: 5px; */
  padding: 5px;
  display: grid;
}
.teams_inner_subwrap1 {
  background: #310a69;
  /* border-radius: 15px; */
  display: flex !important;
  position: relative;
}
.x {
  position: absolute;
  float: right;
  background: #f1f1f1;
  color: black;
  right: 0px;
  top: 10px;
  min-height: 25px;
  min-width: 25px;
  border-radius: 15px;
}
.teams_sub_title_wrap0 {
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  min-height: 0;
  text-transform: capitalize;
  padding: 5px;
  margin: none;
  border-radius: none;
}
.teams_sub_title_wrap1 {
  border: none;
  background: none;
  color: #bdb7b7;
  cursor: pointer;
  min-height: 0;
  text-transform: capitalize;
  padding: 5px;
  margin: none;
  border-radius: none;
}
.teams_bottom_strip {
  height: 1px;
  background: #bdb7b7;
  margin: -10px 10px 0px 5px;
}
input,
select {
  text-align: left;
  outline: none;
  background: white;
  padding: 8px;
  color: #310a69;
  border-radius: 4px;
  margin: 15px;
  border: 1px solid white;
  text-transform: capitalize;
}
.teams_country {
  margin: 15px !important;
  display: flex;
}
.teams_country > input {
  background: none;
  padding: 8px;
  margin: 0px !important;
  border: 1px solid white;
  color: white;
}
.teams_update {
  border: 0.5px solid #ffffff;
  background: #f1f1f1;
  color: #1e0741;
  cursor: pointer;
  min-width: 100px;
  text-transform: capitalize;
  padding: 5px;
  margin: 0 auto !important;
  text-align: center;
  display: block;
  border-radius: 4px !important;
  font-size: 12px;
}
.teams_update:hover {
  font-weight:bold;
}
@media screen and (max-width: 640px) {
  input,
select{
  width: 335px;
}
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
  /* button {
    text-align: center !important;
    padding: 0 !important;
  } */
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
  /* button {
    text-align: center !important;
    padding: 0 !important;
  } */
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
    background: #310a69;
  }
  /* button {
    text-align: center !important;
    padding: 0 !important;
  } */
  .button_wrapper {
    display: flex;
  }
}
</style>
