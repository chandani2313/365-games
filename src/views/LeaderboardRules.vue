<template>
  <!-- <div class="Pubg_leaderBoard"> -->
    <div class="inner_container_rule">
      <div class="header_wrap">global rules</div>
      <div v-if="selectedLeaderboard" class="rules_wrapper" v-html="selectedLeaderboard.description" ></div>
    </div>
  <!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
name: "LeaderboardRules",
data() {
  return{

  }
},
methods: {

},
 computed: {
    ...mapGetters(["selectedLeaderboard"]),
  },
  mounted() {
  }
}
</script>

<style scoped>
.Pubg_leaderBoard {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0px 0px; 
}
.inner_container_rule {
  
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0px 0px; 
  padding: 24px;
}
.header_wrap {
  padding: 10px 10px 10px 0px;
  text-align: left;
  font: normal normal 500 20px/29px Poppins;
  color: #ffffff;
  text-transform: capitalize;
}
.rules_wrapper{
  font: normal normal normal 14px/21px Poppins;
  color: #ffffff;
}
@media screen and (max-width: 640px) {
  .inner_container {
    width: 80%;
    display: block;
  }
  .inner_subshell {
    display: none;
  }
}

@media screen and (max-width: 560px) {
  .inner_container {
    width: 100%;
    display: block;
  }
}
@media screen and (max-width: 480px) {
  .inner_container {
    width: 100%;
    display: block;
  }
}
</style>