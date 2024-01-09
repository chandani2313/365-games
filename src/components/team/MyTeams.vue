<template>
  <div class="teams_outerwrap">
    <div class="teams_inner_wrap">
        <div class="teams_inner_subwrap" v-for="team in teams" :key="team._id">
        <div class="teams_img_wrap">
          <div class="teams_img_logo">
            <div id="add-profilepic" v-if="team.captain._id ==  user._id" @click="toggleCropProfileImagePopup(team)">
              <i class="fas fa-camera"></i>
            </div>
            <div class="image_wrap">
              <img
                v-if="team.profileImage"
                :src="`https://ps-mg.s3.amazonaws.com/${team.profileImage}`"
                alt="profile image"
              />
              <img v-else
                src="/img/assets/profile/nouserimageicon.jpg"
                alt="profile image"
              />
            </div> 
          </div>
          <div style="display: flex; justify-content: space-between">
          <div class="teams_img_content">{{team.game.shortName}}</div>
          <div class="teams_img_content" v-if="team.captain._id ==  user._id">CAPTAIN</div>
          </div>
        </div>
        <div class="teams_card_wrap" style="width: 400px;">
          <div class="teams_card_wrap0">
          <div class="teams_card_headingwrap">{{team.name}}</div>
          <button class="teams_edit_icon" v-if="team.captain._id ==  user._id"><i class="fas fa-pen-square" @click="editTeam(team)"></i></button>
          <div class="m-btn" v-if="team.captain._id ==  user._id" @click="inviteTeam(team)"><span>Invite</span></div>
          </div>
          <div class="teams_card_wrap1">
          <div class="teams_inner_card" v-for="member in team.members" :key="member._id">
          <div class="teams_player_img"></div>
          <div class="teams_card_contentwrap">
          <div class="teams_name">{{member.username}}</div>
          <div class="teams_name1">Player</div>
          </div>
          </div>
          </div>
        </div>
        </div>
    </div>
    <EditTeamPopup 
      v-if="isEditTeamPopup"
      @closePopup="closeDialog"
      :team="selectedTeam"
    />
    <InviteTeamPopup v-if="showTeamsPopup" @closeTeamPopup="closePopup" :team="selectedTeam"/>
    <CropImage
      @closeCropImage="toggleCropProfileImagePopup"
      @onImageUrl="updateGameProfileImage"
      v-if="isCropProfileImagePopupOpen"
    />
  </div>
</template>

<script>
import axios from "axios";
import EditTeamPopup from './EditTeamPopup.vue';
import InviteTeamPopup from './InviteTeam.vue';
import CropImage from "../CropImage.vue";

export default {
  name: "MyTeams",
  components: {
    EditTeamPopup,
    InviteTeamPopup,
    CropImage
  },
  data() {
    return {
      user: '',
      isEditTeamPopup: false,
      teams: [],
      selectedTeam: '',
      showTeamsPopup: false,
      isCropProfileImagePopupOpen: false,
      color: "",
      snackbar: false,
      text: "",
      timeout: "",
    };
  },
  methods: {
    inviteTeam(item) {
      this.showTeamsPopup = true;
      this.selectedTeam=item

    },
    getMyTeams() {
      this.user = this.$store.getters.user;
      const criteria = {
        members: {_id: this.user._id}
      }
      axios
        .post("/team/find/all", {
          criteria,
        })
        .then((response) => {
          this.teams = response.data;
          console.log('teams', response.data)
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    editTeam(item) {
      this.selectedTeam=item
      this.isEditTeamPopup = true;
    },
    closeDialog() {
      this.isEditTeamPopup = false;
    },
     closePopup() {
      this.showTeamsPopup = false;
    },
    toggleCropProfileImagePopup(team) {
      this.selectedTeam = team;
      this.isCropProfileImagePopupOpen = !this.isCropProfileImagePopupOpen;

    },
    async updateGameProfileImage(croppedImage) {
      await axios
        .post("/team/update", {
          criteria: { _id: this.selectedTeam._id },
          data: { profileImage: croppedImage },
        })
        .then((response) => {
          this.color = "#45108A";
          this.snackbar = true;
          this.text = "Game Profile Image update Successfully";
          this.timeout = 3000;
          this.isCropProfileImagePopupOpen = false;
          this.selectedTeam.profileImage = response.data.profileImage;
          window.location.reload();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },
  },
  mounted() {
    this.getMyTeams()
  }
};
</script>

<style  scoped>
.m-btn {
 padding: 2px 4px;
    cursor: pointer;
    color: #1b2731;
    font-size: 12px;
    height: 22px;
    margin-top: 8px;
    white-space: pre;
    border-radius: 4px;
    /* background-color: #dacbf4; */
    background-image: linear-gradient(to right, rgb(105 74 199) 0%, rgb(182 164 215) 100%);
    font-weight: 600;
}
.m-btn:hover{
    color: #fff;
    box-shadow: 0px 0px 5px 0px #212561;
}
img{
  width: 100%;
  display: block;
}
.teams_outerwrap{
padding: 20px;
}
.teams_header{
display: flex;
justify-content: space-between;
position: relative;
}
.button_wrapper{
  flex-wrap:nowrap;
  position: absolute;
  right:0;
}
button{
border: 0.5px solid #FFFFFF;
background: #180550;
color: white;
cursor: pointer;
text-transform: capitalize;
padding: 5px;
margin: 15px 10px 10px 0px;
border-radius: 4px;
}
.active{
background: #1E0741;
border: 0.25px solid #1E0741;
}
.teams_title_wrap{
padding: 10px;
font:22px/33px Poppins;
color: #FFFFFF;
text-transform: capitalize;
}
.teams_inner_wrap{
background: #1E0741;
padding: 12px; 
}
.teams_inner_subwrap{
background: #310A69;
border-radius: 5px;
display: flex!important;
margin-bottom:20px;
justify-content: space-evenly;
}
.teams_img_wrap{
background: #54229c;
padding: 5px;	
width: 150px;
animation: tilt-in-left-1 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes tilt-in-left-1 {
  0% {
    transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}
.teams_img_logo {
  position: relative;
}
.image_wrap{
border-radius: 3px;
padding: 5px;
/* min-height:130px;
min-width: 140px; */
background:  #d8d8d8;
margin-top: 10px;
}
#add-profilepic {
  position: absolute;
  bottom: 10px;
  left: 110px;
  line-height: 1;
  cursor: pointer;
  border: 3px solid #fff;
  color: #1b2731;
  background: #ffffffed;
  border-radius: 3px;
}
.teams_img_content{
font-size: 10px;
color: #F1F1F1;
margin-top: 10px;
}
.teams_card_wrap0{
display: flex;
width: 100%;
justify-content: space-between!important;
position: relative;
}
.teams_card_headingwrap{
font:22px/33px Poppins;
color: #FFFFFF;
text-transform: capitalize;
}
.teams_edit_icon{
cursor: pointer;
border:0!important;
margin:0!important;
background: none!important;
/* position: absolute;
right: 0; */
}
.teams_card_wrap1{
display: grid;
grid-template-columns:auto auto auto;
grid-column-gap: 85px;
grid-row-gap: 20px;
padding: 5px;

}
.teams_inner_card{
display: flex;
padding: 5px;
border-radius: 6px;
}
.teams_player_img{
min-width: 35px;
height: 35px;
border-radius: 4px;
background: #f1f1f1;
margin-right: 10px;
}
.teams_card_contentwrap{
padding: 2px;
}
.teams_name{
text-transform: capitalize;
font:500 14px/19px Poppins;
color: #F1F1F1;
}
.teams_name1{
font-size: 10px;
color: #F1F1F1;
text-transform: capitalize;
padding: 2px;
}

@media screen and (max-width: 640px) {
.teams_card_wrap1{
width: 100%;
display: flex;
flex-wrap: wrap;
grid-column-gap: 15px!important;
grid-row-gap: 8px!important;
}
.teams_img_wrap{
	margin:auto;
}
.teams_card_wrap{
padding: 0!important
}
button{
  text-align: center!important;
  padding: 0!important; 
}
.button_wrapper{
 display: flex;
}
}
@media screen and (max-width: 560px){
.teams_inner_subwrap,.teams_card_wrap, .teams_outer_shell{
width: 100%;
display: flex;
flex-wrap: wrap;
}
.teams_card_wrap1{
width: 100%;
display: flex;
flex-wrap: wrap;
grid-column-gap: 15px!important;
grid-row-gap: 8px!important;
}
button{
  text-align: center!important;
  padding: 0!important; 
}
.button_wrapper{
 display: flex;
}
}
@media screen and (max-width: 480px){

.teams_card_wrap1{
width: 100%;
display: flex;
flex-wrap: wrap;
grid-column-gap: 15px!important;
grid-row-gap: 8px!important;
}
.teams_outerwrap, .teams_title_wrap{
padding: 0px 0px 10px 1px!important;
}
button{
  text-align: center!important;
  padding: 0!important; 
}
.button_wrapper{
 display: flex;
}
}
</style>