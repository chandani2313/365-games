<template>
  <div class="list">
    <table class="ranking">
      <tr class="header_sb">
        <th class="table_head_id">S.no</th>
        <th class="table_head_time">Tournament</th>
        <th class="table_head_time">UserName</th>
        <th class="table_head_time">Rank</th>
        <th class="table_head_date">Gem</th>
      </tr>
      <template v-if="prize.length">
        <tr v-for="prizeList,index in prize" :key="prizeList._id">
          <td class="table_content_id">{{ index + 1 }}</td>
          <td class="table_content_id">{{ prizeList.name }}</td>
          <td class="table_content_id">
            <div v-if="prizeList.winner">{{ prizeList.winner.username }}</div>
            <div v-else>{{ "" }}</div>
          </td>
          <td class="table_content_id">{{ prizeList.rank }}</td>
          <td class="table_content_id">{{ prizeList.gem }}</td>
        </tr>
      </template>
    </table>
    
    <!-- <v-data-table
      dark
      style="background: rgb(48, 11, 105); margin-top: 1rem;color: white;"
      :headers="headers"
      :items="prize"
    >
      <template v-slot:[`item._id`]="{ item }">
        {{ displayIndex(item) }}
      </template>
      <template v-slot:[`item.profileImage`]="{ item }">
        <div class="user_img">
          <img
            :src="
              item.profileImage
                ? 'https://ps-mg.s3.amazonaws.com/' + item.profileImage
                : 'https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg'
            "
          />
        </div>
      </template> 
    </v-data-table> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "LeaderboardWinners",
data() {
    return {
      prize:[],
    };
  },
methods:{
    getTournamentDetails() {
        axios
        .post('/reward/find/all', {
            criteria: {
                type: 'Leaderboard',
                rewardFor: this.$route.params.id
            },
        })
        .then((response) => {
          console.log("tour prize detail ",  response.data);
          this.prize = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
},
mounted() {
    this.getTournamentDetails();
  }
}
</script>

<style scoped lang="scss">
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
  color: #fdfdfd;
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
  border-top-left-radius: 25px;
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
  border-top-right-radius: 25px;
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
@media screen and (max-width: 640px) {
  .table_space1 {
    height: 20px;
  }
}
</style>
