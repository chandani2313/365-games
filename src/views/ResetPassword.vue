<template>
  <div class="enter-otp-container">
    <div class="logo">
      <div><img width="25px" src="../assets/Login/logo.png" alt="" /></div>
      <div>365 Games</div>
    </div>
    <div class="enter-otp-inner-container">
      <div class="doll">
        <img src="/img/assets/otp/doll.png" alt="doll" />
      </div>
      <div class="content">
        <div class="text">
          Enter New Password
        </div>
        <!-- <div class="otp">
          <otp-input v-model="otp"></otp-input>
        </div> -->
         <div class="input-wrapper">
           <i v-bind:class="[passwordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="passwordSwitchVisibility"></i> 
                    <input :type="passwordFieldType" class="my-input" v-model="password" placeholder="Enter New Password" />
                    <div v-if="passwordError" class="err-text">{{passwordError}}</div>
                </div>
                 <div class="input-wrapper">
                   <i v-bind:class="[confirmPasswordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="confirmPasswordSwitchVisibility"></i> 
                    <input :type="confirmPasswordFieldType" class="my-input" v-model="confirmPassword" placeholder="Confirm Password" />
                    <div v-if="confirmPasswordError" class="err-text">{{confirmPasswordError}}</div>
                </div>
        <div class="submit-button">
          <button type="submit" @click.prevent="validate()">Submit</button>
        </div>
        <div class="error-message">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getForgetPasswordToken, removeForgetPasswordToken } from '../StorageFactory'

export default {
  name: "ResetPassword",
  components: {
  },
  data() {
    return {
      passwordFieldType: "password",
      confirmPasswordFieldType: "password",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: ""
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

      if (this.confirmPassword === '') {
        this.confirmPasswordError = 'Confirm your password';
      } else {
        this.confirmPasswordError = '';
      }

      if (!this.password.length < 1 && !this.confirmPassword.length < 1) {
          if (this.password !== this.confirmPassword) {
              this.confirmPasswordError = 'Password did not match.';
          } else {
              this.confirmPasswordError = '';
          }
      }
      if (this.password !== "" && this.confirmPassword !== "" && this.password === this.confirmPassword) {
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

<style lang="scss" scoped>
.icon{
  margin-left: 12px;
    position: absolute;
    color: white;
    margin-top: 12px;
    cursor: pointer;
}
.enter-otp-container {
  background: linear-gradient(#ffffff 50%, #1d0640 50%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    position: absolute;
    display: flex;
    top: 20px;
    left: 25px;
    color: black;
    background: white;
    width: 153px;
    padding: 10px;
    justify-content: space-between;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
  }
}
.enter-otp-inner-container {
  min-height: 280px;
  position: relative;
  .doll {
    position: absolute;
    width: 107px;
    height: 142px;
    top: -125px;
    left: 10px;
    img {
      object-fit: contain;
    }
  }
}
.content {
  padding: 45px 42px 0;
  box-shadow: 3px 0px 6px #00000029;
  width: 386px;
  text-align: center;
  display: flex;
  flex-flow: column;
  background-color: white;
  border-radius: 5px;
  .text {
   font-family: "Poppins";
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #1d0640;
    padding-bottom: 10px;
  }
   .input-wrapper {
            padding-bottom: 9px;
            ::placeholder { 
                color: white;
                opacity: 1; /* Firefox */
            }
            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: white;
            }
            ::-ms-input-placeholder { /* Microsoft Edge */
                color: white;
            }
            input {
                // background: #1D0640;
                // color: white;
                // font-size: 13px;
                // width: 295px;
                // height: 45px;
                // padding: 10px;
                // font-weight: 300;
                // border-radius: 5px;
                // margin-bottom: 10px;
                border: 2px solid #1e0741;
    background:#1D0640;
    border-radius: 4px;
    padding: 10px;
    width: 295px;
    height: 45px;
    padding-left: 50px;
    color: white;
    margin-bottom: 10px;
    font-size: 13px;
            }
        }
  .submit-button {
    width: 100%;
  }
  .submit-button button {
    width: 117px;
    height: 38px;
    border: 1px solid hsl(264, 83%, 14%);
    font-weight: 300;
    border-radius: 5px;
  }
  .error-message {
    height: 42px;
    line-height: 42px;
    font-weight: 600;
    font-size: 14px;
    font-family: "Poppins";
    color: #ff2727;
  }
}
::v-deep {
  .otp-input-8 {
    display: block;
    line-height: 1;
    padding-left: 0;
    margin: 0;
    &-field {
      display: inline-block;
      vertical-align: top;
      font-size: inherit;
      overflow: hidden;
      background: #1d0640 0% 0% no-repeat padding-box;
      border-radius: 5px;
      &:not(:last-child) {
        margin-right: 22px;
      }
      input {
        border: 0;
        box-sizing: border-box;
        padding: 0;
        width: 47px;
        height: 69px;
        font-size: inherit;
        line-height: 1.75em;
        text-align: center;
        color: white;
      }
    }
  }
}
 .err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  font-weight: 500;
  line-height: 0;
}
</style>
