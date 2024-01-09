<template>
  <div class="notification_wrap" @click="notification()">
    <div class="tooltip"></div>
    <div class="notification_alert_inner">
      <div class="noti_title">notifications</div>
      <div class="outer">
        <div v-for="noti in notificationArray" :key="noti._id">
          <div v-if="noti.type === 'joinTeam'">
            <JoinTeam :noti="noti" @reload="Notifications()" />
          </div>
          <div v-else>
            <Message :noti="noti" />
          </div>
          <div v-if="noti.type === 'invitePlayer'">
            <Invite :noti="noti" @reload="Notifications()" />
          </div>
        </div>
        <div class="view_all" @click="viewAll">view all notifications</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Message from "@/components/NewNotification/Message.vue";
import Invite from "@/components/NewNotification/Invite.vue";
import JoinTeam from "@/components/NewNotification/JoinTeam.vue";
// import AllNotification from "@/components/NewNotification/AllNotification.vue"

export default {
  name: "Notifications",
  data() {
    return {
      notifications: null,
      showAll: false,
    };
  },
  components: {
    Message,
    Invite,
    JoinTeam,
    // AllNotification
  },
  methods: {
    viewAll() {
      this.$router.push({
        name: "AllNotification",
      });
      this.showAll = true;
    },
    notification() {
      this.$emit("newnotification");
    },
    getNotification() {
      axios
        .get("/notification")
        .then((response) => {
          this.notifications = response.data;
        })
        .catch((e) => {
          console.log("err", e.response.data);
        });
    },
  },
  computed: {
    notificationArray() {
      // if (this.showAll === false && this.notifications) {
      //   return this.notifications.slice(0, 5);
      // }
      // if (this.showAll) {
      //   return this.notifications;
      // }
      return this.notifications;
    },
  },
  mounted() {
    this.getNotification();
  },
};
</script>
<style scoped>
.notification_alert_inner {
  /* height: 500px; */
  width: 240px;
}
.notification_wrap {
  position: fixed;
  right: 166px;
  top: 90px;
  background-color: #f3f3f3;
  border-radius: 11px;
}
.view_all {
  padding: 10px 9px 10px 9px;
  text-align: center;
  text-transform: capitalize;
  color: #9672ff;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */
  align-items: center;
  color: #9672ff;
}
.notification_alert_outer {
  position: absolute;
  right: 105px;
  top: 95px;
}
.noti_title {
  padding: 13px 10px 13px 20px;
  border-bottom: 1px solid #d2d2d2;
  font-size: 18px;
  text-transform: capitalize;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
}
.tooltip {
  position: absolute;
  transform: translate(-58px, 0%);
  width: 0px;
  height: 0px;
  border: 7px solid transparent;
  top: -18px;
  right: -28px;
  border-bottom: 11px solid #f3f3f3;
}
@media screen and (min-width: 1920px) {
  .notification_wrap {
    right: 180px;
    top: 100px;
  }
}
@media only screen and (max-width: 1263px) {
  .notification-noti {
    margin: 0px;
    padding: 3px;
  }
  .notification_wrap {
    top: 100px;
    /* left: 20px; */
    right: 33px;
    width: 240px;
  }
  .notification_alert_outer {
    width: 290px;
    position: absolute;
    right: 25px;
    top: 125px;
  }
}
</style>