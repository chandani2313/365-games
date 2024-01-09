<template>
  <div class="player_list">
    <div class="main__container">
      <div class="table__wrapper animated zoomIn">
        <div class="top_container">
          <div class="navbar_text">M1R1 - Slotlist</div>
          <div class="close" @click="close()">x</div>
        </div>
        <div class="bottom_container">
          <div class="wrapper">
            <div class="date_time_wrap">
              <div class="time_left">
                <div class="date_wrap">
                  <img src="../assets/Tournament/date.png" />
                  <div class="date">06.05.2022</div>
                </div>
                <div class="time_wrap">
                  <img src="../assets/Tournament/time.png" />
                  <div class="time">08.30 pm</div>
                </div>
                <div class="status_wrap completed_background">
                  <div class="status_text completed_text">Completed</div>
                  <div class="status_logo_completed">
                    <img src="../assets/Tournament/complete_logo.png" />
                  </div>
                </div>
              </div>
              <div class="time_right">
                <div class="search_bar">
                  <v-text-field
                    label="Search"
                    solo
                    prepend-inner-icon="mdi-magnify"
                  ></v-text-field>
                </div>
              </div>
            </div>
            <div class="teams">
              <div class="player_wrap">
                <img src="../assets/Tournament/players.png" />
                <div class="players">100</div>
              </div>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="card_container">
            <div class="team_wrapper">
              <div class="team_card" v-for="i in 50" :key="i">
                <div class="team_card_wrap">
                  <div class="team_card_wrap_text">
                    <div class="team_list">#1</div>
                    <div class="team_names">TEAMNAME</div>
                  </div>
                  <div class="team_card_wrap_img">
                    <img src="../assets/Tournament/game-joystick.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="team_wrapper">
              <div class="team_card" v-for="i in 50" :key="i">
                <div class="team_card_wrap">
                  <div class="team_card_wrap_text">
                    <div class="team_list">#2</div>
                    <div class="team_names">TEAMNAME</div>
                  </div>
                  <div class="team_card_wrap_img">
                    <img src="../assets/Tournament/game-joystick.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "player_list",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("closeBracketPopup");
    },
  },
};
</script>

<style scoped>
/* .main__container {
  position: absolute;
  width: 870px;
  height: 575px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: #1b1b1b;
  border-radius: 10px;
  font-family: "Poppins";
} */
.main__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #00000073; */
  background: rgba(19, 19, 19, 0.7);
  backdrop-filter: blur(7px);
  z-index: 6;
}
.main__container .table__wrapper {
  width: 870px;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: -6px 7px 20px 3px rgba(0, 0, 0, 0.16);
  margin: 90px auto;
}
.table__wrapper .top_container {
  width: 100%;
  height: 65px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  /* background-image: url('../../assets/img/table__img.png'); */
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
}
.top_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 57px;
  background: rgb(150, 114, 255, 0.1);
  border-radius: 10px 10px 0px 0px;
  padding: 3px 35px 0 35px;
}
.navbar_text {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
.close {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #9672ff;
  cursor: pointer;
}
.bottom_container {
  padding: 15px 35px 40px 35px;
}
.date,
.time {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #cdcadb;
  margin-left: 12px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  /* flex-direction: row;
  justify-content: space-between;
  align-items: center; */
}
.date_time_wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.date_wrap {
  display: flex;
  align-items: center;
}
.time_wrap {
  display: flex;
  align-items: center;
  margin: 0 40px 0 40px;
}
.time_left {
  display: flex;
}
.status_wrap {
  border-radius: 10px;
  width: 113px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}
.completed_background {
  background: rgb(39, 174, 96, 0.1);
}
.status_text {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
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
.search_bar {
  width: 115px;
  height: 46px;
}
::v-deep .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: rgba(150, 114, 255, 0.3);
  border-radius: 10px;
}
::v-deep .v-text-field.v-text-field--solo .v-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #ffffff;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #ffffff;
}
.teams {
  margin: 25px 0 10px 0;
}
.player_wrap {
  display: flex;
  flex-direction: row;
}
.player_wrap img {
  object-fit: contain;
}
.players {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #9672ff;
  margin: 1px 0 0 5px;
}
::v-deep .theme--light.v-divider {
  border-color: #cdcadb;
}
/* ::v-deep .v-divider {
  border-width: thin 0 1.5px 0;
} */
.card_container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  height: 360px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.card_container::-webkit-scrollbar-thumb {
  background: grey;
}
.card_container::-webkit-scrollbar-track {
  box-shadow: none;
  margin-left: 10px;
}
.team_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.team_card_wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: 385px;
  height: 62px;
  background: rgb(150, 114, 255, 0.1);
  border-radius: 10px;
}
.team_card_wrap_text {
  display: flex;
  gap: 15px;
}
.team_list {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #9672ff;
}
.team_names {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 29px;
  color: #cdcadb;
}
.team_card_wrap_img {
  display: flex;
  align-items: center;
}
</style>