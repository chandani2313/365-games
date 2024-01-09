<template>
  <div>
    <div class="level_wrap">
      <div class="level_left">
        <div class="level_up_star" style="left: 0">
          <img src="@/assets/NewRewards/light-bg.png" />
          <span><img src="@/assets/NewRewards/star-light.png" /></span>
        </div>
        <div class="level_up_star" style="left: 31%">
          <img src="@/assets/NewRewards/light-bg.png" />
          <span><img src="@/assets/NewRewards/star-light.png" /></span>
        </div>
        <div class="level_up_star" style="right: 31%">
          <img src="@/assets/NewRewards/light-bg.png" />
          <span><img src="@/assets/NewRewards/star-light.png" /></span>
        </div>
        <div class="level_up_star" style="right: 0">
          <img src="@/assets/NewRewards/dark-bg.png" />
          <span><img src="@/assets/NewRewards/star-dark.png" /></span>
          <div class="level_up_star_mini">
            <img src="@/assets/NewRewards/dark-bg-mini.png" /><span
              ><img src="@/assets/NewRewards/drop-logo.png"
            /></span>
          </div>
        </div>
        <div class="level_left_inner"></div>
      </div>
    </div>
    <div class="list">
      <table class="ranking">
        <tr class="header">
          <th class="table_head">No</th>
          <th class="table_head">Name</th>
          <th class="table_head">Type</th>
          <th class="table_head">Reward</th>
          <th class="table_head">Status</th>
          <!-- <th class="table_head" style="width: 800px">Task description</th>
          <th
            class="table_head"
            style="padding-left: 100px; padding-right: 10px"
          >
            Rewards
          </th>
          <th
            class="table_head"
            style="padding-left: 60px; padding-right: 40px"
          >
            Status
          </th> -->
        </tr>
        <template>
          <tr class="content-bgcolor" v-for="(reward, i) in rewards" :key="i">
            <td class="table_content_id">{{ i + 1 }}.</td>
            <td class="table_content" style="color: #cdcadb">
              {{ reward.name }}
            </td>
            <td class="table_content" style="color: #ffffff">
              {{ reward.type }}
            </td>
            <td v-if="reward.gem" class="table_content" style="color: #ffffff">
              {{ reward.gem }} gems
            </td>
            <td v-else class="table_content" style="color: #ffffff">
              ${{ reward.cash }}
            </td>
            <td>
              <button type="button" class="table_content_action_view_button">
                {{ changeStatus(reward.status)
                }}<span><img src="@/assets/NewRewards/vector-logo.png" /></span>
              </button>
            </td>
          </tr>
        </template>
      </table>
      <div class="page_wrap">
        <v-pagination v-model="page" :length="5" circle></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Rewards",
  data() {
    return {
      page: 1,
      rewards: [],
      isCollectPopup: false,
      collectPopupData: {},
      color: "",
      snackbar: false,
      text: "",
      timeout: "-1",
    };
  },
  methods: {
    changeStatus(status) {
      if (status === "not-collected") {
        return "Collect";
      }
      if (status === "collected") {
        return "Collected";
      }
    },
    getCollectedRewards() {
      this.$Progress.start();
      const criteria = {status: 'collected'};
      axios
        .post("/reward/get", {
          criteria,
        })
        .then((response) => {
          this.rewards = response.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
  },
  mounted() {
    this.getCollectedRewards();
  },
};
</script>

<style lang="scss" scoped>
.level_wrap {
  margin: 80px 0 100px 0;
}
.level_left {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15px;
  margin: 0;
  background-color: #1b1b1b;
  border-radius: 10px;
  box-shadow: none;
  overflow: visible;
  width: 100%;
}

.level_left_inner {
  display: flex;
  justify-content: center;
  //   position: relative;
  background: #9672ff;
  height: 15px;
  margin: 0;
  border-width: 1px 0 0 0;
  border-radius: 10px;
  box-shadow: none;
  width: 75%;
  /* border: 1px solid #ffffff; */
  /* filter: drop-shadow(0 0 0.2rem #ffffff); */
  transition: width 0.6s ease;
}
.level_left_inner:after {
  top: -8px;
  right: 0;
  width: 31px;
  height: 33px;
}
.level_up_star {
  position: absolute;
  width: 90px;
  top: -36px;
  span {
    position: absolute;
    top: 26px;
    left: 26px;
  }
}
.level_up_star_mini {
  cursor: pointer;
  position: absolute;
  width: 60px;
  bottom: -5px;
  right: -20px;
  span {
    position: absolute;
    top: 18px;
    left: 13px;
  }
}
.list {
  width: 100%;
  overflow-x: auto;
  background: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 50px;
}
.list table {
  width: 100%;
  // border-collapse: collapse;
  // overflow-x: auto;
  border-collapse: separate;
  border-spacing: 0 20px;
}

.header {
  height: 30px;
}
.header th,
td {
  padding: 0px 25px;
  text-align: left;
}
th {
  align-items: center;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: left;
  text-transform: capitalize;
}
.header tr {
  border-radius: 25px 25px 0px 0px;
}
.content-bgcolor {
  background: linear-gradient(180deg, #161616 0%, rgba(40, 38, 38, 0.4) 100%);
  line-height: 115px;
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
  font: normal normal normal 18px/29px Poppins;
  letter-spacing: 0px;
  text-align: left;
  // color: #ffffff;
}
// .table_content_color {
//   color: #cdcadb;
// }
.table_content_action_view_button {
  font: normal normal normal 18px/29px Poppins;
  text-transform: capitalize;
  border: none;
  width: 194px;
  height: 64px;
  cursor: pointer;
  color: #27ae60;
  background: rgb(39, 174, 96, 0.1);
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 20px;
  }
}
.page_wrap {
  margin: 50px 0;
}
::v-deep .theme--light.v-pagination .v-pagination__item {
  background: rgb(14 14 14);
  color: #ffffff;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: none;
}
</style>