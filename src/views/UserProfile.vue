<template>
  <div class="user_profile">
    <div class="left_wrap">
      <div class="profile_wrap">
        <div class="profile_banner">
          <div
            id="profile-banner-image"
            v-if="userDetails.coverImage"
            :style="{
              backgroundImage: `url(https://ps-mg.s3.amazonaws.com/${userDetails.coverImage})`,
            }"
          ></div>
          <div id="profile-banner-image" v-if="!userDetails.coverImage"></div>
          <!-- <img src="../assets/profile/Background@2x.png" alt="banner"> -->
        </div>
        <div class="profile_info">
          <div class="profile_img">
            <img
              v-if="userDetails.profileImage"
              :src="`https://ps-mg.s3.amazonaws.com/${userDetails.profileImage}`"
              alt="profile image"
            />
            <img v-else
              src="/img/assets/profile/nouserimageicon.jpg"
              alt="profile image"
            />
            <div id="add-profilepic" @click="toggleCropProfileImagePopup">
              <i class="fas fa-camera"></i>
            </div>
          </div>
          <div class="inner_edit_profile">
            <span>{{userDetails.username}}</span>
          </div>
        </div>
        <div id="add-coverpic" @click="toggleCropCoverImagePopup">
          <i class="fas fa-camera"></i>
        </div>
      </div>
      <div class="profile_details_wrap">
        <div class="profile_data">
          <div class="left_data">
            <div class="input_wrapper">
              <label>Name</label>
              <input
                type="text"
                v-model="userDetails.username"
                id="firstName"
                disabled
              />
            </div>
            <div class="input_wrapper">
              <label>Mobile no.</label>
              <input type="text" v-model="userDetails.phone" id="mobile" disabled />
            </div>

            <div class="input_wrapper">
              <label>Country</label>
              <input type="text" v-model="userDetails.country" id="country" disabled />
            </div>
          </div>
          <div class="right_data">
            <div class="input_wrapper">
              <label>Email</label>
              <input
                type="text"
                v-model="userDetails.email"
                id="email"
                disabled
              />
            </div>

            <div class="input_wrapper">
              <label>Password</label>
              <input type="text" value="********" id="password" disabled />
            </div>
            <div class="input_wrapper">
              <label>Referral</label>
              <input type="text" :value="referralLength"  disabled />
            </div>
          </div>
        </div>
        <div class="edit_profile">
          <img src="../assets/profile/Edit@2x.png" @click="edit()" />
        </div>
        <div class="wallet_wrapper">
          <button class="wallet_wrapper_dropdown" @click="toggle()">
            Wallet<i class="fas fa-chevron-down"></i>
          </button>
          <div class="wallet_details_outer" id="myDIV">
            <div class="wallet_details_inner">
              <div class="wallet_title">wallet</div>
              <div class="wallet_all">see all</div>
            </div>
            <div class="wallet_details_content">
              <div class="wallet_details_card">
                <div class="wallet_left_outer">
                  <div class="wallet_left_inner">
                    <div class="wallet_img">
                      <img
                        src="../assets/profile/Achievements - Apex Legends@2x.png"
                        alt=""
                      />
                    </div>
                    <div class="wallet_content">
                      <div class="wallet_name">Lorem Ipsum</div>
                      <div class="wallet_content_details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </div>
                  </div>
                  <div class="wallet_money">
                    <div class="wallet_gems">
                      <img src="../assets/profile/Gem Green.png" />
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
                      <img
                        src="../assets/profile/Achievements - Apex Legends@2x.png"
                        alt=""
                      />
                    </div>
                    <div class="wallet_content">
                      <div class="wallet_name">Lorem Ipsum</div>
                      <div class="wallet_content_details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </div>
                  </div>
                  <div class="wallet_money">
                    <div class="wallet_gems">
                      <img src="../assets/profile/Gem Green.png" />
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
                    <div class="wallet_img">
                      <img
                        src="../assets/profile/Achievements - Apex Legends@2x.png"
                        alt=""
                      />
                    </div>
                    <div class="wallet_content">
                      <div class="wallet_name">Lorem Ipsum</div>
                      <div class="wallet_content_details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </div>
                  </div>
                  <div class="wallet_money">
                    <div class="wallet_gems">
                      <img src="../assets/profile/Cash Red.png" />
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
                      <img
                        src="../assets/profile/Achievements - Apex Legends@2x.png"
                        alt=""
                      />
                    </div>
                    <div class="wallet_content">
                      <div class="wallet_name">Lorem Ipsum</div>
                      <div class="wallet_content_details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </div>
                  </div>
                  <div class="wallet_money">
                    <div class="wallet_gems">
                      <img src="../assets/profile/Cash Green.png" />
                    </div>
                    <div class="wallet_amount">
                      <span class="green_money"> -1200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wallet_total">12000</div>
            </div>
          </div>
        </div>
      </div>
      <ProfileBottom />
    </div>
    <Updates />
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
    <EditUser
      v-if="isAddEditOpen"
      @closePopup="closeDialog"
      :user="userDetails"
      @update-item="updateItem"
    />
    <v-snackbar v-model="snackbar" top :color="color" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import ProfileBottom from "@/components/profile/ProfileBottom.vue";
import Updates from "@/components/profile/Updates.vue";
import CropImage from "@/components/CropImage.vue";
import EditUser from "../components/profile/EditUser.vue";
import axios from "axios";

export default {
  name: "UserProfile",
  components: {
    ProfileBottom,
    Updates,
    CropImage,
    EditUser,
  },
  data() {
    return {
      userDetails: {},
      user: null,
      userId: null,
      isCropProfileImagePopupOpen: false,
      isCropCoverImagePopupOpen: false,
      color: "",
      snackbar: false,
      text: "",
      timeout: "-1",
      isAddEditOpen: false,
      referralUser: null,
      referralLength: 0
    };
  },
  mounted() {
    this.getUserDetails();
    this.getReferralUser();
  },
  methods: {
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
    getReferralUser() {
      let user = this.$store.getters.user;
      this.userId = user._id;
      axios
        .post("/referral/getReferral", {
          criteria: {
            referrer: this.userId
          }
        })  
        .then((response) => {
          this.referralUser = response.data;
          this.referralLength = this.referralUser?.usersJoined?.length ? this.referralUser.usersJoined.length : 0;
        })
        .catch((e) => {
          if (e.response.status === 400) {
          console.log("err", e.response);
          }
        });
    },
    edit() {
      this.isAddEditOpen = true;
      var element = document.getElementById("blur");
      element.classList.add("bottom");
    },
    closeDialog() {
      this.isAddEditOpen = false;
      var element = document.getElementById("blur");
      element.classList.remove("bottom");
    },
    updateItem(e) {
      this.userDetails = e;
      this.snackbar = true;
      this.color = '#45108A';
      this.timeout = 3000;
      this.text = "User updated successfully";
    },

  },
};
</script>
<style scoped>
.bottom {
  filter: blur(5px);
}
.user_profile {
  background: linear-gradient(
    26deg,
    #45108a 2%,
    #3d065f 29%,
    #12054e 100%,
    #10054d 100%
  );
  padding: 1rem;
  display: flex;
  gap: 32px;
}
@media (min-width: 320px) and (max-width: 1164px) {
  .user_profile {
    flex-direction: column;
    padding: 0px;
  }
}
.left_wrap {
  width: 70%;
}
@media (min-width: 320px) and (max-width: 767px) {
  .left_wrap {
    width: 100%;
  }
}
.right_wrap {
  width: 30%;
}
@media (min-width: 320px) and (max-width: 767px) {
  .right_wrap {
    width: 100%;
  }
}
.profile_wrap {
  position: relative;
}
#profile-banner-image {
  background-image: url("../assets/profile/Background@2x.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  overflow: hidden;
  z-index: 1;
  border-radius: 10px 10px 0 0;
}
@media (min-width: 320px) and (max-width: 767px) {
  #profile-banner-image {
    border-radius: 0;
    height: 350px;
  }
}
#add-coverpic {
  position: absolute;
  right: 20px;
  top: 20px;
  line-height: 1;
  cursor: pointer;
  border: 3px solid #fff;
  background: #ffffffed;
  border-radius: 4px;
}
#add-coverpic i {
  display: block;
}
@media (min-width: 320px) and (max-width: 767px) {
  .profile_banner {
    height: auto;
  }
}
.profile_banner img {
  width: 100%;
  display: block;
}
.profile_info {
  position: absolute;
  left: 25px;
  bottom: -100px;
  right: 0px;
  z-index: 1;
}

@media (min-width: 320px) and (max-width: 767px) {
  .profile_info {
    left: 25px;
    height: auto;
    left: 15px;
    height: auto;
    display: flex;
    justify-content: center;
  }

  .right_data {
    margin-left: 0px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .profile_data {
    position: relative;
    margin-left: 0px !important;
    flex-direction: column;
    display: contents;
  }
}
.profile_img {
  width: 200px;
  transition-duration: 0.4s;
}
.profile_img img {
  width: 100%;
  display: block;
}
#add-profilepic {
  position: absolute;
  bottom: 11px;
  left: 168px;
  line-height: 1;
  cursor: pointer;
  border: 3px solid #fff;
  color: #1b2731;
  background: #ffffffed;
  border-radius: 3px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .profile_img {
    width: 145px;
    bottom: 35px;
    position: absolute;
    /* margin-top: 0px; */
    clip-path: circle(37.2% at 50% 50%);
    background-color: #fff;
  }
  .profile_img img {
    clip-path: circle(35.2% at 50% 50%);
    background-color: #f2f2f2;
    width: 150px;
  }
  #add-profilepic {
    left: 82px;
    bottom: 26px;
  }
}
.profile_details_wrap {
  position: relative;
  padding: 10px;
  background-color: #1e0741;
  height: 135px;
  box-shadow: 3px 2px 20px 3px rgb(0 0 0 / 16%);
}
@media (min-width: 320px) and (max-width: 767px) {
  .profile_details_wrap {
    margin: 100px 40px 10px 40px;
    white-space: nowrap;
    padding: 0;
    height: 245px;
  }
}
.edit_profile {
  float: right;
  cursor: pointer;
  position: relative;
  right: 0px;
  /* top: -145px; */
  bottom: 145px;
  z-index: 1;
}
@media (min-width: 320px) and (max-width: 767px) {
  .edit_profile {
    bottom: 268px;
  }
}
.inner_edit_profile {
  display: none;
  position: absolute;
  /* right: 90px; */

  /* left: 214px; */
  bottom: 10px;
  /* flex-wrap: wrap;*/
}
.inner_edit_profile span {
  text-transform: capitalize;
  margin-left: 0px;
  color: #ffffff;
  opacity: 0.5;
  font-size: 1.8em;
}
.profile_data {
  position: absolute;
  display: flex;
  margin-left: 222px;
  /* height: 10px; */
  /* padding: 1em;*/
  position: relative;
  /* left: 204px; */
}
.input_wrapper {
  margin-bottom: 22px;
  display: flex;

  width: 100%;
  text-align: center;
  justify-content: center;
}
@media (min-width: 320px) and (max-width: 767px) {
  .input_wrapper {
    justify-content: space-between;
    white-space: nowrap;
    line-height: 30px;
    background-color: #362181;
  }
}
label {
  width: 98px;
  color: #ffffff;
  opacity: 0.5;
  text-align: left;
  margin-left: 25px;
}
.value_input {
  display: flex;
}
label::after {
  content: " :";
}
span {
  margin-left: 5px;
}
input {
  white-space: nowrap;
  width: 153px;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  color: #ffff;
  border: 1px solid rgba(150, 150, 150, 0);
  margin: 0px 20px 0px 20px;
  box-sizing: border-box;
  transition: all 80ms ease-in-out;
}
.wallet_wrapper_dropdown {
  position: absolute;
  cursor: pointer;
  z-index: 2;
  right: 12px;
  bottom: 12px;
  color: #1e0741;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #2626262e;
  border-radius: 3px;
  padding: 2px 11px 2px 13px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .wallet_wrapper_dropdown {
    display: none;
  }
}
.wallet_wrapper_dropdown:hover {
  background-color: #220554;
  color: #ffffff;
  box-shadow: 0px 0px 7px 1px #ffffff;
}
.wallet_details_outer {
  display: none;
  position: absolute;
  right: 4px;
  top: 143px;
  background: #210554;
  width: 390px;
  box-shadow: 2px 3px 6px rgb(0 0 0 / 50%);
  z-index: 3;
  padding: 1em;
  border-radius: 4px;
}
.wallet_details_inner {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  border-bottom: 1px solid #ffffff1a;
  overflow: hidden;
  padding: 12px 0px;
}
.wallet_title {
  text-transform: capitalize;
  font-size: 1.2em;
}
.wallet_all {
  cursor: pointer;
}
.wallet_details_card {
  -ms-flex-align: stretch;
  display: flex;
  border-bottom: 1px solid #ffffff1a;
  overflow: hidden;
  padding: 12px 0px;
}
.wallet_left_outer,
.wallet_left_inner {
  display: flex;
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
  width: 55px;
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
  font-size: 13px;
}
.wallet_total {
  float: right;
  color: #1e0741;
  background-color: #ffffff;
  padding: 3px 15px;
  border-radius: 4px;
}
.green_money {
  color: #07cc00;
}
.pink_money {
  color: #ff6186;
}
@media (min-width: 320px) and (max-width: 767px) {
  .inner_edit_profile {
    display: block;
  }
}
table tbody tr td:nth-child(2) {
  color: #ffffff;
}
table tbody tr td:nth-child(2)::before {
  content: " :";
  margin: 20px 10px;
  color: #ffffff;
}
tr td:first-child {
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
  white-space: nowrap;
}

@media (min-width: 320px) and (max-width: 1076px) {
  .user_profile {
    display: flex;
    flex-direction: column;
  }
}
.fa-chevron-down:before {
  content: "\f078";
  font-size: 0.8em;
  margin-left: 12px;
}
</style>
