<template>
  <div class="mainlayout">
    <div class="profile_container">
      <div class="cover_container">
        <div id="add-cover-pic" @click="toggleCropCoverImagePopup">
          <img src="../assets/NewProfile/cam.svg" />
        </div>
        <div
          class="background_image"
          id="profile-background-image"
          v-if="userDetails.coverImage"
          :style="{
            backgroundImage: `url(https://ps-mg.s3.amazonaws.com/${userDetails.coverImage})`,
          }"
        ></div>
        <div id="profile-background-image" v-if="!userDetails.coverImage"></div>
      </div>
      <div class="user_details_wrapper">
        <div class="user_image">
          <img
            width="200px"
            v-if="userDetails.profileImage"
            :src="`https://ps-mg.s3.amazonaws.com/${userDetails.profileImage}`"
            alt="profile image"
          />
          <img
            width="200px"
            height="200px"
            v-if="!userDetails.profileImage"
            src="../assets/NewProfile/background.jpg"
            alt="profile image"
          />
          <div id="add-profile-pic" @click="toggleCropProfileImagePopup">
            <img src="../assets/NewProfile/cam.svg" />
          </div>
        </div>
        <div class="user_details">
          <div class="user_edit_wrap">
            <div class="user_name">{{ userDetails.username }}</div>
            <div class="user_edit">
              <!-- <div class="wallet_dropdown">
                Wallet
                <img src="../assets/NewProfile/downArrow.svg" /> -->

              <div class="wallet_wrapper">
                <button class="wallet_wrapper_dropdown" @click="toggle()">
                  Wallet
                  <svg
                    width="14"
                    height="7"
                    viewBox="0 0 14 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99282 6.62276C6.2192 6.62418 5.4769 6.31726 4.93016 5.76993L0.163749 1.00293C-0.0573184 0.774044 -0.0541568 0.410216 0.170854 0.185205C0.395865 -0.0398063 0.759694 -0.0429678 0.988581 0.178099L5.75499 4.94509C6.43917 5.62743 7.54648 5.62743 8.23066 4.94509L12.9971 0.178099C13.1435 0.0264579 13.3604 -0.0343581 13.5644 0.0190259C13.7683 0.0724098 13.9276 0.231686 13.981 0.435636C14.0344 0.639586 13.9735 0.856472 13.8219 1.00293L9.05549 5.76993C8.50875 6.31726 7.76645 6.62418 6.99282 6.62276Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <div class="wallet_details_outer" id="myDIV">
                  <div class="tooltip1"></div>
                  <div class="wallet_details_inner">
                    <div class="wallet_title">Wallet</div>
                    <div class="wallet_all">See all</div>
                  </div>
                  <div class="wallet_details_content">
                    <div class="wallet_details_card">
                      <div class="wallet_left_outer">
                        <div class="wallet_left_inner">
                          <div class="wallet_img"></div>
                          <div class="wallet_content">
                            <div class="wallet_name">Lorem Ipsum</div>
                            <div class="wallet_content_details">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </div>
                          </div>
                        </div>
                        <div class="wallet_money">
                          <div class="wallet_gems">
                            <img src="../assets/NewProfile/Green.svg" />
                          </div>
                          <div class="wallet_amount green_money">
                            <span>-1200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wallet_details_card">
                      <div class="wallet_left_outer">
                        <div class="wallet_left_inner">
                          <div class="wallet_img"></div>
                          <div class="wallet_content">
                            <div class="wallet_name">Lorem Ipsum</div>
                            <div class="wallet_content_details">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </div>
                          </div>
                        </div>
                        <div class="wallet_money">
                          <div class="wallet_gems">
                            <img src="../assets/NewProfile/Green.svg" />
                          </div>
                          <div class="wallet_amount green_money">
                            <span>-1200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wallet_details_card">
                      <div class="wallet_left_outer">
                        <div class="wallet_left_inner">
                          <div class="wallet_img"></div>
                          <div class="wallet_content">
                            <div class="wallet_name">Lorem Ipsum</div>
                            <div class="wallet_content_details">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </div>
                          </div>
                        </div>
                        <div class="wallet_money">
                          <div class="wallet_gems">
                            <img src="../assets/NewProfile/Pink.svg" />
                          </div>
                          <div class="wallet_amount pink_money">
                            <span>-1200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wallet_details_card">
                      <div class="wallet_left_outer">
                        <div class="wallet_left_inner">
                          <div class="wallet_img">
                            <div class="wallet_img"></div>
                          </div>
                          <div class="wallet_content">
                            <div class="wallet_name">Lorem Ipsum</div>
                            <div class="wallet_content_details">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </div>
                          </div>
                        </div>
                        <div class="wallet_money">
                          <div class="wallet_gems">
                            <img src="../assets/NewProfile/Pink.svg" />
                          </div>
                          <div class="wallet_amount">
                            <span class="pink_money"> -1200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wallet_total">Total: 12000</div>
                  </div>
                </div>
              </div>
              <!-- </div> -->
              <!-- <div class="edit_profile" @click="EditPopUp()">Edit Profile</div> -->
            </div>
          </div>
          <div class="profile_data">
            <div class="input_wrapper">
              <img src="../assets/NewProfile/phone.svg" />
              {{ userDetails.phone }}
            </div>
            <div class="input_wrapper">
              <img src="../assets/NewProfile/mail.svg" />
              {{ userDetails.email }}
            </div>
            <div class="input_wrapper">
              <img src="../assets/NewProfile/country.png" />
              {{ userDetails.country }}
            </div>
            <div class="input_wrapper">
              <div class="password">
                <img src="../assets/NewProfile/password.svg" />
                . . . . .
              </div>
              <div class="show" @click="showPassword">Change</div>
            </div>
          </div>
        </div>
      </div>
      <NewProfileBottom />
    </div>
    <NewUpdates />
    <CropImage
      @closeCropImage="toggleCropProfileImagePopup"
      @onImageUrl="updateProfileImage"
      v-if="isCropProfileImagePopupOpen"
    />
    <CropImage
      :aspect-ratio="3"
      @closeCropImage="toggleCropCoverImagePopup"
      @onImageUrl="updateCoverImage"
      v-if="isCropCoverImagePopupOpen"
    />
    <EditPopUp
      :user="userDetails"
      v-if="showPopup"
      @closeEditProfilePopup="closePopup"
    />
    <ChangePasswordPopup
      :user="userDetails"
      v-if="showPasswordPopup"
      @closeChangePasswordPopup="closeChangePasswordPopup"
    />
  </div>
</template>
<script>
import axios from "axios";
import NewProfileBottom from "@/components/newprofile/NewProfileBottom.vue";
import NewUpdates from "@/components/newprofile/NewUpdates.vue";
import CropImage from "@/components/CropImage.vue";
import EditPopUp from "./ProfilePopUp.vue";
import ChangePasswordPopup from "./ChangePasswordPopup.vue";

export default {
  name: "NewUserProfile",
  components: {
    NewProfileBottom,
    NewUpdates,
    CropImage,
    EditPopUp,
    ChangePasswordPopup,
  },
  data() {
    return {
      userDetails: {},
      user: null,
      userId: null,
      isCropProfileImagePopupOpen: false,
      isCropCoverImagePopupOpen: false,
      showPopup: false,
      showPasswordPopup: false,
    };
  },
  methods: {
    showPassword() {
      this.showPasswordPopup = true;
    },
    closeChangePasswordPopup() {
      this.showPasswordPopup = false;
    },
    EditPopUp() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    async updateProfileImage(croppedImage) {
      const user = this.$store.getters.user;
      await axios
        .post("/user/update/profile", {
          criteria: { _id: user._id },
          data: { profileImage: croppedImage },
        })
        .then((response) => {
          this.color = "#45108A";
          this.snackbar = true;
          this.text = "Profile Image update Successfully";
          this.timeout = 3000;
          this.isCropProfileImagePopupOpen = false;
          this.userDetails.profileImage = response.data.coverImage;
          window.location.reload();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },

    async updateCoverImage(croppedImage) {
      const user = this.$store.getters.user;
      await axios
        .post("/user/update/profile", {
          criteria: { _id: user._id },
          data: { coverImage: croppedImage },
        })
        .then((res) => {
          this.userDetails.coverImage = res.data.coverImage;
          this.isCropCoverImagePopupOpen = false;
          window.location.reload();
        });
    },
    toggle() {
      var myDIV = document.getElementById("myDIV");
      var element = document.getElementById("blur");
      if (myDIV.style.display == "block") {
        myDIV.style.display = "none";
      } else {
        myDIV.style.display = "block";
      }
      element.classList.toggle("bottom");
    },
    toggleCropProfileImagePopup() {
      this.isCropProfileImagePopupOpen = !this.isCropProfileImagePopupOpen;
    },
    toggleCropCoverImagePopup() {
      this.isCropCoverImagePopupOpen = !this.isCropCoverImagePopupOpen;
    },
    getUserDetails() {
      let user = this.$store.getters.user;
      this.userId = user._id;
      axios
        .get(`/user/find/${this.userId}`)
        .then((response) => {
          this.userDetails = response.data;
        })
        .catch((e) => {
          console.log("err", e.response);
          if (e.response.status === 400) {
            this.$router.push("/");
          }
        });
    },
  },
  mounted() {
    this.getUserDetails();
  },
};
</script>
<style scoped>
.mainlayout {
  padding: 1rem;
  display: flex;
  gap: 5px;
  width: 1120px;
  margin: 0px auto;
}
@media (min-width: 320px) and (max-width: 767px) {
  .mainlayout {
    display: flex;
    flex-direction: column;
  }
}
/* .profile_container {
  width: 70%;
} */
#profile-background-image {
  /* background-image: url("../assets/NewProfile/background.jpg"); */
  background-image: url("../assets/NewProfile/ProfileBanner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
  border-radius: 10px;
  height: 200px;
  width: 800px;
}
.user_details_wrapper {
  padding: 18px 0px 0px 20px;
  display: flex;
  column-gap: 25px;
}
.user_image {
  position: relative;
}
.user_image img {
  border-radius: 100px;
}
.cover_container {
  position: relative;
}
#add-profile-pic {
  position: absolute;
  left: 132px;
  bottom: 15px;
  height: 28px;
  width: 28px;
  /* left: 437px; */
  /* top: 507px; */
  border-radius: 50%;
  background: #9672ff;
}
#add-cover-pic {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: #9672ff;
}
#add-cover-pic img {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 7px;
  left: 6px;
}
#add-cover-pic img:hover {
  filter: drop-shadow(1px 0px 3px #00e1ff);
  cursor: pointer;
}
#add-profile-pic img {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 7px;
  left: 6px;
}
#add-profile-pic img:hover {
  filter: drop-shadow(1px 0px 3px #00e1ff);
  cursor: pointer;
}
.user_details {
  display: flex;
  width: 75%;
  flex-direction: column;
}
.user_edit_wrap {
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 8px;
  justify-content: space-between;
  /* width: 80%; */
}
.user_name {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  text-transform: capitalize;
}
.user_edit {
  display: flex;
  gap: 20px;
  position: relative;
}
.wallet_wrapper {
  position: relative;
}
.wallet_wrapper_dropdown {
  /* height: 42px; */
  /* width: 159px; */
  top: 0;
  /* left: -130px; */
  border-radius: 10px;
  background: #9672ff;
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  color: #ffffff;
  gap: 44px;
  cursor: pointer;
  position: relative;
}
.wallet_wrapper_dropdown > svg {
  margin-top: 9px;
}
.tooltip1 {
  position: absolute;
  width: 0px;
  height: 0px;
  border: 7px solid transparent;
  transform: translate(-58px, 0%);
  top: -18px;
  right: -11%;
  border-bottom: 11px solid rgba(41, 41, 41, 1);
}
.wallet_details_outer {
  display: none;
  position: absolute;
  height: 414px;
  width: 415px;
  border-right-style: 0px;
  top: 50px;
  right: 0px;
  border-radius: 13px;
  background: rgba(41, 41, 41, 1);
  box-shadow: 2px 3px 6px rgb(0 0 0 / 50%);
  z-index: 3;
}
.wallet_details_inner {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  border-bottom: 1px solid rgba(120, 118, 134, 1);
  overflow: hidden;
  padding: 12px 20px;
}
.wallet_title {
  text-transform: capitalize;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  text-align: left;
  color: #ffffff;
}
.wallet_all {
  cursor: pointer;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  padding: 2px;
  text-align: right;
  color: #9672ff;
}
.wallet_details_card {
  -ms-flex-align: stretch;
  display: flex;
  border-bottom: 1px solid rgba(120, 118, 134, 1);
  overflow: hidden;
  padding: 12px 20px;
}
.wallet_left_outer,
.wallet_left_inner {
  display: flex;
}
.wallet_name {
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  text-align: left;
  color: #ffffff;
}
.wallet_money {
  display: flex;
  align-items: center;
}
.wallet_gems {
  width: 17px;
}
.wallet_img {
  display: flex;
  height: 50px;
  width: 60px;
  border-radius: 8px;
  background: rgba(196, 196, 196, 1);
}
.wallet_content {
  display: flex;
  flex: 1;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  color: #ffffff;
  padding-left: 15px;
}
.wallet_content_details {
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: #ffffff;
  text-align: left;
}
.wallet_total {
  float: right;
  color: #ffffff;
  background: rgba(114, 85, 233, 1);
  padding: 3px 15px;
  width: 414px;
  text-align: right;
  border-radius: 0px 0px 10px 10px;
}
.green_money {
  color: #07cc00;
  padding-left: 3px;
}
.pink_money {
  color: #ff6186;
  padding-left: 3px;
}
.edit_profile {
  border-radius: 10px;
  background: #9672ff;
  color: #ffffff;
  padding: 8px 30px;
  cursor: pointer;
}
.update_container {
  width: 30%;
}
.user_details {
  width: 75%;
  row-gap: 30px;
}
.user_details_wrapper {
  justify-content: space-between;
}
.user_details {
  width: 75%;
}
.profile_data {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
  gap: 25px;
}
.input_wrapper {
  color: #ffffff;
  display: flex;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
}
.input_wrapper img {
  padding: 0px 8px;
  object-fit: contain;
  width: 45px;
  height: 29px;
}
.password {
  display: flex;
  flex: 1 1 auto;
}
.show {
  color: #9672ff;
  flex: 1;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
  margin-left: 95px;
}
</style>