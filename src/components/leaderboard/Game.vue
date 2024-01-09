<template>
  <div class="alltournament">
    <LeaderboardCard v-if="leaderboards" :leaderboards="leaderboards" />
  </div>
</template>
<script>
import axios from "axios";
import LeaderboardCard from "@/views/LeaderboardCard.vue";
export default {
  name: "All",
  data() {
    return {
      leaderboards: [],
    };
  },
  components: {
    LeaderboardCard,
  },
  methods: {
    getAllLeaderboards() {
      const criteria = {
        game: {
          _id: this.$route.params.gameId,
        },
      };
      axios
        .post("/leaderboard/find/all", {
          criteria,
          sort: {createdAt: -1}
        })
        .then((response) => {
          this.leaderboards = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
  },
  mounted() {
    this.getAllLeaderboards();
  },
   watch: {
      '$route.params.gameId': function () {
                this.getAllLeaderboards();
      },
  },

};
</script>
<style scoped></style>
