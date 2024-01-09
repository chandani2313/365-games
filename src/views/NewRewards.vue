<template>
  <div class="main_container">
    <div class="header_nav">
      <div class="header_text">Rewards</div>
      <div class="header_nav-links">
        <v-tabs>
          <v-tab
            ><router-link
              tag="div"
              active-class="active"
              :to="{ name: 'All' }"
              exact
              class="inner_subwrap"
              >All</router-link
            ></v-tab
          >
          <v-tab
            ><router-link
              tag="div"
              active-class="active"
              :to="{ name: 'Unrewards' }"
              exact
              class="inner_subwrap"
              >Unrewards</router-link
            ></v-tab
          >
          <v-tab
            ><router-link
              tag="div"
              active-class="active"
              :to="{ name: 'Rewards' }"
              exact
              class="inner_subwrap"
              >Rewards</router-link
            ></v-tab
          >
        </v-tabs>
      </div>
    </div>
    <v-divider dark></v-divider>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NewRewards",
  props: ["id"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.main_container {
  margin: 40px;
}
.header_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_text {
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
}
::v-deep .v-slide-group__content {
  background: #0e0e0e;
}
::v-deep .v-tabs-slider-wrapper {
  color: #ffffff;
}
::v-deep .v-tab.v-tab {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: capitalize;
  color: #ffffff;
}
::v-deep .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #cdcadb;
  font-weight: normal;
}
::v-deep.v-pagination__navigation {
  background: #0e0e0e;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: #0e0e0e;
}
</style>