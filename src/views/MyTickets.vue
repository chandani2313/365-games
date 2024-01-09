<template>
  <div class="transaction_page">
    <div class="inner_container">
      <div class="inner_subshell">
        <div class="inner_wrap1">Transaction History</div>
        <div class="inner_wrap2">
        <router-link tag="div" active-class="active1" :to="{ name: 'RandomTransactionTable' }" exact class="inner_subwrap">RandomDrop</router-link>
        <router-link tag="div" active-class="active1" :to="{ name: 'GemPurchaseTransactionTable' }" exact class="inner_subwrap">GemPurchase</router-link>
        <router-link tag="div" active-class="active1" :to="{ name: 'SubscriptionTransactionTable' }" exact class="inner_subwrap">Subscription</router-link>
        </div>
      </div>
      <div class="line_wrap"></div>
      <div class="full_cover">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";

export default {
  name: "TicketTransactionTable",
  data() {
    return {
      tickets: []
    }
  },
  mounted() {
    this.getAllTickets()
  },
  methods: {
        changeDate(date) {
      return moment(date).format("MMM DD YYYY, hh:mm A");
    },
    getAllTickets() {
      axios
        .get("/random-drop/ticket/get")
        .then((response) => {
          this.tickets = response.data;
          console.log('tickets', response.data)
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>


.transaction_page {
  font-family: "Poppins";
  color: white;
  padding: 0px 20px;
}
.inner_container {
  border-radius: 8px;
  margin-top: 3%;
}
.inner_subshell {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.inner_wrap1 {
  font: normal normal 700 18px/27px Poppins;
  color: rgba(255, 255, 255, 1);
}
.inner_wrap2 {
  display: flex;
  flex-wrap: nowrap;
}
.inner_subwrap {
  min-width: 100px;
  // height: 30px;
  text-transform: capitalize;
  margin: 0px 0px 0px 20px;
  color: rgba(205, 202, 219, 1);
  font: normal normal 400 14px/21px Poppins;
  text-align: left;
  cursor: pointer;
}
.active1 {
  border-bottom: 0.25px solid #ffffff;
  padding-bottom: 15px;
  border-radius: 0px;
  color: #ffffff;
  font-weight: 600;
}
.line_wrap{
  width:100%; 
  background:#3E3E3E;
  margin: -1px 0px 20px 0px;
  height: 1px;
}
.full_cover {
  // background: #000000;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius:10px;
}
@media screen and (max-width: 1263px) {
    .full_cover {
        padding: 10px;
    }
}
</style>
