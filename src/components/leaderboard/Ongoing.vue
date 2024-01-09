<template>
  <div class="alltournament">
    <LeaderboardCard v-if="leaderboards" :leaderboards="leaderboards" />
  </div>
</template>
<script>
import LeaderboardCard from "@/views/LeaderboardCard.vue";
export default {
  name: "Ongoing",
  components: { LeaderboardCard },
  props: {
    leaderboards: {
      type: Array,
      default: () => [],
    },
  },
};
</script>