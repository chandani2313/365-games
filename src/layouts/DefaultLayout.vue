<template>
  <fragment>
    <!-- <the-side-bar :drawer.sync="drawer" />
    <the-header @toggleDrawer="drawer = !drawer" /> -->
    <the-new-sidebar :drawer.sync="drawer" />
    <the-new-navbar @toggleDrawer="drawer = !drawer" id="navbar" />
    <v-main>
      <slot />
    </v-main>
    <!-- <the-footer /> -->
  </fragment>
</template>

<script>
// import TheSideBar from "../components/TheSideBar.vue";
// import TheHeader from "../components/TheHeader.vue";
// import TheFooter from "../components/TheFooter.vue";
import { Fragment } from "vue-fragment";
import TheNewNavbar from "../components/TheNewNavbar.vue";
import TheNewSidebar from "../components/TheNewSidebar.vue";

export default {
  name: "DefaultLayout",
  components: {
    Fragment,
    // TheSideBar,
    // TheHeader,
    // TheFooter,
    TheNewNavbar,
    TheNewSidebar,
  },
  data() {
    return {
      drawer: !this.$vuetify.breakpoint.mdAndDown,
      showDialog: false,
    };
  },
};
</script>

<style scoped>
.v-main {
 background: #0E0E0E;

}
</style>
