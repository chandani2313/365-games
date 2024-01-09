<template>
  <div class="player_list">
    <div class="main__container">
      <div class="table__wrapper animated zoomIn">
        <div class="top_container">
          <div class="navbar_text">Edit Profile</div>
          <div class="close" @click="close()">x</div>
        </div>
        <div class="bottom_container">
         <form>
             <div class="container">
             <div class="input-wrapper" >
                <input
                    type="text"
                    v-model="username"
                    disabled
                    class="my-input"
                    placeholder="Username"
                />
            </div>
            <div class="input-wrapper" >
                <input
                    type="text"
                    v-model="email"
                    disabled
                    class="my-input"
                    placeholder="Email"
                />
            </div>
            <div class="input-wrapper">
          <i class="fa fa-flag icon"></i>
          <country-select
            v-model="country"
            :country="country"
            class="my-input"
            placeholder="Country"
            topCountry="IN"
          />
          <img src="../assets/username/selectarrow.svg" style="    position: absolute;top: 28px;right: 25px;"/>
        </div>
        <div v-if="countryError" class="err-text">
                {{ countryError }}
              </div>
        <div class="input-wrapper">
          <VuePhoneNumberInput
            :default-country-code="country"
            @update="updatePhoneNumber"
            :required="true"
            :dark="true"
            style="margin-bottom: 10px; margin-top: 10px;"
            :dark-color="'rgb(24 24 24)'"
            v-model="phone"
          />
            <!-- :dark-color="' rgb(150, 114, 255, 0.1)'" -->
          <div v-if="phoneNumberError" class="err-text">
                {{ phoneNumberError }}
              </div>
        </div>
         </div>
          <div class="input-wrapper" style="    text-align: center;">
          <button class="btn" type="submit" @click.prevent="validate()">
            Submit
          </button>
        </div>
        </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditProfile",
  props: ["user"],
  data() {
    return {
      username: "",
      country: "",
      email: "",
      countryCode: "",
      phone: "",
      countryError: "",
      phoneNumberError: ""
    };
  },
  created() {
    this.username = this.user.username;
    this.email = this.user.email
    this.country = this.user.country
    this.phone = this.user.phone
    this.countryCode = this.user.countryCode
  },
  methods: {
      updatePhoneNumber(data) {
      if (!data.isValid) {
        this.phoneNumberError = "Invalid Phone Number.";
      } else {
        this.phoneNumberError = null;
        this.countryCode = data.countryCallingCode;
      }
    },
    validate() {
    if (this.country === "") {
        this.countryError = 'Country is required.';
      } else {
        this.countryError = '';
      }
      if (this.phone === "") {
        this.phoneNumberError = 'Phone No is required.';
      } else {
        this.phoneNumberError = '';
      }
      if (this.phone !== '' && this.country !== '') {
        this.updateUser();
      }
    },
      updateUser() {      
        const data = {
            phone: this.phone,
            country: this.country,
            countryCode: this.countryCode,
          }
      axios
        .post("/user/update/profile", {
          criteria: { _id: this.user._id },
          data          
        })
        .then(() => {
          this.close();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },
    close() {
      this.$emit("closeEditProfilePopup");
    },
  },
};
</script>

<style scoped>
/* .main__container {
  position: absolute;
  width: 870px;
  height: 575px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: #1b1b1b;
  border-radius: 10px;
  font-family: "Poppins";
} */
.main__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #00000073; */
  background: rgba(19, 19, 19, 0.7);
  backdrop-filter: blur(7px);
  z-index: 6;
}
.main__container .table__wrapper {
  width: 600px;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: -6px 7px 20px 3px rgba(0, 0, 0, 0.16);
  margin: 90px auto;
}
.table__wrapper .top_container {
  width: 100%;
  height: 65px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  /* background-image: url('../../assets/img/table__img.png'); */
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
}
.top_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 57px;
  background: rgb(150, 114, 255, 0.1);
  border-radius: 10px 10px 0px 0px;
  padding: 3px 35px 0 35px;
}
.navbar_text {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
.close {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #9672ff;
  cursor: pointer;
}
.bottom_container {
  padding: 15px 35px 40px 35px;
}
.date,
.time {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #cdcadb;
  margin-left: 12px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  /* flex-direction: row;
  justify-content: space-between;
  align-items: center; */
}
.date_time_wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.date_wrap {
  display: flex;
  align-items: center;
}
.time_wrap {
  display: flex;
  align-items: center;
  margin: 0 40px 0 40px;
}
.time_left {
  display: flex;
}
.status_wrap {
  border-radius: 10px;
  width: 113px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}
.completed_background {
  background: rgb(39, 174, 96, 0.1);
}
.status_text {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 29px;
}
.completed_text {
  color: #27ae60;
}
.status_logo_completed {
  background: #26ae60;
  border-radius: 50px;
  height: 14px;
  width: 14px;
}
.status_logo_completed img {
  height: 15px;
  object-fit: none;
}
.search_bar {
  width: 115px;
  height: 46px;
}
::v-deep .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: rgba(150, 114, 255, 0.3);
  border-radius: 10px;
}
::v-deep .v-text-field.v-text-field--solo .v-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #ffffff;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #ffffff;
}
.teams {
  margin: 25px 0 10px 0;
}
.player_wrap {
  display: flex;
  flex-direction: row;
}
.player_wrap img {
  object-fit: contain;
}
.players {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #9672ff;
  margin: 1px 0 0 5px;
}
::v-deep .theme--light.v-divider {
  border-color: #cdcadb;
}
/* ::v-deep .v-divider {
  border-width: thin 0 1.5px 0;
} */
.card_container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  height: 360px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.card_container::-webkit-scrollbar-thumb {
  background: grey;
}
.card_container::-webkit-scrollbar-track {
  box-shadow: none;
  margin-left: 10px;
}
.team_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.team_card_wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: 385px;
  height: 62px;
  background: rgb(150, 114, 255, 0.1);
  border-radius: 10px;
}
.team_card_wrap_text {
  display: flex;
  gap: 15px;
}
.team_list {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #9672ff;
}
.team_names {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 29px;
  color: #cdcadb;
}
.team_card_wrap_img {
  display: flex;
  align-items: center;
}
.header{
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 124.5%;
color: #FFFFFF;
    margin-bottom: 40px;
}
.gradation1_img_left {
  position: absolute;
width: 367px;
    height: 1190px;
  background: rgba(150, 114, 255, 0.4);
  filter: blur(300px);
  left: -250px;
  /* top: 100px; */
  bottom: 0px;
  
}
select {

background: linear-gradient(0deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72));
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  color: white;
  font-size: 13px;
}
.gradation2_img_right {
  position: absolute;
  width: 367px;
  height: 692px;
  background: rgba(150, 114, 255, 0.4);
  filter: blur(300px);
  right: -350px;
  /* top: 250px; */
  bottom: 0px;
}
/* label.country-selector__label[data-v-46e105de] {
    opacity: 0!important;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    font-size: 11px;
}
.country-selector__label {
    position: absolute;
    top: 3px;
    cursor: pointer;
    left: 11px;
    -webkit-transform: translateY(25%);
    transform: translateY(25%);
    opacity: 0;
    -webkit-transition: all .25s cubic-bezier(.645,.045,.355,1);
    transition: all .25s cubic-bezier(.645,.045,.355,1);
    font-size: 20px;
    color: #747474;
} */
.right_content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 20px;
}
.login_header {
  color: var(--v-info-base);
  /* font-size: 26px; */
  padding-bottom: 10px;
  margin-left: 1%;
  font-size: 30px;
  line-height: 37px;
  font-style: normal;
  font-weight: 600;
}
.register_wrap {
  font-size: 14px;
  line-height: 21px;
  padding-top: 3%;
  color: #f8f8f8;
  font-weight: 400;
}
.register {
  font: normal normal 600 14px/21px Poppins;
  color: rgb(150, 114, 255);
  cursor: pointer;
  padding: 0px;
}
.v-application a {
  color: #b0b0b0;
}
.input-wrapper {
  padding-bottom: 10px;
  position: relative;
}
.my-input {
  border-radius: 8px;
  padding: 15px;
  /* background: rgba(88, 88, 88, 0.2); */
    padding: 20px;
    /* width: 385px; */
        width: -webkit-fill-available;
    height: 62px;
    background: rgb(150, 114, 255, 0.1);
  margin-bottom: 10px;
  font-family: Poppins;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
  color: #b0b0b0;
/* identical to box height, or 20px */
}
.icon {
  display: none;
}
.input-wrapper > svg {
  position: absolute;
  top: 22px;
  right: 12px;
}
.far {
  font-size: 20px;
  color: #f8f8f8 !important;
}
.my-input::placeholder {
  color: #b0b0b0;
}
.forgot {
  /* color: #747474!important; */
  color: rgba(176, 176, 176, 0.8) !important;
  cursor: pointer;
  /* font-size: 12px; */
  padding: 5px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 17px;
  font-style: normal;
  font-weight: 300;
}
.forgot-password {
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
}
.checkbox-wrapper {
  display: flex;
  align-items: flex-end;
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
.checkbox-wrap:checked {
  background-color: #6b4fe8;
}
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  padding: 5px;
  font-weight: 500;
  line-height: 0;
}
.btn {
  background: linear-gradient(180deg, #9672ff 0%, #6b4fe8 100%);
  width: 419px;
  height: 60px;
  padding: 10px;
  outline: none;
  border-radius: 8px;
  border-style: none;
  margin: 15px auto;
  cursor: pointer;
  /* box-shadow: 5px 10px 20px #141f28; */
  color: var(--v-info-base);
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.social-logo {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  font-size: 34px;
  cursor: pointer;
  color: var(--v-info-base);
}
span {
  color: var(--v-info-base);
  /* font-size: 12px; */
  padding: 10px;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
}

.social-logo > a {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  position: relative;
  background: rgba(15, 15, 15, 1);
  border-radius: 8px;
}
.image-wrapper {
  position: relative;
}
@media only screen and (max-width: 980px) {
  .login-container {
    flex-direction: column;
  }
  .content-1 {
    width: 100%;
    margin: auto;
    padding: auto;
  }
  .right_content {
    display: block;
  }
  .register_wrap {
    padding: 5px;
    text-align: center;
  }
  .my-input,
  .btn {
    width: 340px;
  }
  .register_wrap > span {
    font-size: 14px;
  }
  span {
    font-size: 9px;
    font-family: Poppins;
  }
}
@media only screen and (min-width: 780px) {
  .content-1 {
    width: 50%;
    /* height: 100%; */
    margin: auto;
  }
}
</style>