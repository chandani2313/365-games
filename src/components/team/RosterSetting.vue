<template>
  <div class="teams_outerwrap">
    <div class="teams_inner_wrap">
      <div class="teams_inner_subwrap">
        <ul>
          <li>Click on the remove button to delete member from your team</li>
          <li>Click on the Change Leader button to change captain in your team</li>
        </ul>
        <div class="teams_card_wrap1">
          <div class="teams_inner_card" v-for="member in team.members" :key="member._id">
            <div class="teams_player_img"></div>
            <div class="teams_card_contentwrap">
              <div class="teams_name">{{member.username}}</div>
              <div class="teams_name1">Player</div>
            </div>
            <div class="teams_leader_update" v-if="member._id === team.captain._id">
              <div class="teams_name0">Captain</div>
            </div>
            <div class="teams_leader_update" v-else>
              <div class="teams_name0" @click="openPopup(member._id)" style="cursor:pointer;">Change captain</div>
              <div class="teams_name2" @click="leavePopup(member)">remove</div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <v-dialog persistent max-width="320px" dark v-model="openRemovePopup">
                 <v-card style="background:#1e0453">
                 <v-card-title>
                  </v-card-title>
                  <v-card-text>Are you sure you want to Remove {{this.deleteMemberId.username}} ?</v-card-text>
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
              </v-dialog>
      <v-snackbar v-model="snackbar" top elevation="24" :color="color" :timeout="timeout">
        {{ text }}
      </v-snackbar>
    <changeCaptain :playerId="playerId" :team="team" v-if="showPopup" @openPopup="openPopup()"/>

  </div> 
</template>

<script>
import axios from "axios";
import changeCaptain from './ChangeCaptain.vue'
export default {
  name: "RosterSetting",
  components: {changeCaptain},
  props: {
    team: {},
  },
  data: () => ({
    openRemovePopup: false,
    showPopup: false,
    playerId: null,
    color: "",
    snackbar: false,
    text: "",
    timeout: "-1",
    deleteMemberId: {},
  }),
   created() {
        console.log('team uh roster', this.team)
    },
  methods: {
    leavePopup(member) {
    this.deleteMemberId = member;
    this.openRemovePopup = true;
    },
     openPopup(playerId) {
          this.playerId = playerId
          if (this.showPopup === false) {
              this.showPopup = true;
          } else {
              this.showPopup = false;
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
  },
};
</script>

<style  scoped>
/* .teams_outerwrap{
padding: 20px;
} */
.teams_header{
display: flex;
justify-content: space-between;
position: relative;
padding: 5px;
}
.button_wrapper{
  position: absolute;
  right:0;
  padding: 5px;
}
/* button{
border: 0.5px solid #FFFFFF;
background: #180550;
color: white;
cursor: pointer;
text-transform: capitalize;
padding: 5px;
margin: 15px 10px 10px 0px;
border-radius: 4px;
} */
.active{
background: #1E0741;
border: 0.25px solid #1E0741;
}
.teams_title_wrap{
padding: 10px;
font:22px/33px Poppins;
color: #FFFFFF;
text-transform: capitalize;
margin: 15px 10px 10px 0px;
}
/* .teams_inner_wrap{
background: #1E0741;
padding: 12px;
width:650px;
margin: auto; 
} */
.teams_inner_subwrap{
background: #310A69;
/* border-radius: 5px; */
padding: 15px;
display: grid;
margin: auto;
}
.teams_inner_subwrap1{
background: #310A69;
border-radius: 15px;
display: flex!important;
position: relative;
}
.x {
position: absolute;
float: right;
background: #f1f1f1;
color: black;
right: 0px;
top:10px;
min-height:25px;
min-width: 25px;
border-radius: 15px;
}
.teams_sub_title_wrap0{
border:none;
background: none;
color:white;
cursor: pointer;
min-height:0;
text-transform: capitalize;
padding: 5px;
margin:none;
border-radius:none;
}
.teams_sub_title_wrap1{
border:none;
background: none;
color: #bdb7b7;
cursor: pointer;
min-height:0;
text-transform: capitalize;
padding: 5px;
margin:none;
border-radius:none
}
.teams_bottom_strip{
height: 1px;
background: #bdb7b7;
margin: -10px 10px 0px 5px;
}
li{
  color: #7d7979;
  font:14px Poppins;
}
.teams_card_wrap1{
/* display: grid;
grid-template-columns:auto auto;
grid-column-gap: 85px;
grid-row-gap: 20px;
padding: 5px; */
grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
grid-auto-flow: dense;
display: grid;
grid-gap: 1rem;
padding: 5px;
}
.teams_inner_card{
display: flex;
padding: 5px;
justify-content: space-between;
border-radius: 6px;
background: #10054D;
border:1px solid #10054D;
margin-bottom: 10px;
align-items: center;
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
align-items: center;
font:500 14px/19px Poppins;
color: #F1F1F1;
}
.teams_name1{
font-size: 10px;
color: #F1F1F1;
text-transform: capitalize;
padding: 2px;
}
.teams_name0{
text-transform: capitalize;
font:10px Poppins;
color: #F1F1F1;
padding: 4px;
border:1px solid #F1F1F1;
background: #310A69;
}
.teams_name2{
font-size: 10px;
color: #F1F1F1;
text-transform: capitalize;
padding: 4px; 
border:1px solid #F1F1F1;
 background: #310A69;
 cursor: pointer;
}
.teams_update{
border: 0.5px solid #FFFFFF;
background: #f1f1f1;
color: black;
cursor: pointer;
min-width: 100px;
text-transform: capitalize;
padding: 5px;
margin: 0 auto!important;
display: block;
border-radius: 2px!important;
}
@media screen and (max-width: 640px) {
/* .teams_card_wrap1{
display: grid;
grid-template-columns:auto;
flex-wrap: wrap;
grid-column-gap: 15px!important;
grid-row-gap: 8px!important;
} */
/* .teams_inner_wrap{
width:650px;
display: flex;
flex-wrap: wrap;
margin: auto;
} */
.teams_title_wrap0{
  margin: auto;
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
/* .teams_card_wrap1{
display: grid;
grid-template-columns:auto;
flex-wrap: wrap;
grid-column-gap: 15px!important;
grid-row-gap: 8px!important;
} */
/* .teams_inner_wrap,.teams_header{
width:650px;
display: flex;
flex-wrap: wrap;
  margin: auto;
} */
.teams_title_wrap0{
  margin: auto;
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

/* .teams_inner_wrap, .teams_header{
width:650px;
display: flex;
flex-wrap: wrap;
  margin: auto;
} */
.teams_title_wrap0{
  margin: auto;
}
/* .teams_card_wrap1{
display: grid;
grid-template-columns:auto;
flex-wrap: wrap;
grid-column-gap: 15px!important;
grid-row-gap: 8px!important;
} */
.teams_outerwrap, .teams_title_wrap{
padding: 0px 0px 10px 1px!important;
background: #310a69;
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