<template>
  <div class="alltournament">
    <LeaderboardCard v-if="leaderboards" :leaderboards="leaderboards" />
  </div>
</template>
<script>
import LeaderboardCard from "@/views/LeaderboardCard.vue";
export default {
  name: "Registration",
  props: {
    leaderboards: {
      type: Array,
      default: () => [],
    },
  },
  components: { LeaderboardCard },
};
</script>