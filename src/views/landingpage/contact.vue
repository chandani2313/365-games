<template>
  <fragment>
    <div class="main_container1">
      <section class="first_part">
        <div class="first_wrapper">
          <div class="top-wrap">
            <div
              class="top-wrap-text"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Contact US
            </div>
            <div class="container_wrapper">
              <div
                class="location_wrap"
                data-aos="flip-left"
                data-aos-duration="1800"
              >
                <div class="bg-icon-location">
                  <span
                    ><img src="/img/assets/landing-page/location1.png" alt=""
                  /></span>
                </div>
                <div class="content_wrap">
                  <h6>Our Location</h6>
                  <p>354 Oakridge, Camden NJ 08102 - USA</p>
                </div>
              </div>
              <div
                class="email_wrap"
                data-aos="flip-up"
                data-aos-duration="1600"
              >
                <div class="bg-icon-email">
                  <span
                    ><img src="/img/assets/landing-page/email1.png" alt=""
                  /></span>
                </div>
                <div class="content_wrap">
                  <h6>Email Address</h6>
                  <p>testproject@gmail.com</p>
                </div>
              </div>
              <div
                class="call_wrap"
                data-aos="flip-right"
                data-aos-duration="1800"
              >
                <div class="bg-icon-call">
                  <span
                    ><img src="/img/assets/landing-page/telephone1.png" alt=""
                  /></span>
                </div>
                <div class="content_wrap">
                  <h6>Urgent Call</h6>
                  <p>+00 0000 0000 000</p>
                </div>
              </div>
            </div>
            <div class="container_wrap">
              <div
                class="header_wrap"
                data-aos="zoom-in-right"
                data-aos-duration="1600"
              >
                Send us message
              </div>
              <div
                class="text_wrap"
                data-aos="zoom-in-up"
                data-aos-duration="1800"
              >
                <v-text-field
                  label="Enter your name..."
                  single-line
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Enter your email..."
                  single-line
                  outlined
                ></v-text-field>
              </div>
              <div
                class="text_wrap_area"
                data-aos="zoom-in-down"
                data-aos-duration="1800"
              >
                <v-textarea
                  outlined
                  name="input-7-1"
                  label="Enter your message..."
                  rows="10"
                ></v-textarea>
              </div>
              <div
                class="text_wrap_btn"
                data-aos="zoom-in-left"
                data-aos-duration="1800"
              >
                <button class="btn">Send</button>
              </div>
            </div>

            <!-- <div class="map_wrap"></div> -->
            <div id="map" data-aos="zoom-in" data-aos-duration="1500"></div>
            <div class="bottom_wrap">
              <div
                class="wrap_logo"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img
                  src="/img/assets/landing-page/365-logo-final-white.png"
                  alt=""
                />
              </div>
              <div
                class="wrap_footer"
                data-aos="zoom-in-up"
                data-aos-duration="1800"
              >
                <button class="wrap_footer_btn">Home</button>
                <button class="wrap_footer_btn">Adversite</button>
                <button class="wrap_footer_btn">Supports</button>
                <button class="wrap_footer_btn">Marketing</button>
                <button class="wrap_footer_btn">FAQ</button>
              </div>
              <v-divider></v-divider>
              <div class="texter">
                <div class="rigth_text">
                  ©2021 <b>365games</b>. All Rights Reserved.
                </div>
                <div class="social_icons">
                  <div class="sicon">
                    <a href="www.facebook.com">
                      <img
                        src="/img/assets/landing-page/facebooki.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="sicon">
                    <a href="www.twitter.com">
                      <img src="/img/assets/landing-page/twitteri.png" alt="" />
                    </a>
                  </div>
                  <div class="sicon">
                    <a href="www.instagram.com">
                      <img src="/img/assets/landing-page/instai.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </fragment>
</template>


<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Contact",
  data() {
    return {
      map: "",
      marker: "",
    };
  },
  components: {
    Fragment,
  },
  methods: {
    initMap() {
      const myLatLng = { lat: 51.4502, lng: 0.1787 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
      });

      new window.google.maps.Marker({
        position: myLatLng,
        map,
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 150%;
  right: 300px;
  height: 676px;
  margin: 150px auto;
}
.first_part {
  background: #101010;
  min-height: 150vh;
}
.first_wrapper {
  display: flex;
  justify-content: center;
}
.top-wrap {
  display: flex;
  flex-direction: column;
}
.top-wrap-text {
  position: relative;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 112px;
  width: 40%;
  color: #ffffff;
  margin-top: 350px;
  padding-left: 38px;
}
.top-wrap-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  padding: 1px;
  background: linear-gradient(
    140deg,
    #5b38d6,
    rgba(150, 114, 255, 0.7),
    rgba(150, 114, 255, 0.4),
    rgb(0 0 0 / 0%),
    rgba(0, 0, 0, 0)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.container_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
  font-family: "Poppins";
  color: #ffffff;
}
.location_wrap {
  background-image: url("/img/assets/landing-page/BG1.png");
  background-size: cover;
  width: 370px;
  height: 331px;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.email_wrap {
  background-image: url("/img/assets/landing-page/BG2.png");
  background-size: cover;
  width: 370px;
  height: 331px;
  margin-right: 50px;
  margin-left: 50px;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 33px;
}
.call_wrap {
  background-image: url("/img/assets/landing-page/BG3.png");
  background-size: cover;
  width: 370px;
  height: 331px;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 33.5px;
}
.bg-icon-location {
  position: absolute;
  top: 33px;
  left: 33px;
  background-image: url("/img/assets/landing-page/bgcircle.png");
  padding: 21px;
}
.bg-icon-email {
  position: absolute;
  top: 33px;
  left: 135px;
  background-image: url("/img/assets/landing-page/bgcircle.png");
  padding: 24px;
}
.bg-icon-email span {
  position: relative;
  top: 40px;
}
.bg-icon-call {
  position: absolute;
  top: 33px;
  right: 33px;
  background-image: url("/img/assets/landing-page/bgcircle.png");
  padding: 21px;
}
.bg-icon-call span {
  position: relative;
  top: 40px;
}
.content_wrap {
  padding: 40px 40px 20px 30px;
}
.content_wrap h6 {
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 52px;
}
.content_wrap p {
  width: 90%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
}
.container_wrap {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
}
.header_wrap {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 52px;
  color: #ffffff;
}
.text_wrap {
  display: flex;
  margin-top: 35px;
}
.text_wrap_btn {
  display: flex;
  justify-content: flex-end;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  color: #ffffff;
}
::v-deep .theme--light.v-input {
  margin-right: 30px;
}
::v-deep .theme--light.v-label {
  color: #b7b7b7;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
::v-deep.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: rgba(58, 48, 91, 1);
}
::v-deep.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)
  > .v-input__control
  > .v-input__slot:hover
  fieldset {
  // color: rgba(0,0,0,.86);
  color: rgba(58, 48, 91, 1);
}
::v-deep.v-application--is-ltr.v-textarea.v-text-field--enclosed.v-text-field__slot {
  height: 320px;
}
::v-deep .v-text-field--outlined,
.v-text-field--solo {
  border-radius: 8px;
}
::v-deep .theme--light.v-input textarea {
  color: #ffffff;
}
.btn {
  position: relative;
  font-family: "Poppins";
  font-style: italic;
  font-weight: 800;
  font-size: 22px;
  line-height: 75px;
  color: #ffffff;
  width: 200px;
  right: 28px;
}
.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  padding: 1px;
  background: linear-gradient(
    150deg,
    #5b38d6,
    rgb(150 114 255 / 58%),
    rgb(150 114 255 / 62%),
    rgb(150 114 255 / 2%),
    rgba(0, 0, 0, 0)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.bottom_wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
.wrap_logo {
  position: relative;
  right: 45%;
  left: 45%;
  margin-bottom: 20px;
  width: 180px;
}
.wrap_logo img {
  width: 85%;
}
.wrap_footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.wrap_footer_btn {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: normal;
  line-height: 33px;
  margin-left: 35px;
  color: #ffffff;
}

.wrap_footer_btn:hover {
  color: rgb(218 205 255 / 36%);
}
::v-deep.theme--light.v-divider {
  border-color: rgb(150 124 255 / 43%);
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
}
.texter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rigth_text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 33px;
  color: #ffffff;
}
.social_icons {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.sicon {
  margin-left: 20px;
}
// .map_wrap {
//   background-image: url("/img/assets/landing-page/map.png");
//   background-size: cover;
//   margin: 150px auto;
//   height: 600px;
//   width: 150%;
//   position: relative;
//   right: 300px;
// }
</style>