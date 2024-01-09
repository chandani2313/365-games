<template>
  <!-- <div class="teams_outerwrap">
    <div class="teams_inner_wrap">
      <div class="teams_inner_subwrap" v-for="team in teams" :key="team._id">
        <div class="teams_colour_strip"></div> -->
        <!-- <div class="teams_card_wrap">
          <div class="teams_name">{{team.name}}</div>
          <div class="teams_name1">{{team.alias}}</div> -->
        <!-- </div> -->
        <!-- <div class="teams_card_wrap">
          <div class="teams_name">game</div>
          <div class="teams_name1">{{team.game.shortName}}</div> -->
        <!-- </div> -->
        <!-- <div class="teams_card_wrap" v-if="team.captain._id !==  userId">
          <div class="m-btn" @click="joinTeam(team._id)"><span>Join Team</span></div> -->
        <!-- </div> -->
       <!-- <div v-else class="teams_card_wrap">
          <div class="m-btn" style="background: none; color: white;"><span>Captain</span></div> -->
        <!-- </div>  -->
       <!-- <div class="image_wrap">
          <div v-if="team.profileImage"><img :src="'https://ps-mg.s3.amazonaws.com/' + team.profileImage" width="80px" style="border-radius:0px 3px 3px 0px;" alt="" /></div>
          <div v-else><img src="/img/assets/profile/nouserimageicon.jpg" width="80px" style="border-radius:0px 3px 3px 0px;" alt="" /></div> --> 
         <!-- </div>
      </div>
    </div> -->
    <div class="inner_container">
        <div class="list">
            <table class="ranking">
                <tr class="header_wrap1">
                    <th class="header_rank">Badge</th>
                    <th class="header_name">Name</th>
                    <th><div class="header_name1">Game<img src="/img/assets/Team/Arrow.svg" style="padding:10px;"></div></th>
                    <th><div class="header_name1">Total Points<img src="/img/assets/Team/Arrow.svg" style="padding:10px;"></div></th>
                    <th><div class="header_name1">Member<img src="/img/assets/Team/Arrow.svg" style="padding:10px;"></div></th>
                </tr>
                <tr v-for="(team, index) in teams" :key="index">                
                <td>
                  <div class="player_wrap" v-if="team.profileImage"><img :src="'https://ps-mg.s3.amazonaws.com/' + team.profileImage" style="border: 1px solid;border-radius: 5px;"></div>
                  <div class="player_wrap" v-else><img src="/img/assets/Team/Badge.svg"></div>
                  </td>
                    <td><div class="player_content">
                        <div class="player_name">{{team.name}}</div>
                        <div class="player_name1">{{team.alias}}</div>  
                      </div></td>
                    <td><div class="player_name2">{{team.game.shortName}}</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2" >{{team.members.length}}</div></td>
                    <td> <div class="m-btn"  @click="joinTeam(team._id)"><span>Join Team</span></div>
                    </td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr>

                <!-- <tr>                
                <td><div class="player_wrap"><img src="/img/assets/Team/Badge.svg"></div></td>
                    <td><div class="player_content">
                        <div class="player_name">TEAM NAME</div>
                        <div class="player_name1">Detail</div>  
                      </div></td>
                    <td><div class="player_name2">APEX Legends</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2">32</div></td>
                    <td> <div class="m-btn" @click="joinTeam(team._id)"><span>Join Team</span></div></td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr>
                <tr>                
                <td><div class="player_wrap"><img src="/img/assets/Team/Badge.svg"></div></td>
                    <td><div class="player_content">
                        <div class="player_name">TEAM NAME</div>
                        <div class="player_name1">Detail</div>  
                      </div></td>
                    <td><div class="player_name2">APEX Legends</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2">32</div></td>
                    <td> <div class="m-btn" @click="joinTeam(team._id)"><span>Join Team</span></div></td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr>
                <tr>                
                <td><div class="player_wrap"><img src="/img/assets/Team/Badge.svg"></div></td>
                    <td><div class="player_content">
                        <div class="player_name">TEAM NAME</div>
                        <div class="player_name1">Detail</div>  
                      </div></td>
                    <td><div class="player_name2">APEX Legends</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2">32</div></td>
                    <td> <div class="m-btn1" @click="joinTeam(team._id)"><span>Full</span></div></td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr>
                <tr>                
                <td><div class="player_wrap"><img src="/img/assets/Team/Badge.svg"></div></td>
                    <td><div class="player_content">
                        <div class="player_name">TEAM NAME</div>
                        <div class="player_name1">Detail</div>  
                      </div></td>
                    <td><div class="player_name2">APEX Legends</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2">32</div></td>
                    <td><div class="m-btn" @click="joinTeam(team._id)"><span>Join Team</span></div></td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr>
                <tr>                
                <td><div class="player_wrap"><img src="/img/assets/Team/Badge.svg"></div></td>
                    <td><div class="player_content">
                        <div class="player_name">TEAM NAME</div>
                        <div class="player_name1">Detail</div>  
                      </div></td>
                    <td><div class="player_name2">APEX Legends</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2">32</div></td>
                    <td> <div class="m-btn" @click="joinTeam(team._id)"><span>Join Team</span></div></td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr>
                <tr>                
                <td><div class="player_wrap"><img src="/img/assets/Team/Badge.svg"></div></td>
                    <td><div class="player_content">
                        <div class="player_name">TEAM NAME</div>
                        <div class="player_name1">Detail</div>  
                      </div></td>
                    <td><div class="player_name2">APEX Legends</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2">32</div></td>
                    <td> <div class="m-btn" @click="joinTeam(team._id)"><span>Join Team</span></div></td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr>
                <tr>                
                <td><div class="player_wrap"><img src="/img/assets/Team/Badge.svg"></div></td>
                    <td><div class="player_content">
                        <div class="player_name">TEAM NAME</div>
                        <div class="player_name1">Detail</div>  
                      </div></td>
                    <td><div class="player_name2">APEX Legends</div></td>
                    <td><div class="player_name2">124,920</div></td>
                    <td><div class="player_name2">32</div></td>
                    <td> <div class="m-btn" @click="joinTeam(team._id)"><span>Join Team</span></div></td>
                </tr>
                 <tr>
                    <td class="table_space1" colspan="8"></td>
                </tr> -->
            </table>
          <div class="page_wrap">
               <a class="active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
            </div>
       <v-snackbar
      v-model="snackbar"
      top
      :color="color"
      absolute
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
</div>

</template>
<script>
import axios from "axios";

export default {
  name: "AllTeams",
  components: {  },

  data() {
    return {
      teams: [],
      joinSent: false,
      userId:'',
       color: "",
    snackbar: false,
    snackbarText: "",
    timeout: "-1",
    };
  },
  methods: {
    joinTeam(teamId) {
       axios
      .post('/team/join', {
        criteria: {_id: teamId},
      })
      .then((response) => {
        console.log('join team', response.data);
              this.joinSent = true;
              this.color = "green";
          this.snackbar = true;
          this.snackbarText = "Join Request Sent successfully";
          this.timeout = 3000;
      })
      .catch((e) => {
          if (e.response.data.message) {
              const teamData = e.response.data.message;
              this.snackbarText = teamData;
              this.color = "red darken-4";
              this.snackbar = true;
              this.timeout = 3000;
            }
      });
    },
    getAllTeams() {
      this.$Progress.start()
      axios
        .post("/team/find/all", {
          criteria: {},
        })
        .then((response) => {
          this.teams = response.data;
          this.$Progress.finish()
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    }
  },
  mounted() {
    this.getAllTeams();
    this.userId = this.$store.getters.user._id;
  },
};
</script>
<style scoped>
.m-btn, .m-btn1 {
  border-radius: 10px;
  width: 111px;
  height: 47px;
  cursor: pointer;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  margin-right: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
}  
.m-btn{
  background: rgba(114, 85, 233, 1);
}
.m-btn1{
  background: rgba(65, 65, 65, 1);
}
 .m-btn:hover{
    color: #fff;
    box-shadow: 0px 0px 5px 0px #212561;
}
/* .teams_header {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.button_wrapper {
  flex-wrap: nowrap;
  position: absolute;
  right: 0;
} 
button {
  border: 0.5px solid #ffffff;
  background: #180550;
  color: white;
  cursor: pointer;
  text-transform: capitalize;
  padding: 5px;
  margin: 0px 10px 10px 0px;
  border-radius: 4px;
} */
/* .active {
  background: #1e0741;
  border: 0.25px solid #1e0741;
}
.teams_title_wrap {
  font: 22px/33px Poppins;
  color: #ffffff;
  text-transform: capitalize;
} */
/* .teams_inner_wrap {
  /* background: #1e0741; */
  /* padding: 20px; */ 
  /* display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px; */
  /* grid-template-columns: repeat(auto-fill,minmax(300px,1fr)); */
    /* grid-gap: 10px; */
    /* grid-auto-flow: dense;
    display: grid; */
/* }
.teams_inner_subwrap {
  /* background: #310a69; */
  /* border-radius: 5px; */
  /* display: flex !important; */
  /* justify-content: space-between; */
  /* min-height: 70px; */
  /* border: 1px solid #3d065f; */
  /*width: 300px;*/
  /* animation: swing-in-left-fwd 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1s both; */
/* } */ 
/* @keyframes swing-in-left-fwd {
  0% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
} */
/* .teams_colour_strip {
  min-width: 5px;
  border-radius: 0px 10px 10px 0px;
  background: #e911d6;
} */
/* .image_wrap { */
  /* border-radius: 3px;
  padding: 5px;
  min-height: 80px;
  min-width: 70px; */
  /* background: #f1f1f1; */
/* } */
/* .teams_card_wrap {
  padding: 20px 10px 0px 5px;
} */
/* .teams_name {
  text-transform: capitalize;
  font: 500 14px/19px Poppins;
  color: #f1f1f1;
}
.teams_name1 {
  font-size: 10px;
  color: #f1f1f1;
  text-transform: capitalize;
}
.slider_wrap {
  display: flex;
  margin-top: 10px;
}
.slider_wrapper {
  display: flex;
}
.outer_wrap {
  background: #ffffff;
}
.prev_next_wrap {
  color: #38065d;
  border: hidden;
  margin: auto;
  background: #ffffff;
  font: 900 16px/25px Poppins;
}
.total_pagecount {
  background: #ffffff;
  padding: 5px;
  color: #38065d;
  font: 600 16px/25px Poppins;
}
.page_wrap {
  font: 600 16px/25px Poppins;
  background: #ffffff;
  display: flex;
  margin-left: 15px;
} */
.inner_container {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding: 5px 15px 20px 15px;
  background: rgba(0, 0, 0, 0.3);
}
.line_wrap{
  width:100%; 
  background:#3E3E3E;
  margin: -6px 0px 20px 0px;
  height: 1px;
}
.inner_wrapleft {
  display: flex;
}
.list table{
  width: 100%;
  /* border-collapse: collapse; */
  border-collapse: separate;
  border-spacing: 0 20px;
 }
.header_wrap1 {
  border-radius: 10px 10px 0px 0px;
}
td{
  padding: 8px;
  text-align: left;
}
th{
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 29px;
text-align: left;
color: #787686;
padding: 0px 5px 0px 10px;
}
.content-wrap:first-child td:first-child { border-top-left-radius: 10px; }
.content-wrap:first-child td:last-child { border-top-right-radius: 10px; }
.content-wrap:last-child td:first-child { border-bottom-left-radius: 10px; }
.content-wrap:last-child td:last-child { border-bottom-right-radius: 10px; }
.header_name1{
  display: flex;
  justify-content: left;
}
.activewrap{
background: linear-gradient(180deg, #7255E9 0%, rgba(114, 85, 233, 0.4) 100%);
}
.table_data{
	color: rgba(255, 255, 255, 1);
	font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  text-align: left;
  display: flex;
  margin-top: 10px;
}

.content-wrap {
  background: #171717;
  border-radius: 10px;
}
/* .content-inner-wrap {
  border-radius: 10px;
} */
.player_wrap{
	display: flex;
	align-items: left;
  width: 70px;
  height: 70px;
  margin-right: 10px;
  border-radius: 20px;
}
.player_evolution>svg{
margin-top: 10px;
}
.player_name{
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 27px;
text-align: left;
color:rgba(255, 255, 255, 1);
display: flex;
justify-content: left;
}
.player_name1{
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px;
text-align: left;
color:rgba(255, 255, 255, 1);
display: flex;
justify-content: left;
margin-top: 7px;
}
.player_name2{
  font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 29px;
text-align: left;
color:rgba(255, 255, 255, 1);
}
select:not([multiple]) {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-position: right 50%;
  background-repeat: no-repeat;
  padding: 0.5em;
  padding-right: 1.5em;
  color: white;
  border: 1px solid;
  border-radius: 5px;
}
.page_wrap {
 display: flex;
justify-content: center;
}
.page_wrap a {
  color: #787686;
  padding: 8px 16px;
}
.page_wrap a.active {
  background: linear-gradient(180deg, #7255E9 0%, #7255E9 100%);
  color: white;
  border-radius:20px;
  cursor: pointer;
}
.page_wrap a:hover:not(.active) {
background: linear-gradient(180deg, #7255E9 0%, #7255E9 100%);
border-radius:20px;
cursor: pointer;
}
@media screen and (max-width: 640px) {
  .teams_inner_subwrap {
    width: 80%;
    display: block;
    min-width: 150px !important;
  }
  .teams_inner_wrap {
    background: #1e0741;
    padding: 40px;
    display: grid;
  }
}
@media screen and (max-width: 480px) {
  .teams_inner_wrap {
    width: 100%;
    display: block;
    padding: 5px !important;
  }
  .teams_inner_subwrap {
    width: 100%;
    display: block;
    margin-bottom: 5px;
  }
}
</style>
