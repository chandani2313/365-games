<template>
  <div class="login_container">
    <div class="content-1">
        <form>
            <div class="header">
                Enter new password
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
                    <div class="input-wrapper">
          <button class="btn" type="submit" @click.prevent="validate()">
            Submit
          </button>
        </div>
        </form>
    </div>
     <!-- <div class="gradation1_img_left"></div>
          <div class="gradation2_img_right"></div> -->
  </div>
</template>
<script>
import axios from "axios";
import { getForgetPasswordToken, removeForgetPasswordToken } from '../StorageFactory'

export default {
  name: "ResetPasswordNew",
  components: {
  },
  data() {
    return {
      passwordFieldType: "password",
      confirmPasswordFieldType: "password",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      regPassword:
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/,
    };
  },
  methods: {
     passwordSwitchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    confirmPasswordSwitchVisibility() {
      this.confirmPasswordFieldType = this.confirmPasswordFieldType === "password" ? "text" : "password";
    },
    validate() {
      if (this.password === '') {
        this.passwordError = 'Password is required.';
      } else {
        this.passwordError = '';
      }
 if (!this.regPassword.test(this.password)) {
        this.passwordError = "Enter a valid password";
      } else {
        this.passwordError = "";
      }
      if (this.confirmPassword === '') {
        this.confirmPasswordError = 'Confirm your password';
      } else {
        this.confirmPasswordError = '';
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
      if (this.password !== "" && this.confirmPassword !== "" && this.password === this.confirmPassword && this.regPassword.test(this.password) && this.regPassword.test(this.confirmPassword) ) {
        this.resetPassword();
      }
    },
    resetPassword() {
      let token = getForgetPasswordToken();
      const axiosInstance = axios.create({
        headers: {
          Authorization: `JWT ${token}`
        },
        baseURL: axios.defaults.baseURL
      });
      axiosInstance
        .post("/user/reset/password", {
          data: {
            password: this.password
          }
        })
        .then(() => {
          removeForgetPasswordToken()
          this.$router.push("/login");
        })
        .catch((e) => {
          console.log("err res", e.response.data);
           if (e.response.data.type === 'password_error') {
            const passwordData = e.response.data.message;
            this.passwordError = passwordData;
          } else {
            this.passwordError = '';
          }
        });
    },
  },
};
</script>

<style scoped>
 .err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  font-weight: 500;
  line-height: 0;
}
.login_container {
  font-family: Poppins;
  display: flex;
  text-align: center;
  justify-content: center;
  background-image: url("../assets/Loginnew/bg.svg");
  background-size: cover;
  height: 100%;
  flex-wrap: wrap;
}
.content-1 {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 8%;
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
  height: 878px;
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
  background: rgba(88, 88, 88, 0.2);
  width: 419px;
  height: 60px;
  margin-bottom: 10px;
  /* font-size: 12px; */
  /* color: #B0B0B0; */
  color: #f8f8f8;
  font-family: Poppins;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
}
.icon {
   margin-left: 375px;
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
