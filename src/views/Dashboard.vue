<template>
  <fragment>
    <div v-if="subscriber === true">
      <SubscribePopup />
    </div>
    <div v-else>
      <div class="caurosel">
        <Slider class="slide"></Slider>
      </div>
      <div class="content">
        <div class="content1">
          <div class="leader">
            <div class="heading mb-3">Recent Random Reward Winner</div>
            <!-- <v-slide-group dark show-arrows>
              <v-slide-item v-for="i in 20" :key="i">
                <v-sheet color="#330E6B" class="mx-2 white-left">
                  <v-row class="ma-0 pl-6 pr-12 py-2 leader-slide">
                    <v-col style="position: relative" class="ma-0 pa-0 pr-10">
                      <v-avatar tile>
                        <v-img
                          src="/img/assets/Dashboard/Last-Week-Leaderboard-Winners.png"
                          width="20px"
                        >
                        </v-img>
                      </v-avatar>
                      <v-img
                        class="avatar-image"
                        src="/img/assets/Dashboard/LeaderboardWinners.png"
                        width="33px"
                      ></v-img>
                    </v-col>
                    <v-col class="ma-0 pa-0 last-week">
                      <div class="last-week-content1">John Doe</div>
                      <div class="last-week-content2">
                        500
                        <span
                          ><img
                            style="padding-left: 5px"
                            width="25px"
                            src="/img/assets/Gem/gem_icon.png"
                        /></span>
                      </div>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-slide-item>
            </v-slide-group> -->

            <v-slide-group dark show-arrows>
              <v-slide-item
                v-for="(winnerList, i) in randomRewardWinner"
                :key="i"
              >
                <v-sheet color="#330E6B" class="mx-2 white-left">
                  <v-row class="ma-0 pl-6 pr-12 py-2 leader-slide">
                    <v-col style="position: relative" class="ma-0 pa-0 pr-10">
                      <v-avatar tile>
                        <v-img
                          :src="
                            'https://ps-mg.s3.amazonaws.com/' +
                            winnerList.winner.profileImage
                          "
                          width="20px"
                        >
                        </v-img>
                      </v-avatar>
                      <v-img
                        class="avatar-image"
                        src="/img/assets/Dashboard/LeaderboardWinners.png"
                        width="33px"
                      ></v-img>
                    </v-col>
                    <v-col class="ma-0 pa-0 last-week">
                      <div class="last-week-content1">
                        {{ winnerList.winner.username }}
                      </div>
                      <div class="last-week-content2">
                        {{ winnerList.gem }}
                        <span
                          ><img
                            style="padding-left: 5px"
                            width="25px"
                            src="/img/assets/Gem/gem_icon.png"
                        /></span>
                      </div>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-slide-item>
            </v-slide-group>
          </div>
          <!-- Random Rewards -->
          <div class="leader">
            <div class="heading">
              <div>Random Rewards</div>
              <div class="see-all">See All</div>
            </div>
            <div class="inner-content">
              Play a game win random Rewards and win extraordinary prizes.
            </div>
            <div class="inner-split">
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
                      <!-- {{ random.description }} -->
                      <span v-html="random.description"></span>
                    </div>
                    <v-col class="text-right">
                      <v-btn
                        color="#330E6B"
                        right
                        class="random-button"
                        @click="joinEvent(random)"
                        >Join Now</v-btn
                      >
                    </v-col>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Featured LeaderBoards -->
          <div class="leader">
            <div class="heading">
              <div>Featured LeaderBoard</div>
              <router-link
                tag="div"
                class="see-all"
                :to="{ name: 'Leaderboard' }"
                exact
              >
                See All
              </router-link>
            </div>
            <div class="leader-inner-split">
              <Leaderboard :leaderboards="leaderboards" />
            </div>
          </div>
        </div>
        <div class="content2 mt-2">
          <VerticleSlider />
        </div>
      </div>
      <!-- Featured Tournaments  -->
      <div class="leader">
        <div class="heading">
          <div>Featured Tournaments</div>
          <router-link
            tag="div"
            class="see-all"
            :to="{ name: 'Tournament' }"
            exact
          >
            See All
          </router-link>
        </div>
        <div class="leader-inner-split">
          <Tournament :tournaments="tournaments" />
        </div>
      </div>
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
  </fragment>
</template>

<script>
import axios from "axios";
import Slider from "../components/SliderPage.vue";
import { Fragment } from "vue-fragment";
import Leaderboard from "../views/LeaderboardCard.vue";
import Tournament from "../views/TournamentCard.vue";
import VerticleSlider from "../components/Verticle-slider.vue";
import JoinPopup from "../components/randomdrop/JoinRandomDropPopup.vue";
import JoinRandomRaffle from "../components/randomdrop/JoinRandomRaffle.vue";
// import SubList from '../views/gem/GemPurchase.vue';
import SubscribePopup from "../views/gem/SubscribePopup.vue";

export default {
  components: {
    Slider,
    Fragment,
    Leaderboard,
    Tournament,
    JoinPopup,
    VerticleSlider,
    SubscribePopup,
    JoinRandomRaffle,
  },
  data() {
    return {
      leaderboards: [],
      tournaments: [],
      isJoinPopup: false,
      isJoinRandomRafflePopupOpen: false,
      randomDetails: [],
      randomPopupData: {},
      randomRewardWinner: [],
      subscriber: false,
      isActive: 0,
    };
  },
  methods: {
    GetLeaderboards() {
      axios
        .post("/leaderboard/find/all", {
          criteria: {},
          limit: 3,
          sort: { createdAt: -1 },
        })
        .then((response) => {
          this.leaderboards = response.data;
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
    GetTournaments() {
      this.$Progress.start();
      axios
        .post("/tournament/find/all", {
          criteria: {},
          limit: 4,
          sort: { createdAt: -1 },
        })
        .then((response) => {
          this.tournaments = response.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e);
          }
        });
    },
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
    getRandomRewardWinner() {
      axios.get("/random-drop/winners").then((res) => {
        res.data.map((elem) => {
          this.randomRewardWinner.push(elem);
        });
      });
    },
    subscribedUser() {
      // axios
      //   .get(`/subscription/check/`)
      //   .then((response) => {
      //     this.subscriber = response.data.isSubscribed;
      //     console.log("subscription", response.data)
      //   })
      //   .catch((e) => {
      //     console.log("err", e.response);
      //     if (e.response.status === 400) {
      //       // this.$router.push('/');
      //     }
      //   });
      this.subscriber = true;
    },
    expandcard(index) {
      this.isActive = index;
    },
  },
  mounted() {
    this.GetLeaderboards();
    this.GetTournaments();
    this.getRandom();
    this.getRandomRewardWinner();
    this.subscribedUser();
   },
};
</script>
<style lang="scss" scoped>
::v-deep.v-slide-group.v-item-group {
  animation: slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-right {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.white-left[data-v-22ba47ca]::before {
  background-color: #ce0daef3;
}
::v-deep.v-slide-group.v-item-group > .v-slide-group__next {
  justify-content: flex-end;
}
::v-deep.v-slide-group.v-item-group > .v-slide-group__prev {
  justify-content: flex-start;
}
.see-all {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.see-all:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: -1px;
  right: -20px;
  transition: 0.5s;
}
.see-all:hover {
  padding-right: 24px;
  padding-left: 8px;
}
.see-all:hover:after {
  opacity: 1;
  right: 10px;
}
.white-left {
  border-radius: 0px 5px 5px 0px;
  &::before {
    background-color: white;
    width: 6px;
    content: "";
    position: absolute;
    z-index: 1;
    height: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
.caurosel {
  margin: 20px 20px;
}
.slide {
  border-radius: 5px;
  height: 200px;
}

.content {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.content1 {
  width: 80%;
}
.leader {
  background-color: #1e0741;
  margin: 10px 20px;
  border-radius: 5px;
  padding: 20px;
  color: #fff;
}
.heading {
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  font: normal normal 600 15px/18px Poppins;
  letter-spacing: 0px;
  color: #f9f9f9;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.see-all {
  font: normal normal normal 14px/21px Poppins;
  cursor: pointer;
}
.random-see {
  font: normal normal normal 14px/21px Poppins;
}
// .heading1 {
//     padding-bottom: 10px;
//     border-bottom: 1px solid #fff;
//     font: normal normal 600 15px/18px Poppins;
//     letter-spacing: 0px;
//     color: #F9F9F9;
// }
.inner-content {
  margin: 10px 0px;
  font: normal normal medium 14px/21px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.leader-slide {
  margin: 10px 10px;
  display: flex;
  flex-wrap: wrap;
}
.card-size {
  width: 30%;
}
// .last-week-item {
//     padding:unset;
// }
.left-border {
  padding: unset;
  border: 5px solid #fff;
  box-sizing: border-box;
  flex: unset;
  margin-right: 10px;
}
.avatar-image {
  position: absolute;
  top: 19px;
  left: 35px;
}
.last-week {
  color: #fff;
  margin: 0px 5px 0px 40px;
  .last-week-content1 {
    font: normal normal bold 18px/22px Poppins;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
  .last-week-content2 {
    font: normal normal 600 18px/22px Poppins;
    display: flex;
  }
}

// .inner-split{
//   display: flex;
//   flex-wrap: nowrap;
//   margin: 10px;
//   .split1,
//   .split2 {
//     background: linear-gradient(360deg, rgba(21, 1, 51, 1) 20%, #e911d6 100%);
//     padding: 20px 25px;
//     border-radius: 4px;
//     .split-three {
//       background: #19003f;
//       display: flex;
//       flex-wrap: nowrap;
//       padding: 20px 0px 5px 20px;
//       border-radius: 4px;
//       .random-image {
//         width: 25%;
//       }
//       .random-content {
//         color: #fff;
//         width: 65%;
//         .random-content-heading {
//           font: normal normal 600 12px/14px Poppins;
//           padding-bottom: 3px;
//         }
//         .random-content-text {
//           font: normal normal normal 11px/13px Poppins;
//         }
//         .text-right {
//           padding: unset;
//         }
//         .random-button {
//           background: #330e6b;
//           border-radius: 4px;
//           color: #fff;
//           font: normal normal normal 10px/16px Poppins;
//           padding: 2px 10px;
//           text-transform: capitalize;
//           height: 20px;
//         }
//         .random-button:hover {
//           background: #e911d6;
//           color: white;
//         }
//      }
//    }
//   }
//   .split1 {
//     margin-right: 10px;
//   }
//   .split2 {
//     margin-left: 10px;
//   }
// }
.inner-split {
  display: flex;
  margin: 10px;
  flex-direction: row;
  overflow: hidden;
  height: 330px;
  // width: calc(100% - 100px);
  .split1,
  .split2 {
    background: linear-gradient(360deg, rgba(21, 1, 51, 1) 20%, #e911d6 100%);
    // padding: 20px 20px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    cursor: pointer;
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
        padding: 65px 30px 30px 30px;
        .random-content > div {
          left: 20px;
          opacity: 1;
        }
      }
    }
    &:not(.active) {
      border-radius: 10px;
      width: 100px;
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
      background: #19003f;
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
        width: 65%;
        display: flex;
        flex-direction: column;
        > div {
          position: relative;
          transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
            opacity 0.5s ease-out;
        }
        .random-content-heading {
          font: normal normal 600 12px/14px Poppins;
          padding-bottom: 3px;
        }
        .random-content-text {
          font: normal normal normal 11px/13px Poppins;
          transition-delay: 0.1s;
        }
        .text-right {
          padding: unset;
        }
        .random-button {
          background: #330e6b;
          border-radius: 4px;
          color: #fff;
          font: normal normal normal 10px/16px Poppins;
          padding: 8px 20px;
          text-transform: capitalize;
          height: 30px;
        }
        .random-button:hover {
          background: #fd01e8;
          color: white;
        }
      }
    }
  }
}
.leader-inner-split {
  margin: 10px 0px;
  .leader-split1 {
    margin: 5px;
    width: 33%;
    .leader-main-image {
      border-radius: 5px;
      opacity: 0.65;
      width: 100%;
    }
    .leader-head-content {
      font: normal normal bold 11px/13px Poppins;
      letter-spacing: 0px;
      color: #1e0741;
      text-transform: uppercase;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #0000000f;
      border-radius: 1px;
      padding: 10px;
      text-align: center;
    }
    .leader-bottom-content {
      background: #330e6b;
      border-radius: 0px 0px 4px 4px;
      padding: 20px;
      .bottom-flex {
        display: flex;
        flex-wrap: wrap;
        .prize-flex {
          display: flex;
          flex-wrap: wrap;
          width: 50%;

          .leader-image {
            background: #45108a;
            // padding:10px;
            border-radius: 4px;
            width: 18%;
            height: 25px;
            margin: 0px 10px 0px 0px;
          }
          .prize-content {
            width: 70%;
            .prize-head-content {
              font: normal normal normal 10px/13px Poppins;
              opacity: 0.49;
            }
            .prize-body-content {
              font: normal normal 600 12px/15px Poppins;
            }
          }
        }
      }
      .bottom-flex-tournament {
        margin: 20px 0px 0px 0px;
        text-align: center;
        .button-text-color {
          color: #330e6b;
          width: 70%;
        }
      }
    }
  }
}
.content2 {
  width: 18%;
  background-color: #1e0741;
  border-radius: 5px;
}

@media only screen and (max-width: 360px), (max-width: 800px) {
  .inner-split {
    display: flex;
    margin: 0px;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 300px;
    .split1,
    .split2 {
      margin-bottom: 10px;
      padding: 20px 40px;
      background: none;
      &.active {
        flex-grow: 100;
        transform: scale(1);
        margin: 0px;
        border-radius: 10px;
        width: unset;
        .split-three {
          top: 0px;
          left: 0px;
          bottom: 0px;
          right: 0px;
          padding: 25px 0px 0px 5px;
          .random-image {
            height: 70px;
          }
          .random-content > div {
            left: 0px;
            opacity: 1;
            padding-left: 10px;
          }
        }
      }
      &:not(.active) {
        border-radius: 10px;
        width: unset;
        .split-three {
          top: 0px;
          left: 0px;
          padding: 10px 10px;
          height: 50px;
          .random-image {
            height: 30px;
          }
          .random-content > div {
            left: 20px;
            opacity: 0;
          }
        }
      }
      .split-three {
        background: #45108a;
      }
    }
    .split1 {
      margin-right: 0px;
    }
  }
}
@media only screen and (max-width: 700px) {
  .caurosel {
    width: 98%;
    margin: 20px auto;
    object-fit: cover;
  }
  .last-week {
    color: #fff;
    margin: 0px 5px 0px 20px;
    .last-week-content1 {
      font-size: 16px;
    }
    .last-week-content2 {
      font-size: 16px;
    }
  }
  .heading {
    font: normal normal 600 12px/15px Poppins;
    padding-bottom: 5px;
  }
  .random-see {
    font: normal normal normal 12px/19px Poppins;
  }
  .card-size {
    width: 60%;
  }
  .inner-content {
    font-size: 10px;
  }
  .content1 {
    width: 100%;
  }
  .content2 {
    display: none;
  }
  .leader {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
  }
  // .inner-split {
  //   display: flex;
  //   flex-wrap: wrap;
  //   margin: 5px;
  //   .split1,
  //   .split2 {
  //     margin-bottom: 10px;
  //     padding: 0px 0px;
  //     .split-three {
  //       background: #45108a;
  //       width: 100%;
  //     }
  //   }
  //   .split1 {
  //     margin-right: 0px;
  //   }
  //   .split2 {
  //     margin-left: 0px;
  //   }
  // }
  .leader-inner-split {
    .leader-split1 {
      width: 47%;
      margin: 3px;
      .leader-main-image {
        height: 120px;
      }
      .leader-head-content {
        font: normal normal bold 8px/13px Poppins;
        padding: 5px;
      }
      .leader-bottom-content {
        padding: 5px;
        .bottom-flex {
          .prize-flex {
            .leader-image {
              height: 20px;
              margin: 0px 5px 0px 0px;
            }
            .prize-content {
              .prize-head-content {
                font: normal normal normal 7px/13px Poppins;
                opacity: 0.49;
              }
              .prize-body-content {
                font: normal normal 600 8px/15px Poppins;
              }
            }
          }
        }
        .bottom-flex-tournament {
          margin: 30px 0px 0px 0px;
          text-align: center;
          .button-text-color {
            color: #330e6b;
            width: 80%;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>