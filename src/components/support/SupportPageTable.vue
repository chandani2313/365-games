<template>
  <div class="list">
    <table class="ranking">
      <tr class="header_sb">
        <th class="table_head_id">ID</th>
        <th class="table_head_date">Date</th>
        <th class="table_head_time">Time</th>
        <th class="table_head_query">Query</th>
        <th class="table_head_action">Action</th>
      </tr>
      <template v-if="queries.length">
        <tr v-for="query,index in queries" :key="query._id">
          <td class="table_content_id">{{ index + 1 }}</td>
          <td>
            <div class="table_content_date">
              <div class="table_content_time">{{ new Date(query.createdAt).toLocaleDateString() }}</div>
            </div>
          </td>
          <td><div class="table_content_time">{{ new Date(query.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</div></td>
          <td>
            <div class="table_content_query">
              {{ query.query }}
            </div>
          </td>
          <td>
            <button
              data-v-2d56389d=""
              type="button"
              class="table_content_action_view_button"
              @click.prevent="$router.push({name: 'SupportPageChat', query: { ticketId: query._id } })"
            >
              View
            </button>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SupportPageTable",
  data() {
    return {
      queries: []
    }
  },
  mounted() {
    this.getAllQueries()
  },
  methods: {
    getAllQueries() {
      this.$Progress.start()
      axios
        .get("/support/queries/get")
        .then((response) => {
          this.queries = response.data;
          this.$Progress.finish()
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
.list {
  width: 100%;
  overflow-x: auto;
}
.list table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}
.header_sb {
  background: #320c6a;
  border-radius: 25px 25px 0px 0px;
}
th,
td {
  padding: 8px;
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
tr {
  background-color: #2C0A64;
  &:first-child {
    background-color: #310C6A;
  }
  &:nth-child(even) {
    background-color: #1e0453;
  }
}


.table_head_id {
  padding: 20px;
  width: 50px;
  border-top-left-radius: 8px;
  align-items: center;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  text-transform: capitalize;
}
.table_head_date {
  height: 50px;
  min-width: 100px;
  text-align: left;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  text-transform: capitalize;
}

.table_head_time {
  height: 50px;
  min-width: 100px;
  text-align: left;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  text-transform: capitalize;
}

.table_head_query {
  height: 50px;
  min-width: 100px;
  text-align: left;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  text-transform: capitalize;
}

.table_head_action {
  width: 150px;
  border-top-right-radius: 8px;
  align-items: center;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  text-transform: capitalize;
}

/*  */

.odd_view {
  background: #1e0453 0% 0%;
}
.even_view {
  background: #2c0a64 0% 0%;
  opacity: 0.99;
}

/*  */

.table_content_id {
  padding: 25px;
  font: 19px/29px Poppins;
  font-size: 16px;
  text-align: left;
}

.table_content_date {
  display: flex;
  align-items: center;
  font: 600 16px/25px Poppins;
}

.table_content_time {
  text-transform: capitalize;
  align-items: center;
  font: 600 16px/25px Poppins;
  letter-spacing: 0px;
  text-align: left;
}
.table_content_query {
  text-transform: capitalize;
  align-items: center;
  font: 14px/21px Poppins;
  letter-spacing: 0px;
  text-align: left;
  min-width: 300px;
}

.table_content_action_view_button {
  border-radius: 5px;
  border: none;
  width: 86px;
  height: 32px;
  color: #5a5656;
  text-align: center;
  font: 14px/21px Poppins;
  cursor: pointer;
  background-color: #f0f0f0;
}
</style>