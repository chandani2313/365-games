<template>
  <div class="login_container">
    <div class="content-1">
        <form>
            <div class="header">
                Create Username
            </div>
             <div class="input-wrapper" v-if="emailUpdate">
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
                    type="text"
                    class="my-input"
                    v-model="username"
                    placeholder="Username"
                />
          <div v-if="usernameError" class="err-text">{{ usernameError }}</div>
            </div>
            <div class="input-wrapper">
          <i class="fa fa-flag icon"></i>
          <country-select
            v-model="country"
            :country="country"
            class="my-input"
            placeholder="Country"
            topCountry="IN"
            style="margin-bottom: 0px;"
          />
          <img src="../assets/username/selectarrow.svg" style="position: absolute;top: 28px;right: 25px;"/>
        </div>
          <div v-if="countryError" class="err-text">{{ countryError }}</div>
        <div class="input-wrapper">
          <VuePhoneNumberInput
            :default-country-code="country"
            @update="updatePhoneNumber"
            :required="true"
            :dark="true"
            style="margin-bottom: 10px; margin-top: 10px;"
            :dark-color="'rgb(24 24 24)'"
            v-model="phone"
          />
            <!-- :dark-color="' rgba(88, 88, 88, 0.2)'" -->
          <div v-if="phoneNumberError" style="" class="err-text">
            {{ phoneNumberError }}
          </div>
        </div>
          <div class="input-wrapper">
          <button class="btn" type="submit" @click.prevent="validate()">
            Submit
          </button>
        </div>
        </form>
    </div>
    <div class="gradation1_img_left"></div>
    <div class="gradation2_img_right"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CreateUsername",
  components: {},
  data() {
    return {
      username: "",
      usernameError: "",
      email: "",
      emailError: "",
      phone: "",
      phoneNumberError: "",
      country: "",
      countryCode: "",
      countryError: "",
      regUsername: /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ /* eslint-disable-line */,
      emailUpdate: false

    };
  },
  created() {
    this.emailUpdate = JSON.parse(this.$route.query.emailUpdate)
  },
  methods: {
    updatePhoneNumber(data) {
      console.log('hi', this.phone)
      if (!data.isValid && this.phone !== ""&& this.phone !== null) {
        this.phoneNumberError = "Invalid Phone Number.";
      } else {
        this.phoneNumberError = null;
        this.countryCode = data.countryCallingCode;
      }
    },
    validate() {
      if (this.username === "") {
        this.usernameError = "Username is required.";
      console.log('hiii', this.usernameError)
      } else {
        this.usernameError = "";
      }
        if (!this.regUsername.test(this.username)) {
        this.usernameError = "Enter a valid username";
      } else {
        this.usernameError = "";
      }
         if (this.phone === "" || this.phone === null) {
        this.phoneNumberError = "Phone Number is required.";
      } else {
        this.phoneNumberError = "";
      }
        if (this.country === "") {
        this.countryError = "Country is required.";
      } else {
        this.countryError = "";
      }
      if (this.emailUpdate && !this.email) {
        this.usernameError = "Email is required";
      }
      if (
        this.username !== "" &&
        this.country !== "" &&
        this.phone !== "" &&
        this.regUsername.test(this.username)
      ) {
        this.createUsername();
      }
    },
    createUsername() {
       const data = {
        username: this.username,
        phone: this.phone,
        country: this.country,
        countryCode: this.countryCode,
      };
      if (this.email) {
        data["email"] = this.email.toLowerCase().trim();
      }
      let token = this.$route.query.token;
      const userDetails = {token: token, username:this.username, _id: this.$route.query._id }
      const axiosInstance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
        baseURL: axios.defaults.baseURL,
      });
      axiosInstance
        .post("/user/update/user-details", {
          data,
        })
        .then((response) => {
          console.log("res", response.data);
           this.$store.commit('LOGIN', userDetails);
            this.$router.push('/dashboard');
        })
        .catch((e) => {
          console.log("err res", e.response.data);
          if (e.response.data.type === "email_error") {
            const emailData = e.response.data.message;
            this.emailError = emailData;
          } else {
            this.emailError = "";
          }
          if (e.response.data.type === "username_error") {
            const usernameData = e.response.data.message;
            this.usernameError = usernameData;
          } else {
            this.usernameError = "";
          }
          if (e.response.data.type === "phone_error") {
            const phoneData = e.response.data.message;
            this.phoneNumberError = phoneData;
          } else {
            this.phoneNumberError = "";
          }
          if (e.response.data.type === "sms_error") {
            // if (e.response.data.message === "Phone Number not verified") {
              const user = e.response.data.userId;
              this.$router.push({
                name: "EnterOtp",
                params: { userId: user, type: "signupsms" },
              });
            // }
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
select {

background: linear-gradient(0deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72));
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  color: white;
  font-size: 13px;
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
label.country-selector__label[data-v-46e105de] {
    opacity: 0!important;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    font-size: 11px;
}
.country-selector__label {
    position: absolute;
    top: 3px;
    cursor: pointer;
    left: 11px;
    -webkit-transform: translateY(25%);
    transform: translateY(25%);
    opacity: 0;
    -webkit-transition: all .25s cubic-bezier(.645,.045,.355,1);
    transition: all .25s cubic-bezier(.645,.045,.355,1);
    font-size: 20px;
    color: #747474;
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
  background: #1b1c1cd1;
  width: 419px;
  height: 60px;
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
