<template>
  <div>
    <div>
      <NewLandingPageHeader />
      <v-main>
        <slot />
      </v-main>
      <!-- <TheLandingPageFooter /> -->
    </div>
  </div>
</template>

<script>
import NewLandingPageHeader from "../components/NewLandingPageHeader.vue";
// import TheLandingPageFooter from "../components/TheLandingPageFooter.vue";
// import { Fragment } from "vue-fragment";

export default {
  name: "Contact",
  components: {
    // Fragment,
    NewLandingPageHeader,
    // TheLandingPageFooter,
  },
};
</script>

<style scoped>
div {
  background: #040404;
}
</style>