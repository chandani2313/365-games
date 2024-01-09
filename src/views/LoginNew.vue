<template>
  <div class="login_container">
    <div class="content-1">
      <form>
        <div class="right_content">
          <div class="login_header">Login</div>
          <div class="register_wrap">
            Don’t have an Account?<span class="register" @click="signup">
              Register</span
            >
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
        <div class="input-wrapper">
          <input
            :type="passwordFieldType"
            id="password"
            class="my-input"
            v-model="password"
            placeholder="Password"
          />
          <i
            v-bind:class="[
              passwordFieldType === 'password'
                ? 'far fa-eye-slash icon'
                : 'far fa-eye icon',
            ]"
            @click="switchVisibility"
            style="cursor: pointer"
          ></i>
          <div v-if="passwordError" class="err-text">{{ passwordError }}</div>
        </div>
        <div class="input-wrapper">
          <div class="forgot-password">
            <div class="checkbox-wrapper">
              <div class="checkbox">
                <input
                  type="checkbox"
                  class="checkbox-wrap"
                  v-model="rememberMe"
                />
              </div>
              <div class="forgot">Remember Me</div>
            </div>
            <router-link
              class="forgot"
              data-animation="ripple"
              tag="a"
              :to="{ name: 'ForgotPasswordNew' }"
              active-class="active"
              exact
            >
              Forgot Password ?
            </router-link>
          </div>
        </div>
        <div class="input-wrapper">
          <button class="btn" @click.prevent="validate()">
            Login to Your Account
          </button>
        </div>
        <div
          style="
            padding: 20%;
            color: #b0b0b0;
            font-size: 20px;
            line-height: 25px;
            font-style: normal;
            font-weight: 300;
          "
        >
          - OR -
        </div>
        <div class="social-logo">
          <a
            href="https://api-staging.365games.net/v1/user/auth/google"
            class="socialicon_button facebook"
          >
            <!-- <i class="fab fa-google"></i> -->
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2119 0.4375C5.37688 0.4375 0.646973 5.16706 0.646973 11C0.646973 16.8329 5.37688 21.5625 11.2119 21.5625C20.0226 21.5625 22.0087 13.383 21.1824 9.24011H18.7925H18.0157H11.2095V12.7607H18.0197C17.2367 15.7957 14.4889 18.0411 11.2095 18.0411C7.32085 18.0411 4.16754 14.8886 4.16754 11C4.16754 7.11138 7.32085 3.95886 11.2095 3.95886C12.9779 3.95886 14.5892 4.61521 15.8258 5.69177L18.326 3.19159C16.4479 1.48046 13.952 0.4375 11.2119 0.4375Z"
                fill="white"
              />
            </svg>
            <span>Login With Google</span>
          </a>
          <a
            href="https://api-staging.365games.net/v1/user/auth/facebook"
            class="socialicon_button facebook"
          >
            <!-- <i class="fab fa-facebook"></i> -->
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.36 5.27996H12.76C13.025 5.27996 13.24 5.06492 13.24 4.79996V1.5662C13.24 1.31468 13.0466 1.1054 12.796 1.08764C12.0323 1.0334 10.5405 0.959961 9.46769 0.959961C6.52001 0.959961 4.60001 2.72636 4.60001 5.9366V9.11996H1.24001C0.97505 9.11996 0.76001 9.335 0.76001 9.59996V12.96C0.76001 13.2249 0.97505 13.44 1.24001 13.44H4.60001V22.56C4.60001 22.8249 4.81505 23.04 5.08001 23.04H8.44001C8.70497 23.04 8.92001 22.8249 8.92001 22.56V13.44H12.3866C12.6314 13.44 12.8368 13.2561 12.8637 13.0128L13.2371 9.65276C13.2688 9.3686 13.0461 9.11996 12.76 9.11996H8.92001V6.71996C8.92001 5.9246 9.56465 5.27996 10.36 5.27996Z"
                fill="white"
              />
            </svg>
            <span>Login With Facebook</span>
          </a>
          <a
            href="https://api-staging.365games.net/v1/user/auth/discord"
            class="socialicon_button facebook"
          >
            <!-- <i class="fab fa-discord"></i> -->
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.645 2.60015C18.5752 0.934523 15.3008 0.652179 15.1607 0.642023C14.9433 0.623741 14.7361 0.745617 14.6468 0.946711C14.6386 0.958898 14.5675 1.12343 14.4883 1.37937C15.8574 1.61093 17.5393 2.07609 19.0607 3.02062C19.3044 3.17093 19.3796 3.49187 19.2293 3.73562C19.1297 3.89609 18.9611 3.98343 18.7864 3.98343C18.693 3.98343 18.5975 3.95702 18.5122 3.90421C15.896 2.28124 12.6297 2.19999 12 2.19999C11.3703 2.19999 8.10207 2.28124 5.48785 3.90421C5.2441 4.05655 4.92316 3.9814 4.77285 3.73765C4.62051 3.49187 4.69566 3.17296 4.93941 3.02062C6.46082 2.07812 8.14269 1.61093 9.51176 1.3814C9.43254 1.12343 9.36144 0.960929 9.35535 0.946711C9.26394 0.745617 9.05879 0.619679 8.83941 0.642023C8.69926 0.652179 5.42488 0.934523 3.3266 2.62249C2.23176 3.63609 0.0400391 9.55921 0.0400391 14.68C0.0400391 14.7714 0.064414 14.8587 0.109102 14.938C1.62035 17.5948 5.74582 18.2895 6.68629 18.32C6.69035 18.32 6.69644 18.32 6.70254 18.32C6.8691 18.32 7.02551 18.2408 7.12301 18.1067L8.07363 16.7986C5.50816 16.1364 4.19801 15.0111 4.12285 14.9441C3.90754 14.7551 3.88723 14.4261 4.07816 14.2108C4.26707 13.9955 4.59613 13.9751 4.81144 14.1641C4.84191 14.1925 7.25504 16.24 12 16.24C16.7532 16.24 19.1663 14.1844 19.1907 14.1641C19.406 13.9772 19.733 13.9955 19.9239 14.2128C20.1128 14.4281 20.0925 14.7551 19.8772 14.9441C19.8021 15.0111 18.4919 16.1364 15.9264 16.7986L16.8771 18.1067C16.9746 18.2408 17.131 18.32 17.2975 18.32C17.3036 18.32 17.3097 18.32 17.3138 18.32C18.2543 18.2895 22.3797 17.5948 23.891 14.938C23.9357 14.8587 23.96 14.7714 23.96 14.68C23.96 9.55921 21.7683 3.63609 20.645 2.60015ZM8.62004 12.6C7.61457 12.6 6.80004 11.6697 6.80004 10.52C6.80004 9.3703 7.61457 8.43999 8.62004 8.43999C9.62551 8.43999 10.44 9.3703 10.44 10.52C10.44 11.6697 9.62551 12.6 8.62004 12.6ZM15.38 12.6C14.3746 12.6 13.56 11.6697 13.56 10.52C13.56 9.3703 14.3746 8.43999 15.38 8.43999C16.3855 8.43999 17.2 9.3703 17.2 10.52C17.2 11.6697 16.3855 12.6 15.38 12.6Z"
                fill="white"
              />
            </svg>
            <span>Login With Discord</span>
          </a>
          <a
            href="https://api-staging.365games.net/v1/user/auth/linkedin"
            class="socialicon_button steam"
          >
            <!-- <i class="fab fa-steam-symbol"></i> -->
            <img width="22" src="../assets/Signuppage/linkedin.png">
            <span>Login With LinkedIn</span>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "LoginNew",
  data() {
    return {
      passwordFieldType: "password",
      rememberMe: false,
      email: "",
      password: "",
      passwordError: "",
      emailError: "",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ /* eslint-disable-line */,
    };
  },
  components: {},
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
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

      if (this.reg.test(this.email) && this.password !== "") {
        this.login();
      }
    },
    signup() {
      this.$router.push("/SignupPage");
    },
    login() {
      axios
        .post("/user/login", {
          criteria: {
            email: this.email.toLowerCase().trim(),
            password: this.password,
            rememberMe: this.rememberMe,
          },
        })
        .then((response) => {
          this.$store.commit("LOGIN", response.data);
          this.$store.dispatch('getSubscriptionStatus');
          this.$router.push("/dashboard");
        })
        .catch((e) => {
          if (e.response.data.type === "email_error") {
            const emailData = e.response.data.message;
            this.emailError = emailData;
            if (e.response.data.message === "Email not verified") {
              const user = e.response.data.userId;
              this.$router.push({
                name: "EnterVerifyOtp",
                params: { userId: user, type: "signup" },
              });
            }
          } else {
            this.emailError = "";
          }
          if (e.response.data.type === "phone_error") {
            const emailData = e.response.data.message;
            this.emailError = emailData;
            if (e.response.data.message === "Phone Number not verified") {
              const user = e.response.data.userId;
              this.$router.push({
                name: "EnterOtp",
                params: { userId: user, type: "signupsms" },
              });
            }
          } else {
            this.emailError = "";
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
  padding: 4%;
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
    margin-left: -35px;
    position: absolute;
    color: White!important;
    margin-top: 25px;
    opacity: 0.2;

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
    height: 100%;
    margin: auto;
  }
}
</style>
