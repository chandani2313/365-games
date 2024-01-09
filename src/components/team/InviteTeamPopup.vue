<template>
  <div class="player_list">
    <div class="main__container">
      <div class="table__wrapper animated zoomIn">
        <div class="top_container">
          <div class="navbar_text">INVITE PLAYERS</div>
          <div class="close" @click="close()">x</div>
        </div>
        <div class="bottom_container">
          <div class="wrapper">
              <div class="input-wrapper">
                <span>Search with Username.</span>
                <input v-model="query" placeholder="Search ..." type="text"/>
                <div class="helper" ></div>
            </div>
            <div class="result">
                <PlayerCard v-for="player in players" :key="player._id" :team="team" :player=player @removecard="getTeams()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PlayerCard from './NewPlayerCard.vue';

export default {
  name: 'create_team',
  data() {
    return {
        query: '',
        players: null,
    };
  },
  components: {
      PlayerCard,
  },
   props: {
    team: {},
  },
  methods: {
    getTeams() {
        console.log('team>>>>>>>>>', this.team)
        const criteria = {}
      if(this.query) {
        criteria["username"] = {$regex: this.query, $options: 'i'};
      }
        axios
        .post('/user/find/all', {
            criteria,
            limit: 5,
        })
        .then((response) => {
                this.players = response.data;
                console.log('players', this.players)
        })
        .catch((e) => {
        console.log('err',e)
        });
    },
    close() {
        this.$emit('closeTeamPopup');
    },
    nonmembers() {
        this.$emit('nonmembers');
    },
  },
   watch: {
    query: {
    immediate: true,
    handler() {
      this.getTeams();
    }
  }
  }
};
</script>

<style scoped>
.helper{
    text-align: right;
    padding: 13px 17px;
    font-size: 12px;
    cursor: pointer;
}
.input-wrapper span {
    padding: 4px;
}
.result{
    /* padding: 21px;
    height: 370px;
    background: #00000061;
    border-radius: 12px; */
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem;
}
.input-wrapper input:focus {
  border: 2px solid #9672ff;;
}
.input-wrapper input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  /* margin-block-end: 12px; */
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #181229;
  width: -webkit-fill-available;
  font-weight: 700;
   margin-top: 10px;
}
.close{
    margin-right: 22px;
    font-size: 20px;
    color: white;
    font-weight: 400;
    cursor: pointer;
}
.phone__wrap input:valid{
    border: 2px solid #1b8fe4 !important;
}
label{
    font-size: 12px;
    color: #848484;
    padding: 10px;
    font-weight: 700;
}
select{
    padding: 14px;
    width: -webkit-fill-available;
    background: #111e2a;
    outline: none;
    border: none;
    color: white;
    border-radius: 10px;
    -webkit-appearance: none;
}
.formphonenumber_code{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    margin-right: 20px;
}
.formphonenumber_code::before, .formphonenumber_code::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.formphonenumber_code::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 3px 3px 0;
}
.formphonenumber_code::before {
    background-color: rgba(0,0,0,.15);
}
.formphonenumber_code::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .625em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.select_dropdown{
    position: relative;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.select_dropdown::before, .select_dropdown::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.select_dropdown::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 12px 12px 0;
}
.select_dropdown::before {
    background-color: rgba(0,0,0,.15);
}
.select_dropdown::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .325em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.phone__wrap{
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    margin-top: 18px;
}
.phone__wrap select{
    width: 100%;
}
.modal__wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000073;
    z-index: 3;
}
.modal__wrapper .table__wrapper{
    width: 480px;
    /* background: #1b2731; */
    background: #310A69;
    border-radius: 10px;
    box-shadow: -6px 7px 20px 3px rgba(0,0,0,.16);
    margin: 90px auto;
}
.table__wrapper .table__header{
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
.table__header .heading{
    width: fit-content;
    color: white;
    font-weight: 700;
    margin-left: 18px;
    font-size: 13px;
    display: flex;
    align-items: center;
    height: 100%;
}
.table__wrapper .table__body{
    display: flex;
    padding: 13px;
    flex-direction: column;
    color: white;
}
.table__header .backdrop{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 2;
    /* background: #111c25e0; */
    background: #1e0741;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 100%;
    justify-content: space-between;
}
.table__body .input-wrapper{
  width: 100%;
  position: relative;
  /* margin-top: 10px; */
}
.table__body form input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
#border_reset{
    border: 2px solid #364444 ;
}
.table__body .floating-label{
  position: absolute;
  font-size: 10px;
  top: 29px;
  font-weight: 700;
  left: 15px;
  color: #848484;
  pointer-events: none;
  transition: 0.2s ease all;
}
.table__body form input:valid {
  border: 2px solid #1b8fe4;
}
.err{
  border: 2px solid red!important;
}
.err_text{
  color: red !important;
}
.error {
    font-size: 11px;
    padding: 8px;
    color: red !important;
}
.table__body form input:valid~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,input:not(:focus):valid ~ .floating-label{
  top: 5px;
  left: 20px;
  background: #192632;
  padding: 6px;
  font-size: 10px;
}
.table__body form input:focus {
  border: 2px solid #1b8fe4 !important;
}
.table__body form input:focus ~ .floating-label {
  color: #1b8fe4;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    width: 100%;
    padding: 11px;
    outline: none;
    border-radius: 5px;
    border-style: none;
    margin: 15px auto;
    cursor: pointer;
    box-shadow: 5px 10px 20px #141f28;
    color: white;
    font-weight: 600;
}
.btn:hover{
    box-shadow: 0px 0px 10px 0px #2e88ef;
    transform: translateY(-2px);
    transition-duration: .5s;
}
@media (min-width: 320px) and (max-width: 480px) {
    .modal__wrapper .table__wrapper{
        width: 90%;
        margin: 115px auto;
    }
}



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
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__container .table__wrapper {
  width: 600px;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: -6px 7px 20px 3px rgba(0, 0, 0, 0.16);
  /* margin: 90px auto; */
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
