<template>
<div class="out">
  <div class="support_page">
    <div class="navigations">
      <div class="title_support_header">Support</div>
      <div class="navigate_buttons">
        <!-- <div class="inner_subwrap active"> All Tickets</div>
            <div class="inner_subwrap "> started</div>
            <div class="inner_subwrap "> deleted</div>
            <div class="inner_subwrap "> closed</div> -->
        <v-tabs background-color="#0e0e0e" color="#FFFFFF">
          <v-tab @click="getStatus('')">All Tickets</v-tab>
          <v-tab @click="getStatus('Started')">started</v-tab>
          <v-tab @click="getStatus('Ongoing')">ongoing</v-tab>
          <v-tab @click="getStatus('Closed')">closed</v-tab>
        </v-tabs>
      </div>
    </div>
    <div class="bottom_container">
      <div class="functional_buttons">
        <div class="new_ticket" @click="openPopup">+ create new ticket</div>
        <div class="dropdown_buttons">
          <div class="recent_dropdown">
            Recent<img
              src="../assets/support/arrow-square-down.svg"
              style="padding-left: 15px; display: flex; align-items: center"
            />
          </div>
          <div
            class="support_grid"
            @click="isGridView = true"
            :class="[(isGridView && 'active') || 'not_active']"
          >
            <img src="../assets/support/grid.svg" />
          </div>
          <div
            class="support_menu"
            @click="isGridView = false"
            :class="[(!isGridView && 'active') || 'not_active']"
          >
            <div class=""><img src="../assets/support/bar.svg" /></div>
          </div>
        </div>
      </div>
      <div
        :class="[
          isGridView
            ? 'support_card_ticket_container_column'
            : 'support_card_ticket_container',
        ]"
      >
        <div
          class="support_card"
          :class="[isGridView && 'alternate_shadow']"
          v-for="query in filteredStatus"
          :key="query._id"
          @click="supportChat(query)"
        >
          <div class="ticket_info_outer">
            <div
              class="ticket_info"
              :style="{ flexDirection: isGridView ? 'column' : 'initial' }"
            >
              <div class="ticket_id">Ticket #{{ query._id }}</div>
              <div class="time">
                {{ changeDate(new Date(query.createdAt)) }} at
                {{ changeTime(new Date(query.createdAt)) }}
              </div>
            </div>
            <div class="time_date">
              <div class="expand_menu">
                <img
                  style="padding-bottom: 3px"
                  src="../assets/support/More.svg"
                />
              </div>
            </div>
          </div>
          <!-- <div class="heading">
                        {{query.status}}
                    </div> -->
          <div class="support_content">{{ query.query }}</div>
          <div class="user_info_wrapper">
            <div class="user_info">
              <div class="user_img">
                <!-- <img src="../assets/dashboard365/profile.webp" /> -->
                <img :src="user && user.profileImage ? `https://ps-mg.s3.amazonaws.com/${user.profileImage}` : 'https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg'" />
              </div>
              <div class="user_name">{{user.username}}</div>
            </div>
            <div class="message_wrap">
              <div class="attach_file">
                <div class="file_img">
                  <img src="../assets/support/Group.svg" style="width: 14px" />
                </div>
                <div class="files">4</div>
              </div>
              <div class="message">
                <div class="msg_wrap">
                  <img
                    src="../assets/support/comment.svg"
                    style="width: 14px"
                  />
                </div>
                <div class="messages_no">10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Ticket v-if="showPopup" @closePopup="closePopup" />
    <SupportPageChat v-if="showChat" :ticket="selectedQuery" @closeChat="closeChat" />
  </div>
  <div class="page">
    <div class="pagination">
      <a href="#" class="blocks active_page">1</a>
      <a href="#" class="blocks">2</a>
      <a href="#" class="blocks">3</a>
      <a href="#" class="blocks">4</a>
      <a href="#" class="blocks">5</a>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import Ticket from "./Ticket.vue";
import SupportPageChat from "@/components/support/SupportPageChat.vue";

export default {
  components: {
    Ticket,
    SupportPageChat
  },
  data() {
    return {
      isGridView: false,
      isActive: false,
      showPopup: false,
      queries: [],
      status: "",
      showChat: false,
      selectedQuery: '',
      user: ""
    };
  },
  computed: {
    filteredStatus() {
      if (this.status) {
        return this.queries.filter((element) => element.status === this.status);
      } else {
        return this.queries;
      }
    },
  },
  mounted() {
    this.getUserDetails();
    this.getAllQueries();
  },
  methods: {
       getUserDetails() {
      let user = this.$store.getters.user;
      this.userId = user._id;
      axios
        .get(`/user/find/${this.userId}`)
        .then((response) => {
          this.user = response.data;
        })
        .catch((e) => {
          console.log("err", e.response);
          if (e.response.status === 400) {
            this.$router.push("/");
          }
        });
    },
    getStatus(status) {
      this.status = status;
    },
    changeDate(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    changeTime(date) {
      return moment(date).format("LT");
    },
    openPopup() {
      // this.showPopup = true;
      this.$router.push({ name: 'CreateTicket'  });
    },
    closePopup() {
      this.showPopup = false;
    },
    supportChat(query){
      this.selectedQuery = query;
          this.$router.push({ name: 'SupportChat', params: { id: query._id } });

      // this.showChat = true;
    },
    closeChat(){
      this.showChat = false;
    },
    getAllQueries() {
      this.$Progress.start();
      axios
        .get("/support/queries/get")
        .then((response) => {
          this.queries = response.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
  },
};
</script>
<style scoped>
.not_active {
  background: #313037;
  border: 1px solid #636363;
}
.active {
  /* box-shadow: 0px 0px 6px 0px #84b7e8; */
  background: linear-gradient(180deg, #9672ff 0%, #6b4fe8 100%);
  /* -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); */
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.v-slide-group__content {
  column-gap: -6px;
  flex-wrap: wrap;
  width: 100%;
}
.v-tab {
  text-transform: capitalize !important;
  font-weight: 600;
  letter-spacing: 0px;
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #cdcadb;
  font-weight: 400;
}
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: contents !important;
  visibility: hidden;
}
::v-deep .v-tabs-slider {
  height: 1px;
  left: 16px !important;
  /* width: 90px; */
}
::v-deep.v-tabs-slider-wrapper {
  height: 1px !important;
  left: 6px !important;
  width: 90px !important;
}
.support_page {
  padding: 1.6rem 2.2rem 2rem 2.5rem;
  font-family: "Poppins";
  color: white;
  /* padding: 0 6px; */
}
.navigations {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #3e3e3e;
  margin-bottom: 34px;
  flex-wrap: wrap;
}

.title_support_header {
  /* margin: 35px 0px 0px 30px; */
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;

  padding-bottom: 20px;
}
.navigate_buttons {
  display: flex;
  column-gap: 30px;
  /* font-family: Poppins; */
  /* font-style: normal; */
  font-weight: 600;
  font-size: 14px;
  /* line-height: 21px; */
  /* display: flex; */
  /* align-items: center; */
  /* color: #FFFFFF; */
}
.activa {
  border-bottom: 1px solid white;
  color: #ffffff;
}
.inner_subwrap {
  color: #cdcadb;
  cursor: pointer;
}
.functional_buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.new_ticket {
  border-radius: 7px;
  background: #7255e9;
  padding: 9px 18px;
  white-space: nowrap;
  padding: 10px 18px;
  font-family: Poppins;
  font-size: 15px;
  font-style: italic;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: center;
  cursor: pointer;
  text-transform: capitalize;
}
.dropdown_buttons {
  display: flex;
  display: flex;
  column-gap: 22px;
}
.recent_dropdown {
  background: #53525b;
  border-radius: 10px;
  padding: 0px 15px;
  display: flex;
  /* text-align: center; */
  align-items: center;
  cursor: pointer;
}
.recent_dropdown > img {
  padding-left: 8px;
}
.recent_dropdown {
  background: #53525b;
  border-radius: 10px;
  padding: 0px 15px;
  display: flex;
  /* text-align: center; */
  align-items: center;
  cursor: pointer;
}
.recent_dropdown > img {
  padding-left: 8px;
}
.support_grid {
  cursor: pointer;
  /* background: #313037; */
  /* border: 1px solid #636363; */
  border-radius: 10px;
  padding: 14px;
}
.support_menu {
  cursor: pointer;
  /* background-image: linear-gradient(180deg, #9672FF 0%, #6B4FE8 100%); */
  border-radius: 10px;
  padding: 2px 12px;
  display: flex;
  align-items: center;
}
.support_card_ticket_container {
  grid-template-rows: repeat(auto-fill, minmax(227px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 1rem;
}
.support_card {
  cursor: pointer;
  /* margin-left: 20px; */
  font-family: poppins;
  font-weight: 500;
  /* font-size: 16px; */
  position: relative;
  color: #ffffff;
  /* cursor: pointer; */
  /* width: 125px; */
  /* height: 55px; */
  padding: 23px 20px 23px 23px;
  background: #1e1c1c;
  box-shadow: 0px 4px 4px #1f1f1f;
  border-radius: 10px;
}
.support_card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  padding: 1px;
  background: linear-gradient(0deg, #1e1c1c 0%, #7255e9 100%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.ticket_info_outer {
  /* display: flex;
    align-items: baseline; */
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.ticket_info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;
  width: 96%;
}

.ticket_id {
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  /* text-align: center; */
  white-space: nowrap;
}
.time_date {
  display: flex;
  align-items: center;
  column-gap: 25px;
  color: #cdcadb;
  /* margin-bottom: 30px; */
}
.time {
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0px;
  /* text-align: center; */
  white-space: nowrap;
  color: #cdcadb;
}
.expand_menu {
  cursor: pointer;
  z-index: 1;
}
.user_info_wrapper {
  display: flex;
  justify-content: space-between;
}
.user_info {
  display: flex;
  align-items: center;
}
.user_img > img {
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
.user_name {
  text-transform: capitalize;
  font-family: Poppins;
  font-size: 14px;
  margin-left: 10px;
  white-space: nowrap;
  width: 125px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.heading {
  margin-bottom: 22px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
}
.support_content {
  font-family: Poppins;
  font-size: 14px;
  /* font-style: normal; */
  font-weight: 400;
  line-height: 27px;
  /* letter-spacing: 0em; */
  text-align: left;
  color: #cdcadb;
  margin-bottom: 25px;
}
.message_wrap {
  display: flex;
  color: #cdcadb;
  column-gap: 38px;
}
.attach_file {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.message {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.msg_wrap {
  cursor: pointer;
  z-index: 1;
}
.messages_no,
.files {
  font-size: 14px;
}
.file_img {
  cursor: pointer;
  z-index: 1;
}
@media (min-width: 320px) and (max-width: 767px) {
  .functional_buttons {
    flex-direction: column;
  }
  .v-tab {
    padding: 0px;
  }
  .dropdown_buttons {
    margin-top: 30px;
    text-align: center;
    align-content: center;
    width: 100%;
    /* margin: auto 193px; */
    justify-content: center;
  }
  .navigate_buttons {
    column-gap: 10px;
  }
}
.support_card_ticket_container_column {
  grid-template-columns: repeat(auto-fill, minmax(293px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 1rem;
}
@media only screen and (max-width: 1263px) {
  .support_page {
    padding: 1rem;
  }
  .ticket_info {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .support_card {
    padding: 1rem;
  }
  .message_wrap {
    column-gap: 20px;
  }

  li:nth-child(odd) {
    color: #777;
  }
  li:nth-child(even) {
    color: blue;
  }
}
.alternate_shadow:nth-child(even)::before {
  background: linear-gradient(180deg, #1e1c1c 0%, #7255e9 100%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.pagination {
    position: absolute;
    bottom: 15px;
}
.page{
    display: flex;
    justify-content: center;
}
#pagination {
  display: flex;
  justify-content: center;
}
.blocks {
  width: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  font-family: Poppins;
  font-size: 15px;

  font-weight: 600;

  color: #787686;
}
.blocks:not(:first-child) {
  margin-left: 5px;
}

.blocks:hover {
  background-color: #dddddd;
}
#pagination a.active_page {
  background-color: #4caf50;
}
.active_page {
  background-image: linear-gradient(180deg, #7255e9 0%, #7255e9 100%);
  color: #ffffff;
}

</style>