<template>
  <div class="notification">
    <div class="notification_bar">
      <div class="notification_bar-pointer"></div>
      <div class="notification_bar_content">
        <div v-for="notification in allNotifications" :key="notification._id">
          <div class="message_t">
            <div class="message__wrapper">
              <div class="message">
                {{ notification.text }}
              </div>
            </div>
            <div class="time">
              {{ changeDate(notification.createdAt)}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import moment from 'moment';

export default {
  name: "Notification",
  data() {
    return {
      allNotifications: null,
    };
  },
  components: {
  },
  methods: {
    getNotifications() {
      axios
        .get("/notification")
        .then((response) => {
          console.log("notification", response.data);
          this.allNotifications = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
          }
        });
    },
    changeDate(date) {
    return moment(date).fromNow();
    }
  },
  mounted() {
    this.getNotifications();
  },
  computed: {},
};
</script>

<style scoped>
.notification_bar_content {
  height: 400px;
  overflow: auto;
}
.notification_bar {
  margin: 10px;
  position: fixed;
  right: 180px;
  top: 60px;
  /* background: #1b2731; */
  background: #330e6b;
  width: 477px;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.5);
  z-index: 3;
}
.notification_bar-pointer {
  position: absolute;
  width: 0px;
  height: 0px;
  border: 11px solid transparent;
  border-bottom: 11px solid #1b2731;
  top: -22px;
  right: 17px;
}
.notification_card {
  flex-direction: row;
  -ms-flex-align: stretch;
  align-items: stretch;
  /* min-height: 86px; */
  position: relative;
  z-index: 1;
  display: flex;
  padding: 6px 15px;
  border-bottom: 1px solid #ffffff1a;
  overflow: hidden;
}
.notification_card:hover {
  background-color: #6c829d0d;
}

.notification_card_time {
  position: absolute;
  z-index: 1;
  font-size: 12px;
  color: #ffffff3b;
  bottom: 2px;
  right: 10px;
}
.notification_card_fig {
  flex-basis: 40px;
  -ms-flex-item-align: center;
  align-self: center;
  position: relative;
}
.notification_card_fig img {
  border-radius: 5px;
}
.notification_card_fig_logo {
  position: absolute;
  z-index: 1;
  font-size: 12px;
  color: #ffffff3b;
  bottom: 3px;
  right: 10px;
}
.notification_card_fig_logo {
  position: absolute;
  right: -6px;
  bottom: -6px;
  width: 20px;
}
.notification_card_conent {
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0px 15px;
}
.notification_card_title {
  font-size: 13px;
  margin-bottom: 0.2em;

  line-height: 1.3;
  /* letter-spacing: -.02em; */
  font-weight: 500;
  text-align: left;
  /* text-overflow: ellipsis; */
  overflow: hidden;
  /* white-space: nowrap; */
  /* max-width: 130px; */
  color: #ffffff90;
}
.notification_card_title a {
  font-size: 14px;
  color: #fff;
  font-weight: 600;
}

.notification_card_request {
  text-align: center;
  display: flex;
  align-self: center;
}
.notification_card_request span a {
  padding: 4px 6px;
  font-size: 11px;
  line-height: 2.5em;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  color: #1b2731d1;
  text-transform: uppercase;
  margin-right: 10px;
  background-image: linear-gradient(
    to right,
    rgb(79, 172, 254) 0%,
    rgb(0, 242, 254) 100%
  );
  font-weight: 600;
}
.notification_card_request span a:hover {
  color: #fff;
  box-shadow: 0px 0px 5px 0px #3ca3f0;
}
.message__wrapper {
  display: flex;
}
.message_t {
  padding: 10px 15px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
}
.message {
  margin-bottom: 10px;
  color: hsla(0, 0%, 100%, 0.56);
  margin-right: 10px;
}
.time {
  font-size: 10px;
  text-align: right;
  margin-right: 10px;
  color: hsla(0, 0%, 100%, 0.56);
}
@media (min-width: 320px) and (max-width: 767px) {
  .notification_bar {
    right: 0;
    width: 100%;
  }
  .notification_bar-pointer {
    right: 79px;
  }
}
</style>
