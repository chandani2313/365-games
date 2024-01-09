<template>
  <div v-if="subscriber">
    <!-- <div v-if="$store.getters.isSubscribed"> -->
    <!-- <SubscribePopup /> -->
    <div class="mainlayout">
      <div class="game_card_container">
        <div class="game_title">our games</div>
        <div class="game_card">
          <div class="cards" v-for="game in games" :key="game._id">
            <div class="image">
              <img
                :src="'https://ps-mg.s3.amazonaws.com/' + game.thumbnail"
                alt="Game poster"
              />
            </div>
            <div class="game_info">
              <div class="game_name">{{ game.shortName }}</div>
              <div class="tournament_avail">4 Tournaments Available</div>
            </div>
          </div>

          <div class="cards">
            <div class="image-soon">Coming soon</div>
          </div>
          <!-- <div class="cards">
                        <div class="image">
                            <img src="../../assets/dashboard365/fortnite.png" alt="Game poster">
                        </div>
                        <div class="game_info">
                            <div class="game_name">fortnite</div>
                            <div class="tournament_avail">4 tournaments available</div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="image">
                            <img src="../../assets/dashboard365/pubg.png" alt="Game poster">
                        </div>
                        <div class="game_info">
                            <div class="game_name">pubg</div>
                            <div class="tournament_avail">4 tournaments available</div>
                        </div>
                    </div> -->
          <!-- <div class="cards">
                        <div class="image">
                            <img src="../../assets/dashboard365/blank.png" alt="Game poster">
                        </div>
                        <div class="game_info">
                            <div class="game_name">call of duty:warzone</div>
                            <div class="tournament_avail">4 tournaments available</div>
                        </div>
                    </div> -->
        </div>
      </div>
      <div class="bottom_container">
        <TheNewLeaderBoard />
        <div class="wrapper_inner">
          <TheTournament v-if="tournaments.length" :tournaments="tournaments" />
        <Featured />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <SubscribePopup />
  </div>
</template>
<script>
import axios from "axios";
// import TheNewLeaderBoard from "@/components/dashboard365/TheLeaderBoard.vue"
import TheNewLeaderBoard from "../dashboard365/TheLeaderBoard.vue";
import TheTournament from "../dashboard365/tournament.vue";
import Featured from "../dashboard365/featured.vue";
import SubscribePopup from "../../views/gem/NewSubscriptionPopup.vue";

export default {
  name: "Game",
  components: {
    TheNewLeaderBoard,
    TheTournament,
    Featured,
    SubscribePopup,
  },
  data() {
    return {
      games: [],
      tournaments: [],
      randomDetails: [],
      // subscriber: false,
    };
  },
  computed: {
    subscriber() {
      return this.$store.getters.isSubscribed;
    },
  },
  methods: {
    getAllGames() {
      axios
        .post("/game/find/all", {
          criteria: {},
        })
        .then((response) => {
          this.games = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    GetTournaments() {
      this.$Progress.start();
      axios
        .post("/tournament/find/all", {
          criteria: {},
          limit: 4,
          sort: { createdAt: -1 },
        })
        .then((response) => {
          this.tournaments = response.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    getRandom() {
      axios.post("/random-drop/find/all", { criteria: {} }).then((res) => {
        res.data.map((elem) => {
          this.randomDetails.push(elem);
        });
      });
    },
  },
  mounted() {
    this.getAllGames();
    this.GetTournaments();
  },
};
</script>
<style lang="scss" scoped>
img{
    height: 186px;
    width: 232px;
    border-radius: 10px;
} 
.mainlayout {
    padding: 1.6rem 2rem 2rem 2.5rem;
    /* background-color: var(--v-background-base); */
    background-color: #0e0e0e;
}
.game_card_container > .game_title {
    text-transform: capitalize;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-bottom: 28px;
}
.game_card {
    gap: 10px;
    /* grid-template-columns: repeat(auto-fill, minmax(196px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem; */
    margin-bottom: 45px;
    display: flex;
    overflow-x: auto;
}
.game_card::-webkit-scrollbar {
    height: 0px;
    background: transparent;
}
// .image {
//   width: 240px;
// }
.image-soon {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 232px;
  height: 186px;
  background: linear-gradient(180deg, #9672ff 0%, #7255e9 100%);
  border-radius: 10px;
  font: italic normal 800 13px/19px Poppins;
  text-transform: uppercase;
}
@media screen and (min-width: 1920px) {
    .mainlayout{
    padding: 1.6rem 5rem 2rem 4rem!important;
  }
  .image-soon {
    width: 292px;
    height: 236px;
  }
  .game_card{
    gap: 14px;
  }
  .bottom_container{
    gap: 84px;
  }
}
.game_name {
  text-transform: capitalize;
  color: #ffffff;
  font: normal normal normal 13px/19px Poppins;
  padding: 5px 0px 0px;
}
.tournament_avail {
  color: #9672ff;
  font: normal normal bold 9px/19px Poppins;
}
.bottom_container {
    /* display: grid;
    grid-template-columns: 21% auto 31%;
    grid-gap: 19px; */
    display: flex;
    gap: 85px;
    // justify-content: space-between;
    /* width: 1120px; */
}
@media (min-width: 320px) and (max-width: 965px) {
  .bottom_container {
    display: flex;
    flex-direction: column;
    
    /* grid-template-columns: 280px 370px; */
  }
  img {
    width: 100%;
  }
  .image {
    margin-right: 5px;
  }
  .featured_poster > img {
    width: 100%;
  }
}
@media (min-width: 1920px) and (max-width: 2560px)  {
   img{
    width: 292.04px;
    height: 234.13px;
   }
}
@media screen and (min-width: 1920px ) {
.bottom_container {
    gap: 50px!important;
}
.game_name {
    font-size: 16px;
}
.tournament_avail {
    font-size: 11px;
}
.wrapper_inner{
    display: flex;
    // column-gap: 60px;
}
.game_card_container > .game_title{
  font-size: 23.1207px;
}
}
.wrapper_inner{
  display: flex;
  gap: 35px;
}
</style>