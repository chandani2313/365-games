<template>
<div class="main_wrapper" >
    <!-- <div class="component_head">Teams</div> -->
    <div class="team_profile" v-if="team">
        <div class="team_poster">
            <img v-if="team.coverImage" :src="`https://ps-mg.s3.amazonaws.com/${team.coverImage}`" height="250px;"/>
            <img v-else src="../assets/myteam/team_background.jpg" />
         <div id="add-cover-pic" v-if="team.captain._id ==  user._id" @click="toggleCropCoverImagePopup(team)">
          <img src="../assets/myteam/editphoto.svg" />
        </div>
        </div>
        <div class="team_outer">
            <div class="team_details">
                <div class="team_info">
                    <div class="team_image">
                        <img v-if="team.profileImage" :src="`https://ps-mg.s3.amazonaws.com/${team.profileImage}`"/>
                        <img v-else src="../assets/myteam/profilephoto.svg" />
                        <div class="select_image" v-if="team.captain._id ==  user._id" @click="toggleCropProfileImagePopup(team)"><img src="../assets/myteam/editphoto.svg" /></div>
                    </div>
                </div>
                <div class="team_details_wrapper">
                    <div class="team_details_inner">
                        <div class="team_name">
                            {{team.name}}
                        </div>
                        <div class="team_para">
                            {{team.alias}}
                        </div>
                        <div class="team_game_name">

                        </div>
                        <div class="edit_button">
                            <button class="btn" v-if="team.game">{{team.game.shortName}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="edit_btn_wrap">
                <button class="edit_btn" v-if="team.captain._id === user._id"  @click="openPopup">Edit</button>
            </div>
        </div>
        <div class="team_stat_member">
            <div class="stat_wrap">
                <div class="stat_head">
                    Status
                </div>
                        <!-- <div class="played_image"></div> -->
                <div class="stat_card_container" >
                    <div class="stat_card"   v-for="item in Items"  :key="item.id" :style="{ 'background-image' : 'url(\'' + item.image + '\')' }">
                        <div class="stat_img"><img :src="item.pic" /></div>
                        <div class="stat_title_values" >
                            <div class="stat_title">{{item.title}}</div>
                            <div class="scores">
                                <div class="score_value">2810</div><span>(+23)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="team_member_wrap">
                <div class="top_heading">
                    <div class="team_member">
                        team member
                    </div>
                    <div class="invite_btn" v-if="team.captain._id ==  user._id" @click="inviteTeam(team)">
                        <button class="invite">+invite</button>
                    </div>
                </div>
                <!-- <div class="team_member_cards_container">
                    <div class="member_card" v-for="member in team.members" :key="member._id">
                        <div class="member_pic">
                            <img src="../assets/myteam/memberPic.svg" />
                        <div class="member_name">{{member.username}}</div>
                        <div class="member_position" v-if="team.captain._id === member._id">Captain</div>
                        </div>
                    </div>
                </div> -->

 <div class="player_card">
    <div class="eventparticipant-card"  v-for="member in team.members" :key="member._id">
        <div class="close" v-if="team.captain._id !== member._id && team.captain._id === user._id" @click="leavePopup(member)">x</div>
        <div class="eventparticipant-card_fig" >
            <img v-if="member.profileImage" :src="`https://ps-mg.s3.amazonaws.com/${member.profileImage}`"/>
            <img v-else src="../assets/myteam/memberPic.svg" />
        </div>
        <div class="eventparticipant-card_conent">
            <div class="eventparticipant-card_name">{{member.username}}</div>
            <div class="eventparticipant-card_info" v-if="team.captain._id === member._id">
                <div>Captain</div>
            </div>
            <div class="eventparticipant-card_info"  v-if="team.captain._id === user._id && team.captain._id !== member._id">
                <div style="cursor:pointer;" @click="openCaptainPopup(member._id)">Change Captain</div>
            </div>
        </div>
        <!-- <div class="eventparticipant-card-onlinedot" ></div>
        <div class="notification_card_request">
            <span>
                <a class="" @click="openCaptainPopup(member._id)" >Change</a>
            </span>
        </div> -->
    </div>
  </div>

            </div>
        </div>
    </div>
    <CropImage
      @closeCropImage="toggleCropProfileImagePopup"
      @onImageUrl="updateGameProfileImage"
      v-if="isCropProfileImagePopupOpen"
    />
    <CropImage
      :aspect-ratio="3"
      @closeCropImage="toggleCropCoverImagePopup"
      @onImageUrl="updateCoverImage"
      v-if="isCropCoverImagePopupOpen"
    />
    <EditTeamProfile :team="team" v-if="showPopup" @closeEditTeamPopup="closePopup" />

    <changeCaptain :playerId="playerId" :team="team" v-if="showCaptainPopup" @openPopup="openCaptainPopup()"/>

    <InviteTeamPopups v-if="showTeamsPopup" @closeTeamPopup="closeTeamPopup" :team="selectedTeam"/>

    <v-dialog persistent max-width="320px" dark v-model="openRemovePopup">
        <!-- <div style="background: rgba(19, 19, 19, 0.7); backdrop-filter: blur(7px);"> -->
            <v-card style="background: #1b1b1b;">
            <v-card-title>
            </v-card-title>
            <v-card-text class="dialogbox">Are you sure you want to Remove {{this.deleteMemberId.username}} from team?</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                small
                color="white"
                text
                @click="openRemovePopup = false"
            >
                Cancel
            </v-btn>
            <v-btn
                small
                color="red"
                text
                @click="leaveFromTeam()"
            >
                Remove
            </v-btn>
            </v-card-actions>
            </v-card>
        <!-- </div> -->
    </v-dialog>

</div>
</template>
<script>
import axios from "axios";
import CropImage from "./CropImage.vue";
import EditTeamProfile from "./team/EditTeamProfilePopup.vue"
// import changeCaptain from './team/ChangeCaptain.vue'
import changeCaptain from './team/NewChangeCaptain.vue'
import InviteTeamPopups from './team/InviteTeamPopup.vue';


export default {
    name: 'TeamProfile',
    components: {
    CropImage,
    EditTeamProfile,
    changeCaptain,
    InviteTeamPopups
  },
    data(){
        return{
            team: "",
            user: "",
            isCropProfileImagePopupOpen: false,
            isCropCoverImagePopupOpen: false,
            showPopup: false,
            openRemovePopup: false,
            showCaptainPopup: false,
            selectedTeam: '',
            showTeamsPopup: false,
            playerId: null,
            deleteMemberId: {},
            Items: [
                {
                id: 1,
                image: require("../assets/myteam/waves.svg"),
                title:"played matches",
                pic:require("@/assets/myteam/bomb.svg")
                },
                {
                id: 2,
                image: require("../assets/myteam/waves2.svg"),
                title:"Won matches",
                pic:require("@/assets/myteam/won.svg")
                },
                {
                id: 3,
                image: require("../assets/myteam/waves3.svg"),
                title:"leagues played",
                pic:require("@/assets/myteam/cup.svg")
                },
                {
                id: 4,
                image: require("../assets/myteam/waves4.svg"),
                title:"win streak",
                pic:require("@/assets/myteam/Account.svg")
                }
            ],
        }
    },
    methods: {
        toggleCropProfileImagePopup(team) {
            this.selectedTeam = team;
            this.isCropProfileImagePopupOpen = !this.isCropProfileImagePopupOpen;
        },
        openPopup() {
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
        },
        closeTeamPopup() {
            this.showTeamsPopup = false;
        },
        toggleCropCoverImagePopup(team) {
            this.selectedTeam = team;
            this.isCropCoverImagePopupOpen = !this.isCropCoverImagePopupOpen;
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
        async updateCoverImage(croppedImage) {
            await axios
            .post("/team/update", {
                criteria: { _id: this.selectedTeam._id },
                data: { coverImage: croppedImage },
            })
            .then(() => {
                this.isCropCoverImagePopupOpen = false;
                window.location.reload();
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    console.log("err", e.response.data);
                }
            });
        },
        getTeamDetails() {
            axios
            .get(`/team/find/${this.$route.params.id}`)
            .then((response) => {
                console.log("team details", response.data);
                this.team = response.data;
            })
            .catch((e) => {
                console.log("err", e.response);
                if (e.response.status === 400) {
                    this.$router.push("/");
                }
            });
        },
        inviteTeam(item) {
            this.showTeamsPopup = true;
            this.selectedTeam=item
        },
        leavePopup(member) {
            this.deleteMemberId = member;
            this.openRemovePopup = true;
        },
        openCaptainPopup(playerId) {
            this.playerId = playerId
            if (this.showCaptainPopup === false) {
                this.showCaptainPopup = true;
            } else {
                this.showCaptainPopup = false;
            }
        },
        leaveFromTeam() {
        const body = {
            criteria: { _id: this.team._id },
            data: { memberId: this.deleteMemberId._id}
        }
        axios
            .post("/team/member/remove", body)
            .then((response) => {
            console.log('teams', response.data)
            window.location.reload();
            })
            .catch((e) => {
            if (e.response.status === 400) {
                console.log("err", e);
            }
            });
        }

    },
    mounted() {
        this.getTeamDetails();
        this.user = this.$store.getters.user;
    }
 
}
</script>
<style scoped>
.player_card{
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem;
}
.eventparticipant-card .close {
    display: none;
}
.eventparticipant-card:hover .close {
  display: block;
  font-size: 18px;
  color: #9672ff;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 10px;
}
 .notification_card_request{
  text-align: center;
  display: flex;
  align-self: center;
 }
.notification_card_request span a {
    cursor: pointer;
    padding: 0px 6px;
    font-size: 11px;
    border-radius: 4px;
    transition: all .2s ease-in-out;
    color: #1b2731d1;
    text-transform: uppercase;
    margin-right: 10px;
    background-image: linear-gradient(to right, rgb(105 74 199) 0%, rgb(182 164 215) 100%);
    font-weight: 600;
} 
.notification_card_request span a:hover { 
    color: #fff;
    box-shadow: 0px 0px 5px 0px #9672ff;      
}
.eventparticipant-card{
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background:#9672ff1a;
    flex-direction: row;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: relative;
    display: flex;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
}
.eventparticipant-card:hover{
    transform: translateY(-5px);
    transition: all .15s;
    box-shadow: 0px 0px 3px 0px #9672ff;
}
.eventparticipant-card_fig{
    flex-basis: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    min-width: 50px;
}
.eventparticipant-card_conent{
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 15px;
}
.eventparticipant-card_name{
   color: #fff;
    font-size: 12px;
    margin-bottom: .4em;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: -.02em;
    font-weight: 700;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 130px;
}
.eventparticipant-card_info{
  display: flex;
  color: #59CD65;
  font-size: 12px;
}

#add-cover-pic {
  position: absolute;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: #9672ff;
  right: 50px;
    top: 50px;
}
#add-cover-pic img {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  width: 28px;
height: 28px;
}
#add-cover-pic img:hover {
  filter: drop-shadow(1px 0px 3px #00e1ff);
  cursor: pointer;
}
img{
    width:100%;
}
.main_wrapper{
padding: 1rem 2.5rem;
}
.team_poster{
    border-radius: 10px;
    overflow: hidden;
}
.team_outer{
display: flex;

    -moz-column-gap: 30px;
    column-gap: 30px;
    padding: 30px 0px 0px 30px;
}
.team_details{
    display: flex;
    column-gap: 40px;
    /* padding: 30px 0px 0px 30px; */
    width: 100%;
}
.team_details_inner{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.team_info{
    position: relative;
}
.team_image{
    position: relative;
    width: 175px;
    height: 175px;
    border-radius: 50%;
}
.team_image img{
    border-radius: 50%;
}
.select_image{
    position: absolute;
    right: 15px;
    bottom: 12px;
    cursor: pointer;
}
.team_details_wrapper{
    display: flex;
    align-items: center;
}

.team_name{
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    text-transform: capitalize;
}
.team_para{
    white-space: nowrap;
    width: 370px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    /* display: flex; */
    align-items: center;
    font-feature-settings: 'salt' on, 'liga' off;
    color: #FFFFFF;
}
.btn{
        background: rgba(255, 255, 255, 0.04);
    border-radius: 10px;
    color: #FFFFFF;
    width: 138px;
    height: 34px;
    text-transform: capitalize;
}
.edit_btn{
        width: 69px;
    height: 42px;
    left: 1336px;
    top: 428px;
    background: #222222;

    border-radius: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 29px;
    align-items: center;
    /* text-align: center; */
    color: #9672FF;
    /* align-content: center; */
    /* margin: auto; */
}
.edit_btn::after{
    content: '';
    opacity: 0.3;
}
.team_stat_member{
    display: flex;
        margin-top: 35px;
        column-gap: 20px;
}
.stat_head{
    margin-bottom: 22px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
/* identical to box height */

display: flex;
align-items: center;

color: #FFFFFF;
}
.stat_card{
    position: relative;
    background-size: cover;
    display: flex;
    width: 260px;
    height: 85px;
    margin-bottom: 12px;
    border-radius: 10px;
    /* background-image: url('../assets/myteam/waves.svg'); */
}
.stat_card::after{
    content: '';
    position: absolute;
    background: linear-gradient(284.29deg, rgba(150, 114, 255, 0.4) -160.13%, rgba(150, 114, 255, 0) 70.16%);
    opacity: 0.1;
    background: #9672FF;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.stat_title_values{
    margin: auto 0;
}
.stat_title{
text-transform: capitalize;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;

color: rgba(205, 187, 255, 0.6);
}
.scores{
display: flex;
}
.score_value{

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 39px;
/* identical to box height */

display: flex;
align-items: center;

color: #FFFFFF;
}
.dialogbox span{
    font: normal normal 500 15px/22px Poppins;
}
span{   
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;
color: #59CD65;
}
.team_member_wrap{
width: 100%;
}
.top_heading{
    display: flex;
    justify-content: space-between;
    /* margin: 0px 30px; */
}
.team_member{
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
/* identical to box height */
display: flex;
color: #FFFFFF;
    margin-bottom: 22px;
    text-transform: capitalize;
}
.invite_btn{
        text-transform: capitalize;
    background: #9672FF;
    border-radius: 10px;
    width: 78.3px;
    height: 42px;
    display: flex;
    /* text-align: center; */
    /* align-items: center; */
    justify-content: center;
}
.invite{
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 29px;
/* or 223% */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

}
.team_member_cards_container{
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 4rem 1rem;
        margin-top: 20px;
}
.member_card{
    background: #24292e;
    display: flex;
    justify-content: center;
    align-items: center;
}
.member_pic{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: auto;
}
.member_name{

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 120%;
/* identical to box height, or 17px */

text-align: center;
font-feature-settings: 'salt' on, 'liga' off;

color: #FFFFFF;

}
.member_position{
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 120%;
/* or 14px */

text-align: center;
font-feature-settings: 'salt' on, 'liga' off;

color: #59CD65;

}
@media (min-width: 320px) and (max-width: 767px){
    .team_stat_member{
        flex-direction: column;
    }
    .stat_card{
        width: 100%;
    }
}
</style>