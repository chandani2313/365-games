<template>
  <div class="player_list">
    <div class="main__container">
      <div class="table__wrapper animated zoomIn">
        <div class="top_container">
          <div class="navbar_text">Change Password</div>
          <div class="close" @click="close()">x</div>
        </div>
        <div class="bottom_container">
         <form>
             <div class="container">
                   <div class="input-wrapper">
                <i v-bind:class="[oldPasswordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="oldPasswordSwitchVisibility"></i> 
                <input
                    :type="oldPasswordFieldType"
                    class="my-input"
                    v-model="oldPassword"
                    placeholder="Enter Old Password"
                />
                <div v-if="oldPasswordError" class="err-text">{{oldPasswordError}}</div>
            </div>
             <div class="input-wrapper">
                <i v-bind:class="[passwordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="passwordSwitchVisibility"></i> 
                <input
                    :type="passwordFieldType"
                    class="my-input"
                    v-model="password"
                    placeholder="Enter New Password"
                />
                <div v-if="passwordError" class="err-text">{{passwordError}}</div>
            </div>
            <div class="input-wrapper">
                   <i v-bind:class="[confirmPasswordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="confirmPasswordSwitchVisibility"></i> 
                <input
                    class="my-input"
                    v-model="confirmPassword"
                    :type="confirmPasswordFieldType"
                    placeholder="Confirm Password"
                />
                <div v-if="confirmPasswordError" class="err-text">{{confirmPasswordError}}</div>
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
  name: "ChangePassword",
  props: ["user"],
  data() {
    return {
    passwordFieldType: "password",
    oldPasswordFieldType: "password",
      confirmPasswordFieldType: "password",
      oldPassword: "",
      oldPasswordError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      regPassword:
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/,
    };
  },
  created() {
   
  },
  methods: {
    validate() {
     if (this.password === '') {
        this.passwordError = 'This field is required.';
      } else {
        this.passwordError = '';
      }
       if (this.oldPassword === '') {
        this.oldPasswordError = 'This field is required.';
      } else {
        this.oldPasswordError = '';
      }

      if (this.confirmPassword === '') {
        this.confirmPasswordError = 'This field is required.';
      } else {
        this.confirmPasswordError = '';
      }
  if (!this.regPassword.test(this.password)) {
        this.passwordError = "Enter a valid password";
      } else {
        this.passwordError = "";
      }
      if (!this.regPassword.test(this.oldPassword)) {
        this.oldPasswordError = "Enter a valid password";
      } else {
        this.oldPasswordError = "";
      }
        if (!this.regPassword.test(this.confirmPassword)) {
        this.confirmPasswordError = "Enter a valid password";
      } else {
        this.confirmPasswordError = "";
      }
      if (!this.password.length < 1 && !this.confirmPassword.length < 1) {
          if (this.password !== this.confirmPassword) {
              this.confirmPasswordError = 'Password did not match.';
          } else {
              this.confirmPasswordError = '';
          }
      }
      if (this.password !== "" && this.confirmPassword !== "" && this.password === this.confirmPassword && this.regPassword.test(this.password)) {
        this.resetPassword();
      }

    },
    oldPasswordSwitchVisibility() {
      this.oldPasswordFieldType = this.oldPasswordFieldType === "password" ? "text" : "password";
    },
     passwordSwitchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    confirmPasswordSwitchVisibility() {
      this.confirmPasswordFieldType = this.confirmPasswordFieldType === "password" ? "text" : "password";
    },
      resetPassword() {      
        const data = {
            oldPassword: this.oldPassword,
            newPassword: this.password
          }
      axios
        .post("/user/update/password", {
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
      this.$emit("closeChangePasswordPopup");
    },
  },
};
</script>

<style scoped>
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
    margin-left: 450px;
    position: absolute;
    color: White!important;
    margin-top: 25px;
    opacity: 0.2;
    font-size: 20px;
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
@media only screen and (max-width: 980px) {
  .login-container {
    flex-direction: column;
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
}
</style>