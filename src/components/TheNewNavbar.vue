<template>
  <v-app-bar
    v-if="!$vuetify.breakpoint.mdAndDown"
    app
    color="#0E0E0E"
    height="100px"
    style="padding: 5px 8px 0px 20px"
    v-bind:id="showdiv ? 'navbar' : ''"
  >
    <div class="left" id="left">
      <div class="search">
        <div class="dropdown">
          <!-- <select name="game" v-model="selectedType" id="game">
            <option value="" disabled selected hidden>All Games</option>
            <option value="tournament">Tournament</option>
            <option value="leaderboard">Leaderboard</option>
            <option value="fortnite">fortnite</option>
            <option value="mlbb">mlbb</option> 
          </select> -->
        </div>
        <!-- <v-text-field
          solo
          flat
          hide-details
          light
          label="all games"
          background-color="#F9F9F9"
          persistent-placeholder
          placeholder="Search Games..."
          style="border-radius: 0px 10px 10px 0px"
          append-icon="mdi-magnify"
          prepend-inner-icon="mdi-chevron-down"
          class="shrink"
        >
        </v-text-field> -->
        <!-- <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              light
              v-bind="attrs"
              v-on="on"
              style="border-radius: 10px 5px 5px 10px"
            >
              All games
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(searchitem, i) in searchItems" :key="i">
              <v-list-item-title>{{ searchitem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
        <v-select
          v-model="selectedType"
          :items="searchItems"
          item-text="title"
          background-color="rgb(249 249 249)"
          append-icon="mdi-chevron-down"
          input=""
          class="game-select"
        ></v-select>
        <v-autocomplete
          v-if="selectedType == 'Tournament'"
          v-model="selectedName"
          hide-details
          label="all games"
          background-color="#F9F9F9"
          persistent-placeholder
          :placeholder="`${'Search' + ' ' + selectedType + ' ' + 'Name...'}`"
          :items="tournamentList"
          item-text="name"
          item-value="_id"
          :search-input.sync="tournamentSearch"
          @change="goToSearchResultsPage"
          style="border-radius: 0px 10px 10px 0px"
          append-icon="mdi-magnify"
          class="shrink"
          hide-no-data
          light
          outlined
          solo
        >
          <template v-slot:selection="data" color="#fff">
            <router-link
              tag="a"
              :to="{ name: 'TournamentDetails', params: { id: data.item._id } }"
              class="inner_wrapper"
              >{{ data.item.name }}</router-link
            >
          </template>
        </v-autocomplete>
        <v-autocomplete
          v-if="selectedType == 'Leaderboard'"
          v-model="selectedName"
          hide-details
          label="all games"
          background-color="#F9F9F9"
          persistent-placeholder
          :placeholder="`${'Search' + ' ' + selectedType + ' ' + 'Name...'}`"
          :items="leaderboardList"
          item-text="name"
          item-value="_id"
          @change="goToSearchResultsPage"
          :search-input.sync="leaderboardSearch"
          style="border-radius: 0px 10px 10px 0px"
          append-icon="mdi-magnify"
          class="shrink"
          light
          outlined
          solo
        >
          <template v-slot:selection="data" color="#fff">
            <router-link
              tag="a"
              :to="{
                name: 'LeaderboardDetails',
                params: { id: data.item._id },
              }"
              class="inner_wrapper"
            >
              {{ data.item.name }}</router-link
            >
          </template>
        </v-autocomplete>
      </div>
      <v-spacer></v-spacer>
      <div class="random-drop-wrap">
        <router-link
          class="random"
          tag="div"
          :to="{ name: 'RandomDropPopuptest' }"
          active-class="active"
          exact
        >
          <!-- <div class="random" @click="randomDropPopup"> -->
          <div class="random-spinner">
            <img src="@/assets/dashboard365/random-spinner.svg" />
            <v-progress-circular :value="60"></v-progress-circular>
          </div>
          <div class="random-wrap">
            <div class="random-text">Random drop in</div>
            <div v-if="countDownDate" class="random-number" id="demo"></div>
            <div v-else class="random-number">
              <span style="color: rgb(255, 255, 255, 0.6)">0</span>2:56
            </div>
          </div>
        </router-link>
      </div>
      <!-- <div class="toolbar-icon">
      <img class="icon-money" src="/img/assets/Dashboard/Cash.png" />
      <div class="toolbar-number">100</div>
    </div> -->
      <!-- <div class="toolbar-icon">
        <div class="gems_wrap">
          <img class="icon-money" src="@/assets/dashboard365/icongem.png" />
        </div>
        <div class="gem_count">
          <div class="gems">gems</div>
          <div class="toolbar-number">{{ gemCount }} G</div>
        </div>
      </div> -->
      <div class="toolbar">
        <div class="toolbar-icon">
          <div class="gems_wrap">
            <img
              class="icon-money"
              src="@/assets/dashboard365/diamond-gem.svg"
            />
          </div>
          <div class="gem_count">
            <div class="gems">Gems</div>
            <div class="toolbar-number">{{ gemApex }} G</div>
          </div>
        </div>
        <!-- <div class="toolbar-icon">
          <div class="gems_wrap"> 
            <img
              class="icon-money"
              src="@/assets/dashboard365/ruby_green.png"
            />
          </div>
          <div class="gem_count">
            <div class="gems">gems</div>
            <div class="toolbar-number">{{ gemApex }} G</div>
          </div>
        </div>
        <div class="toolbar-icon">
          <div class="gems_wrap">
            <img class="icon-money" src="@/assets/dashboard365/ruby_red.png" />
          </div>
          <div class="gem_count">
            <div class="gems">gems</div>
            <div class="toolbar-number">{{ gemCod }} G</div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <v-spacer></v-spacer> -->
    <v-spacer></v-spacer>
    <div class="notification-noti" @click="showNotification()">
      <div class="noti-icon" @click="reloadPage">
        <img src="@/assets/dashboard365/icon-flame.svg" />
      </div>
    </div>

    <div class="notification-noti" @click="showpopup()">
      <div class="noti-icon">
        <img src="@/assets/dashboard365/iconNotification.svg" />
      </div>
      <div class="noti"><div class="notification_num" v-if="notificationCount > 0"></div></div>
    </div>

    <div class="user-image" @click="profilePop()">
      <div class="profileimg">
        <div v-if="userDetail.profileImage">
          <img
            :src="'https://ps-mg.s3.amazonaws.com/' + userDetail.profileImage"
            style="width: 56px; height: 56px; border-radius: 50%"
          />
        </div>
        <div v-else>
          <i class="far fa-user"></i>
        </div>
      </div>

      <v-list class="profile mt-0" v-show="showdiv" id="test" style="">
        <div class="tooltip2"></div>
        <v-list-item
          style="border-bottom: 1px solid #d2d2d2"
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
        <a href="#" @click.prevent="logout()">
          <div class="wrapper">
            <i class="fas fa-sign-out-alt" style="margin-left: -86px"></i>
            <div class="wrapper-text">Logout</div>
          </div>
        </a>
      </v-list>
    </div>
    <div class="profile_dropdown" @click="profilePop()">
      <div class="toolbar-name">
        <div class="user_name">
          Hello,<span>&nbsp;</span>{{ userDetail.username }}
        </div>
      </div>
      <div class="down_caret">
        <img src="@/assets/dashboard365/arrow-square-down.svg" />
      </div>
    </div>
    <!-- <Notification v-if="notification" @notification="showNotification()" /> -->
    <!-- <Notifications v-if="newnotification" @newnotification="showpopup()" /> -->
    <Notifications v-show="newnotification" />
    <!-- <RandomDropPopup
    v-if="showRandomdrop"
      @closeRandomPopup="closeRandomDropPopup"
    /> -->
    <!-- <RandomDropPopup @closeRandomPopup="closeRandomDropPopup" /> -->
  </v-app-bar>
  <v-app-bar
    v-else
    app
    color="#0E0E0E"
    style="border-bottom-left-radius: 15px; border-bottom-right-radius: 15px"
    align-content-center
    height="48px"
    v-bind:id="showdiv ? 'navbar' : ''"
  >
    <v-app-bar-nav-icon
      :ripple="false"
      color="#FFFFFF"
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
    <div class="random-mobile">
      <div v-if="countDownDate" class="random-number" id="demo"></div>
      <div v-else class="random-number-mobile" style="color: #ffffff">
        00:00
      </div>
    </div>
    <!-- <div class="toolbar-icon-mobile">
      <i class="fas fa-gem"></i>
      <img
        class="icon-money"
        width="20px"
        height="20px"
        src="@/assets/dashboard365/icongem.png"
      />
      <div class="toolbar-number">{{ gemCount }}</div>
    </div> -->
    <div class="toolbar-mobile">
      <div class="toolbar-icon-mobile">
        <img
          class="icon-money"
          width="20px"
          height="20px"
          src="@/assets/dashboard365/ruby_blue.png"
        />
        <div class="toolbar-number">{{ gemPubg }}</div>
      </div>
      <div class="toolbar-icon-mobile">
        <img
          class="icon-money"
          width="20px"
          height="20px"
          src="@/assets/dashboard365/ruby_green.png"
        />
        <div class="toolbar-number">{{ gemApex }}</div>
      </div>
      <div class="toolbar-icon-mobile">
        <img
          class="icon-money"
          width="20px"
          height="20px"
          src="@/assets/dashboard365/ruby_red.png"
        />
        <div class="toolbar-number">{{ gemCod }}</div>
      </div>
    </div>

    <!-- <div class="toolbar-icon-mobile">
      <i class="fas fa-bell"></i>
    </div> -->
    <div class="notification-noti-mobile" @click="showNotification()">
      <div class="notification-noti_mobile" @click="reloadPage">
        <div class="noti-icon-mobile">
          <img src="@/assets/dashboard365/icon-flame.svg" style="width: 13px" />
        </div>
      </div>
      <div class="notification_num_count" v-if="notificationCount > 0">
        {{ notificationCount }}
      </div>
    </div>
    <div class="notification-noti-mobile" @click="showpopup()">
      <div class="noti-icon-mobile">
        <img
          src="@/assets/dashboard365/iconNotification.svg"
          style="width: 13px"
        />
      </div>
      <div class="noti"><div class="notification_num" v-if="notificationCount > 0"></div></div>
    </div>

    <div class="user-image-mobile" id="profileDialog" @click="profilePop()">
      <div class="img-mobile">
        <div v-if="userDetail.profileImage">
          <img
            :src="'https://ps-mg.s3.amazonaws.com/' + userDetail.profileImage"
            style="width: 20px; height: 20px; border-radius: 50%"
          />
        </div>
        <div v-else>
          <i class="far fa-user"></i>
        </div>
      </div>

      <v-list class="profile-mobile mt-0" id="test" v-show="showdiv">
        <div class="tooltip2"></div>
        <v-list-item
          style="border-bottom: 1px solid #d2d2d2"
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
        <a href="#" @click.prevent="logout()">
          <div class="wrapper">
            <i class="fas fa-sign-out-alt" style="margin-left: -86px"></i>
            <div class="wrapper-text">Logout</div>
          </div>
        </a>
      </v-list>
    </div>
    <img src="@/assets/dashboard365/arrow-square-down.svg" />
    <template v-slot:extension>
      <!-- <div class="dropdown">
        <select name="game" id="game">
          <option value="All Games">All Games</option>
          <option value="pubg">pubg</option>
          <option value="codm">codm</option>
          <option value="fortnite">fortnite</option>
          <option value="mlbb">mlbb</option>
        </select>
      </div> -->
      <!-- <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            light
            v-bind="attrs"
            v-on="on"
            style="border-radius: 10px 5px 5px 10px"
          >
            All games
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(searchitem, i) in searchItems" :key="i">
            <v-list-item-title>{{ searchitem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
      <v-select
        v-model="selectedType"
        :items="searchItems"
        item-text="title"
        background-color="rgb(249 249 249)"
        append-icon="mdi-chevron-down"
        input=""
        class="game-select_mobile"
      ></v-select>
      <v-autocomplete
        v-if="selectedType == 'Tournament'"
        v-model="selectedName"
        hide-details
        label="all games"
        background-color="#F9F9F9"
        persistent-placeholder
        :placeholder="`${'Search' + ' ' + selectedType + ' ' + 'Name...'}`"
        :items="tournamentList"
        item-text="name"
        item-value="_id"
        :search-input.sync="tournamentSearch"
        @change="goToSearchResultsPage"
        style="border-radius: 0px 10px 10px 0px"
        append-icon="mdi-magnify"
        class="shrink"
        hide-no-data
        light
        outlined
        solo
      >
        <template v-slot:selection="data" color="#fff">
          <router-link
            tag="a"
            :to="{ name: 'TournamentDetails', params: { id: data.item._id } }"
            class="inner_wrapper"
            >{{ data.item.name }}</router-link
          >
        </template>
      </v-autocomplete>
      <v-autocomplete
        v-if="selectedType == 'Leaderboard'"
        v-model="selectedName"
        hide-details
        label="all games"
        background-color="#F9F9F9"
        persistent-placeholder
        :placeholder="`${'Search' + ' ' + selectedType + ' ' + 'Name...'}`"
        :items="leaderboardList"
        item-text="name"
        item-value="_id"
        @change="goToSearchResultsPage"
        :search-input.sync="leaderboardSearch"
        style="border-radius: 0px 10px 10px 0px"
        append-icon="mdi-magnify"
        class="shrink"
        light
        outlined
        solo
      >
        <template v-slot:selection="data" color="#fff">
          <router-link
            tag="a"
            :to="{
              name: 'LeaderboardDetails',
              params: { id: data.item._id },
            }"
            class="inner_wrapper"
          >
            {{ data.item.name }}</router-link
          >
        </template>
      </v-autocomplete>
      <!-- <v-text-field
        solo
        flat
        hide-details
        light
        style="border-radius: 0px 10px 10px 0px"
        label="all games"
        background-color="#F9F9F9"
        persistent-placeholder
        placeholder="Search Games"
        append-icon="mdi-magnify"
        class="mb-4 text-body-2 test custom-placeholer-color"
      ></v-text-field> -->
    </template>
    <!-- <Notification v-if="notification" @notification="showNotification()" /> -->
    <!-- <Notifications v-if="newnotification" @newnotification="showpopup()" /> -->
    <Notifications v-show="newnotification" />
  </v-app-bar>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
// import Notification from "./Notification/Notification.vue";
import Notifications from "./NewNotification/Notifications.vue";
// import RandomDropPopup from "./RandomDropPopup.vue";
// import RandomDropPopup from "./RandomDropPopuptest.vue";

export default {
  components: {
    Notifications,
    // RandomDropPopup,
  },
  data: () => ({
    // showRandomdrop: false,
    tournamentSearch: null,
    leaderboardSearch: null,
    selectedType: "Tournament",
    selectedName: "",
    tournamentList: [],
    leaderboardList: [],
    drawer: false,
    group: null,
    userDetail: {},
    userId: null,
    minutes: 0,
    seconds: 59,
    gemPubg: 0,
    gemApex: 0,
    gemCod: 0,
    check: false,
    popup: false,
    toggle: false,
    notification: false,
    showdiv: false,
    newnotification: false,
    notificationCount: 0,
    countDownDate: "",
    searchItems: [
      // { title: "All games" },
      { title: "Tournament" },
      { title: "Leaderboard" },
    ],
    items: [
      {
        icon: "mdi-account-outline",
        name: "My Profile",
        path: "/profile",
      },
      {
        icon: "mdi-cart-arrow-down",
        name: "My Orders",
        path: "/ordercart",
      },
      {
        icon: "mdi-account-group-outline",
        name: "Team",
        path: "/teams",
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
    tournamentSearch(val) {
      val && this.getTournaments();
    },
    leaderboardSearch(val) {
      val && this.getLeaderboards();
    },
  },
  created: function () {
    this.userDetails();
    this.getDashboardDetails();
    setInterval(() => {
      if (this.countDownDate) {
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
        if (days && hours && minutes && seconds) {
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
    goToSearchResultsPage() {
      if (this.selectedType == "Leaderboard")
        this.$router.push({
          name: "LeaderboardDetails",
          params: { id: this.selectedName },
        });
      if (this.selectedType == "Tournament")
        this.$router.push({
          name: "TournamentDetails",
          params: { id: this.selectedName },
        });
    },
    selectType() {
      if (this.selectedType == "Tournament") {
        this.getTournaments();
      }
      if (this.selectedType == "Leaderboard") {
        this.getLeaderboards();
      }
    },
    removeItem(itemToBeRemoved) {
      this.selectedName = this.selectedName !== itemToBeRemoved._id;
    },
    getLeaderboards() {
      axios
        .post("/leaderboard/find/all", {
          criteria: {
            name: {
              $regex: this.leaderboardSearch,
              $options: "i",
            },
          },
          project: "name",
          limit: 10,
        })
        .then((response) => {
          this.leaderboardList = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    getTournaments() {
      axios
        .post("/tournament/find/all", {
          criteria: {
            name: {
              $regex: this.tournamentSearch,
              $options: "i",
            },
          },
          project: "name",
          limit: 10,
        })
        .then((response) => {
          this.tournamentList = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    reloadPage() {
      window.location.reload();
    },
    // randomDropPopup() {
    // this.showRandomdrop = true;
    // this.$router.push("/randomDropPopup");
    // },
    // closeRandomDropPopup() {
    //   this.showRandomdrop = false;
    // },
    getRandomDrop() {
      // axios.post("/random-drop/find/all", { criteria: {} }).then((res) => {
      //   this.countDownDate = new Date(res.data[0].startDate).getTime();
      //   //  console.log("random data", this.countDownDate);
      // });
    },
    checkNoticationStatus() {
      axios.get(`/notification/read`).then((res) => {
        console.log("res", res.data);
        this.notificationCount = 0;
      });
    },
    showNotification() {
      if (this.notification === true) {
        this.notification = false;
      } else {
        this.notification = true;
      }
      if (this.notificationCount) this.checkNoticationStatus();
    },
    showpopup() {
      // if (this.newnotification === true) {
      //   this.newnotification = false;
      // } else {
      //   this.newnotification = true;
      // }
      this.newnotification = !this.newnotification;
    },
    profilePop() {
      this.showdiv = !this.showdiv;
    },
    closediv(e) {
      var par = this.findTop(e.target);
      if (
        !this.$el.contains(e.target) ||
        e.target.parentElement.id === "navbar" ||
        par
      ) {
        // exception for navbar element
        this.showdiv = false;
        this.newnotification = false;
      }
    },
    findTop(node) {
      // scanning parent div id's for specific match
      while (node.parentNode && node.parentNode.nodeName !== "BODY") {
        node = node.parentNode;
        if (node.id === "left" || node.className === "v-toolbar__extension") {
          return true;
        }
      }

      return false;
    },
    // profilePop()
    // {
    //   this.check = !this.check;
    // },
    // profilePop() {
    //   var test = document.getElementById("test");
    //   if (test.style.display == "block") {
    //     test.style.display = "none";
    //   } else {
    //     test.style.display = "block";
    //   }
    // },
    getDashboardDetails() {
      axios.get(`/user/dashboard`).then((res) => {
        res.data.userGems.forEach((gemDetails) => {
          if (gemDetails.gemName === "COD Gem") {
            this.gemCod = gemDetails.gems;
          }
          if (gemDetails.gemName === "PUBG Gem") {
            this.gemPubg = gemDetails.gems;
          }
          if (gemDetails.gemName === "Apex Gem") {
            this.gemApex = gemDetails.gems;
          }
        });
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
    document.addEventListener("click", this.closediv);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closediv);
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-menu__content--fixed::after {
  position: absolute;
  content: "";
  top: 0;
  right: 10px;
  transform: translateY(-100%) !important;
  width: 10px;
  height: 13px;
  border-left: 10px solid transparent !important;
  border-right: 10px solid transparent !important;
  border-bottom: 13px solid #fff !important;
}
::v-deep .v-navigation-drawer .v-list:not(.v-select-list) {
  background: inherit;
  color: #f3f3f3;
}
::v-deep .mdi-magnify {
  opacity: 0.6;
  color: #330e6b;
}
::v-deep .mdi-handshake::before:hover {
  content: "\F1218";
  color: white;
}
.random-drop-wrap {
  display: flex;
  align-items: center;
}
.random {
  // position: relative;
  cursor: pointer;
  font-family: "Poppins";
  // border-radius: 10px;
  // background: #9672FF;
  width: 129px;
  height: 32px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0 10px 5px 0;
  .random-spinner {
    position: relative;
    display: flex;
    align-items: center;

    img {
      position: absolute;
      top: 8px;
      left: 16px;
    }
  }
  .random-wrap {
    position: relative;
    .random-text {
      width: 115px;
      font: normal normal normal 12px Poppins;
      // padding: 0px 11px;
      color: #787686;
      text-transform: capitalize;
    }
    .random-number {
      font: normal normal bold 25px Poppins;
      color: rgb(255, 255, 255);
      white-space: nowrap;
      position: absolute;
      top: 11px;
      // width: 305px;
      // margin-left: 68px;
      // margin-bottom: -3px;
    }
  }
}
::v-deep.theme--light.v-sheet {
  color: #9672ff;
}
::v-deep.v-progress-circular__underlay {
  stroke: #1f1f1f;
}
.toolbar {
  display: flex;
}
.toolbar-icon {
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 0 0 45px;
  // padding: 0 13px 0 28px;
  text-align: center;
  gap: 12px;
  .icon-money {
    color: white;
    // height: 37px;
    width: 32px;
  }
  .icon-bell {
    font-size: 21px;
    color: #fff;
  }
  .toolbar-number {
    font-family: Poppins;
    font-size: 25px;
    font-weight: 700;
    line-height: 18px;
  }
}
.notification-noti {
  margin: auto 12px;
  font-size: 20px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
}
.noti-icon {
  color: black;
  background-color: #f3f3f3;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  /* text-align: center; */
  align-items: center;
  display: flex;
  justify-content: center;
}
.noti-icon-mobile {
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* text-align: center; */
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
}
.notification-noti-mobile:hover {
  transform: scale(1.1);
}
.noti {
  position: absolute;
  top: 0px;
  right: 0px;
}
.notification-noti:hover {
  color: #fff;
  transform: scale(1.1);
}
.notification-noti {
  position: relative;
}
.notification-noti_mobile {
  position: relative;
  margin: 0px;
  padding: 3px;
}
.notification_num {
  position: absolute;
  top: 0px;
  right: 0px;
  // background-color: red; 
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #fff;
  font-weight: 800;
}

.toolbar-name {
  font: normal normal normal 10px/29px Poppins;
  text-transform: capitalize;
  // margin-bottom: 13px;
  color: #fff;
  padding: 0px 5px 0px 0px;
}
.user-image {
  color: black;
  background-color: #ffffff;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  /* text-align: center; */
  align-items: center;
  display: flex;
  justify-content: center;
  // padding: 14px;
  cursor: pointer;
  margin: auto 10px;
}
.wrapper {
  // justify-content: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  color: #1f1b40;
  margin-right: 10px;
  padding: 10px 0px 10px 18px;
}
.wrapper-text {
  margin-left: -55px;
}
.shrink {
  // width: 415px;
}
// mobile
@media only screen and (max-width: 1286px) {
  .v-text-field {
    width: 200px;
  }
  .tooltip {
    top: -18px;
    right: -18px;
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
  .toolbar-name-mobile {
    color: #ffffff;
    font: normal normal 600 14px/29px Poppins;
    padding: 5px 0px;
    text-transform: capitalize;
  }
  .toolbar-mobile {
    display: flex;
  }
  .toolbar-icon-mobile {
    color: #1f1b40;
    display: block;
    // padding: 4px 8px;
    padding: 4px 0 4px 8px;
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
      color: #b1add3;
      text-align: center;
    }
    .random-number-mobile {
      color: #ffffff !important;
      font: normal normal bold 16px/25px Poppins;
      // color:#000;
      margin-left: 46px;
      font-size: 22px;
    }
  }

  .notification-noti-mobile {
    // display: block;
    padding: 4px;
    color: #1f1b40;
    position: relative;
    .notification_num {
      position: absolute;
      top: 3px;
      right: 0px;
      // background-color: red;
      border-radius: 50%;
      width: 8px;
      height: 8px;
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
      // background-image: linear-gradient(to right, #330e6b 0%, #8a3dfd 100%);
      background-color: red;
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
  // .notification-noti-mobile:hover {
  //   color: #330e6b;

  // }
  .user-image-mobile {
    padding: 6px;

    img {
      border-radius: 4px;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
.gems {
  color: #787686;
  font: normal normal bold 15px/19px Poppins;
  letter-spacing: 0px;
  text-align: left;
  text-transform: capitalize;
  padding-bottom: 3px;
}

@media only screen and (max-width: 1263px) {
  //   .search{
  //     display: flex;
  //     width: 200px;
  // }
  .dropdown {
    margin-bottom: 16px;
    right: -1 !important;
  }
  .notification-noti {
    margin: 0px;
    padding: 3px;
  }
  .notification_alert_outer {
    width: 290px;
    // top: 95px;
    // right: -33px;
    position: absolute;
    right: 25px;
    top: 125px;
  }
  .notification_card {
    padding: 2px 10px 2px 10px;
  }
  .noti-icon {
    background-color: #ffffff;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    /* text-align: center; */
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .notification_image > img {
    width: 30px;
    height: 30px;
  }
}
.custom-placeholer-color input::placeholder {
  color: red !important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: red !important;
}
::v-deep .v-text-field.v-text-field--solo .v-input__control input {
  caret-color: auto;
  color: black !important;
}
.down_caret {
  color: #ffffff;
  cursor: pointer;
  font-size: 0.6em;
}
::v-deep .v-menu__content--fixed {
  min-width: 80px;
  top: 77px;
}
.random-mobile {
  color: #ffffff;
  white-space: nowrap;
}
.dropdown {
  // width: 82px;
  background-color: #f9f9f9;
  // padding: 13px 5px 12px 15px;
  border-radius: 10px 0 2px 10px;
  position: relative;
  right: -2px !important;
  height: 56px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  z-index: 1;
}
select {
  outline: none;
}
// .dropdown::after {
//   content: "";
//   position: absolute;
//   top: 9px;
//   width: 1px;
//   // background-color: #e4e7ea;
//   /* background-color: #101820; */
//   /* box-shadow: 1px 0 0 #000000; */
//   height: calc(100% - 16px);
//   right: -152px;
//   z-index: 1;
// }
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  /* padding: 0 13px 0px 0px; */
  padding-right: 10px;
}
.dropdown select option {
  // position:relative;
  max-width: 200px;
  padding: 1rem;
  // background-color: #330e6b;
}
::v-deep .v-menu__content {
  top: 50px;
}
.profile {
  // display: none;
  top: 85px;
  right: -3px;
  position: absolute;
  background-color: #f3f3f3;
}
.profile-mobile {
  top: 100px;
  right: 13px;
  position: absolute;
  border-radius: 12px;
  background-color: #f3f3f3;
}
.v-sheet.v-list {
  border-radius: 10px;
}
.img-mobile {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.tooltip2 {
  position: absolute;

  width: 0px;
  height: 0px;
  border: 7px solid transparent;
  transform: translate(-58px, 0%);
  top: -18px;
  right: -41px;
  border-bottom: 11px solid #f3f3f3;
}
.img-mobile {
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.profile_dropdown {
  display: flex;
  align-items: baseline;
  cursor: pointer;
}
::v-deep .v-text-field--outlined.v-input--is-focused fieldset {
  border: none;
}
::v-deep.v-text-field input {
  padding: 8px 12px 8px 10px !important;
}
::v-deep.v-toolbar__content {
  padding: 8px 22px 0px 30px !important;
}
.search {
  display: flex;
  align-content: center;
  padding-top: 12px;
}
.left {
  display: flex;
  gap: 10px;
}
.user_name {
  font: normal normal normal 12px/29px Poppins;
  text-align: left;
  text-transform: capitalize;
}
@media (min-width: 320px) and (max-width: 767px) {
  .toolbar-mobile,
  .random-mobile {
    display: none;
  }
}
::v-deep .v-btn:not(.v-btn--round).v-size--default {
  height: 54.2px;
  padding: 13px 5px 12px 15px;
  z-index: 1;
  position: relative;
  right: -3px;
  border-radius: 10px 0px 0px 10px;
  bottom: -0.8px;
}
::v-deep .v-btn > .v-btn__content .v-icon {
  padding: 0 10px;
}
::v-deep .theme--light.v-btn.v-btn--has-bg {
  background-color: #f9f9f9;
  box-shadow: 0 0 1px 1px rgb(249 249 249 / 66%);
}
::v-deep .v-sheet.v-list {
  border-radius: 0 0 10px 10px;
  margin-top: 50px;
}
@media only screen and (max-width: 1286px) {
  .v-btn:not(.v-btn--round).v-size--default {
    height: 47.5px;
    bottom: 8px;
    border-radius: 10px 0px 0px 10px !important;
  }
}
::v-deep.theme--light.v-select .v-select__selections {
  color: rgba(0, 0, 0, 0.87);
  min-height: 56px;
  width: 130px;
  margin-left: 15px;
  /* border-radius: 4px 0px 0px 20px; */
}
::v-deep.theme--light.v-input {
  border-radius: 10px 0px 0px 10px;
}
::v-deep.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
::v-deep.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
::v-deep
  .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  border: none;
}
::v-deep .v-application .primary--text {
  color: none !important;
  caret-color: none !important;
}
.v-text-field > .v-input__control > .v-input__slot:before,
.v-text-field > .v-input__control > .v-input__slot:after {
  content: "";
  /* left: 0; */
  position: absolute;
}
::v-deep .v-input__append-inner {
  margin: auto;
}

::v-deep .v-select__slot .v-input__append-inner {
  margin: auto;
}
::v-deep .game-select .v-select__slot::after {
  content: " ";
  position: absolute;
  border-left: 1px #e4e7ea solid;
  top: 21%;
  right: 0;
  height: 32px;
  margin-top: auto;
  margin-bottom: auto;
}
::v-deep .game-select_mobile .v-select__slot::after {
  content: " ";
  position: absolute;
  border-left: 1px #e4e7ea solid;
  top: 21%;
  right: 0;
  height: 28px;
  margin-top: auto;
  margin-bottom: auto;
}
::v-deep .game-select_mobile .v-select__slot {
  // height: 48px;
}
.v-input__control {
  display: flex;
  flex-direction: inherit !important;
  height: auto;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;
  width: 100%;
}
::v-deep .game-select_mobile .v-input__slot {
  margin-bottom: -14px;
}

::v-deep .v-btn:not(.v-btn--round).v-size--default::after {
  content: " ";
  position: absolute;
  border-left: 1px #e4e7ea solid;
  top: 21%;
  right: 13px;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
}
::v-deep
  .v-autocomplete.v-select--is-menu-active
  .v-input__icon--append
  .v-icon {
  transform: none;
}
::v-deep .v-input__append-inner {
  align-self: center;
  margin-top: auto !important;
}
::v-deep.theme--light.v-btn.v-btn--has-bg {
  background-color: #f9f9f9;
  box-shadow: none !important;
}
::v-deep .v-progress-circular {
  height: 48px !important;
  width: 48px !important;
}
::v-deep.v-text-field > .v-input__control > .v-input__slot:before,
.v-text-field > .v-input__control > .v-input__slot:after {
  bottom: -1px;
  content: "";
  left: 0;
  position: absolute;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 0% !important;
}
::v-deep.v-application .primary--text {
  color: none !important;
  caret-color: var(--v-primary-base) !important;
}
::v-deep.v-text-field > .v-input__control > .v-input__slot:after {
  background-color: currentColor;
  border-color: currentColor;
  border-style: none;
  border-width: thin 0 thin 0;
  transform: scaleX(0);
}
@media only screen and (max-width: 1286px) {
  .v-text-field {
    width: -webkit-fill-available;
  }
}
@media screen and (min-width: 1920px) {
  ::v-deep.v-text-field.v-text-field--solo .v-input__control{
    width: 455px!important;
  }
  ::v-deep.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){
        padding: 12px 5px 0px 45px!important;
  }
}
</style>