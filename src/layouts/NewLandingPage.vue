<template>
  <!-- <fragment> -->
    <div>
      <div>
        <!-- <NewLandingPageHeader /> -->
        <!-- <PageLoader /> -->
        <v-main>
          <slot />
        </v-main>
        <!-- <TheLandingPageFooter /> -->
      </div>
    </div>
  <!-- </fragment> -->
</template>

<script>
// import NewLandingPageHeader from "../components/NewLandingPageHeader.vue";
// import PageLoader from "../views/landingpage/PageLoader.vue";
// import TheLandingPageFooter from "../components/TheLandingPageFooter.vue";
// import { Fragment } from "vue-fragment";

export default {
  name: "LandingPage",
  components: {
    // Fragment,
    // NewLandingPageHeader,
    // PageLoader,
    // TheLandingPageFooter,
  },
};
</script>


<style lang="scss" scoped>
// global style
div {
  overflow: hidden;
}
</style>