<template>
  <div class="login-container">
    <div class="content-1">
      <div class="logo">
        <div><img width="25px" src="../assets/Login/logo.png" alt="" /></div>
        <div>365 Games</div>
      </div>
      <div class="left-content">
        <h1>Hello! Friends</h1>
        <div class="welcome-text" style="">
          Enter Your Personal Details and start journey
        </div>
        <router-link class="signup-btn" data-animation="ripple"  tag="a" :to="{ name: 'Signup'}"  active-class="active" exact>
          <div>Signup</div>
        </router-link>
      </div>
    </div>
    <div class="content-2">
      <div class="right-content">
        <h1>Sign In To 365 Games</h1>
        <div class="social-logo">
          <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/facebook" class="socialicon_button facebook">
            <i class="fab fa-facebook"></i>
            <span></span>
          </a>
          <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/google" class="socialicon_button facebook">
            <i class="fab fa-google"></i>
            <span></span>
          </a>
          <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/linkedin" class="socialicon_button steam">
            <i class="fab fa-linkedin"></i>
            <span></span>
          </a>
          <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/discord" class="socialicon_button facebook">
            <i class="fab fa-discord"></i>
            <span></span>
          </a>
        </div>
        <div style="padding:10px">Or</div>
        <form>
          <div class="image-wrapper">
          <div class="mask-boy">
            <img
              src="../assets/Login/mask_boy.png"
              width="60px"
              alt=""
            />
          </div>
          <div class="input-wrapper">
            <i class="fa fa-envelope icon"></i>
            <input type="text" class="my-input" v-model="email" placeholder="Email" />
            <div v-if="emailError" class="err-text">{{emailError}}</div>
          </div>
          </div>
          <div class="input-wrapper">
            <i v-bind:class="[passwordFieldType === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon']" @click="switchVisibility" style="cursor: pointer;"></i> 
            <input :type="passwordFieldType" id="password" class="my-input" v-model="password" placeholder="Password" />
            <div v-if="passwordError" class="err-text">{{passwordError}}</div>
          </div>
          <div class="input-wrapper">
            <div class="forgot-password">
              <div class="checkbox-wrapper">
                <div class="checkbox">
                  <input type="checkbox" v-model="rememberMe" />
                </div>
                <div class="forgot">
                  Remember Me
                </div>
              </div>
              <router-link class="forgot" data-animation="ripple"  tag="a" :to="{ name: 'ForgotPasswordNew'}"  active-class="active" exact>
                Forgot Password ?
              </router-link>
            </div>
          </div>
          <div class="input-wrapper">
            <button class="btn" @click.prevent="validate()">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      passwordFieldType: "password",
      rememberMe: false,
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,/* eslint-disable-line */
    };
  },
  components: {
  },
  methods: {
   switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    validate() {
      if (!this.reg.test(this.email)) {
        this.emailError = 'Enter a valid mail id';
      } else {
        this.emailError = '';
      }

      if (this.password === '') {
        this.passwordError = 'Password is required.';
      } else {
        this.passwordError = '';
      }

      if (this.reg.test(this.email) && this.password !== '') {
        this.login();
      }
    },
    login() {
      axios
        .post('/user/login', {
          criteria: {
            email: this.email.toLowerCase().trim(),
            password: this.password,
            rememberMe:this.rememberMe
            },
        })
        .then((response) => {
            this.$store.commit('LOGIN', response.data);
            this.$router.push('/dashboard');
        })
        .catch((e) => {
          if (e.response.data.type === 'email_error') {
            const emailData = e.response.data.message;
            this.emailError = emailData;
            if(e.response.data.message === 'Email not verified') {
              const user = e.response.data.userId
              this.$router.push({ name: 'EnterOtp', params: { userId: user, type: 'signup' } });
            }
          } else {
            this.emailError = '';
          }

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
.login-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.content-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e0741;
  min-height: 100%;
  background-image: url("../assets/Login/login_background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  color: black;
  background: white;
  width: 153px;
  padding: 10px;
  justify-content: space-between;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
}
.content-2 {
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
  font-size: 34px;
  cursor: pointer;
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
  display: flex;
  align-items: flex-end;
}
.checkbox {
  padding-right: 4px;
  display: inline;
}
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  font-weight: 500;
  line-height: 0;
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
.image-wrapper{
  position: relative;
}
@media only screen and (max-width: 430px) {
  .content-1,.content-2 {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (min-width: 450px) {
  .content-1 {
    width: 45%;
    height: 100%;
  }
   .content-2 {
    width: 55%;
    height: 100%;
  }
}
</style>
