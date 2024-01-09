<template>
  <fragment>
    <div class="toolbar-flex">
      <v-app-bar-nav-icon
        color="#1E0741"
        class="title-icon"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="nav-mobile"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon @click.stop="drawer = !drawer" color="#fff"
              >mdi-close</v-icon
            >
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="menu-text-color">Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item v-for="item in routes" :key="item.name" link>
            <v-list-item-icon>
              <v-icon color="#fff">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="menu-text-color">{{
                item.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider color="#58467F"></v-divider>
        </v-list>
        <div class="logout_icons icons">
          <a  href="#" @click.prevent="logout()">
            <div class="wrapper">
              <i class="fas fa-sign-out-alt" style="margin-right: 10px;"></i>
              <div class="wrapper-text">Logout</div>
            </div>
          </a>
        </div>
      </v-navigation-drawer>

      <div class="toolbar-name-mobile">
        <div>{{user.username}}</div>
      </div>

      <v-spacer></v-spacer>

      <div class="toolbar-icon-mobile">
        <img src="/img/assets/Dashboard/mobile/Cash.png" width="20px" height="20px" alt=""/>
        <div class="toolbar-number">100</div>
      </div>
      <div class="toolbar-icon-mobile">
       <img src="/img/assets/Dashboard/mobile/Gem.png" width="20px" height="20px" alt=""/>
        <div class="toolbar-number">100</div>
      </div>
      <div class="toolbar-icon-mobile">
        <i class="fa fa-bell icon-bell"></i>
      </div>
      <div class="user-image-mobile">
        <img
          src="/img/assets/Dashboard/Last-Week-Leaderboard-Winners.png"
          width="30px"
          alt=""
        />
      </div>
    </div>
    <!-- <v-app-bar dense clippeed-left class="app-bar-tab" :color = "appBackColor" height="64px"> -->
    <v-app-bar
      dense
      clippeed-left
      class="app-bar-tab"
      color="#1E0741"
      height="64px"
    >
      <div class="input-wrapper">
        <input
          type="text"
          class="my-input"
          placeholder="Search Tournament or Games"
        />
        <i class="fa fa-search icon"></i>
      </div>
      <!-- </v-toolbar-title> -->

      <v-spacer></v-spacer>

      <div class="random">
        <div class="random-text">Random drop in</div>
        <div class="random-number">01:00</div>
      </div>
      <div class="toolbar-icon">
        <!-- <i class="fa fa-bell icon-money"></i> -->
        <img class="icon-money" src="/img/assets/Dashboard/Cash.png" />
        <div class="toolbar-number">100</div>
      </div>
      <div class="toolbar-icon">
        <!-- <i class="fa fa-bell icon-money"></i> -->
        <img class="icon-money" src="/img/assets/leaderboard/Gem 2.png" />
        <div class="toolbar-number">100</div>
      </div>
      <div class="toolbar-icon">
        <i class="fa fa-bell icon-bell"></i>
      </div>
      <div class="toolbar-name">
        <div>{{user.username}}</div>
      </div>
      <div class="user-image">
        <img src="../assets/Login/mask_boy.png" width="20px" alt="" />
      </div>

      <!-- </v-app-bar-nav-icon> -->
    </v-app-bar>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";

export default {
  components: {
    Fragment,
  },
  data: () => ({
    drawer: false,
    group: null,
    user: {},
    routes: [
      {
        icon: "mdi-view-dashboard",
        name: "Dashboard",
        path: "/dashboard",
      },
      {
        icon: "mdi-contacts",
        name: "Leaderboard",
        path: "/leaderboard",
      },
      {
        icon: "mdi-account-multiple",
        name: "Tournaments",
        path: "/tournaments",
      },
      {
        icon: "mdi-image",
        name: "Redeem",
        path: "/redeem",
      },
      {
        icon: "mdi-trophy",
        name: "Rewards",
        path: "/rewards",
      },
      {
        icon: "mdi-handshake",
        name: "Support",
        path: "/support",
      },
      {
        icon: "mdi-hand-heart",
        name: "FAQ",
        path: "/faq",
      },
      {
        icon: "mdi-file-document",
        name: "Forums",
        path: "/forum",
      },
    ],
  }),

  // computed: {
  //   appBackColor() {
  //     switch (this.$vuetify.breakpoint.name) {
  //       case 'xs': return `#F9F9F9`;
  //       case 'sm': return `#F9F9F9`;
  //       case 'md': return `#1E0741`;
  //       case 'lg': return `#1E0741`;
  //       case 'xl': return `#1E0741`;
  //     }
  //   },
  // },

  watch: {
    group() {
      this.drawer = false;
    },
  },
  created: function() {
      this.userDetails();
  },
  methods: {
      userDetails() {
        this.user = this.$store.getters.user;
      },
      logout() {
       this.$store.dispatch('logout')
    }
  },
};
</script>
<style scoped lang="scss">
.logo {
  position: absolute;
  display: flex;
  top: 15px;
  left: 35px;
  color: black;
  background: white;
  width: 120px;
  padding: 6px;
  justify-content: space-evenly;
  border-radius: 5px;
  font-weight: 600;
  font-size: 13px;
}
.mobile-toolbar-container,
.title-icon {
  display: none;
}
.nav-mobile {
  background: linear-gradient(to bottom, rgb(30, 35, 81), rgb(63, 44, 96));
}
.menu-text-color {
  color: #fff;
}
.v-list.v-list--nav {
  .v-list-item {
    margin-bottom: 25px !important;
  }
  .v-list-item__title {
    font-family: "Poppins";
    font-size: 16px !important;
  }
}

.my-input {
  background: #330e6b;
  border-radius: 4px 0px 0px 4px;
  padding: 10px;
  width: 333px;
  padding-left: 20px;
  color: white;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  opacity: 0.68;
}
.icon {
  padding: 12px;
  font-size: 16px;
  position: absolute;
  background: #330e6b;
  color: white;
  border-radius: 0px 4px 4px 0px;
}
.my-input::placeholder {
  color: white;
}

.random {
  background: #330e6b;
  color: #f9f9f9;
  text-align: center;
  border-radius: 4px;
  border-right: 1px solid #330e6b;
}
.random-text {
  font: normal normal normal 12px/18px Poppins;
  padding: 5px;
}
.random-number {
  font: normal normal bold 16px/25px Poppins;
}
.toolbar-icon {
  border-right: 1px solid #330e6b;
  color: #fff;
  padding: 0px 15px;
  text-align: center;
  .icon-money {
    /* padding: 10px; */
    font-size: 16px;
    color: white;
    width: 25px;
    height: 25px;
    padding-bottom: 5px;
  }
  .icon-bell {
    font-size: 21px;
    color: #fff;
  }
  .toolbar-number {
    font: normal normal normal 9px/11px Poppins;
    color: #f9f9f9;
  }
}

.toolbar-name {
  font: normal normal medium 19px/29px Poppins;
  color: #f9f9f9;
  padding: 0px 10px;
}
.toolbar,
.app-bar-tab {
  background-color: #1e0741;
}
.toolbar-flex {
  display: none;
}

.wrapper{
  justify-content: center;
  display: flex;
  align-items: center;
  color: red;
}

@media only screen and (max-width: 700px) {
  .toolbar,
  .app-bar-tab {
    background-color: #f9f9f9;
    // height:100%;
  }
  .app-bar-tab {
    border-radius: 0px 0px 20px 20px;
  }
  .mobile-toolbar-container,
  .title-icon {
    display: block;
  }
  .icon-money {
    font-size: 16px;
    color: #1f1b40;
  }
  .title-icon {
    color: #1f1b40;
  }
  .icon-bell {
    font-size: 21px;
    color: #1f1b40;
  }
  .toolbar-number {
    font: normal normal normal 9px/11px Poppins;
    color: #f9f9f9;
  }
  .toolbar-name-mobile {
    color: #1f1b40;
  }
  .toolbar-flex {
    display: flex;
    flex-wrap: nowrap;
    padding: 10px 0px;
    box-sizing: border-box;
    .toolbar-name-mobile {
      color: #1f1b40;
      font: normal normal 600 14px/29px Poppins;
      padding: 5px 0px;
    }
    .toolbar-icon-mobile {
      color: #1f1b40;
      display: block;
      padding: 4px 10px;
      box-sizing: border-box;
      .icon-money {
        font-size: 10px;
        color: #1f1b40;
      }
      .title-icon {
        background-color: #1f1b40;
      }
      .icon-bell {
        font-size: 21px;
        color: #1f1b40;
      }
      .toolbar-number {
        font: normal normal normal 9px/11px Poppins;
        color: #1f1b40;
        text-align:center;
      }
    }
    .user-image-mobile {
      width: 30px;
      padding: 5px;
      box-sizing: border-box;
    }
  }
}
</style>