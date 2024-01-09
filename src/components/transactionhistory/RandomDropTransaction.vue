<template>
  <div class="list">
    <table class="ranking">
      <tr class="header">
        <th class="table_head">S.no</th>
        <th class="table_head">Name</th>
        <th class="table_head">Gem</th>
        <th class="table_head">TicketId</th>
        <th class="table_head">Date</th>
        <th class="table_head">Action</th>
      </tr>
      <template v-if="tickets.length">
        <tr
          class="content-bgcolor"
          v-for="(ticket, index) in tickets"
          :key="ticket._id"
        >
          <td class="table_content_id">{{ index + 1 }}</td>
          <td class="table_content">{{ ticket.randomDrop.name }}</td>
          <td class="table_content">{{ ticket.randomDrop.price }}</td>
          <td class="table_content">{{ ticket._id }}</td>
          <td class="table_content">
            {{ changeDate(ticket.createdAt) }}
          </td>
          <td>
            <button
              data-v-2d56389d=""
              type="button"
              class="table_content_action_view_button"
            >
              {{ ticket.randomDrop.status }}
            </button>
          </td>
        </tr>
      </template>
    </table>
    <div class="page_wrap">
      <v-pagination v-model="page" :length="pages" @input="updatePage" circle> </v-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "RandomTransactionTable",
  data() {
    return {
      tickets: [],
      page: 1,
      pageSize: 3,
      listCount: 0,
      ticketList: []
    };
  },
  computed: {
    pages() {
      if (this.pageSize == null || this.listCount == null) return 0;
      return Math.ceil(this.listCount / this.pageSize);
    },
  },
  mounted() {
    this.getAllTickets();
  },
  methods: {
    changeDate(date) {
      return moment(date).format("MMM DD YYYY, hh:mm A");
    },
    async getAllTickets() {
      await axios
        .get("/random-drop/ticket/get")
        .then((response) => {
          this.ticketList = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
      this.initPage();
      this.updatePage(this.page);
    },

    initPage() {
      // console.log("initPage");
      this.listCount = this.ticketList.length;
      if (this.listCount < this.pageSize) {
        this.tickets = this.ticketList;
      } else {
        this.tickets = this.ticketList.slice(0, this.pageSize);
      }
    },
    updatePage(pageIndex) {
      let start = (pageIndex - 1) * this.pageSize;
      let end = pageIndex * this.pageSize;
      this.tickets = this.ticketList.slice(start, end);
      this.page = pageIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  overflow-x: auto;
}
.list table {
  width: 100%;
  // border-collapse: collapse;
  // overflow-x: auto;
  border-collapse: separate;
  border-spacing: 0 20px;
}
.header th,
td {
  padding: 0px 20px;
  text-align: left;
}
th {
  align-items: center;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  color: #fdfdfd;
  text-align: left;
  text-transform: capitalize;
}
.header tr {
  border-radius: 25px 25px 0px 0px;
}
.content-bgcolor {
  background: linear-gradient(180deg, #161616 0%, rgba(40, 38, 38, 0.4) 100%);
  line-height: 60px;
}
.table_head {
  font: normal normal 500 14px/29px Poppins;
  text-transform: capitalize;
  color: #787686;
}
.table_content_id {
  font: normal normal 600 20px/29px Poppins;
  color: #ffffff;
}
.table_content,
.table_content_color {
  font: normal normal normal 13px/29px Poppins;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
}
.table_content_color {
  color: #cdcadb;
}
.table_content_action_view_button {
  font: normal normal normal 13px/29px Poppins;
  border-radius: 5px;
  text-transform: capitalize;
  border: none;
  width: 86px;
  height: 32px;
  color: #51c55d;
  text-align: left;
  cursor: pointer;
}
.page_wrap {
  display: flex;
  justify-content: center;
  padding: 15px;
}
::v-deep .theme--light.v-pagination .v-pagination__item {
  background: rgb(14 14 14);
  color: #ffffff;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: none;
}
</style>