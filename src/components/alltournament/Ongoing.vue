
<template>
    <div class="alltournament">
      <TournamentCard v-if="tournaments" :tournaments=tournaments />
    </div>
</template>
<script>
import TournamentCard from '@/views/TournamentCard.vue'
export default {
  name: 'All',
  components: {
      TournamentCard,
  },
  props: {
    tournaments: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped>

</style>