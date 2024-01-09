<template>
  <div class="join_team">
     <div class="message__wrapper">
         <div class="message">
          {{noti.text}}
     </div>
        <div class="btn__wrapper" v-if="noti.metaData.status === 'waiting'">
            <button class="btn" @click="acceptReject( 'accept', noti._id)">ACCEPT</button>
            <button class="btn red" @click="acceptReject('reject', noti._id)" >DECLINE</button>
        </div>
        <div class="btn__wrapper" v-if="status === 'rejected'">
            <button class="btn red" >DECLINED</button>
        </div>
        <div class="btn__wrapper" v-if="status === 'accepted'">
            <button class="btn" >APPROVED</button>
        </div>
     </div>
     <div class="time">{{changeDate(noti.createdAt)}}</div>
      <v-snackbar
      v-model="snackbar"
      absolute
      top
      :color="color"
      elevation="24"
      :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
  methods: {
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
  },
};
</script>

<style scoped>
.message__wrapper{
    display: flex;
}
.btn__wrapper{
    display: flex;
    align-items: center;
    padding: 2px;
}
.red{
    background: linear-gradient(90deg,#e4281b,#ef2e2e) !important;
}
.btn{
    /* background: linear-gradient(90deg,#1b8fe4,#2e88ef); */
    background-image: linear-gradient(to right, rgb(105 74 199) 0%, rgb(182 164 215) 100%);
    padding: 5px;
    outline: none;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    box-shadow: 5px 10px 20px #141f28;
    color: white;
    font-weight: 500;
    font-size: 10px;
    margin-right: 10px;
}
.btn:hover{
    box-shadow: 0px 0px 10px 0px #2e88ef;
}
.join_team{
    padding: 10px 15px;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
}
.message{
    margin-bottom: 10px;
    color: hsla(0,0%,100%,.56);
    margin-right: 10px;
    width: 80%;
}
.time{
    font-size: 10px;
    text-align: right;
    margin-right: 10px;
    color: hsla(0,0%,100%,.56);
}
</style>
