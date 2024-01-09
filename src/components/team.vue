<template>
    <div class="cards_outer">
        <div class="cards" v-for="team in teams" :key="team._id">
            <div class="background_poster">
                <img v-if="team.coverImage"
                :src="`https://ps-mg.s3.amazonaws.com/${team.coverImage}`" height="139px" />
                <img v-else src="../assets/myteam/background.png" />
                <!-- <img  src="../assets/myteam/background.png" /> -->
                <div class="edit_background_image">
                    <div id="add-cover-pic" v-if="team.captain._id ==  user._id" @click="toggleCropProfileImagePopup(team)">
                    <img src="../assets/myteam/editImage.svg"/>
                    </div>
                </div>
            </div>
            <div class="bottom_wrap">
                <div class="player_profile">
                    <div class="left">
                        <div class="player_name">
                            <div class="name_wrapper">
                                <div class="short_name">{{team.alias}}</div>
                                <div class="full_name">{{team.name}}</div>
                            </div>
                            <div class="game_name">{{team.game.shortName}}</div>
                        </div>
                        
                    </div>
                    <div class="right">
                        <div class="edit_button">
                        <router-link class="text-xlarge" :to="{name: 'TeamProfile', params: { id: team._id }}">
                          <img v-if="user._id === team.captain._id" src="../assets/myteam/edit.svg" />
                          <i  v-else class="fa fa-eye icon"></i> 
                          </router-link>
                        </div>
                    </div>
                </div>
                <div class="member_info">
                    <div class="member">
                        <div class="member_name">
                            Members
                        </div>
                        <div class="invite_button">
                            <button class="btn" v-if="team.captain._id ==  user._id" @click="inviteTeam(team)">+invite</button>
                        </div>
                    </div>
                    <div class="player_list">
                        <span>{{team.members.length}}</span>&nbsp;<span>Players</span>
                    </div>
                </div>
            </div>
        </div>
        
        <InviteTeamPopups v-if="showTeamsPopup" @closeTeamPopup="closePopup" :team="selectedTeam"/>
        <CropImage
          @closeCropImage="toggleCropProfileImagePopup"
          :aspect-ratio="3"
          @onImageUrl="updateGameProfileImage"
          v-if="isCropProfileImagePopupOpen"
        />
    </div>
</template>
<script>
import axios from "axios";
import CropImage from "./CropImage.vue";
import InviteTeamPopups from './team/InviteTeamPopup.vue';

export default {
  name: "MyTeams",
  components: {
    CropImage,
    InviteTeamPopups
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
          data: { coverImage: croppedImage },
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
<style scoped>
i{
  padding: 6px;
    background: #8050ba73;
    border-radius: 50%;
    color: white;
    font-size: 14px;
}
#add-cover-pic {
  position: absolute;
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
  width: 20px;
left: 4px;
top: 3px;
height: 20px;
}
#add-cover-pic img:hover {
  filter: drop-shadow(1px 0px 3px #00e1ff);
  cursor: pointer;
}
img{
    width: 100%;
}
.cards_outer{
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem;
    /* padding: 1rem 2.5rem; */
}
.cards{
background: #1B1B1B;
border-radius: 10px;
}
.background_poster{
 position: relative;
}
.edit_background_image{
    cursor: pointer;
    
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(4, 4, 4, 0.41), rgba(4, 4, 4, 0.41));
    border-radius: 10px 10px 0px 0px;

    /* transition effect. not necessary */
    transition: opacity .2s, visibility .2s;
}
.edit_background_image>img{
    width: 14px;
}
.background_poster:hover .edit_background_image {
    visibility: visible;
    opacity: 1;
}
.bottom_wrap{
    padding: 1em;
}
.player_profile{
    display: flex;
    /* width: 100%; */
    margin-bottom: 25px;
    justify-content: space-between;
}
.left{
    display: flex;
    justify-content: space-between;
}
.name_wrapper{
    display: flex;
    margin-bottom: 7px;
}
.short_name{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    color: #9672FF;
    text-transform: uppercase;
}
.short_name::after{
    content: '';
    width: 1px;
    border-left: 1px solid #9672FF;
    height: 18px;
    color: #FFFFFF;
    opacity: 0.3;
    /* padding: 8px; */
    margin-left: 10px;
}
.full_name{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
.game_name{

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #CDCADB;
}
.edit_button{
    cursor: pointer;
}
.member{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.member_name{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 120%;
    color: #FFFFFF;

}
.btn{
    background: #9672FF;
    border-radius: 10px;
    width: 78.86px;
    height: 28px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    /* align-items: center; */
    /* align-content: center; */
    justify-content: center;
    text-transform: capitalize;
}
.player_list{

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #CDCADB;
}
</style>