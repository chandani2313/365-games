<template>
  <div class="chat_outer_container">
    <div class="supportchat">
    <div class="chat_topcontainer">
      <div class="title_wrapper">Ticket id: {{ ticketId }}</div>
      <!-- <div class="close"  @click="close()">X</div> -->
    </div>
    <div class="chat_topwrap">
      <div class="chat_headerwrap">
        <div class="header_wrapper">{{ query }}</div>
      </div>
    </div>
    <div class="chat-container">
      <div class="chat_container_inner">
        <div v-for="message, index in messages" :key="index" :class="[message.userType === 'User' && 'receiver']" class="messages">
          <div class="messages__user">
                  <img v-if="message.userType === 'User'" :src="user && user.profileImage ? `https://ps-mg.s3.amazonaws.com/${user.profileImage}` : 'https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg'" />
            <img v-if="message.userType === 'Admin'" width="45px" height="45px" src="https://thumbs.dreamstime.com/b/admin-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-app-135742404.jpg" />
          </div>
          <div class="messages__text-area">
            <div class="text">{{ message.body }}</div>
          </div>
          <div class="messages__empty-space"></div>
        </div>
      </div>
      <div class="send-text">
        <div class="send-text__empty-space"></div>
        <div class="send-text__text-area">
          <textarea required v-model="message" type="text"> </textarea>
          <div @click="sendMessage" class="send_icon"><v-icon>mdi-send</v-icon></div>
        </div>
        <div class="send-text__sender">
          <!-- <img src="/img/assets/Dashboard/Last-Week-Leaderboard-Winners.png" /> -->
                <img :src="user && user.profileImage ? `https://ps-mg.s3.amazonaws.com/${user.profileImage}` : 'https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg'" />
        </div>
      </div>
    </div>
</div>
  </div>
</template>

<script>
import axios from 'axios';
import socket from '../../service/socket'
export default {
  name: 'SupportPageChat',
  props: ['ticket'],
  data() {
    return {
      ticketId: this.$route.params.id,
      query: '',
      messages: [],
      message: '',
      user: ''
    }
  },
  mounted() {
    this.getUserDetails();
    this.getTicket()
    socket.on("supportAdminReply", data => {
      console.log('socket', data)
      this.messages.push(data)
    });
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
    getTicket() {
       axios.get(`/support/find/${this.ticketId}`).then((res) => {
        this.query = res.data.query
        this.messages = res.data.messages
      })
    },
        close() {
      this.$emit("closeChat");
    },
    sendMessage() {
      axios.post('/support/user/chat', {
        criteria: {
          _id: this.ticketId
        },
        data: {
          message: this.message
        }
      }).then(res => {
        this.messages = res.data.messages
        this.message = ''
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.close{
  cursor: pointer;
  padding: 15px;
}
// .supportchat{
//     width: 800px;
// }
.chat_outer_container {
  background: transparent
    linear-gradient(26deg, #45108a 2%, #3d065f 29%, #12054e 100%, #10054d 100%);
    // display: flex; 
    // align-items: center;
    justify-content: center;
    padding: 1.6rem 2.2rem 2rem 2.5rem;
    font-family: "Poppins";
    color: white;
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(19, 19, 19, 0.7);
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    z-index: 6;
}
.chat_container_inner{
      overflow-y: scroll;
    height: 312px;
}
.chat_topcontainer {
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0px 0px;
  background-color: rgb(39 36 50);
}
.chat_topwrap{
  background: #272432;
}
.title_wrapper {
  margin: 15px 0px 5px 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #ffffff;
  font: 500 22px/33px Poppins;
  text-transform: capitalize;
}
button {
  border: 0.5px solid #ffffff;
  background: #180550;
  color: white;
  cursor: pointer;
  min-width: 90px;
  min-height: 30px;
  text-transform: capitalize;
  padding: 5px;
  margin: 15px 0px 10px 0px;
  border-radius: 4px;
}
.chat_headerwrap {
  padding: 10px;
  // background-color: #320c6a;
}
.header_wrapper {
  text-align: left;
  font: 18px/22px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  /*background-color: #320c6a;*/
  border-bottom: 1px solid #ffffff;
  padding: 5px;
}
.send-text {
  display: flex;
  background: #1B1B1B;
  padding: 1rem;
      border-radius: 0px 0px 10px 10px;
}
.send-text__empty-space,
.send-text__sender {
  flex: 1 1 auto;
}
.send-text__sender {
  display: flex;
  align-items: flex-start;
}
.send-text__sender img {
  border-radius: 50%;
  height: 50px;
  margin: 0 auto;
}
.send-text__text-area {
  flex: 1 0 60%;
  position: relative;
  // background-color: #1e0741;
}
.send-text__text-area textarea {
    background: rgb(150, 114, 255, 0.1);
    min-width: 100%;
    min-height: 120px;
    padding: 10px;
    color: #FFFFFF;
    resize: none;
}
.send-text__text-area textarea:focus-visible {
  outline: none;
}
.send-text__text-area::after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #272432;
  border-right: 12px solid transparent;
  border-top: 10px solid #272432;
  border-bottom: 8px solid transparent;
  right: -20px;
  top: 0;
}
.receiver .messages__empty-space {
  order: 1;
}

.receiver .messages__user {
  order: 3;
}

.receiver .messages__text-area {
  order: 2;
  background: #272432;
}
.messages {
  display: flex;
  background-color: #1b1b1b;
  padding: 30px 0;
}
.messages__empty-space,
.messages__user {
  flex: 1 1 auto;
}
.messages__user {
  display: flex;
  align-items: flex-start;
}
.messages__user img {
  border-radius: 50%;
  height: 50px;
  margin: 0 auto;
}
.messages__text-area {
      padding: 0.5rem;
  flex: 1 0 60%;
  position: relative;
  background-color: #7255E9;
}
.receiver > .messages__text-area::after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #272432;
  border-right: 12px solid transparent;
  border-top: 10px solid #272432;
  border-bottom: 8px solid transparent;
  right: -20px;
  top: 0;
}
.messages > .messages__text-area::before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-right: 10px solid #7255E9;
  border-left: 12px solid transparent;
  border-top: 10px solid #7255E9;
  border-bottom: 8px solid transparent;
  left: -20px;
  top: 0;
}
.receiver > .messages__text-area::before {
  content: "";
  border-left: 10px solid transparent;
  border-right: 12px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 8px solid transparent;
}
.send_icon {
  position: absolute;
  bottom: 5px;
  right: 1px;
  color: #ffffff;
  min-width: 25px;
  min-height: 25px;
  cursor: pointer;
}
.theme--light.v-icon{
    color: #FFFFFF;
    padding: 0.4rem;
  
}
</style>