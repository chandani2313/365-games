<template>
  <v-app-bar
    v-if="!$vuetify.breakpoint.mdAndDown"
    app
    color="#1E0741"
    height="64px"
  >
    <v-text-field
      solo
      flat
      hide-details
      dark
      background-color="#330E6B"
      placeholder="Search Tournament or Games"
      style="max-width: 333px"
      append-icon="mdi-magnify"
    ></v-text-field>
    <v-spacer></v-spacer>

    <!-- <div class="random">
      <div class="random-text">Random drop in</div>
      <div v-if="countDownDate" class="random-number" id="demo"></div>
      <div v-else class="random-number">00:00</div>
    </div> -->
    <!-- <div class="toolbar-icon">
      <img class="icon-money" src="/img/assets/Dashboard/Cash.png" />
      <div class="toolbar-number">100</div>
    </div> -->
    <div class="toolbar-icon">
      <img class="icon-money" src="/img/assets/Gem/gem_icon.png" />
      <div class="toolbar-number">{{ gemCount }}</div>
    </div>
    <!-- <div class="toolbar-icon" @click="showNotification()">
      <i class="fa fa-bell icon-bell"></i>
    </div> -->
    <div class="notification-noti" @click="showNotification()">
      <i class="fa fa-bell icon-bell"></i>
      <div class="notification_num" v-if="notificationCount > 0">
        {{ notificationCount }}
      </div>
    </div>
    
    <div class="notification-noti" @click="getCart()">
      <i class="fas fa-shopping-cart"></i>
      <div class="notification_num" v-if="cartCount > 0">{{ cartCount }}</div>
    </div>
    <div class="toolbar-name">
      <div>{{ userDetail.username }}</div>
    </div>
    <!-- <div class="user-image">
      <img :src="'https://ps-mg.s3.amazonaws.com/' + userDetail.profileImage" width="40px" alt="" />
    </div> -->

    <div class="user-image">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-if="userDetail.profileImage" v-bind="attrs" v-on="on">
            <img
              :src="'https://ps-mg.s3.amazonaws.com/' + userDetail.profileImage"
              width="40px"
              alt=""
            />
          </div>
          <div v-else v-bind="attrs" v-on="on">
            <img
              src="/img/assets/profile/nouserimageicon.jpg"
              width="40px"
              alt=""
            />
          </div>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            @click="item.action && item.action()"
          >
            <v-list-item-icon>
              <v-icon color="#000">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="menu-text-color">{{
                item.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <div class="logout_icons icons"> -->
          <a href="#" @click.prevent="logout()">
            <div class="wrapper">
              <i class="fas fa-sign-out-alt" style="margin-left: -65px"></i>
              <div class="wrapper-text">Logout</div>
            </div>
          </a>
          <!-- </div> -->
        </v-list>
      </v-menu>
    </div>
    <Notification v-if="notification" @notification="showNotification()" />
  </v-app-bar>
  <v-app-bar
    v-else
    app
    color="white"
    style="border-bottom-left-radius: 15px; border-bottom-right-radius: 15px"
    align-content-center
    height="48px"
  >
    <v-app-bar-nav-icon
      :ripple="false"
      color="#1E0741"
      v-if="$vuetify.breakpoint.mdAndDown"
      @click.stop="$emit('toggleDrawer')"
    ></v-app-bar-nav-icon>

    <div class="toolbar-name-mobile">
      <div>{{ userDetail.username }}</div>
    </div>

    <v-spacer></v-spacer>

    <!-- <div class="toolbar-icon-mobile">
      <i class="fas fa-money-bill"></i>
    </div> -->
    <div v-if="countDownDate" class="random-number" id="demo"></div>
    <div v-else class="random-number">00:00</div>
    <div class="toolbar-icon-mobile">
      <!-- <i class="fas fa-gem"></i> -->
      <img
        class="icon-money"
        width="20px"
        height="20px"
        src="/img/assets/Gem/gem_icon.png"
      />
      <div class="toolbar-number">{{ gemCount }}</div>
    </div>
    <!-- <div class="toolbar-icon-mobile">
      <i class="fas fa-bell"></i>
    </div> -->
    <div class="notification-noti-mobile" @click="showNotification()">
      <i class="fas fa-bell"></i>
      <div class="notification_num_count" v-if="notificationCount > 0">
        {{ notificationCount }}
      </div>
    </div>
    <div class="notification-noti-mobile" @click="getCart()">
      <i class="fas fa-shopping-cart"></i>
      <div class="notification_num" v-if="cartCount > 0">{{ cartCount }}</div>
    </div>
    <!-- <div class="user-image-mobile">
      <img :src="'https://ps-mg.s3.amazonaws.com/' + userDetail.profileImage" alt="" />
    </div> -->
    <div class="user-image-mobile">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-if="userDetail.profileImage" v-bind="attrs" v-on="on">
            <img
              :src="'https://ps-mg.s3.amazonaws.com/' + userDetail.profileImage"
              width="20px"
              alt=""
            />
          </div>
          <div v-else v-bind="attrs" v-on="on">
            <img
              src="/img/assets/profile/nouserimageicon.jpg"
              width="20px"
              alt=""
            />
          </div>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            @click="item.action && item.action()"
          >
            <v-list-item-icon>
              <v-icon color="#000">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="menu-text-color">{{
                item.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <div class="logout_icons icons"> -->
          <a href="#" @click.prevent="logout()">
            <div class="wrapper">
              <i class="fas fa-sign-out-alt" style="margin-left: -90px"></i>
              <div class="wrapper-text">Logout</div>
            </div>
          </a>
          <!-- </div> -->
        </v-list>
      </v-menu>
    </div>
    <template v-slot:extension>
      <v-text-field
        solo
        flat
        hide-details
        dark
        dense
        background-color="#1D0640"
        placeholder="Search Tournament or Games"
        append-icon="mdi-magnify"
        class="mb-4 text-body-2"
      ></v-text-field>
    </template>
    <Notification v-if="notification" @notification="showNotification()" />
  </v-app-bar>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Notification from "./Notification/Notification.vue";
export default {
  components: { Notification },
  data: () => ({
    drawer: false,
    group: null,
    userDetail: {},
    userId: null,
    minutes: 0,
    seconds: 59,
    gemCount: 0,
    notification: false,
    notificationCount: 0,
    countDownDate: "",
    items: [
      {
        icon: "mdi-account-outline",
        name: "My Profile",
        path: "/profile",
      },
      {
        icon: "mdi-cart-arrow-down",
        name: "My Orders",
        path: "/order",
      },
      {
        icon: "mdi-ticket-confirmation",
        name: "Transaction History",
        path: "/ticket/transaction",
      },
      // {
      //   icon: "mdi-logout",
      //   name: "Logout",
      //   // path: "/",
      //   action: () => this.logout()
      // },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  created: function () {
    this.userDetails();
    this.getDashboardDetails();
    setInterval(() => {
     if(this.countDownDate) {
        // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
if(days && hours && minutes && seconds){
// Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}
      
     }
    }, 1000);
  },
  computed: {
    ...mapGetters(["cartCount"]),
    randomDropTimer() {
      return this.minutes + " : " + this.seconds;
    },
  },
  methods: {
    getRandomDrop() {
      axios.post("/random-drop/find/all", { criteria: {} }).then((res) => {
        this.countDownDate = new Date(res.data[0].startDate).getTime();
        //  console.log("random data", this.countDownDate);
      });
    },
    checkNoticationStatus() {
      axios.get(`/notification/read`).then((res) => {
        console.log("res", res.data);
        this.notificationCount = 0;
      });
    },
    showNotification() {
      //  console.log('Hi>>>>')
      if (this.notification === true) {
        this.notification = false;
      } else {
        this.notification = true;
      }
      if (this.notificationCount) this.checkNoticationStatus();
    },
    getDashboardDetails() {
      axios.get(`/user/dashboard`).then((res) => {
        this.gemCount = res.data.gemCount;
        this.notificationCount = res.data.notificationCount;
      });
    },
    userDetails() {
      let user = this.$store.getters.user;
      this.userId = user._id;
      axios
        .get(`/user/find/${this.userId}`)
        .then((response) => {
          this.userDetail = response.data;
          // console.log("image", `https://ps-mg.s3.amazonaws.com/${this.userDetail.coverImage}`);
          // console.log("header ", this.userDetail);
        })
        .catch((e) => {
          console.log("err", e.response);
          if (e.response.status === 400) {
            this.$router.push("/");
          }
        });
    },
    getCart() {
      this.$router.push({
        name: "MyCart",
      });
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  mounted() {
    this.getRandomDrop();
  },
};
</script>

<style scoped lang="scss">
::v-deep .mdi-magnify {
  opacity: 0.6;
}
.random {
  background: #330e6b;
  color: #f9f9f9;
  text-align: center;
  border-radius: 4px;
  border-right: 1px solid #330e6b;
  .random-text {
    font: normal normal normal 12px/18px Poppins;
    padding: 5px;
  }
  .random-number {
    font: normal normal bold 16px/25px Poppins;
  }
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
    width: 30px;
    height: 30px;
    padding-bottom: 5px;
  }
  .icon-bell {
    font-size: 21px;
    color: #fff;
  }
  .toolbar-number {
    font: normal normal normal 12px/11px Poppins;
    color: #f9f9f9;
  }
}
.notification-noti {
  margin: auto 10px;
  font-size: 20px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.notification-noti:hover {
  color: #fff;
  transform: scale(1.1);
}
.notification-noti {
  position: relative;
}
.notification_num {
  position: absolute;
  top: -6px;
  right: -10px;
  background-image: linear-gradient(to right, #330e6b 0%, #8a3dfd 100%);
  border-radius: 50%;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #fff;
  font-weight: 800;
}

.toolbar-name {
  font: normal normal medium 19px/29px Poppins;
  color: #f9f9f9;
  padding: 0px 10px;
}
.user-image {
  img {
    border-radius: 5px;
  }
}
.wrapper {
  // justify-content: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  color: #1f1b40;
  margin-right: 10px;
  padding: 10px 0px;
}
.wrapper-text {
  margin-left: -55px;
}

// mobile
@media only screen and (max-width: 1263px) {
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
    font: normal normal 600 14px/29px Poppins;
    padding: 5px 0px;
  }
  .toolbar-icon-mobile {
    color: #1f1b40;
    display: block;
    padding: 4px 8px;
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
      font: normal normal normal 12px/11px Poppins;
      color: #1f1b40;
      text-align: center;
    }
  }

  .notification-noti-mobile {
    color: #1f1b40;
    .notification_num {
      position: absolute;
      top: 6px;
      right: 45px;
      background-image: linear-gradient(to right, #330e6b 0%, #8a3dfd 100%);
      border-radius: 50%;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 9px;
      color: #fff;
      font-weight: 800;
    }
    .notification_num_count {
      position: absolute;
      top: 6px;
      right: 70px;
      background-image: linear-gradient(to right, #330e6b 0%, #8a3dfd 100%);
      border-radius: 50%;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 9px;
      color: #fff;
      font-weight: 800;
    }
  }
  .notification-noti-mobile:hover {
    color: #330e6b;
    transform: scale(1.1);
  }
  .user-image-mobile {
    padding: 4px 10px;
    img {
      border-radius: 4px;
      width: 20px;
      box-sizing: border-box;
    }
  }
  :v-deep .v-input {
    input:placeholder {
      font-family: Poppins;
    }
  }
}
</style>