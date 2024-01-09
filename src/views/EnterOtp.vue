<template>
  <div class="login_container">
  <div class="enter-otp-container">

    <div class="enter-otp-inner-container">

      <div class="content">
        <!-- <div class="text">
          Please enter the verification code that was sent to your email
        </div> -->
        <div class="text">
          Please enter the OTP for Mobile Number
        </div>
        <div class="otp">
          <otp-input v-model="otp"></otp-input>
          <div class="resend-otp" @click="resendOtp">Resend OTP</div>
        </div>
        <div class="submit-button">
          <button type="submit" @click.prevent="validate()">Submit</button>
        </div>
        <div class="error-message">
          <span v-if="otpError">{{ otpError }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="gradation1_img_left"></div>
  <div class="gradation2_img_right"></div> -->
  </div>
</template>

<script>
import axios from "axios";
import { setForgetPasswordToken } from '../StorageFactory'

import OTPInput from "@8bu/vue-otp-input";
export default {
  name: "EnterOtp",
  components: {
    "otp-input": OTPInput,
  },
  data() {
    return {
      userId: this.$route.params.userId,
      otp: "",
      otpError: "",
    };
  },
  methods: {
    validate() {
      if (this.otp === "") {
        this.otpError = "Otp required";
      } else {
        this.otpError = "";
      }
      if (this.otp !== "") {
        this.verifyOtp();
      }
    },
     resendOtp() {
         axios
        .post("/user/resend/otp", {
          criteria: { user: this.$route.params.userId,
          }
        })
        .then((response) => {
          console.log("res verify email", response.data);
        })
        .catch((e) => {
          console.log("err res", e.response.data);
        });
    },
    verifyOtp() {
      axios
        .post("/user/verify/otp", {
          criteria: { user: this.$route.params.userId,
          type: this.$route.params.type,
          otp: this.otp
          }
        })
        .then((response) => {
          if(response.data.token) {
            setForgetPasswordToken(response.data.token);
            this.$router.push({ name: 'ResetPassword'});
          }
          else{ 
            this.$router.push("/login")
            // this.$store.commit('LOGIN', userDetails);
            // this.$router.push('/dashboard');  
          }
        })
        .catch((e) => {
        //  console.log("err res", e.response.data);
          if (e.response.data.type === "otp_error") {
            const otpData = e.response.data.message;
            this.otpError = otpData;
          } else {
            this.otpError = "";
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.enter-otp-container {
  // background: linear-gradient(#ffffff 50%, #1d0640 50%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .resend-otp{
      color: #9672FF;
    cursor: pointer;
    font-size: 12px;
    justify-content: center;
    margin-top: 50px;
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
    padding: 50px 42px 0;
    box-shadow: 3px 0px 6px #00000029;
    width: 508px;
    height: 420px;
    text-align: center;
    display: flex;
    flex-flow: column;
    background: #131313;
    border-radius: 10px;
  .text {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 124.5%;
    /* or 26px */
    text-align: center;
    color: #FFFFFF;
  }
  .otp {
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins";
    margin: 55px 0px 30px 0px;
  }
  .submit-button {
    width: 100%;
  }
  .submit-button button {
    width: 117px;
    height: 38px;
    background: linear-gradient(180deg, #9672FF 0%, #6B4FE8 100%);
    border-radius: 8px;
    font-weight: 300;
    width: 411px;
    height: 61px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 124.5%;
    /* or 24px */
    color: rgba(255, 255, 255, 0.9);

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
      background: #1c1a28;
      border-radius: 8px;
      &:not(:last-child) {
        margin-right: 22px;
      }
      input {
        border: 0;
        box-sizing: border-box;
        padding: 0;
        width: 58px;
        height: 60.82px;
        font-size: inherit;
        line-height: 1.75em;
        text-align: center;
        color: white;
      }
    }
  }
}
.login_container {
  font-family: Poppins;
  display: flex;
  text-align: center;
  justify-content: center;
  background-image: url("../assets/Loginnew/bg.svg");
  background-size: cover;
//   background: #000;
  height: 100%;
  flex-wrap: wrap;
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
</style>
