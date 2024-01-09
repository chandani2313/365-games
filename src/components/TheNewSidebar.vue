<template>
  <v-navigation-drawer
    v-model="isDrawerOpen"
    color="#1E0741"
    app
    width="351px"
    class="sidebar-container"
  >
    <div class="layout">
      <!-- <v-list v-if="$vuetify.breakpoint.mdAndUp" > -->
      <v-list-item>
        <div class="logo">
          <img src="../assets/dashboard365/365-logo.png" alt="" />
          <!-- <v-image src="@/assets/dashboard365/logo.png" alt="" /> -->
        </div>
        <!-- <v-btn>365 Games</v-btn> -->
        <!-- </v-list-item-avatar> -->
      </v-list-item>
      <!-- </v-list> -->
      <!-- 
    <v-divider></v-divider> -->
      <v-list nav dense>
        <template v-for="(route, index) in routes">
          <v-list-item
            class="surf"
            :ripple="false"
            active-class="active"
            :key="index"
            :to="route.path"
            :class="{ disabled: !subscriber }"
            :disabled="!subscriber"
          >
            <v-list-item-icon>
              <v-img :src="route.src" style="background-size: 21px"></v-img>
            </v-list-item-icon>
            <v-list-item-title class="menu-text-color">{{
              route.name
            }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-divider></v-divider> -->
      <div class="log_wrap">
        <v-list nav dense class="bottom" style="margin-top: 30px">
          <span>Get Help</span>
          <template v-for="(item, index) in items">
            <v-list-item
              class="surf"
              :ripple="false"
              active-class="active"
              :key="index"
              :to="item.path"
              :class="{ disabled: !subscriber }"
              :disabled="!subscriber"
            >
              <v-list-item-icon class="sec-menu">
                <v-img :src="item.src"></v-img>
              </v-list-item-icon>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
        <!-- <v-spacer></v-spacer>
            <v-spacer></v-spacer> -->
        <v-divider></v-divider>
        <div class="logout_icons icons">
          <a href="#" @click.prevent="logout()">
            <div class="wrapper">
              <v-img :src="myImage"></v-img>
              <div class="wrapper-text">Log Out</div>
            </div>
          </a>
          <div class="theme_slct">
            <div class="toggle" id="switch1" @click="switches()"></div>
          </div>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>


<script>
// import axios from "axios";

export default {
  data() {
    return {
      myImage: "/img/assets/sidebar/icon-sign-out.svg",
      routes: [
        {
          src: "/img/assets/sidebar/icon-shop.svg",
          // src: "icon-shop.png",
          name: "Dashboard",
          path: "/dashboard",
        },
        {
          src: "/img/assets/sidebar/medal.svg",
          name: "Leaderboard",
          path: "/leaderboard",
        },
        {
          src: "/img/assets/sidebar/data.svg",
          name: "Tournament",
          path: "/tournament",
        },
        //  {
        //   icon: "mdi-account-multiple",
        //   name: 'Teams',
        //   path: "/teams",
        // },
        {
          src: "/img/assets/sidebar/icon-users.svg",
          name: "Marketplace",
          path: "/marketplace",
        },
        //   {
        //   icon: "mdi-image",
        //   name: "Gem Purchase",
        //   path: "/gem",
        // },
        {
          src: "/img/assets/sidebar/icon-crown.svg",
          name: "Rewards",
          path: "/rewards",
        },
        {
          src: "/img/assets/sidebar/icon-school.svg",
          name: "My Library",
          path: "/mylibrary",
        },

        // {
        //   icon: "mdi-file-document",
        //   name: "Forums",
        //   path: "/forum",
        // },
      ],
      items: [
        {
          src: "/img/assets/sidebar/icon-gamingtv.svg",
          name: "Support",
          path: "/support",
        },
        {
          src: "/img/assets/sidebar/icon-discord.svg",
          name: "FAQ",
          path: "/faq",
        },
      ],
      isDrawerOpen: this.drawer,
      subscriber: true,
    };
  },
  methods: {
    switches() {
      var theme = document.getElementById("switch1");
      theme.classList.toggle("active");
    },
    logout() {
      this.$store.dispatch("logout");
    },
    subscribedUser() {
      // axios
      //   .get(`/subscription/check/`)
      //   .then((response) => {
      //     this.subscriber = response.data.isSubscribed;
      //   })
      //   .catch((e) => {
      //     console.log("err", e.response);
      //     if (e.response.status === 400) {
      //       // this.$router.push('/');
      //     }
      //   });
      this.subscriber = true;
    },
  },
  mounted() {
    this.subscribedUser();
  },
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isDrawerOpen(data) {
      this.$emit("update:drawer", data);
    },
    drawer(data) {
      this.isDrawerOpen = data;
    },
  },
};
</script>
<style scoped lang="scss">
.sec-menu:hover {
  color: #ffffff;
}
.menu-text-color {
  color: #fff;
}
.v-icon .sec-menu:hover {
  color: "#FFFFFF" !important;
}
.logo {
  position: absolute;
  display: flex;
  left: 75px;
  top: 60px;
}
.logo img {
  width: 190px;
  height: 69px;
}
.v-list.v-list--nav {
  // padding-right: 0;
  .v-list-item {
    // margin-bottom: 25px !important;
    min-height: 10px !important;
  }
  .v-list-item__title {
    font: normal normal bold 18.63px/29px Poppins;
  }
}
.active {
  color: #ffffff;
  border-radius: 10px;
  background: linear-gradient(180deg, #7255e9 0%, #7255e9 100%);
  padding-right: 0 !important;
  .v-list-item__title {
    font: normal normal bold 18.63px/29px Poppins;
  }
  &::after {
    // background-color: #ff04dd;
    // width: 8px;
    // border-radius: 1px;
  }
}

.surf:hover {
  background: linear-gradient(180deg, #7255e9 0%, #7255e9 100%);
  border-radius: 10px;
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 0.5s;
}

.disabled {
  opacity: 0.5;
}
.wrapper {
  justify-content: center;
  display: flex;
  align-items: center;
  color: #ffffff;
  column-gap: 10px;
}
.v-divider {
  height: 55px;
  max-height: 55px;
}
.sidebar-container {
  background: #0e0e0e !important;
  box-shadow: 1px 2px #383a3e;
}

@media screen and (min-width: 1920px) {
  // .sidebar-container {
  //   width: 335px !important;
  // }
  ::v-deep .v-list.v-list--nav .v-list-item__title {
    font-size: 17.9828px !important;
  }
  ::v-deep .v-list--nav {
    padding-left: 30px !important;
    padding-right: 30px !important;
    .sidebar-container {
      width: 335px !important;
    }
    ::v-deep .v-navigation-drawer__content {
      margin-left: 60px !important;
    }
    // ::v-deep .v-navigation-drawer__content{
    //   margin-left: 60px!important;
    // }
  }
  .wrapper-text {
    font-weight: 700;
    font-size: 17.9828px;
    line-height: 37px;
  }
}
.layout {
  display: grid;
  height: 100%;
}
.v-application .mb-10 {
  margin-bottom: 0px !important;
}
.theme--light.v-divider {
  border-color: transparent;
}
// .v-icon .v-icon {
//   color: #7255e9;
// }
.theme_slct {
  display: flex;
  align-items: center;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #787686;
}
/*................switch start....................*/
.toggle {
  transition: all 0.5s;
  background-color: #7255e9;
  width: 37px;
  height: 19px;
  border-radius: 20px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle::before {
  content: "";
  transition: all 0.5s;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #ffffff;
  top: 11%;
  left: 6%;
}

.toggle::after {
  transition: all 0.5s;
  content: "";
  position: absolute;
  /* left: 14%; */
  /* top: 9px; */
  /* padding: 2px; */
  left: 4px;
  height: 11px;
  width: 12px;
  /* border: solid 1px white; */
  border-radius: 100%;
  background-image: url(/img/assets/Dashboard/night.svg);
}

.toggle:hover {
  cursor: pointer;
}

.toggle.active {
  transition: all 0.5s;
  // background-color: #9AD1D4;
}

.toggle.active::before {
  transition: all 0.5s;
  background-color: #ffffff;
  left: 54%;
}

.toggle.active::after {
  transition: all 0.5s;
  /* background-color: #007EA7; */
  left: 60%;
  /* width: 0.1px; */
  border-radius: 0px;
  background-image: url(/img/assets/Dashboard/sun.svg);
}

.log_wrap {
  display: grid;
  row-gap: 90px;
}
.log_wrap span {
  font-size: 21px;
  color: #21202b;
  font-weight: 700;
  padding: 0 12px;
  line-height: 50px;
}
p {
  color: white;
}
/*................switch end.......................*/
.logout_icons {
  display: flex;
  justify-content: space-around;
  // margin: 178px 0px 10px;
  align-items: center;
  margin-bottom: 20px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .logout_icons {
    margin-bottom: 10px;
  }
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled):hover {
  color: #ffffff !important;
}
.v-list.v-list--nav .v-list-item__title {
  font: normal normal bold 18.63px/29px Poppins;
}
.mdi-handshake::before:hover {
  content: "\F1218";
  color: aqua;
}
.v-icon.v-icon {
  font-size: 15px;
}
.v-icon.v-icon:hover {
  color: #ffffff;
}
.v-list .v-list-item--active .v-icon:hover {
  color: #ffffff !important;
}
.v-icon.v-icon::before:hover {
  color: #ffffff !important;
}
.mdi-hand-heart::before:hover {
  content: "\F10F1";
  color: #ffffff !important;
}
.v-list--dense .v-list-item .v-list-item__icon:hover {
  color: #ffffff !important;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 12px;
}

.v-list--nav {
  padding-left: 15px;
  padding-right: 15px;
}
.v-list--nav .v-list-item,
.v-list--nav .v-list-item:before {
  border-radius: 9px;
}
.v-list--nav .v-list-item {
  // padding: 0px 0px 0px 12px;
  padding: 7px 0px 7px 12px;
}
.v-navigation-drawer__content {
  display: grid !important;
}
.v-list-item {
  min-height: 0px !important;
}
.wrapper-text {
  font-size: 14px;
  font-weight: 700;
  line-height: 29px;
  font-family: "Poppins";
}
.wrapper i {
  font-size: 15px;
}
.v-navigation-drawer .v-list:not(.v-select-list) {
  background: inherit;
  // margin-top: 85px;
}
.v-navigation-drawer .v-list:not(.v-select-list) {
  background: inherit;
  margin-top: 185px;
  padding: 0 32px;
}
::v-deep .v-image__image--cover {
  background-size: auto;
}
::v-deep .v-navigation-drawer__content {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
::v-deep .v-navigation-drawer__content::-webkit-scrollbar {
  width: 0;
}
</style>
