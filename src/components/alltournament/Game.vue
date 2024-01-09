<template>
  <div class="alltournament">
    <TournamentCard v-if="tournaments" :tournaments="tournaments" />
  </div>
</template>
<script>
import axios from "axios";
import TournamentCard from "@/views/TournamentCard.vue";
export default {
  name: "All",
  data() {
    return {
      tournaments: [],
    };
  },
  components: {
    TournamentCard,
  },
  methods: {
    getAllTournaments() {
      const criteria = {
        game: {
          _id: this.$route.params.gameId,
        },
      };
      axios
        .post("/tournament/find/all", {
          criteria,
          sort: { createdAt: -1 },
        })
        .then((response) => {
          this.tournaments = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
  },
  mounted() {
    this.getAllTournaments();
  },
   watch: {
      '$route.params.gameId': function () {
                this.getAllTournaments();
      },
  },

};
</script>
<style scoped></style>
