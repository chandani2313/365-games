<template>
  <div class="support_page">
  <div class="top_bar">
    <div class="title_support_header">Team</div>
      <div class="inner_subshell">
        <router-link tag="div" active-class="active1" :to="{ name: 'AllTeams' }" exact class="inner_subwrap">All Teams</router-link>
        <!-- <router-link tag="div" active-class="active1" :to="{ name: 'MyTeams',params: { id: user._id } }" exact class="inner_subwrap">My Teams</router-link> -->
        <router-link tag="div" active-class="active1" :to="{ name: 'myteam' }" exact class="inner_subwrap">My Teams</router-link>
        <router-link tag="div" active-class="active1" :to="{ name: 'CreateTeam' }" exact class="inner_subwrap">Create Team</router-link>
      </div>
  </div>
  <div class="line_wrap"></div>
      <div class="inner_container">
      <div class="full_cover">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamPage",
  data() {
    return{
      user: ''
    }
  },
  created() {
   this.user = this.$store.getters.user;

  }
};
</script>

<style lang="scss" scoped>
.support_page {
  font-family: "Poppins";
  color: white;
  // width: 1120px;
  // margin: 10px auto 0px auto;
  margin: 20px ;
}
.title_support_header {
  padding: 10px;
  font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 27px;
text-align: left;
  float: left;
   display: flex;
  flex-wrap: wrap;
  // position: absolute;
}
.inner_container {
  border-radius: 8px;
}
.inner_container1 {
  display: flex;
  justify-content: space-between;
  margin: 0px 5px;
}
.inner_subshell {
 display: flex;
  width: 100%;
  justify-content: right;
}
.top_bar{
  display: flex;
  justify-content: space-between;
}
.inner_subwrap {
 margin: 10px 0px 5px 5px;
  min-width: 110px;
  /* height: 30px; */
  height: 41px;
  border-radius: 5px;
  text-transform: capitalize;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  font: normal normal 300 16px/25px Poppins;
  line-height: 30px;
  letter-spacing: 0px;
  text-transform: capitalize;
  margin-right: 10px;
  cursor: pointer;
}
.active1 {
    border-bottom: 0.25px solid #ffffff;
  margin: 10px 2px 0px 0px !important;
  padding-bottom: 25px;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
}
.line_wrap{
  width:100%; 
  background:#3E3E3E;
  margin: -6px 0px 20px 0px;
  height: 1px;
}
// .full_cover {
//   // background: #1e0741;
//   // padding: 25px;
//   margin: 0px 10px 10px 10px;
// }
@media screen and (max-width: 1263px) {
    // .full_cover {
    //     padding: 10px;
    // }
}
</style>