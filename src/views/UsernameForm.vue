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
          Create Username
        </div>
         <div class="input-wrapper" v-if="emailUpdate">
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
          <i class="fa fa-user icon"></i>
          <input
            type="username"
            class="my-input"
            v-model="username"
            placeholder="Enter username"
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
          />
        </div>
        <div class="input-wrapper">
          <VuePhoneNumberInput
            :default-country-code="country"
            @update="updatePhoneNumber"
            :required="true"
            :dark="true"
            :dark-color="'rgb(24 24 24)'"
            style="padding-bottom:10px"
            v-model="phone"
          />
            <!-- :dark-color="'#1e0741'" -->
          <div v-if="phoneNumberError" style="" class="err-text">
            {{ phoneNumberError }}
          </div>
        </div>
        <div class="submit-button">
          <button type="submit" @click.prevent="validate()">Submit</button>
        </div>
        <div class="error-message"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsernameForm",
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
      if (!data.isValid && this.phone !== "" && this.phone !== null) {
        this.phoneNumberError = "Invalid Phone Number.";
      } else {
        this.phoneNumberError = null;
        this.countryCode = data.countryCallingCode;
      }
    },
    validate() {
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
       if (this.phone === "" || this.phone === null) {
        this.phoneNumberError = "Phone Number is required.";
      } else {
        this.phoneNumberError = "";
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
        });
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  background: rgb(30, 7, 65);
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  color: white;
  font-size: 13px;
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
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: white;
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: white;
    }
    .my-input {
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
    width: 300px;
    height: 45px;
    padding-left: 50px;
    color: white;
    margin-bottom: 10px;
    font-size: 13px;
    }
  .icon{
    margin-left: 12px;
    position: absolute;
    color: white;
    margin-top: 12px;
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
