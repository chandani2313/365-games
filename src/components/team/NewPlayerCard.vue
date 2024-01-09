<template>
  <div class="player_card">
    <div class="eventparticipant-card"  >
        <div class="eventparticipant-card_fig">
            <img src="/img/assets/profile/logo.png" style="">
        </div>
        <div class="eventparticipant-card_conent">
            <div class="eventparticipant-card_name">{{player.username}}</div>
            <div class="eventparticipant-card_info">
            </div>
        </div>
        <div class="eventparticipant-card-onlinedot" ></div>
        <div class="notification_card_request">
            <span>
                <a class=""  @click="invite(player._id)">invite</a>
                <!-- <a href="#" class=" ">remove</a> -->
            </span>
        </div>
    </div>
    <v-snackbar
      v-model="snackbar"
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
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'player_card',
  data() {
    return {
        color: "",
    snackbar: false,
    snackbarText: "",
    timeout: "-1",
    };
  },
    props: {
    team: {},player: {}
  },
  components: {
  },
  methods: {
    noti() {
        this.$emit('removecard');
    },
    invite(PlayerId) {
        axios
        .post('/team/invite', {
            criteria: {
                _id: this.team._id
            },
            data: {
            playerId: PlayerId,
            }
        })
        .then((response) => {
                this.players = response.data;
                this.color = "green";
          this.snackbar = true;
          this.snackbarText = "Invite sent successfully";
          this.timeout = 3000;
                this.$emit('removecard');
        })
        .catch((e) => {
              if (e.response.data.message) {
            console.log(e.response.data.message);
              const teamData = e.response.data.message;
              this.snackbarText = teamData;
              this.color = "red darken-4";
              this.snackbar = true;
              this.timeout = 3000;
            }
                this.$emit('removecard');
        });
    },
  },
  mounted() {
      console.log('this.tean', this.team)
  }
};
</script>


<style scoped>

 .notification_card_request{
  text-align: center;
  display: flex;
  align-self: center;
 }
.notification_card_request span a {
    cursor: pointer;
    padding: 4px 6px;
    font-size: 11px;
    line-height: 2.5em;
    border-radius: 4px;
    transition: all .2s ease-in-out;
    color: #1b2731d1;
    text-transform: uppercase;
    margin-right: 10px;
    background-image: linear-gradient(to right, rgb(105 74 199) 0%, rgb(182 164 215) 100%);
    font-weight: 600;
} 
.notification_card_request span a:hover { 
    color: #fff;
    box-shadow: 0px 0px 5px 0px #9672ff;      
}
.eventparticipant-card{
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background:#9672ff1a;
    flex-direction: row;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: relative;
    display: flex;
    border-radius: 10px;
    padding: 7px;
    margin-top: 10px;
}
.eventparticipant-card:hover{
    transform: translateY(-5px);
    transition: all .15s;
    box-shadow: 0px 0px 3px 0px #9672ff;
}
.eventparticipant-card_fig{
    flex-basis: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    min-width: 40px;
}
.eventparticipant-card_conent{
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 15px;
}
.eventparticipant-card_name{
   color: #fff;
    font-size: 12px;
    margin-bottom: .4em;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: -.02em;
    font-weight: 700;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 130px;
}
.eventparticipant-card_info{
  display: flex;
  color: #ffffff82;
}
</style>
