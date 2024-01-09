<template>
  <!-- Random Rewards -->
  <div class="random_rewards">
    <div class="heading_wrap">
      <div class="heading">Random Rewards</div>
      <!-- <div class="arrow" @click="close()">
        <img src="../assets/NewProfile/close-icon.svg" />
      </div> -->
    </div>
    <div class="inner-content">
      Play a game win random Rewards and win extraordinary prizes.
    </div>
    <div class="subscription_card_wrap">
      <div
        class="subscription_card"
        v-for="(random, index) in randomDetails"
        :key="index"
        @click="expandcard(index)"
        v-bind:class="{ active: isActive === index }"
      >
        <div class="subscription_background_card1">
          <img src="@/assets/Marketplace/card-left.png" />
        </div>
        <!-- <div
            class="split1"
            v-for="(random, index) in randomDetails"
            :key="index"
            @click="expandcard(index)"
            v-bind:class="{ active: isActive === index }"
        > -->
        <div class="split-three">
          <div class="random-image">
            <!-- <img src="/img/assets/Dashboard/LeaderboardWinners.png" /> -->
             <img
                :src="`https://ps-mg.s3.amazonaws.com/${random.logo}`"
                alt="logo"
              />
          </div>
          <div class="random-content">
            <div class="random-content-heading">{{ random.name }}</div>
            <div class="random-content-text" v-html="random.description">
              <!-- <div v-html="random.description"></div> -->
            </div>
            <v-col class="text-right">
              <v-btn class="random-button" @click="joinEvent(random)"
                >Join Now</v-btn
              >
            </v-col>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- <div class="inner-split">
      <div
        class="split1"
        v-for="(random, index) in randomDetails"
        :key="index"
        @click="expandcard(index)"
        v-bind:class="{ active: isActive === index }"
      >
        <div class="split-three">
          <div class="random-image">
            <img src="/img/assets/Dashboard/LeaderboardWinners.png" />
          </div>
          <div class="random-content">
            <div class="random-content-heading">{{ random.name }}</div>
            <div class="random-content-text">
              {{ random.description }}
            </div>
            <v-col class="text-right">
              <v-btn class="random-button" @click="joinEvent(random)"
                >Join Now</v-btn
              >
            </v-col>
          </div>
        </div>
      </div>
    </div> -->

    <JoinPopup
      v-if="isJoinPopup"
      @closePopup="closeDialog"
      :random="randomPopupData"
    />
    <JoinRandomRaffle
      :random="randomPopupData"
      :is-join-random-raffle-popup-open.sync="isJoinRandomRafflePopupOpen"
    />
  </div>
</template>

<script>
import axios from "axios";
import JoinPopup from "./randomdrop/JoinRandomDropPopup.vue";
import JoinRandomRaffle from "./randomdrop/JoinRandomRaffle.vue";

export default {
  name: "RandomDrop",
  components: {
    JoinPopup,
    JoinRandomRaffle,
  },
  data() {
    return {
      randomDetails: [],
      isActive: 0,
      isJoinPopup: false,
      isJoinRandomRafflePopupOpen: false,
      randomPopupData:{}
    };
  },
  methods: {
    getRandom() {
      axios.post("/random-drop/find/all", { criteria: {} }).then((res) => {
        res.data.map((elem) => {
          this.randomDetails.push(elem);
        });
      });
    },
    joinEvent(random) {
      this.randomPopupData = random;
      if (random?.isRandomRaffle) {
        this.isJoinRandomRafflePopupOpen = true;
      } else {
        this.isJoinPopup = true;
      }
    },
    closeDialog() {
      this.isJoinPopup = false;
    },
    expandcard(index) {
      this.isActive = index;
    },
    // closeRandomDrop() {
    //   this.$emit("closeRandomDrop");
    // },
    close() {
      this.$emit("closeRandomPopup");
    },
  },
  mounted() {
    this.getRandom();
  },
};
</script>

<style lang="scss" scoped>
/* Random reward */
.random_rewards {
  // position: absolute;
  // width: 100%;
  // top: 100%;
  // background: #1b1b1b;
  padding: 25px;
  margin: 0 auto;
  // border-radius: 10px;
  // background: rgba(19, 19, 19, 0.7);
  // backdrop-filter: blur(7px);
  // z-index: 6;
}
.heading_wrap {
  padding-bottom: 10px;
  border-bottom: 1px solid #9e9e9e66;
  letter-spacing: 0px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.heading {
  text-transform: capitalize;
  font-style: normal;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  // text-align: left;
}
.arrow {
  cursor: pointer;
  font-size: 20px;
  color: #ffffff;
}

.inner-content {
  margin: 20px 0px;
  font: normal normal 700 14px/22px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.inner-split {
  display: flex;
  //   margin: 10px;
  flex-direction: row;
  overflow: hidden;
  height: 340px;
  /* width: calc(100% - 100px); */
  .split1,
  .split2 {
    // background: linear-gradient(360deg, rgba(21, 1, 51, 1) 20%, #e911d6 100%);
    background: linear-gradient(350deg, #ffffff 20%, #8369ec 100%);
    // padding: 20px 20px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    &.active {
      flex-grow: 100;
      transform: scale(1);
      // max-width: 700px;
      margin: 0px;
      border-radius: 10px;
      .split-three {
        top: 20px;
        left: 25px;
        bottom: 20px;
        right: 25px;
        padding: 55px 30px 30px 15px;
        .random-content > div {
          left: 20px;
          opacity: 1;
        }
      }
    }
    &:not(.active) {
      border-radius: 10px;
      width: 100px;
      cursor: pointer;
      .split-three {
        top: 7px;
        left: 7px;
        bottom: 7px;
        right: 7px;
        .random-image {
          min-width: 75px;
        }
        .random-content > div {
          left: 20px;
          opacity: 0;
        }
      }
    }
    .split-three {
      //   background: #19003f;
      background: #1b1b1b;
      display: flex;
      flex-wrap: nowrap;
      padding: 20px 0px 5px 1px;
      border-radius: 4px;
      position: absolute;
      right: 0px;
      transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      .random-image {
        display: flex;
        flex-direction: row;
        min-width: 70px;
        height: 80px;
        padding-left: 10px;
      }
      .random-content {
        color: #fff;
        width: 80%;
        display: flex;
        flex-direction: column;
        > div {
          position: relative;
          transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
            opacity 0.5s ease-out;
        }
        .random-content-heading {
          font: normal normal 600 16px/20px Poppins;
          padding-bottom: 3px;
        }
        .random-content-text {
          font: normal normal normal 9px/16px Poppins;
          transition-delay: 0.1s;
          color: #ffffff;
        }
        .text-right {
          padding: unset;
        }
        .random-button {
          background: transparent;
          border: 0.5px solid #8369ec;
          border-radius: 5px;
          color: #ffffff;
          font: normal normal normal 12px/16px Poppins;
          padding: 8px 20px;
          text-transform: capitalize;
          height: 35px;
          top: 20px;
        }
        .random-button:hover {
          background: #8369ec;
          font-weight: 700;
          color: #ffffff;
        }
      }
    }
  }
}
@media only screen and (min-width: 1700px) {
  .random_rewards {
    width: 80%;
  }
  .inner-split {
    height: 330px;
    .split1,
    .split2 {
      &.active {
        .split-three {
          padding: 50px 30px 30px 30px;
        }
      }
    }
  }
}
@media only screen and (max-width: 360px), (max-width: 1250px) {
  .random_rewards {
    width: 100%;
    // height: 750px;
    margin-bottom: 10px;
  }
  .inner-split {
    display: flex;
    margin: 0px;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: auto;
    .split1,
    .split2 {
      margin-bottom: 10px;
      padding: 0px 0px;
      background: none;
      &.active {
        flex-grow: 100;
        transform: scale(1);
        margin: 0px;
        border-radius: 10px;
        width: auto;
        height: fit-content;
        border: 3px solid #7255e9;
        .split-three {
          top: 0px;
          left: 0px;
          bottom: 0px;
          right: 0px;
          padding: 10px 0px 0px 0px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: unset;
          .random-image {
            height: 70px;
            display: flex;
            align-items: center;
          }
          .random-content {
            padding: 5px 15px 30px 15px;
            width: 100%;
          }
          .random-content > div {
            left: 0px;
            opacity: 1;
            // padding-left: 10px;
          }
        }
      }
      &:not(.active) {
        // border-radius: 0px;
        width: unset;
        height: 70px;
        border: 2px solid #7255e9;
        .split-three {
          top: 0px;
          left: 0px;
          bottom: 0px;
          right: 0px;
          padding: 3px 0px;
          //   height: 75px;
          .random-image img {
            height: 60px;
            width: 100%;
          }
          .random-content > div {
            left: 20px;
            opacity: 0;
          }
        }
      }
      .split-three {
        // background: #45108a;
        background: #1b1b1b;
      }
    }
    // .split1 {
    //   margin-right: 0px;
    // }
  }
}

.subscription_card_wrap {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  margin: 25px 0 30px 0;
  grid-gap: 1rem 1rem;
}
.subscription_card {
  position: relative;
  // width: 330px;
  height: 400px;
  background: linear-gradient(
    143.67deg,
    rgba(78, 106, 240, 0.3) -65.58%,
    rgba(174, 85, 244, 0.3) 112.26%
  );
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.subscription_card:hover {
  transform: scale(1.09);
  transition: all 0.5s ease-in-out;
}
.subscription_background_card1 {
  position: absolute;
  bottom: 0;
  right: 0;
}
.split-three {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //   background: #19003f;
  // background: #1b1b1b;
  // display: flex;
  // flex-wrap: nowrap;
  // padding: 20px 0px 5px 1px;
  // border-radius: 4px;
  // position: absolute;
  // right: 0px;
  // transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  .random-image {
    display: flex;
    flex-direction: row;
    min-width: 70px;
    height: 80px;
    padding-left: 10px;
    padding-top: 20px;
  }
  .random-content {
    color: #fff;
    width: 80%;
    display: flex;
    flex-direction: column;
    > div {
      position: relative;
      transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
        opacity 0.5s ease-out;
    }
    .random-content-heading {
      font: normal normal 600 16px/20px Poppins;
      padding-bottom: 3px;
    }
    .random-content-text {
      font: normal normal normal 9px/16px Poppins;
      transition-delay: 0.1s;
      color: #ffffff;
      text-align: justify;
    }
    .text-right {
      // padding: unset;
      position: absolute;
    bottom: 0;
    left: 0;
    }
    .random-button {
      background: transparent;
      border: 0.5px solid #8369ec;
      border-radius: 5px;
      color: #ffffff;
      font: normal normal normal 12px/16px Poppins;
      padding: 8px 20px;
      text-transform: capitalize;
      height: 35px;
      bottom: 20px;
    }
    .random-button:hover {
      background: #8369ec;
      font-weight: 700;
      color: #ffffff;
    }
  }
}
</style>
