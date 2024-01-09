<template>
  <v-navigation-drawer
    v-model="isDrawerOpen"
    color="#1E0741"
    app
    width="210px"
    class="sidebar-container"
  >
    <v-list v-if="$vuetify.breakpoint.mdAndUp" color="#210654">
      <v-list-item class="justify-center">
        <div class="logo">
          <div><img width="20px" src="../assets/Login/logo.png" alt="" /></div>
          <div>365 Games</div>
        </div>
        <!-- <v-btn>365 Games</v-btn> -->
        <!-- </v-list-item-avatar> -->
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list nav dense>
      <template v-for="(route, index) in routes">
        <v-list-item
        class="surf"
          :ripple="false"
          active-class="active"
          :key="index"
          :to="route.path"
          :class="{disabled: !subscriber}"
          :disabled="!subscriber"
        >
          <v-list-item-icon>
            <v-icon color="#fff">{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="menu-text-color">{{
            route.name
          }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
    <div class="logout_icons icons">
      <a href="#" @click.prevent="logout()">
        <div class="wrapper">
          <i class="fas fa-sign-out-alt" style="margin-right: 10px"></i>
          <div class="wrapper-text">Logout</div>
        </div>
      </a>
    </div>
  </v-navigation-drawer>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
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
          name: 'Tournament',
          path: "/tournament",
        },
         {
          icon: "mdi-account-multiple",
          name: 'Teams',
          path: "/teams",
        },
        {
          icon: "mdi-image",
          name: "Redeem",
          path: "/redeem",
        },
          {
          icon: "mdi-image",
          name: "Gem Purchase",
          path: "/gem",
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
        // {
        //   icon: "mdi-file-document",
        //   name: "Forums",
        //   path: "/forum",
        // },
      ],
      isDrawerOpen: this.drawer,
      subscriber: true,
    }
  },
  methods: {
    logout() {
     this.$store.dispatch('logout');
    },
    subscribedUser() {
      axios.get(`/subscription/check/`)
      .then((response) => {
        this.subscriber = response.data.isSubscribed;
      })
      .catch((e) => {
          console.log('err', e.response);
          if (e.response.status === 400) {
              // this.$router.push('/');
          }
      });
    },
  },
  mounted() {
    this.subscribedUser();
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isDrawerOpen(data) {
      this.$emit("update:drawer", data)
    },
    drawer(data) {
      this.isDrawerOpen = data
    }
  }
};
</script>
<style scoped lang="scss">
.menu-text-color {
  color: #fff;
}
.logo {
  position: absolute;
  display: flex;
  top: 6px;
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
.v-list.v-list--nav {
  padding-right: 0;
  .v-list-item {
    margin-bottom: 25px !important;
  }
  .v-list-item__title {
    font-family: "Poppins";
    font-size: 16px !important;
  }
}
.active {                                                                                                    
  // background-image: linear-gradient(
  //   to right,
  //   rgba(255, 0, 0, 0),
  //   rgba(255, 255, 255, 0.13),
  //   #ffffffa9 120%
  // );
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(236, 17, 189, 0.212),
    #ce0daef3 100%
  );
  color: unset !important;
  padding-right: 0 !important;
  .v-list-item__title {
    font-weight: bold !important;
  }
  &::after {
    background-color: #ff04dd;
    width: 8px;
    border-radius: 1px;
  }
}

.surf:hover{
  background: linear-gradient(to left, #ce0daef3,
    rgba(236, 17, 189, 0.212),
    rgba(255, 0, 0, 0) 50%
    );
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 0.50s;
}

.disabled {
  opacity: 0.5;
}
.wrapper {
  justify-content: center;
  display: flex;
  align-items: center;
  color: red;
}
.theme--light.v-list-item[data-v-0ddd2e6d]:not(.v-list-item--active):not(.v-list-item--disabled):hover {
    color:#FFFFFF;

}
</style>
