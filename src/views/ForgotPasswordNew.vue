<template>
  <div class="login_container">
    <div class="content-1">
        <form>
            <div class="header">
                Enter your Email
            </div>
            <div class="input-wrapper">
                <input
                    type="text"
                    class="my-input"
                    placeholder="Email"
                    v-model="email"
                />
                <div v-if="emailError" class="err-text">{{emailError}}</div>
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
import axios from 'axios';
export default {
    name: "ForgotPasswordNew",
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
        this.emailError = 'Please enter a valid email id';
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
          this.$router.push({ name: 'EnterForgetOtp', params: { userId: user, type: 'forgot-password' } });
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

<style scoped>
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  padding: 5px;
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
