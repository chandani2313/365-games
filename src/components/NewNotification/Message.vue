<template>
    <div class="notification_card">
        <div class="notification_image">
            <img src="@/assets/dashboard365/pubg.png" />
        </div>
        <div class="notification_contents">
            <div class="notification_contents_wrap">
                <div class="game_title">pubg</div>
                <div class="notification_time">{{changeDate(noti.createdAt)}}</div>
            </div>
            <div class="content_para">{{noti.text}}</div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    name: 'DefaultNoti',
      props: ['noti'],
  methods: {
    changeDate(date) {
    return moment(date).fromNow();
    }  
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

    border-radius: 50%;
  display: flex;
  align-items: center;
  align-content: center;
      width: 31px;
    height: 31px;

    border: 1px solid #E9E9E9;
}
.notification_contents{
  margin-left: 10px;
  width:100%;
}
.notification_contents_wrap{
  display: flex;
  justify-content: space-between;
}
.game_title{
  font-size: 0.8em;
  color: #222222;
  text-transform: capitalize;
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
line-height: 9px;
white-space: nowrap;
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
</style>