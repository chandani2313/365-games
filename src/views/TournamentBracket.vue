<template>
  <div class="main_container">
    <div class="top_bar">
      <div class="search_bar">
        <v-select
          :items="items"
          label="Search"
          solo
          append-icon="mdi-magnify"
        ></v-select>
      </div>
      <div class="status_drop_down">
        <v-autocomplete
          chips
          small-chips
          solo
          solo-inverted
          label="Status"
          append-icon="mdi-chevron-down"
        ></v-autocomplete>
      </div>
    </div>
    <div class="wrapper_container">
      <div class="wrapper">
        <div class="card_wrap" v-for="i in 4" :key="i">
          <div class="header">
            <div class="head_text">M1R1</div>
            <div class="player_wrap">
              <img src="../assets/Tournament/players.png" />
              <div class="players">100</div>
            </div>
          </div>
          <div class="date_time_wrap">
            <div class="date_wrap">
              <img src="../assets/Tournament/date.png" />
              <div class="date">06.05.2022</div>
            </div>
            <div class="time_wrap">
              <img src="../assets/Tournament/time.png" />
              <div class="time">08.30 pm</div>
            </div>
          </div>
          <div class="status_wrap completed_background">
            <div class="status_text completed_text">Completed</div>
            <div class="status_logo_completed">
              <img src="../assets/Tournament/complete_logo.png" />
            </div>
          </div>
          <div class="btn_wrap" @click="PopUp()">
            <button>View slotlist</button>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="card_wrap" v-for="i in 4" :key="i">
          <div class="header">
            <div class="head_text">M1R1</div>
            <div class="player_wrap">
              <img src="../assets/Tournament/players.png" />
              <div class="players">100</div>
            </div>
          </div>
          <div class="date_time_wrap">
            <div class="date_wrap">
              <img src="../assets/Tournament/date.png" />
              <div class="date">06.05.2022</div>
            </div>
            <div class="time_wrap">
              <img src="../assets/Tournament/time.png" />
              <div class="time">08.30 pm</div>
            </div>
          </div>
          <div class="status_wrap upcoming_background">
            <div class="status_text upcoming_text">Upcoming</div>
            <div class="status_logo_upcoming">
              <img src="../assets/Tournament/upcoming_logo.png" />
            </div>
          </div>
          <div class="btn_wrap" @click="PopUp()">
            <button>View slotlist</button>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="card_wrap" v-for="i in 4" :key="i">
          <div class="header">
            <div class="head_text">M1R1</div>
            <div class="player_wrap">
              <img src="../assets/Tournament/players.png" />
              <div class="players">100</div>
            </div>
          </div>
          <div class="date_time_wrap">
            <div class="date_wrap">
              <img src="../assets/Tournament/date.png" />
              <div class="date">06.05.2022</div>
            </div>
            <div class="time_wrap">
              <img src="../assets/Tournament/time.png" />
              <div class="time">08.30 pm</div>
            </div>
          </div>
          <div class="status_wrap ongoing_background">
            <div class="status_text ongoing_text">Ongoing</div>
            <div class="status_logo_ongoing">
              <img src="../assets/Tournament/ongoing_logo.png" />
            </div>
          </div>
          <div class="btn_wrap" @click="PopUp()">
            <button>View slotlist</button>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="card_wrap" v-for="i in 4" :key="i">
          <div class="header">
            <div class="head_text">M1R1</div>
            <div class="player_wrap">
              <img src="../assets/Tournament/players.png" />
              <div class="players">100</div>
            </div>
          </div>
          <div class="date_time_wrap">
            <div class="date_wrap">
              <img src="../assets/Tournament/date.png" />
              <div class="date">06.05.2022</div>
            </div>
            <div class="time_wrap">
              <img src="../assets/Tournament/time.png" />
              <div class="time">08.30 pm</div>
            </div>
          </div>
          <div class="status_wrap ongoing_background">
            <div class="status_text ongoing_text">Ongoing</div>
            <div class="status_logo_ongoing">
              <img src="../assets/Tournament/ongoing_logo.png" />
            </div>
          </div>
          <div class="btn_wrap" @click="PopUp()">
            <button>View slotlist</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_pagination">
      <v-pagination v-model="page" :length="5" circle></v-pagination>
    </div>
    <PopUp v-if="showPopup" @closeBracketPopup="closePopup" />
  </div>
</template>

<script>
import PopUp from "./TournamentBracketPopUp.vue";

export default {
  name: "Bracets",
  components: {
    PopUp,
  },
  data() {
    return {
      page: 1,
      showPopup: false,
    };
  },
  methods: {
    PopUp() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main_container {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 24px;
}
.top_bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
}
.search_bar {
  width: 200px;
}
.status_drop_down {
  width: 106px;
}

::v-deep.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  min-height: 38px;
  background: #151515;
  border-radius: 10px;
}
::v-deep .v-text-field.v-text-field--solo .v-label {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #aaaaaa;
}
::v-deep .mdi-magnify::before {
  color: #aaaaaa;
  font-size: 20px;
}
::v-deep .mdi-chevron-down::before {
  color: #ffffff;
}
.theme--light.v-label {
  color: black;
}
.wrapper_container {
  display: flex;
  gap: 24px;
}
.wrapper {
  display: flex;
  gap: 12px;
  flex-direction: column;
}
.card_wrap {
  width: 250px;
  height: 198px;
  background: #1b1b1b;
  border-radius: 10px;
  font-family: "Poppins";
  padding: 18px;
}
.header {
  display: flex;
  flex-direction: row;
}
.head_text {
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
}
.players {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #9672ff;
  margin: 1px 0 0 5px;
}
.player_wrap {
  display: flex;
  flex-direction: row;
  margin-left: 25px;
}
.player_wrap img {
  object-fit: contain;
}
.date,
.time {
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 29px;
  color: #cdcadb;
  margin-left: 12px;
}
.date_time_wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}
.date_wrap {
  display: flex;
  align-items: center;
}
.time_wrap {
  display: flex;
  align-items: center;
}
.status_wrap {
  border-radius: 10px;
  width: 225px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-top: 18px;
}
.completed_background {
  background: rgb(39, 174, 96, 0.1);
}
.status_text {
  font-style: normal;
  font-weight: 600;
  font-size: 11.5px;
  line-height: 29px;
}
.completed_text {
  color: #27ae60;
}
.status_logo_completed {
  background: #26ae60;
  border-radius: 50px;
  height: 14px;
  width: 14px;
}
.status_logo_completed img {
  height: 15px;
  object-fit: none;
}
.upcoming_background {
  background: rgb(95, 197, 255, 0.1);
}
.upcoming_text {
  color: #5fc5ff;
}
.status_logo_upcoming {
  background: #5fc5ff;
  border-radius: 50px;
  height: 14px;
  width: 14px;
  object-fit: none;
}
.status_logo_upcoming img {
  height: 15px;
  object-fit: none;
}
.ongoing_background {
  background: rgb(255, 103, 6, 0.1);
}
.ongoing_text {
  color: #ff6706;
}
.status_logo_ongoing {
  background: #ff6706;
  border-radius: 50px;
  height: 14px;
  width: 14px;
  object-fit: none;
}
.status_logo_ongoing img {
  height: 15px;
  object-fit: none;
}
.btn_wrap {
  width: 212px;
  height: 40px;
  background: #9672ff;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 29px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  cursor: pointer;
}
.footer_pagination {
  margin-top: 50px;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: none;
}
::v-deep .theme--light.v-pagination .v-pagination__item {
  background: #0e0e0e;
  color: #787686;
}
::v-deep .theme--light.v-pagination .v-pagination__item--active {
  color: #ffffff;
}
</style>
