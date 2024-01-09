<template>
  <!-- <div class="Pubg_leaderBoard"> -->
    <div>
  <div class="list" v-if="selectedLeaderboard.game.shortName == 'PUBG'">
    <table class="ranking">
      <tr class="header">
        <th class="table_head">S.No</th>
        <th class="table_head">Name</th>
        <th class="table_head">Assists</th>
        <th class="table_head">Kills</th>
        <th class="table_head">Headshot kills</th>
        <th class="table_head">Longshot kills</th>
        <th class="table_head">Road kills</th>
        <!-- <th class="table_head">AVG DMG</th>
        <th class="table_head">kills</th>
        <th class="table_head">K/D ratio</th> -->
        <th></th>
      </tr>
      <template>
        <tr class="content-bgcolor" v-for="(leaderboard, index) in pubgRankingData" :key="leaderboard._id">
          <td class="table_content_id">{{index + 1}}</td>
          <td>
            <div class="player_wrap">
              <div class="player_img"></div>
              <div class="player_content">
                <div class="player_name">{{leaderboard.name}}</div>
              </div>
            </div>
          </td>
          <!-- <td class="table_content">{{leaderboard.name}}</td> -->
          <td class="table_content">{{leaderboard.assists}}</td>
          <td class="table_content">{{leaderboard.kills}}</td>
          <td class="table_content">{{leaderboard.headshotKills}}</td>
          <td class="table_content">{{leaderboard.longestKill}}</td>
          <td class="table_content">{{leaderboard.roadKills}}</td>
          <!-- <td class="table_content" style="text-align: center">4.0</td> -->
          <td>
            <div class="player_name" style="cursor: pointer">
              <svg
                width="4"
                height="22"
                viewBox="0 0 4 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="white" />
                <circle cx="2" cy="11" r="2" fill="white" />
                <circle cx="2" cy="20" r="2" fill="white" />
              </svg>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table_space" colspan="10"></td>
        </tr>
      </template>
    </table>
    <div class="page_wrap">
      <v-pagination v-model="page" :length="5" circle></v-pagination>
    </div>
  </div>
  <!-- </div> -->
  <div class="list" v-if="selectedLeaderboard.game.shortName == 'Fortnite'">
    <table class="ranking">
      <tr class="header">
        <th class="table_head">S.No</th>
        <th class="table_head">Name</th>
        <th class="table_head">Wins</th>
        <th class="table_head">Kills</th>
        <th class="table_head">Matches</th>
        <th class="table_head">Minutes Played</th>
        <th class="table_head">Players Outlived</th>
        <!-- <th class="table_head">AVG DMG</th>
        <th class="table_head">kills</th>
        <th class="table_head">K/D ratio</th> -->
        <th></th>
      </tr>
      <template>
        <tr class="content-bgcolor" v-for="(leaderboard, index) in fortniteRankingData" :key="leaderboard._id">
          <td class="table_content_id">{{index + 1}}</td>
          <td>
            <div class="player_wrap">
              <div class="player_img"></div>
              <div class="player_content">
                <div class="player_name">{{leaderboard.name}}</div>
              </div>
            </div>
          </td>
          <!-- <td class="table_content">{{leaderboard.name}}</td> -->
          <td class="table_content">{{leaderboard.wins}}</td>
          <td class="table_content">{{leaderboard.kills}}</td>
          <td class="table_content">{{leaderboard.matches}}</td>
          <td class="table_content">{{leaderboard.minutesPlayed}}</td>
          <td class="table_content">{{leaderboard.playersOutlived}}</td>
          <!-- <td class="table_content" style="text-align: center">4.0</td> -->
          <td>
            <div class="player_name" style="cursor: pointer">
              <svg
                width="4"
                height="22"
                viewBox="0 0 4 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="white" />
                <circle cx="2" cy="11" r="2" fill="white" />
                <circle cx="2" cy="20" r="2" fill="white" />
              </svg>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table_space" colspan="10"></td>
        </tr>
      </template>
    </table>
    <div class="page_wrap">
      <v-pagination v-model="page" :length="5" circle></v-pagination>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  // name: "LeaderboardRanking",
  data() {
    return {
      page: 1,
      pubgRankingData: [],
      fortniteRankingData: []
    };
  },
  methods: {
  getPubgRankingData() {
 axios
        .get("/leaderboard/".concat(this.$route.params.id)+`/${'pubg'}`)
        .then((response) => {
          this.pubgRankingData = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
  },
  getFortniteRankingData() {
 axios
        .get("/leaderboard/".concat(this.$route.params.id)+`/${'fortnite'}`)
        .then((response) => {
          this.fortniteRankingData = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
  },
  },
   computed: {
      ...mapGetters(["selectedLeaderboard"]),
    },
    mounted() {
      if(this.selectedLeaderboard.game?.shortName == 'PUBG') this.getPubgRankingData();
      if(this.selectedLeaderboard.game?.shortName == 'Fortnite') this.getFortniteRankingData();
    
    }
};
</script>

<style scoped>
.list {
  width: 100%;
  overflow-x: auto;
  background: #0a0a0a;
  border-radius: 0px 10px 0px 0px;
}
.list table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;
}
.header th,
td {
  padding: 0px 30px;
  text-align: left;
}
.header tr {
  border-radius: 25px 25px 0px 0px;
}
th {
  background-color: #0a0a0a;
  font-family: Poppins;
  font-size: 14px;
  color: #787686;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  text-align: left;
  text-transform: capitalize;
  padding: 15px 5px 15px 10px;
}
.table_head {
  font: normal normal 500 14px/29px Poppins;
  text-transform: capitalize;
  color: #787686;
}
tr {
  background: linear-gradient(180deg, #282626 0%, rgba(40, 38, 38, 0.4) 100%);
}
.table_space {
  background-color: #000000;
}
.content-bgcolor {
  background: linear-gradient(180deg, #161616 0%, rgba(40, 38, 38, 0.4) 100%);
  height: 60px;
}
.table_content,
.table_content_color {
  font: normal normal normal 13px/29px Poppins;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
}
.table_content_color {
  color: #cdcadb;
}
.table_content_id {
  font: normal normal 600 20px/29px Poppins;
  color: #ffffff;
}
.player_img {
  min-width: 33px;
  min-height: 33px;
  margin-right: 10px;
  border-radius: 20px;
  /* background: #8369ec; */
  background-image: url("../assets/profile/Artboard – 1@2x.png");
  background-position: top;
}
.player_wrap {
  display: flex;
  align-items: center;
}
.player_name {
  text-transform: capitalize;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  color: #ffffff;
}
.player_name {
  text-align: left;
  display: flex;
  justify-content: left;
}
.page_wrap {
  margin: 30px 0;
}
::v-deep .theme--light.v-pagination .v-pagination__item {
  background: rgb(14 14 14);
  color: #ffffff;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: none;
}
/* .dropbtn {
  background-color: #1e0741;
  color: white;
  position: fixed;
  font-size: 16px;
  border: 1px solid white;
  cursor: pointer;
  right: 5px;
  text-transform: capitalize;
}

.dropdown {
  display: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-transform: capitalize;
} */
/* .dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-transform: capitalize;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: white;
} */
/* @media screen and (max-width: 640px) {
  .inner_subshell {
    display: none;
  }
  .dropdown {
    display: block;
    float: right;
  } 
}*/
</style>