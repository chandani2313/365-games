<template>
  <div class="main_container1">
    <div class="first_wrapper">
      <div class="top-wrap">
        <div
          class="top-wrap_text"
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          Contact US
        </div>
        <img src="/img/assets/landing-page/contact/map-pin-icon.png" alt="" />
      </div>
      <div class="card_wrap" data-aos="flip-right" data-aos-duration="1800">
        <p>Send message</p>
        <v-text-field label="Name" v-model="name" :error-messages="nameError" single-line></v-text-field>
        <v-text-field label="Email" v-model="email" :error-messages="emailError" single-line></v-text-field>
        <v-text-field label="Message" v-model="message" :error-messages="messageError" single-line></v-text-field>
        <button class="card_btn" @click="validate">Send</button>
      </div>
      <div class="container_wrapper">
        <div class="call_wrap" data-aos="flip-right" data-aos-duration="1800">
          <div class="bg-icon-call">
            <img src="/img/assets/landing-page/contact/call-icon.png" alt="" />
          </div>
          <div class="content_wrap">
            <p>+00 0000 0000 000</p>
          </div>
        </div>
        <div class="email_wrap" data-aos="flip-right" data-aos-duration="1800">
          <div class="bg-icon-email">
            <img
              src="/img/assets/landing-page/contact/new-mail-icon.png"
              alt=""
            />
          </div>
          <div class="content_wrap mail_text">
            <p>testproject@gmail.com</p>
          </div>
        </div>
        <div
          class="location_wrap"
          data-aos="flip-left"
          data-aos-duration="1800"
        >
          <div class="bg-icon-location">
            <img
              src="/img/assets/landing-page/contact/locator-icon.png"
              alt=""
            />
          </div>
          <div class="content_wrap">
            <p>354 Oakridge, Camden NJ 08102 - USA</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <div class="fade_wrap_left"></div>
    <div class="fade_wrap_right"></div>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      :color="color"
      elevation="24"
      :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Footer from "@/views/landingpage/footer.vue";
import axios from "axios";

export default {
  components: {
    Footer,
  },
  name: "Contact2",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      nameError: '',
      messageError: '',
      emailError: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,/* eslint-disable-line */
      color: "",
      snackbar: false,
      snackbarText: "",
      timeout: "-1",
    };
  },
  methods: {
      validate() {
         if (this.name === '') {
        this.nameError = 'Name is required.';
      } else {
        this.nameError = '';
      }
      if (!this.reg.test(this.email)) {
        this.emailError = 'Enter a valid mail id';
      } else {
        this.emailError = '';
      }

      if (this.message === '') {
        this.messageError = 'Message is required.';
      } else {
        this.messageError = '';
      }

      if (this.reg.test(this.email) && this.message !== '' && this.name !== '') {
        this.sendMessage();
      }
    },
    clearMessage() {
      this.name = null,
      this.email = null,
      this.message = null
    },
    sendMessage() {
 axios
        .post('/contactUs/create', {
          data: {
            email: this.email.toLowerCase().trim(),
            name: this.name,
            message:this.message
            },
        })
        .then(() => {
          this.clearMessage();
          this.color = "green";
          this.snackbar = true;
          this.snackbarText = "Message sent successfully";
          this.timeout = 3000;
        })
        .catch((e) => {
        console.log('err',e)
        this.snackbarText = 'Something went wrong, Try again';
              this.color = "red darken-4";
              this.snackbar = true;
              this.timeout = 3000;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main_container1 {
  background: #040404;
}
.first_wrapper {
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.card_wrap {
  position: absolute;
  width: 26%;
  height: 58%;
  background-color: #ffffff;
  right: 120px;
  top: 166px;
  border-radius: 10px;
  padding: 40px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}
.card_wrap p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  text-transform: uppercase;
  color: #8a90a9;
  text-align: left;
}

.card_btn {
  width: 100%;
  height: 14%;
  border-radius: 8px;
  background: linear-gradient(90.37deg, #9672ff 12.05%, #6b4fe8 102.75%);
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 124.5%;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
}
::v-deep .theme--light.v-label {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  // line-height: 27px;
  color: #1b1b1b;
}
::v-deep.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #8a90a9;
}
.top-wrap {
  background-image: url("/img/assets/landing-page/contact/map-bg.png");
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  height: 41%;
  width: 100%;
  margin-top: 12%;
}
.top-wrap img {
  margin: 0 auto;
  object-fit: none;
  position: relative;
  right: 40px;
  bottom: 55px;
}
.top-wrap_text {
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 64px;
  font-feature-settings: "salt" on, "liga" off;
  color: #ffffff;
  margin: 0 0 10px 150px;
  text-align: left;
}
.container_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 150px;
  margin-top: 40px;
}
.call_wrap {
  margin-right: 60px;
}
.email_wrap {
  margin-right: 60px;
}
@media only screen and (min-width: 1700px) {
  .call_wrap {
    margin-right: 120px;
  }
  .email_wrap {
    margin-right: 120px;
  }
}
.content_wrap {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  color: #ffffff;
  margin-top: 15px;
}
.mail_text {
  padding-top: 6px;
}
.fade_wrap_left {
  position: absolute;
  width: 360px;
  height: 200px;
  background: rgba(150, 114, 255, 0.3);
  filter: blur(200px);
  left: -310px;
  bottom: 0;
}
.fade_wrap_right {
  position: absolute;
  width: 359px;
  height: 250px;
  background: rgba(150, 114, 255, 0.3);
  filter: blur(200px);
  right: -275px;
  top: 0;
  z-index: 11;
}
@media (max-width: 960px) {
  .first_wrapper {
    align-items: center;
    height: unset;
    padding: 0 100px;
  }
  .top-wrap {
    background-image: none;
    height: unset;
  }
  .top-wrap img {
    display: none;
  }
  .card_wrap {
    position: unset;
    width: 360px;
    height: 400px;
    margin-top: 25px;
  }
  .top-wrap_text {
    margin: unset;
    text-align: center;
  }
  .container_wrapper {
    flex-wrap: wrap;
    gap: 25px;
    align-items: unset;
    margin-left: unset;
    margin-bottom: 40px;
    justify-content: center;
  }
}
@media (max-width: 650px) {
  .top-wrap_text {
    font-size: 55px;
  }
}
@media (max-width: 560px) {
  .first_wrapper {
    padding: 0 50px;
  }
}
@media (max-width: 460px) {
  .first_wrapper {
    padding: 0 25px;
  }
}
@media (max-width: 360px) {
  .first_wrapper {
    padding: 0 10px;
  }
}
</style>