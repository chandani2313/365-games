<template>
  <div class="notification_card">
    <div class="notification_image">
      <img src="@/assets/dashboard365/profile.webp" />
    </div>
    <div class="notification_contents">
      <div class="notification_contents_wrap">
        <div class="game_title">pubg</div>
        <div class="button_game">
          
          <div class="button_wrap" v-if="noti.metaData.status === 'waiting'">
            <button class="accept" @click="acceptReject( 'accept', noti._id)">accept</button>
            <button class="reject" @click="acceptReject('reject', noti._id)" >decline</button>
          </div>
              <div class="button_wrap" v-if="status === 'rejected'">
        <button class="reject">DECLINED</button>
      </div>
      <div class="button_wrap" v-if="status === 'accepted'">
        <button class="accept">APPROVED</button>
      </div>
              <div class="notification_time">{{changeDate(noti.createdAt)}}</div>

        </div>


      </div>
      <div class="content_para">{{noti.text}}</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
export default {
    name: 'JoinTeam',
   data() {
    return {
        status: null,
         color: "",
    snackbar: false,
    snackbarText: "",
    timeout: "-1",
    };
  },
  props: ['noti'],
   mounted() {
    this.status = this.noti.metaData.status;
  },
  methods:{
      changeDate(date) {
    return moment(date).fromNow();
    } ,
    acceptReject( Status, NotiId) {
        axios
        .post('/team/respond/join-request', {
             criteria: {
            notificationId: NotiId
          },
          data: {
            response: Status
          }
        })
        .then((response) => {
            this.status = response.data.notificationStatus;
                this.$emit('reload');
                this.color = "green";
          this.snackbar = true;
          this.snackbarText = "Request accepted successfully";
          this.timeout = 3000;
        })
        .catch((e) => {
           console.log('err',e.response.data)
            if (e.response.data) {
              const teamData = e.response.data;
              this.snackbarText = teamData;
              this.color = "red darken-4";
              this.snackbar = true;
              this.timeout = 3000;
            }
        });
      },
    }
}
</script>
<style scoped>
.notification_card{
  display: flex;
  padding: 9px 10px 8px 10px;
  border-bottom: 1px solid #D2D2D2;
}
.notification_image{
  display: flex;
  align-items: center;
  width: 45px;
}
.notification_image>img{
  width: 31px;
  height: 31px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  align-content: center;
  
    border: 1px solid #E9E9E9;
}
.button_game{
  display: flex;
}
.accept,.reject{
    font-size: 0.8em;
    font-size: 9px;
    box-shadow: -3px 3px 4px 2px #757c80;
    color: #FFFFFF;
    text-transform: capitalize;
    border-radius: 4px;
    padding: 3px 5px 3px 5px;
    /* margin: 0px 10px 2px 0px; */
}
.accept{
  /* background-color: #00b4ff; */
  background: linear-gradient(
180deg
,#9672ff,#6b4fe8);
}
.accept:hover{
  box-shadow: 1px 1px 5px 1px #2aaeb1;
}
.reject:hover{
  box-shadow: 1px 1px 4px 1px #f71919;
}
.reject{
  background-color: red;
}
.notification_contents{
  margin-left: 10px;
  width: 100%;
}
.notification_contents_wrap{
  display: flex;
  justify-content: space-between;
}
.game_title{
  font-size: 0.8em;
  color: #222222;
  text-transform: capitalize;
  margin-right: 42px;
      /* position: absolute; */
    /* width: 76px; */
    height: 14px;
    /* left: 1079px; */
    /* top: 140px; */
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 13px;
    display: flex;
    align-items: center;
    color: #222222;
}
.notification_time{
  font-size: 0.5em;
  color: #9672FF;
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 6px;
white-space: nowrap;
line-height: 9px;
/* identical to box height */

display: flex;
align-items: center;

color: #9672FF;
}
.content_para{
  margin-top: 5px;
  font-size: .6em;
  color: #878787;
      /* position: absolute; */
    /* width: 172px; */
    /* height: 22px; */
    /* left: 1079px; */
    /* top: 153px; */
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 7px;
    line-height: 10px;
    display: flex;
    align-items: center;
    color: #878787;
}
.button_wrap{
  /* white-space: nowrap; */
  display: flex;
  /* margin-right: 10px; */
}
</style>