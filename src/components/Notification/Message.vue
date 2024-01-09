<template>
  <div class="message_t">
     <div class="message__wrapper">
        <div class="message">
            {{noti.text}}
        </div>
     </div>
     <div class="time">{{changeDate(noti.createdAt)}}</div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Message',
  data() {
    return {
    };
  },
  props: ['noti'],
  methods: {
    changeDate(date) {
    return moment(date).fromNow();
    }  
  }
};
</script>

<style scoped>
.message__wrapper{
    display: flex;
}
.message_t{
    padding: 10px 15px;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
}
.message{
    margin-bottom: 10px;
    color: hsla(0,0%,100%,.56);
    margin-right: 10px;
}
.time{
    font-size: 10px;
    text-align: right;
    margin-right: 10px;
    color: hsla(0,0%,100%,.56);
}
</style>
