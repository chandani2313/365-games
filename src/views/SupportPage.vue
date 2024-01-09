<template>
  <div class="support_page">
    <div class="title_support_header">Support</div>
    <div class="inner_container">
      <div class="inner_subshell">
        <router-link tag="div" active-class="active" :to="{ name: 'SupportPageTable' }" exact class="inner_subwrap">All</router-link>
        <router-link tag="div" active-class="active" :to="{ name: 'SupportPageCreateTicket' }" exact class="inner_subwrap">Create Ticket</router-link>
      </div>
      <div class="full_cover">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportPage",
};
</script>

<style lang="scss" scoped>
.support_page {
  font-family: "Poppins";
  color: white;
  padding: 0 6px;
}
.title_support_header {
  padding: 10px;
  text-align: left;
  font: normal normal medium 22px/33px Poppins;
  font: 22px/33px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  width: 100%;
  font: 500 22px/33px Poppins;
}

.inner_container {
  border-radius: 8px;
}
.inner_container1 {
  display: flex;
  justify-content: space-between;
}
.inner_subshell {
  display: flex;
  padding: 0 10px;
}

.inner_subwrap {
  min-width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 0.25px solid #ffffff;
  text-align: center;
  font: normal normal 300 16px/25px Poppins;
  line-height: 30px;
  letter-spacing: 0px;
  text-transform: capitalize;
  margin-right: 10px;
  cursor: pointer;
}
.active {
  background: #1e0741;
  border: 0.25px solid #1e0741;
  text-align: center;
}

.full_cover {
  background: #1e0741;
  padding: 25px;
  margin: 0px 10px 10px 10px;
}
@media screen and (max-width: 1263px) {
    .full_cover {
        padding: 10px;
    }
}
</style>