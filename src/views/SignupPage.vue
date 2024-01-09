<template>
  <div class="signup_main">
    <div class="signup_container">
      <div class="content-1">
        <div class="rightside">
          <div class="logo_wrap">
            <img src="../assets/Signuppage/logo.svg" />
          </div>
          <div class="middle_wrap">
            <div class="left_wrap">
              <div class="text_wrap">Create Account</div>
              <div class="text_wrap1">
                and <span class="play-purpose">Play For Purpose</span>
              </div>
              <div class="text_wrap2">If you already have an account</div>
              <div class="text_wrap3">
                You can <span class="login" @click="login">Login here !</span>
              </div>
            </div>
            <div class="right_wrap">
              <img src="../assets/Signuppage/middleimg.svg" />
            </div>
          </div>
          <div class="bottomimg_wrap">
            <img src="../assets/Signuppage/bottomimg.svg" />
          </div>
        </div>
      </div>
      <div class="content-2">
        <div class="leftside">
          <form>
            <h2>Sign Up</h2>
            <div class="input-wrapper">
              <input
                type="text"
                class="my-input"
                v-model="username"
                placeholder="Username"
              />
              <div v-if="usernameError" class="err-text">
                {{ usernameError }}
              </div>
            </div>
            <div class="input-wrapper">
              <input
                type="text"
                class="my-input"
                v-model="email"
                placeholder="Email"
              />
              <div v-if="emailError" class="err-text">{{ emailError }}</div>
            </div>
            <div class="input-wrapper" style="positon: relative">
              <i
                v-bind:class="[
                  passwordFieldType === 'password'
                    ? 'fa fa-eye-slash icon'
                    : 'fa fa-eye icon',
                ]"
                @click="passwordSwitchVisibility"
                style="cursor: pointer"
              ></i>
              <input
                :type="passwordFieldType"
                class="my-input"
                style="positon: relative"
                v-model="password"
                placeholder="Password"
              />
              <div v-if="passwordError" class="err-text">
                {{ passwordError }}
              </div>

              <v-dialog
                v-model="dialog"
                style="positon: absolute"
                max-width="253"
              >
                >
                <v-card>
                  <v-btn class="float-right" icon @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>

                  <v-card-text
                    class="pt-4"
                    style="font-weight: 700; color: rgba(114, 85, 233, 1)"
                  >
                    Password must:
                  </v-card-text>
                  <v-card-text
                    ><ul>
                      <li><i class="fa" :class="[ passwordValidation.hasLowerCase ? 'fa-check': 'fa-times' ]"></i> Have at least one letter</li>
                      <li><i class="fa" :class="[ passwordValidation.hasUpperCase ? 'fa-check': 'fa-times' ]"></i> Have at least one capital letter</li>
                      <li><i class="fa" :class="[ passwordValidation.hasSpecialCharacter ? 'fa-check': 'fa-times' ]"></i>
                        Should Not contain multiple identical <br />
                        consecutive characters
                      </li>
                      <li><i class="fa" :class="[ !passwordValidation.isAccountName ? 'fa-check': 'fa-times' ]"></i> Should Not be the same as the account <br />
                        name
                      </li>
                      <li><i class="fa" :class="[ !passwordValidation.hasNumber ? 'fa-check': 'fa-times' ]"></i> Have at least one Number</li>
                      <li><i class="fa" :class="[ passwordValidation.hasEightCharacters ? 'fa-check': 'fa-times' ]"></i> Should be at least 8 characters</li>
                      <li><i class="fa" :class="[ !passwordValidation.isCommonPassword ? 'fa-check': 'fa-times' ]"></i> Should Not be a common password</li>
                    
                    </ul>
                    <div class="tooltip"></div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <div class="input-wrapper">
              <i
                v-bind:class="[
                  confirmPasswordFieldType === 'password'
                    ? 'fa fa-eye-slash icon'
                    : 'fa fa-eye icon',
                ]"
                @click="confirmPasswordSwitchVisibility"
                style="cursor: pointer"
              ></i>
              <input
                :type="confirmPasswordFieldType"
                class="my-input"
                v-model="confirmPassword"
                placeholder="Confirm Password"
              />
              <div v-if="confirmPasswordError" class="err-text">
                {{ confirmPasswordError }}
              </div>
            </div>
            <div class="input-wrapper">
              <VuePhoneNumberInput
                :default-country-code="country"
                @update="updatePhoneNumber"
                :required="true"
                :dark="true"
                :dark-color="'rgb(24 24 24)'"
                v-model="phone"
              />
            </div>
            <div v-if="phoneNumberError" class="err-text">
              {{ phoneNumberError }}
            </div>
            <div class="input-wrapper" style="margin-top: 10px">
              <input
                type="text"
                class="my-input"
                v-model="referralName"
                placeholder="Referral Name"
              />
            </div>
             <div v-if="referralError" class="err-text">
              {{ referralError }}
            </div>
            <div class="input-wrapper">
              <div class="forgot-password">
                <div class="checkbox-wrapper">
                  <div class="checkbox">
                    <input
                      type="checkbox"
                      class="checkbox-wrap"
                      v-model="checked"
                    />
                  </div>
                  <div class="forgot">
                    I agree to the
                    <span class="terms" @click="SignupPopup()"
                      >Terms & Condition</span
                    >
                  </div>
                </div>
              </div>
              <div v-if="checkedError" class="err-text">{{ checkedError }}</div>
            </div>
            <div class="input-wrapper">
              <button class="btn" @click.prevent="validate()">Sign Up</button>
            </div>
            <div class="or_wrap">- OR -</div>
            <div class="icon_wrap">
              <a href="https://api-staging.365games.net/v1/user/auth/facebook"
                ><img src="../assets/Signuppage/facebook.svg"
              /></a>
              <a href="https://api-staging.365games.net/v1/user/auth/google"
                ><img src="../assets/Signuppage/google.svg"
              /></a>
              <a href="https://api-staging.365games.net/v1/user/auth/linkedin"
                ><img width="16" src="../assets/Signuppage/linkedin.png"
              /></a>
              <a href="https://api-staging.365games.net/v1/user/auth/discord"
                ><img src="../assets/Signuppage/discord.svg"
              /></a>
            </div>
          </form>
        </div>
      </div>
      <TermsPopup v-if="showModal" @closeSignupPopup="closePopup" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TermsPopup from "./TermsPopup.vue";
const commonPassworList = require('fxa-common-password-list');
export default {
  name: "Signup",

  data() {
    return {
      passwordFieldType: "password",
      confirmPasswordFieldType: "password",
      dialog: false,
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      referralName: "",
      phone: "",
      phoneNumberError: "",
      emailError: "",
      usernameError: "",
      confirmPasswordError: "",
      passwordError: "",
      country: "IN",
      checked: "",
      checkedError: "",
      referralError: "",
      showModal: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ /* eslint-disable-line */,
      regUsername: /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      regPassword:
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/,
    };
  },
  components: { TermsPopup },
  computed: {
    passwordValidation () {
      return {
        hasUpperCase: /[A-Z]/.test(this.password),
        hasLowerCase: /[a-z]/.test(this.password),
        hasNumber: /\d/.test(this.password),
        hasSpecialCharacter: /[!@#$%^&*]/.test(this.password),
        hasEightCharacters: this.password.length >= 8,
        isAccountName: this.password === this.username,
        isCommonPassword: commonPassworList.test(this.password)
      }
    }
  },
  methods: {
    updatePhoneNumber(data) {
      if (!data.isValid && this.phone !== "" && this.phone !== null) {
        this.phoneNumberError = "Invalid Phone Number.";
      } else {
        this.phoneNumberError = null;
        this.countryCode = data.countryCallingCode;
      }
    },
    SignupPopup() {
      this.showModal = true;
    },
    closePopup() {
      this.showModal = false;
    },
    passwordSwitchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    confirmPasswordSwitchVisibility() {
      this.confirmPasswordFieldType =
        this.confirmPasswordFieldType === "password" ? "text" : "password";
    },
    // getTermsPage() {
    //   window.open("https://365-user.indiancreed.com/terms");
    // },
    validate() {
      if (!this.reg.test(this.email)) {
        this.emailError = "Enter a valid mail id";
      } else {
        this.emailError = "";
      }
      if (this.password === "") {
        this.passwordError = "Password is required.";
      } else {
        this.passwordError = "";
      }
      if (this.confirmPassword === "") {
        this.confirmPasswordError = "Confirm your password";
      } else {
        this.confirmPasswordError = "";
      }
      if (!this.password.length < 1 && !this.confirmPassword.length < 1) {
        if (this.password !== this.confirmPassword) {
          this.confirmPasswordError = "Password did not match.";
        } else {
          this.confirmPasswordError = "";
        }
      }
      if (this.username === "") {
        this.usernameError = "Username is required.";
      } else {
        this.usernameError = "";
      }
      if (this.phone === "" || this.phone === null) {
        this.phoneNumberError = "Phone Number is required.";
      } else {
        this.phoneNumberError = "";
      }
      if (!this.regUsername.test(this.username)) {
        this.usernameError = "Enter a valid username";
      } else {
        this.usernameError = "";
      }
      if (!this.regPassword.test(this.password)) {
        this.passwordError = "Password is too weak";
        this.dialog = true;
      } else {
        this.passwordError = "";
      }
      if (!this.checked) {
        this.checkedError = "Accept the terms and conditions";
      } else {
        this.checkedError = "";
      }
      if (
        this.checked &&
        this.password === this.confirmPassword &&
        this.phone !== "" &&
        this.country !== "" &&
        this.regPassword.test(this.password) &&
        this.reg.test(this.email) &&
        this.regUsername.test(this.username)
      ) {
        this.signup();
      }
    },
    login() {
      this.$router.push("/login");
    },
    signup() {
      const data = {
        email: this.email.toLowerCase().trim(),
        password: this.password,
        username: this.username,
        phone: this.phone,
        country: this.country,
        countryCode: this.countryCode,
      };
      if (this.referralName) {
        data["referralName"] = this.referralName;
      }
      axios
        .post("/user/signup", {
          data,
        })
        .then((response) => {
          const user = response.data.userId;
          this.$router.push({
            // name: "EnterOtp",
            // params: { userId: user, type: "signupsms" },
            name: "EnterVerifyOtp",
            params: { userId: user, type: "signup" },
          });
        })
        .catch((e) => {
          console.log("err response", e.response.data);
          if (e.response.data.type === "email_error") {
            const emailData = e.response.data.message;
            this.emailError = emailData;
          } else {
            this.emailError = "";
          }

          if (e.response.data.type === "username_error") {
            const usernamelData = e.response.data.message;
            this.usernameError = usernamelData;
          } else {
            this.usernameError = "";
          }

          if (e.response.data.type === "password_error") {
            const passwordData = e.response.data.message;
            this.passwordError = passwordData;
          } else {
            this.passwordError = "";
          }
          if (e.response.data.type === "phone_error") {
            const phoneData = e.response.data.message;
            this.phoneNumberError = phoneData;
          } else {
            this.phoneNumberError = "";
          }
           if (e.response.data.type === "referrer_error") {
            const referralData = e.response.data.message;
            this.referralError = referralData;
          } else {
            this.referralError = "";
          }
        });
    },
  },
};
</script>
<style scoped>
.v-dialog > .v-card > .v-card__text {
  padding: 0px 0px 0px 15px;
  font-family: "Poppins";
  border-radius: 10px;
}
::v-deep .v-dialog {
  margin: 1% !important;
  overflow-y: initial !important;
  position: absolute !important;
  left: 40% !important;
  top: 34% !important;
}
.v-card {
  width: 253px;
  height: 271px;
  padding-top: 4%;
}
.v-card-text {
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  padding: 2px;
}
.v-dialog__content {
  position: absolute;
  top: -268px;
  left: -30px;
}
.tooltip {
  content: "";
  position: absolute;
  top: 97%;
  left: 100% !important;
  margin-top: -35px;
  border-width: 11px;
  border-style: solid;
  border-color: transparent transparent transparent #ffffff;
  z-index: 2;
}
ul {
  list-style: none;
  padding: unset;
}

ul li::before {
  /* content: "\2022"; */
  color: rgba(114, 85, 233, 1);
  font-weight: bold;
  display: inline-block;
  width: 1rem;
  margin-left: -1rem;
}
li {
  font-family: Poppins;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  padding: 5px 2px;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: left;
  list-style: none;
}
h2 {
  color: #fefeff;
  margin-bottom: 25px;
  margin-top: 35px;
  /* line-height: 37px;
  font-size: 30px; */
  font: normal normal 600 30px/37px Poppins;
  text-align: left;
}
body {
  background: #070707;
}
.signup_main {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15% !important;
  /* width:1440px; 
  margin:0px auto; */
  height: 100%;
  padding: 5% 0% 0% 3%;
  flex-wrap: wrap;
  text-align: center;
  background: #070707 !important;
}
.signup_container {
  display: flex;
  width: 1440px;
  margin: 0px auto;
}
.content-2 {
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0% 0% 0% 27%;
  padding-bottom: 6%;
}
.content-1 {
  display: flex;
  position: relative;
}
.middle_wrap {
  display: flex;
  justify-content: center;
  /* margin: 35% -30% 53% 16%; */
  margin: 50% -10% 50% 0%;
  padding: auto;
  position: relative;
}
.left_wrap {
  align-items: center;
}
.right_wrap {
  top: 32%;
  position: absolute;
  right: -40%;
}
.text_wrap,
.text_wrap1,
.text_wrap2,
.text_wrap3 {
  color: #fefeff;
  font-style: normal;
  text-align: left;
}
.text_wrap {
  font-size: 50px;
  font-weight: 600;
  line-height: 75px;
  font-family: Poppins;
}
.text_wrap1 {
  font-size: 35px;
  font-weight: 300;
  line-height: 53px;
}
.text_wrap2 {
  font-size: 16px;
  font-weight: 400;
  padding-top: 15%;
  line-height: 24px;
}
.text_wrap3 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.bottomimg_wrap {
  position: absolute;
  bottom: 0;
  left: 20px;
}
.play-purpose {
  font: italic normal 700 35px/53px Poppins;
  color: #9672ff;
}
.login {
  font: normal normal 600 16px/24px Poppins;
  color: #9672ff;
  padding-left: 10px;
  cursor: pointer;
}
.v-application a {
  color: #b0b0b0;
}
.input-wrapper {
  padding-bottom: 10px;
}
.my-input::placeholder {
  color: #b0b0b0;
}
.my-input {
  background: rgba(88, 88, 88, 0.2);
  border-radius: 8px;
  width: 419px;
  height: 60px;
  padding-left: 20px;
  color: #b0b0b0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
}
.icon {
  margin-left: 375px;
  position: absolute;
  color: White !important;
  margin-top: 25px;
  opacity: 0.2;
  font-size: 20px;
}
.my-input::placeholder {
  color: #b0b0b0;
}
.forgot {
  /* color: #B0B0B0; */
  color: rgba(176, 176, 176, 0.8);
  cursor: pointer;
  padding-top: 3px;
  font: normal normal 300 12px/15px Poppins;
}
.terms {
  font: normal normal bold 12px/15px Poppins;
  color: #fff;
}
.forgot-password {
  display: flex;
  justify-content: space-between;
}
.checkbox-wrapper {
  display: flex;
  margin-top: 10px;
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
  line-height: 0;
  font-weight: 500;
    margin-top: 7px;
    padding-bottom: 7px;
}
.btn {
  background: linear-gradient(180deg, #9672ff 0%, #6b4fe8 100%);
  width: 419px;
  height: 60px;
  /* padding: 10px; */
  outline: none;
  border-radius: 5px;
  border-style: none;
  margin: 15px auto;
  cursor: pointer;
  /* box-shadow: 5px 10px 20px #141f28; */
  color: white;
  font-weight: 700;
  line-height: 24px;
  font-size: 19px;
}
.or_wrap {
  display: flex;
  justify-content: center;
  color: #f8f8f8;
  font: normal normal 300 17px/21px Poppins;
  padding: 60px 0px;
}
.icon_wrap {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 10px 10px 10px;
}
@media only screen and (min-width: 1440px) and (max-width: 640px) {
  ::v-deep .v-dialog {
    margin: 1% !important;
    overflow-y: initial !important;
    position: fixed !important;
    /* left: 40%!important;
    top: 34%!important; */
  }
}
@media only screen and (min-width: 280px) and (max-width: 640px) {
  h2 {
    padding-top: 0%;
    margin-top: 0%;
  }
  .signup_container {
    width: 100%;
  }
  .logo_wrap {
    padding: 10% 0% 0% 0%;
  }
  .bottomimg_wrap,
  .right_wrap {
    display: none;
  }
  /* .right_wrap>img{
    top: 20%;
    position: absolute;
    right: -45%;
    width:100px;
    height: 200px;
  } */
  .middle_wrap {
    display: flex;
    margin: 25% auto;
  }
  .text_wrap1 > span {
    font-size: 25px;
  }
  .text_wrap {
    font-size: 35px;
  }
  .my-input,
  .btn {
    width: 320px;
  }
}
.vue-recycle-scrollbar__item-view{
background-color: #ffffff;
}
</style>
