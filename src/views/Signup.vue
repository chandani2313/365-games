<template>
  <div class="signup-container">
    <div class="content-1">
      <div class="right-content">
        <h1>Create Account</h1>
        <div class="social-logo">
          <a
            target="_blank"
            href="https://api-staging.365games.net/v1/user/auth/facebook"
            class="socialicon_button facebook"
          >
            <i class="fab fa-facebook"></i>
            <span></span>
          </a>
          <a
            target="_blank"
            href="https://api-staging.365games.net/v1/user/auth/google"
            class="socialicon_button facebook"
          >
            <i class="fab fa-google"></i>
            <span></span>
          </a>
          <a
            target="_blank"
            href="https://api-staging.365games.net/v1/user/auth/linkedin"
            class="socialicon_button steam"
          >
            <i class="fab fa-linkedin"></i>
            <span></span>
          </a>
          <a
            target="_blank"
            href="https://api-staging.365games.net/v1/user/auth/discord"
            class="socialicon_button facebook"
          >
            <i class="fab fa-discord"></i>
            <span></span>
          </a>
        </div>
        <div style="padding:10px">Or</div>
        <form>
          <div class="image-wrapper">
            <div class="mask-boy">
              <img src="../assets/Login/mask_boy.png" width="60px" alt="" />
            </div>
             <!-- <div class="input-wrapper">
              <i class="fa fa-user icon"></i>
              <input
                type="text"
                class="my-input"
                v-model="username"
                placeholder="Fullname"
              />
              <div v-if="usernameError" class="err-text">
                {{ usernameError }}
              </div>
            </div> -->
            <div class="input-wrapper">
              <i class="fa fa-user icon"></i>
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
          </div>
          <div class="input-wrapper">
            <i class="fa fa-envelope icon"></i>
            <input
              type="text"
              class="my-input"
              v-model="email"
              placeholder="Email"
            />
            <div v-if="emailError" class="err-text">{{ emailError }}</div>
          </div>
          <div class="input-wrapper">
            <i v-bind:class="[passwordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="passwordSwitchVisibility" style="cursor: pointer;"></i> 
            <input
              :type="passwordFieldType"
              class="my-input"
              v-model="password"
              placeholder="Password"
            />
            <div v-if="passwordError" class="err-text">{{ passwordError }}</div>
          </div>
          <div class="input-wrapper">
            <i v-bind:class="[confirmPasswordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="confirmPasswordSwitchVisibility" style="cursor: pointer;"></i> 
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
            <!-- <i class="fa fa-phone icon"></i>
              <input type="text" class="my-input" v-model="phoneNumber" placeholder="Phone Number" />
                <div v-if="phoneNumberError" class="err-text">{{phoneNumberError}}</div> -->
            <i class="fa fa-flag icon"></i>
            <country-select
              v-model="country"
              :country="country"
              class="my-input"
              placeholder="Country"
              topCountry="IN"
            />
          </div>
          <div class="input-wrapper">
            <VuePhoneNumberInput
              :default-country-code="country"
              @update="updatePhoneNumber"
              :required="true"
              :dark="true"
              :dark-color="'#1e0741'"
              style="padding-bottom:10px"
              v-model="phone"
            />
            <div v-if="phoneNumberError" style="" class="err-text">
              {{ phoneNumberError }}
            </div>
          </div>
          <div class="input-wrapper">
            <i class="fa fa-users icon"></i>
            <input
              type="text"
              class="my-input"
              v-model="referralName"
              placeholder="Referral Name"
            />
            <!-- <div v-if="confirmPasswordError" class="err-text">Password Incorrect</div> -->
          </div>
          <div class="input-wrapper">
            <div class="forgot-password">
              <div class="checkbox-wrapper">
                <div class="checkbox">
                  <input type="checkbox" v-model="checked" />
                </div>
                <div class="forgot">
                  I agree to the
                  <span style="font-weight: 600;" @click="getTermsPage"
                    >Terms & Condition</span
                  >
                </div>
              </div>
              <!-- <div class="forgot">
                Forgot Password ?
              </div> -->
            </div>
            <div v-if="checkedError" class="err-text">{{ checkedError }}</div>
          </div>
          <div class="input-wrapper">
            <button class="btn" @click.prevent="validate()">Signup</button>
          </div>
        </form>
      </div>
    </div>
    <div class="content-2">
      <div class="logo">
        <div><img width="25px" src="../assets/Login/logo.png" alt="" /></div>
        <div>365 Games</div>
      </div>
      <div class="left-content">
        <h1>Welcome Back!</h1>
        <div class="welcome-text" style="">
          You already have an account Please
        </div>
        <router-link
          class="signup-btn"
          data-animation="ripple"
          tag="a"
          :to="{ name: 'Login' }"
          active-class="active"
          exact
        >
          <div>Sign in</div>
        </router-link>
      </div>
    </div>
    <v-dialog v-model="dialog"  transition="dialog-top-transition" max-width="290">   
      <v-card>
          <v-btn
          class="float-right"
            icon
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        <v-card-text class="pt-4" style="font-weight: 600;">
          Password must:
        </v-card-text>
        <v-card-text
          ><ul>
            <li>Have at least one letter</li>
            <li>Have at least one capital letter</li>
            <li>Should Not contain multiple identical consecutive characters</li>
            <li>Should Not be the same as the account name</li>
            <li>Should be at least 8 characters</li>
            <li>Should Not be a common password</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
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
      emailError: "",
      usernameError: "",
      confirmPasswordError: "",
      passwordError: "",
      phone: "",
      phoneNumberError: "",
      country: "",
      checked: "",
      checkedError: "",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ /* eslint-disable-line */,
      regUsername: /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      regPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/,
    };
  },
  components: {},
  methods: {
      passwordSwitchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    confirmPasswordSwitchVisibility() {
      this.confirmPasswordFieldType = this.confirmPasswordFieldType === "password" ? "text" : "password";
    },
    getTermsPage() {
      window.open("https://user-staging.365games.net/terms"); 
    },
    updatePhoneNumber(data) {
      if (!data.isValid) {
        this.phoneNumberError = "Invalid Phone Number.";
      } else {
        this.phoneNumberError = null;
        this.countryCode = data.countryCallingCode;
      }
    },
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
      if (!this.regUsername.test(this.username)) {
        this.usernameError = "Enter a valid username";
      } else {
        this.usernameError = "";
      }
      if (!this.regPassword.test(this.password)) {
        this.passwordError = "Enter a valid password";
        this.dialog = true
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
        this.country !== "" &&
        this.phone !== "" &&
        this.regPassword.test(this.password) &&
        this.reg.test(this.email) &&
       this.regUsername.test(this.username)
      ) {
        this.signup();
      }
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
            name: "EnterOtp",
            params: { userId: user, type: "signup" },
          });
          // this.$store.state.auth.global_email = this.email;
          // this.$notify({
          //       title: 'Success.',
          //       group: 'notifications',
          //       text: 'Please verify your email.',
          //       duration: 3000,
          //   });
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
        });
    },
  },
};
</script>
<style scoped>
.v-dialog > .v-card > .v-card__text {
    padding: 0 24px 10px;
    color: #1e0741;
     font-family: 'Poppins';
}
select {
  background: rgb(30, 7, 65);
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  color: white;
  font-size: 13px;
}
.signup-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.content-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e0741;
  min-height: 100%;
  background-image: url("../assets/Login/signup_background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.left-image {
  position: absolute;
  width: 500px;
  height: 100%;
}
.left-content {
  text-align: center;
  color: #f4ebd8;
}
.welcome-text {
  font-size: 20px;
  padding: 10px;
}
.signup-btn {
  width: 150px;
  border: 1px solid white;
  padding: 10px;
  justify-content: center;
  display: flex;
  border-radius: 4px;
  margin: auto;
  color: #f4ebd8 !important;
}
.logo {
  position: absolute;
  display: flex;
  top: 20px;
  left: 25px;
  width: 153px;
  padding: 10px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
}
.content-1 {
  /* background: blueviolet; */
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-content {
  text-align: center;
  color: #1e0741;
}
.social-logo {
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 34px;
}
.socialicon_button {
  padding-right: 20px;
}
.v-application a {
  color: #1e0741;
}
.mask-boy {
  position: absolute;
  right: 0;
  bottom: 50px;
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
.forgot {
  color: #1e0741;
  cursor: pointer;
  font-size: 14px;
}
.forgot-password {
  display: flex;
  justify-content: space-between;
}
.checkbox-wrapper {
  display: inline-flex;
  float: left;
  padding-bottom: 5px;
}
.checkbox {
  padding-right: 4px;
  display: inline;
}
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  line-height: 0;
  font-weight: 500;
}
.btn {
  background: #1e0741;
  width: 170px;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border-style: none;
  margin: 15px auto;
  cursor: pointer;
  /* box-shadow: 5px 10px 20px #141f28; */
  color: white;
  font-weight: 600;
}
.image-wrapper {
  position: relative;
}
@media only screen and (max-width: 430px) {
  .content-1,
  .content-2 {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (min-width: 450px) {
  .content-2 {
    width: 40%;
    height: 100%;
  }
  .content-1 {
    width: 60%;
    height: 100%;
  }
}
@media only screen and (min-width: 481px) and (max-width: 768px) {
  h1 {
    padding-top: 60px;
  }
}
</style>
