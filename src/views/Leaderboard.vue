<template>
<div class="leader">
  <div class="leaderBoard">
    <div class="flex_wraper">
      <div class="title_wrapper">Leaderboards</div>
      <div class="inner_wrapright" v-if="$vuetify.breakpoint.mdAndDown">
        <div class="drop_down mobile">
          <select
            v-model="leaderboardState"
            @change="changeState($event.target.value)"
            class="select_option"
          >
            <option v-for="tab in tabs" :key="tab.name" :value="tab.routeName">
              {{ tab.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="inner_container">
      <div class="inner_container1">
        <div class="inner_wrapleft" v-if="!$vuetify.breakpoint.mdAndDown">
          <router-link
            v-for="tab in tabs"
            :key="tab.name"
            class="inner_subwrap"
            :to="{ name: tab.routeName }"
            active-class="active"
            exact
            >{{ tab.name }}</router-link
          >
        </div>
        <div class="inner_wrapright" v-if="!$vuetify.breakpoint.mdAndDown">
          <!-- <router-link
            v-for="game in games"
            :key="game._id"
            class="inner_subwrap"
            tag="div"
            :to="{ name: 'leaderboardGame', params: { gameId: game._id } }"
            active-class="active"
            exact
          >
            {{ game.shortName }}
          </router-link> -->
          <div class="drop_down">
            <!-- <i class="fas fa-arrow-down"></i> -->
            <select
              v-model="selectedGameId"
              class="select_option_game"
            >
              <!-- <img src="../assets/LeaderboardPage/arrow.png"> -->

              <!-- <option value="" selected disabled>Select Game</option> -->
              <option v-for="game in games" :value="game._id" :key="game._id">
                {{ game.shortName }}
              </option>
              <img src="../assets/LeaderboardPage/arrow.png" />
            </select>
          </div>
        </div>
      </div>
      <router-view :leaderboards="leaderboards" />
      <!-- <div class="pagination">
        <a href="#" class="blocks active_page">1</a>
        <a href="#" class="blocks">2</a>
        <a href="#" class="blocks">3</a>
        <a href="#" class="blocks">4</a>
        <a href="#" class="blocks">5</a>
      </div> -->
    </div>
  </div>
    <div class="page">
    <div class="pagination">
      <a href="#" class="blocks active_page">1</a>
      <a href="#" class="blocks">2</a>
      <a href="#" class="blocks">3</a>
      <a href="#" class="blocks">4</a>
      <a href="#" class="blocks">5</a>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Leaderboard",
  data() {
    return {
      games: [{ _id: "all-games", shortName: "All Games" }],
      leaderboards: [],
      selectedGameId: "all-games",
      leaderboardState: this.$route.name,
      tabs: [
        {
          routeName: "AllLeaderboard",
          name: "All",
        },
        {
          routeName: "RegistrationLeaderboard",
          name: "Registration",
        },
        {
          routeName: "UpcomingLeaderboard",
          name: "Upcoming",
        },
        {
          routeName: "OngoingLeaderboard",
          name: "Ongoing",
        },
        {
          routeName: "CompletedLeaderboard",
          name: "Completed",
        },
      ],
    };
  },
  methods: {
    changeState(state) {
      this.$router.push({ name: state });
    },
    getAllGames() {
      axios
        .post("/game/find/all", {
          criteria: {},
        })
        .then((response) => {
          this.games = [...this.games, ...response.data];
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    getAllLeaderboards() {
      const criteria = {
        isDraft: false,
      };
      if (this.selectedGameId !== "all-games") {
        criteria["game"] = this.selectedGameId;
      }
      switch (this.$route.name) {
        case "OngoingLeaderboard": {
          criteria["schedule.leaderboardStart"] = {
            $lte: new Date(),
          };
          criteria["schedule.leaderboardEnd"] = {
            $gt: new Date(),
          };
          break;
        }
        case "UpcomingLeaderboard": {
          criteria["schedule.registrationStart"] = {
            $gt: new Date(),
          };
          break;
        }
        case "CompletedLeaderboard": {
          criteria["schedule.leaderboardEnd"] = {
            $lte: new Date(),
          };
          break;
        }
        case "RegistrationLeaderboard": {
          criteria["schedule.registrationStart"] = {
            $lt: new Date(),
          };
          criteria["schedule.leaderboardStart"] = {
            $gt: new Date(),
          };
          break;
        }
      }
      axios
        .post("/leaderboard/find/all", {
          criteria,
          sort: {
            createdAt: -1,
          },
        })
        .then((response) => {
          this.leaderboards = response.data;
        })
        .catch(() => {});
    },
  },
  watch: {
    "$route.name": {
      immediate: true,
      handler() {
        this.leaderboardState = this.$route.name;
        this.getAllLeaderboards();
      },
    },
    selectedGameId: {
      handler() {
        this.getAllLeaderboards();
      },
    },
  },
  mounted() {
    this.getAllGames();
  },
};
</script>

<style scoped>
/* img {
  width: 100%;
  display: block;
} */
.leaderBoard {
  /* width: 100%;
  padding: 1.6rem 2.2rem 2rem 2.5rem; */
  /* width: 1120px; */
  /* margin: 0px auto; */
  margin: 0px 30px;
}
.title_wrapper {
  padding: 10px;
  text-align: left;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  color: #ffffff;
}
.inner_container {
  border-radius: 8px;
  
}
.inner_container1 {
  display: flex;
  justify-content: space-between;
  /* background: #1e0453; */
}
.inner_wrapleft {
  display: flex;
}

.inner_subwrap {
  font-size: 13px;
  display: flex;
  align-items: center;
  background: #18181a;
  /* padding: 13px 19px; */
  /* margin: 10px 0px 5px 5px; */
  margin: 10px 5px 5px 5px;
  width: 93px;
  align-content: center;
  justify-content: center;
  height: 36px;
  border-radius: 10px;
  text-align: center;
  font: 300 16px /*/25px Poppins*/;
  color: #ffffff;
  text-transform: capitalize;
  cursor: pointer;
}
.active {
  padding: 12px 15px;
  border-radius: 10px;
  background: #9672ff;
  /* background: #1e0741; /
  / border: 0.25px solid #1e0741; */
}
.inner_wrapright {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
/* @media screen and (max-width: 768px) { */
/* .inner_subwrap {
    display: none;
  } */
.flex_wraper {
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
}
select {
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;

  left: 1252px;
  top: 196px;
  border-radius: 10px;
}
select:not([multiple]) {
  background-position: right 50%;
  background-repeat: no-repeat;
  border-style: none;
  /* background: #9672ff4d; */
  background: #9672ff;
  border: none;
  outline: none;
  /* background-image: url('/assets/leaderboard/game.svg'); */
  padding: 0.5em;
  padding-right: 1.5em;
  color: white;
  /* border: 1px solid; */
  border-radius: 5px;
  padding: 3px 65px 3px 47px;
  /* height: 36px; */
  /* width: 153px; */
  /* left: 1252px; */
  /* top: 196px; */
  border-radius: 10px;
}
.drop_down {
  position: relative;
}
.drop_down::after {
  content: "\2304";
  font-size: 1.3rem;
  top: -6px;
  right: 25px;
  color: #ffffff;
  position: absolute;
  /* background-image: url('/assets/leaderboard/game.svg'); */
}
option {
  color: black;
}
/* } */
@media (min-width: 320px) and (max-width: 786px) {
  /* .drop_down {
    display: none;
  } */
  .leaderBoard {
    padding: 0.5rem 0rem;
  }
}
.pagination {
    position: absolute;
    bottom: 15px;
}
.page{
    display: flex;
    justify-content: center;
}
.pagination {
  text-align: center;
  margin-top: 35px;
}
#pagination {
  display: flex;
  justify-content: center;
}
.blocks {
  width: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  font-family: Poppins;
  font-size: 15px;

  font-weight: 600;

  color: #787686;
}
.blocks:not(:first-child) {
  margin-left: 5px;
}

.blocks:hover {
  background-color: #dddddd;
}
#pagination a.active_page {
  background-color: #4caf50;
}
.active_page {
  background-image: linear-gradient(180deg, #7255e9 0%, #7255e9 100%);
  color: #ffffff;
}
</style>
