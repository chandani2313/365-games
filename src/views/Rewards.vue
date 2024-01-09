<template>
  <div class="support_page">
    <div class="flex_wraper">
    <div class="title_support_header">Rewards</div>
       <div class="inner_wrapright">
          <div class="drop_down mobile">
            <select class="select_option" @change="onChange($event)">
              <option value="0">All</option>
              <option value="1">Claimed</option>
              <option value="2">UnClaimed</option>
            </select>
          </div>
        </div>
        </div>
    <div class="inner_container">
      <div class="inner_subshell">
        <div class="inner_subwrap" :class="{ active: currentStatusTab === 0 }" @click="getAllRewards(0)">
          All
        </div>
        <div class="inner_subwrap" :class="{ active: currentStatusTab === 1 }" @click="getcollectedRewards(1)">
          Claimed
        </div>
        <div class="inner_subwrap" :class="{ active: currentStatusTab === 2 }" @click="getUncollectedRewards(2)">
          Unclaimed
        </div>
      </div>
      <div class="full_cover">
        <div class="rewards_container">
          <div class="image_wrapper">
            <img src="/img/assets/Gem/gem_box.png" alt="" />
            <img src="/img/assets/Gem/gem_box.png" alt="" />
            <img src="/img/assets/Gem/gem_box.png" alt="" />
            <img src="/img/assets/Gem/gem_box.png" alt="" />
          </div>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <div class="level_slider">
                  <div class="level_slider_inner"></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="list">
          <table class="ranking">
            <tr class="header_sb">
              <th class="table_head_id">S.NO</th>
              <th class="table_head_query">Name</th>
              <th class="table_head_date">Type</th>
              <th class="table_head_date">Reward</th>
              <!-- <th class="table_head_time">Cash</th> -->
              <th class="table_head_action">Status</th>
            </tr>
            <tr v-for="(reward,i) in rewards" :key="i">
              <td class="table_content_id">{{ i+1 }}.</td>
              <td>
                <div class="table_content_query">
                  {{reward.name}}
                </div>
              </td>
              <td>
                <div class="table_content_date">
                  <div class="table_content_time">{{reward.type}}</div>
                </div>
              </td>
              <td v-if="reward.gem">
                <div class="table_content_date">
                  <div class="table_content_time">{{reward.gem}} gems</div>
                </div>
              </td>
              <td v-else>
                <div class="table_content_date">
                  <div class="table_content_time">${{reward.cash}}</div>
                </div>
              </td>
              <!-- <td><div class="table_content_time">100$</div></td> -->
              <td>
                <button
                  type="button"
                  class="table_content_action_view_button"
                  :class="{ collected_btn: reward.status === 'collected' }"
                  @click="collectEvent(reward)"
                >
                  {{changeStatus(reward.status)}}
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <CollectRewardPopup 
      v-if="isCollectPopup"
      @closePopup="closeDialog"
      :reward="collectPopupData"
    />
    <v-snackbar v-model="snackbar" top elevation="24" :color="color" :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import CollectRewardPopup from "../components/reward/collectRewardPopup.vue";
export default {
  name: "Rewards",
  components: {
    CollectRewardPopup,
  },
  data() {
    return {
      currentStatusTab: 0,
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
     onChange(event) {
            if(event.target.value == 0) {
              this.getAllRewards(0)
            }
            if(event.target.value == 1) {
              this.getcollectedRewards(1)
            }
            if(event.target.value == 2) {
              this.getUncollectedRewards(2)
            }
        },
    changeStatus(status) {
      if(status === 'not-collected') {
        return 'Collect'
      }
       if(status === 'collected') {
        return 'Collected'
      }
    },
    getAllRewards(index) {
      this.$Progress.start()
        this.currentStatusTab = index;
      const criteria = {};
      axios
        .post("/reward/get", {
          criteria,
        })
        .then((response) => {
          this.rewards = response.data;
          this.$Progress.finish()
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
     getUncollectedRewards(index) {
        this.currentStatusTab = index;
      const criteria = {status: 'not-collected'};
      axios
        .post("/reward/get", {
          criteria,
        })
        .then((response) => {
          this.rewards = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
       getcollectedRewards(index) {
        this.currentStatusTab = index;
      const criteria = {status: 'collected'};
      axios
        .post("/reward/get", {
          criteria,
        })
        .then((response) => {
          this.rewards = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    collectEvent(reward) {
      if(reward?.status === 'collected') {
        this.isCollectPopup = false;
      } else {
        this.collectPopupData = reward;
        this.isCollectPopup = true;
      }
    },
    closeDialog() {
      this.isCollectPopup = false;
    },
  },
  mounted() {
    this.getAllRewards(0)
  }
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
.rewards_container {
  background: #310c6a;
  padding: 25px;
  margin: 10px 2px 20px 2px;
  border-radius: 5px;
}
.image_wrapper {
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 8rem;
  padding: 0;
}
.level_slider_inner:after {
  top: -8px;
  right: 0;
  width: 31px;
  height: 33px;
}

.level_slider {
  position: relative;
  height: 20px;
  margin: 0;
  background-color: white;
  // border-radius: 10px;
  box-shadow: none;
  overflow: visible;
  width: 100%;
}

.level_slider_inner {
  position: relative;
  background: #1e0741;
  height: 20px;
  margin: 0;
  box-shadow: none;
  width: 50%;
  transition: width 0.6s ease;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
}
.level_slider_inner::after {
  content: "";
  position: absolute;
  top: -8px;
  right: -4px;
  width: 33px;
  height: 33px;
  border-radius: 5px;
  background-color: #1e0741;
  border: 2px solid #ffffff;
}
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
  background-color: #2c0a64;
  &:first-child {
    background-color: #310c6a;
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
  // min-width: 300px;
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
.collected_btn{
  background-color: #534b93;
  color: white;
}
@media screen and (max-width: 1263px) {
  .full_cover {
    padding: 10px;
  }
}
@media screen and (max-width:450px) {
  .image_wrapper {
      grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  }
  .level_slider, .level_slider_inner{
    height: 15px;
  }
  .level_slider_inner::after{
    width: 25px;
    height: 27px;
  }
}
@media screen and (max-width: 768px) {
  .inner_subwrap {
    display: none;
  }
  .flex_wraper{
    display: flex;
    padding: 10px;
    justify-content: space-between;
  }
  select:not([multiple]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    /* background-image: url('../assets/dropdown.png'); */
    padding: 0.5em;
    padding-right: 1.5em;
    color: white;
    border: 1px solid;
    border-radius: 5px;
  }
  option {
    color: black;
  }
}
@media screen and (min-width: 780px) {
  .drop_down {
    display: none;
  }
}
</style>
