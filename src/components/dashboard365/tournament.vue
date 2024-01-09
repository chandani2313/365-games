<template>
  <div class="tournament_container">
    <div class="tournament_titel_outer">
      <div class="tournament_titel" @click="goToTournament()">tournament</div>
      <div class="arrow" @click="goToTournament()">
        <img src="../../assets/dashboard365/icon-arrow-right.svg" />
      </div>
    </div>
    <div class="tournaments_cards-container">
        <!-- <template v-for="i in 4">  -->
      <router-link
        v-for="tournament in tournaments"
        :key="tournament._id"
        tag="a"
        :to="{ name: 'TournamentDetails', params: { id: tournament._id } }"
        class="tournament_card_outer"
      >
        <!-- <div class="tournament_card_outer" v-for="tournament in tournaments" :key="tournament._id"> -->
        <div class="tournament_card">
          <div class="tournament_image">
            <img
            height="170"
              :src="'https://ps-mg.s3.amazonaws.com/' + tournament.assets.logo"
              alt=""
            />
            <div class="status">
              <span>{{ tournament.status }}</span>
            </div>
          </div>
          <div class="tournament_details">
            <div class="tournament_name">
              <div class="title_name">{{ tournament.name }}</div>
              <div class="right_players">
                <div class="money">
                  <div class="money_img">
                    <i class="fas fa-money-check-alt"></i>
                  </div>
                  <div class="amount"><span>&#36;</span><span>25K</span></div>
                </div>
                <div class="players">
                  <div class="players_img">
                    <img
                      src="../../assets/dashboard365/Head_to_Head.png"
                      alt=""
                    />
                  </div>
                  <div class="players_vs">5v5</div>
                </div>
              </div>
            </div>
            <div class="tournament_content">
              Join the {{ tournament.name }} tournment and get the change to win
              over {{ tournament.prizePool }} for this week
            </div>
            <div class="btn_platform">
              <div class="platforms_wrapper">
                <ul>
                  <li>
                    <a href="#"><i class="fab fa-google-play"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-apple"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-windows"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-xbox"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-playstation"></i></a>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <div class="icons_wrap"></div>
                <div class="join-button">
                  <button class="button">view</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </router-link>
        <!-- </template> -->

      <!-- <div class="tournament_card_outer">
            <div class="tournament_card">
                <div class="tournament_image">
                    <img src="../../assets/dashboard365/pubg2.png" alt="">
                        <div class="status">
                        <span>on going</span>
                    </div>
                </div>
                
                <div class="tournament_details">
                    <div class="tournament_name">
                        <div class="title_name">apex topper</div>
                        <div class="money">
                            <div class="money_img"> <img src="../../assets/dashboard365/Paycheque.png" alt=""></div>
                            <div class="amount"><img src="../../assets/dashboard365/25.png" alt=""></div>
                        </div>
                        <div class="players">
                            <div class="players_img">
                                <img src="../../assets/dashboard365/Head_to_Head.png" alt="">
                            </div>
                            <div class="players_vs">
                                <img src="../../assets/dashboard365/5v5.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="tournament_content">
                        Join the appex topper tournment and get the change to win over $50k for this week
                    </div>
                    <div class="btn_platform">
                        <div class="platforms_wrapper">
                            <ul >
                                <li><a href="#"><img src="../../assets/dashboard365/GooglePlay.png" alt="list item 1" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/IOS.png" alt="list item 2" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/Window.png" alt="list item 3" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/xbox-logo1.png" alt="list item 4" /></a></li>
                            </ul>
                        </div>
                        <div class="bottom">
                            <div class="icons_wrap"></div>
                            <div class="join-button"><button class="button">join</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tournament_card_outer">
            <div class="tournament_card">
                <div class="tournament_image">
                    <img src="../../assets/dashboard365/apex2.png" alt="">
                        <div class="status">
                        <span>on going</span>
                    </div>
                </div>
                <div class="tournament_details">
                    <div class="tournament_name">
                        <div class="title_name">apex topper</div>
                        <div class="money">
                            <div class="money_img"> <img src="../../assets/dashboard365/Paycheque.png" alt=""></div>
                            <div class="amount"><img src="../../assets/dashboard365/25.png" alt=""></div>
                        </div>
                        <div class="players">
                            <div class="players_img">
                                <img src="../../assets/dashboard365/Head_to_Head.png" alt="">
                            </div>
                            <div class="players_vs">
                                <img src="../../assets/dashboard365/5v5.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="tournament_content">
                        Join the appex topper tournment and get the change to win over $50k for this week
                    </div>
                    <div class="btn_platform">
                        <div class="platforms_wrapper">
                            <ul >
                                <li><a href="#"><img src="../../assets/dashboard365/GooglePlay.png" alt="list item 1" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/IOS.png" alt="list item 2" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/Window.png" alt="list item 3" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/xbox-logo1.png" alt="list item 4" /></a></li>
                            </ul>
                        </div>
                        <div class="bottom">
                            <div class="icons_wrap"></div>
                            <div class="join-button"><button class="button">join</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tournament_card_outer">
            <div class="tournament_card">
                <div class="tournament_image">
                    <img src="../../assets/dashboard365/apex2.png" alt="">
                        <div class="status">
                        <span>on going</span>
                    </div>
                </div>
                <div class="tournament_details">
                    <div class="tournament_name">
                        <div class="title_name">apex topper</div>
                        <div class="money">
                            <div class="money_img"> <img src="../../assets/dashboard365/Paycheque.png" alt=""></div>
                            <div class="amount"><img src="../../assets/dashboard365/25.png" alt=""></div>
                        </div>
                        <div class="players">
                            <div class="players_img">
                                <img src="../../assets/dashboard365/Head_to_Head.png" alt="">
                            </div>
                            <div class="players_vs">
                                <img src="../../assets/dashboard365/5v5.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="tournament_content">
                        Join the appex topper tournment and get the change to win over $50k for this week
                    </div>
                    <div class="btn_platform">
                        <div class="platforms_wrapper">
                            <ul >
                                <li><a href="#"><img src="../../assets/dashboard365/GooglePlay.png" alt="list item 1" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/IOS.png" alt="list item 2" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/Window.png" alt="list item 3" /></a></li>
                                <li><a href="#"><img src="../../assets/dashboard365/xbox-logo1.png" alt="list item 4" /></a></li>
                            </ul>
                        </div>
                        <div class="bottom">
                            <div class="icons_wrap"></div>
                            <div class="join-button"><button class="button">join</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "TheTournament",
  components: {},
  props: ["tournaments"],
  data() {
    return {};
  },
  methods: {
    goToTournament() {
      this.$router.push("/tournament");
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
.tournament_container {
  /* width: 480px; */
  width: 597px;
}

.tournament_titel_outer {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}
.tournament_titel {
  text-transform: capitalize;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
}
.arrow {
  cursor: pointer;
  font-size: 20px;
  color: #ffffff;
}

.tournaments_cards-container {
  /* grid-template-columns: repeat(auto-fill, minmax(257px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 1rem;
}
.tournament_card_outer:nth-child(3n + 1) {
  background-color: #9672ff;
}

.tournament_card_outer {
  background-color: #7255e9;
  border-radius: 10px;
  padding: 0.6em;
}

.tournament_image {
  position: relative;
  /* width: 205px;
    height: 135px; */
}
.tournament_details {
}
.tournament_name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 13px 22px 0px 0px;
}
.btn_platform {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.platforms_wrapper {
}
.title_name {
  text-transform: capitalize;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  /* display: flex; */
  align-items: center;
  color: #ffffff;
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.money {
  display: flex;
  align-items: center;
  column-gap: 2px;
}
.money_img {
  color: #ffffff;
  font-weight: 500;
  font-size: 8px;
  /* padding: 3px; */
}
.amount {
  /* padding: 3px; */
  font-size: 8px;
  color: #ffffff;
}
.players {
  align-items: center;
  display: flex;
  column-gap: 2px;
}
.players_img {
  /* width: 18px; */
  /* padding: 2px; */
}
.players_vs {
  /* padding: 3px; */
  font-size: 8px;
  text-transform: capitalize;
  color: #ffffff;
}
.tournament_content {
  font: normal normal bold 8px/13px Poppins;
  align-items: center;
  color: #ffffff;
  margin-bottom: 8px;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.join-button > .button {
  text-transform: capitalize;
  padding: 0px 27px 0px 27px;
  position: relative;
  color: #ffffff;
  font-family: Poppins;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: center;
}
.join-button > .button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  padding: 1px;
  background: linear-gradient(
    138deg,
    #fff,
    rgb(244 244 244/70%),
    rgb(255 255 255/40%),
    rgb(255 255 255/10%),
    rgb(187 63 63/0)
  );
  /* -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0); */
  /* -webkit-mask-composite: destination-out; */
  /* background: linear-gradient(160deg,#a384ff,rgba(130, 87, 255, 0.7),rgba(93, 89, 105, 0.4),rgba(150,114,255,.1),transparent); */
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  /* mask-composite: add, add;
mask-composite: add, add;
mask-composite: add, add;
-webkit-mask-composite: destination-out; */
  mask-composite: exclude;
}

.status {
  position: absolute;
  top: 6px;
  left: 6px;
  background-color: #ffffff4c;
  padding: 3px 15px 3px 15px;
  border-radius: 7px;
  color: #ffffff;
  text-transform: capitalize;
  font-size: 10px;
  font-family: "Poppins";
  border: 1px solid #ffffff4c;
}
ul {
  list-style-type: none;
  display: flex;
  padding: 0 !important;
}
li {
  padding: 3px;
}
ul#horizontal-list {
  min-width: 696px;
  list-style: none;
  padding-top: 20px;
}
ul#horizontal-list li {
  display: inline;
}
.v-application a {
  color: #ffffff;
  font-size: 12px;
  /* padding: 2px; */
}
.right_players {
  display: flex;
  gap: 15px;
}
@media (min-width: 320px) and (max-width: 965px) {
  img {
    width: 100%;
  }
  .tournament_container {
    width: unset;
  }
}
@media screen and (min-width: 1920px) {
  .tournament_container {
    /* width: 100%; */
  }
  .arrow{
        /* margin-right: 33px;  */
  }
  .tournament_titel{
    font-size: 23.1207px;
    line-height: 35px;
  }
  .tournament_card_outer {
    /* width: 289.01px; */
    height: 327.54px;
  }
  .tournament_image{
  
  }
  .tournaments_cards-container {
        /* width: 565px; */
        width: 597px;
    /* grid-column-gap: 38px;
    grid-row-gap: 15px; */
  /* grid-template-columns: repeat(auto-fill, minmax(257px, 1fr)); */
  /* grid-template-columns: repeat(auto-fill, minmax(283.23px, min-content)); */
}
.title_name {
    font-size: 17.62px;
    font-weight: 700px;
    line-height: 36.5px;
}
.amount, .players_vs, .tournament_content {
    font-size: 10.07px;
    line-height: 16.36px;
}
.btn_platform {
    padding-top: 10px;
}

}
</style>