<template>
    <div class="forgot-password-container">
        <div class="logo">
            <div><img width="25px" src="../assets/Login/logo.png" alt="" /></div>
            <div>365 Games</div>
        </div>
        <div class="forgot-password-inner-container">
            <div class="doll">
                <img src="/img/assets/forgot-password/character.png" alt="doll">
            </div>
            <div class="content">
                <div class="lock">
                    <v-icon color="#1D0640" style="font-size: 70px;">mdi-lock</v-icon>
                </div>
                <div class="trouble-text">
                    Trouble Logging in?
                </div>
                <div class="text">
                    Enter Your email and we'll send you a link to get back into your account
                </div>
                <div class="input-wrapper">
                    <input type="text" class="my-input" v-model="email" placeholder="Enter Email Address" />
                    <div v-if="emailError" class="err-text">{{emailError}}</div>
                </div>
                <div class="submit-button">
                    <button type="submit" @click.prevent="validate()">Submit</button>
                </div>
                <div class="verification-mail-sent">
                    Verification mail sent to your mail id.
                </div>
                <div class="register-login">
                    <span class="new-user">New User?</span>
                    <router-link  data-animation="ripple"  tag="span" :to="{ name: 'Signup'}"  active-class="active" exact>
                <span class="register">Sign up</span> 
              </router-link>
                    <span>|</span>
                    <span class="new-user">Registered User?</span>
                     <router-link  data-animation="ripple"  tag="span" :to="{ name: 'Login'}"  active-class="active" exact>
                <span class="register">Login</span> 
              </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "ForgotPassword",
     data() {
    return {
      email: '',
      emailError: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,/* eslint-disable-line */
    };
  },
  components: {
  },
  methods: {
    validate() {
      if (!this.reg.test(this.email)) {
        this.emailError = 'Enter a valid mail id';
      } else {
        this.emailError = '';
      }

      if (this.email !== '') {
        this.forgotPassword();
      }
    },
    forgotPassword() {
      axios
        .post('/user/initiate/password-reset', {
          criteria: {email: this.email.toLowerCase().trim()}
        })
        .then((response) => {
          console.log("response is", response.data)
          const user = response.data.userId;
          this.$router.push({ name: 'EnterOtp', params: { userId: user, type: 'forgot-password' } });
        })
        .catch((e) => {
            console.log('err', e.response.data)
                if (e.response.data.type === 'email_error') {
                    const ForgotData = e.response.data.message;
                    this.emailError = ForgotData;
                }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
    .forgot-password-container {
       background: linear-gradient(#FFFFFF 50%, #1D0640 50%);
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
    .forgot-password-inner-container {
        min-height: 280px;
        position: relative;
        .doll {
            position: absolute;
            width: 320px;
            height: 400px;
            top: -115px;
            right: -181px;
            img {
                object-fit: contain;
            }
        }
    }
    .content {
        padding: 50px;
        box-shadow: 3px 0px 6px #00000029;
        width: 395px;
        text-align: center;
        display: flex;
        flex-flow: column;
        background-color: white;
        border-radius: 5px;
        font-family: 'Poppins';
        .trouble-text {
            letter-spacing: 0px;
            color: #1D0640;
            font-weight: bold;
            font-size: 22px;
            padding-bottom: 9px;
        }
        .text {
            font-family: 'Poppins';
            font-size: 13px;
            font-weight: 300;
            letter-spacing: 0px;
            color: #1D0640;
            padding-bottom: 9px;
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
                background: #1D0640;
                color: white;
                font-size: 13px;
                width: 295px;
                height: 45px;
                padding: 10px;
                font-weight: 300;
                border-radius: 5px;
                margin-bottom: 10px;
            }
        }
        .submit-button {
            width: 100%;
            padding-bottom: 9px;
        }
        .submit-button button {
            width: 117px;
            height: 38px;
            border: 1px solid hsl(264, 83%, 14%);
            font-weight: 300;
            border-radius: 5px;
            font-weight: 600;
            font-size: 14px;
        }
        .verification-mail-sent {
            font-weight: 500;
            font-size: 19px;
            letter-spacing: 0px;
            color: #1D0640;
            padding-bottom: 9px;
        }
        .register-login {
            font-size: 14px;
            span:not(:first-child) {
                padding-left: 3px;
            }
            .new-user {
                font-weight: 300;
            }
            .register {
                font-weight: 500;
                cursor: pointer;
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