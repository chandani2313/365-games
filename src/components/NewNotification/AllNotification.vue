<template>
<div class="allnotification">
    <div class="notification_container">
        <div class="inner_container">
            <div class="inner_wrap_noti">All Notification</div>
        </div>
        <div class="line_wrap"></div>
        <div class="full_cover">
            <div class="list">
                <table class="ranking">
                    <tr class="header">
                    <th class="table_head">S.no</th>
                    <th class="table_head">Type</th>
                    <th class="table_head">Text</th>
                    </tr>
                    <template v-if="notifications.length">
                      <tr
                        class="content-bgcolor"
                        v-for="(notification, index) in notifications"
                        :key="notification._id"
                      >
                        <td class="table_content_id">{{ index + 1 }}</td>
                        <td class="table_content">{{ notification.type }}</td>
                        <td class="table_content">{{ notification.text }}</td>
                      </tr>
                    </template>
                </table>
            </div>
        </div>
    </div>
    <div class="page_wrap">
      <v-pagination v-model="page" :length="pages" @input="updatePage" circle> </v-pagination>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AllNotification",
  data() {
    return {
      notifications: [],
      page: 1,
      pageSize: 10,
      listCount: 0,
      notificationList: []
    };
  },
  computed: {
    pages() {
      if (this.pageSize == null || this.listCount == null) return 0;
      return Math.ceil(this.listCount / this.pageSize);
    },
  },
  methods: {
    async getNotification() {
      await axios.get('/notification')
      .then((response) => {
        console.log("all notification", response.data);
        this.notificationList = response.data;
      })
      .catch((e) => {
        console.log("err", e.response.data);
      });
      this.initPage();
      this.updatePage(this.page);
    },
    initPage() {
      // console.log("initPage");
      this.listCount = this.notificationList.length;
      if (this.listCount < this.pageSize) {
        this.notifications = this.notificationList;
      } else {
        this.notifications = this.notificationList.slice(0, this.pageSize);
      }
    },
    updatePage(pageIndex) {
      let start = (pageIndex - 1) * this.pageSize;
      let end = pageIndex * this.pageSize;
      this.notifications = this.notificationList.slice(start, end);
      this.page = pageIndex;
    },

  },
  mounted() {
    this.getNotification()
  }
};
</script>

<style lang="scss" scoped>
.allnotification{
    font-family: "Poppins";
    color: white;
    padding: 0px 20px;
}
.notification_container{
    border-radius: 8px;
    margin-top: 3%;
}
.inner_container{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 8px;
}
.inner_wrap_noti{
    font: normal normal 700 18px/27px Poppins;
    color: white;
}

.line_wrap{
    width: 100%;
    background: #3E3E3E;
    margin: -1px 0px 20px 0px;
    height: 1px;
}
.full_cover{
        background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}
@media screen and (max-width: 1263px) {
    .full_cover {
    padding: 10px;
  }
}

.list {
  width: 100%;
  overflow-x: auto;
}
.list table {
  width: 100%;
  // border-collapse: collapse;
  // overflow-x: auto;
  border-collapse: separate;
  border-spacing: 0 20px;
}
.header th,
td {
  padding: 0px 20px;
  text-align: left;
}
th {
  align-items: center;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  color: #fdfdfd;
  text-align: left;
  text-transform: capitalize;
}
.header tr {
  border-radius: 25px 25px 0px 0px;
}
.content-bgcolor {
  background: linear-gradient(180deg, #161616 0%, rgba(40, 38, 38, 0.4) 100%);
  // line-height: 60px;
  height: 60px;
}
.table_head {
  font: normal normal 500 14px/29px Poppins;
  text-transform: capitalize;
  color: #787686;
}
.table_content_id {
  font: normal normal 600 20px/29px Poppins;
  color: #ffffff;
}
.table_content,
.table_content_color {
  font: normal normal normal 13px/29px Poppins;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
}
.table_content_color {
  color: #cdcadb;
}
.table_content_action_view_button {
  font: normal normal normal 13px/29px Poppins;
  border-radius: 5px;
  text-transform: capitalize;
  border: none;
  width: 86px;
  height: 32px;
  color: #51c55d;
  text-align: left;
  cursor: pointer;
}
.page_wrap {
  display: flex;
  justify-content: center;
  padding: 15px;
}
::v-deep .theme--light.v-pagination .v-pagination__item {
  background: rgb(14 14 14);
  color: #ffffff;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: none;
}

</style>