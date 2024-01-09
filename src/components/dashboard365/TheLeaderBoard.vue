<template>
  <div class="leaderboard_container">
    <div class="leaderboard_head">
      <div class="leaderboard_title" @click="goToLeaderboard()">
        leaderboard
      </div>
      <div class="arrow" @click="goToLeaderboard()">
        <img src="../../assets/dashboard365/icon-arrow-right.svg" />
      </div>
    </div>
    <div class="leaderboard_wrap">
      <div class="leaderboard_card">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name">mamang ironmen</div>
        </div>
        <div class="right">
          <div class="crown_img">
            <img src="../../assets/dashboard365/goldcrown.png" />
          </div>
        </div>
      </div>
      <div class="leaderboard_card white">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name txt_clr">tiny toolstea</div>
        </div>
        <div class="right">
          <div class="crown_img">
            <img src="../../assets/dashboard365/silvercrown.png" />
          </div>
        </div>
      </div>
      <div class="leaderboard_card">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name">john doe</div>
        </div>
        <div class="right">
          <div class="crown_img">
            <img src="../../assets/dashboard365/bronzecrown.png" />
          </div>
        </div>
      </div>
      <div class="leaderboard_card white">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name txt_clr">alex</div>
        </div>
        <div class="right">
          <div class="crown_img">
            <!-- <img src="../../assets/dashboard365/Vector.png"> -->
            <span class="rank">4</span>
          </div>
        </div>
      </div>
      <div class="leaderboard_card">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name">tony stark</div>
        </div>
        <div class="right">
          <div class="crown_img num_clr">
            <!-- <img src="../../assets/dashboard365/Vector.png"> -->
            <span class="rank">5</span>
          </div>
        </div>
      </div>
      <div class="leaderboard_card white">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name txt_clr">anna michelson</div>
        </div>
        <div class="right">
          <div class="crown_img">
            <!-- <img src="../../assets/dashboard365/Vector.png"> -->
            <span class="rank">6</span>
          </div>
        </div>
      </div>
      <div class="leaderboard_card">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name">clara</div>
        </div>
        <div class="right">
          <div class="crown_img num_clr">
            <!-- <img src="../../assets/dashboard365/Vector.png"> -->
            <span class="rank">7</span>
          </div>
        </div>
      </div>
      <div class="leaderboard_card white">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name txt_clr">binTKO</div>
        </div>
        <div class="right">
          <div class="crown_img">
            <!-- <img src="../../assets/dashboard365/Vector.png"> -->
            <span class="rank">8</span>
          </div>
        </div>
      </div>
      <div class="leaderboard_card">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name">david</div>
        </div>
        <div class="right">
          <div class="crown_img num_clr">
            <!-- <img src="../../assets/dashboard365/Vector.png"> -->
            <span class="rank">9</span>
          </div>
        </div>
      </div>
      <div class="leaderboard_card white">
        <div class="left">
          <div class="profile_image">
            <img src="../../assets/dashboard365/profile.webp" />
          </div>
          <div class="name txt_clr">henry</div>
        </div>
        <div class="right">
          <div class="crown_img">
            <!-- <img src="../../assets/dashboard365/Vector.png"> -->
            <span class="rank">10</span>
          </div>
        </div>
      </div>
      <div class="all_button">
        <button class="button">see all leaders</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheNewLeaderBoard",
  data() {
    return {};
  },
  methods: {
    goToLeaderboard() {
      this.$router.push("/leaderboard");
    },
  },
};
</script>
<style scoped>
.leaderboard_container {
  /* padding-right: 10px; */
  /* width: 212px; */
}
.leaderboard_head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}
.leaderboard_title {
  text-transform: capitalize;
  font-style: normal;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: Poppins;
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
}
.arrow {
  cursor: pointer;
  font-size: 20px;
  color: #ffffff;
}

.leaderboard_wrap {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 212px;
}
.leaderboard_card {
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: space-between;
  background: #1b1b1b;
  border-radius: 7px;
width: 272.31px;
/* height: 46.24px; */
}
.left {
  display: flex;
  align-items: center;
}
.profile_image {
}
.profile_image > img {
  width: 26px;
  height: 26px;
  border-radius: 40px;
  object-fit: cover;
}
.name {
  text-transform: capitalize;
  color: #ffffff;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font: normal normal 700 12px/18px Poppins;
  letter-spacing: 0.02em;
  text-align: left;
}
.right {
}
.crown_img {
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: left;
}
.white {
  background: #f4f4f4;
}
.txt_clr {
  color: #282828;
  text-transform: capitalize;
}
.all_button {
  text-align: center;
  background-color: #7255e9;
  color: #ffffff;
  padding: 15px 5px 15px 5px;
  border-radius: 10px;
  margin-top: 8px;
  width: 272.31px;
/* height: 46.24px; */
}
.button {
}
.num_clr {
  color: #ffffff;
}
.rank {
  font-size: 12px;
}
.crown_img {
  width: 16.9px;
}
@media (min-width: 320px) and (max-width: 965px) {
  .leaderboard_container {
    width: unset;
  }
  .leaderboard_wrap {
    width: unset;
  }
}

@media screen and (min-width: 1920px) {
  .leaderboard_title{
    font-size: 23.1207px;
    line-height: 35px;
  }
  .leaderboard_wrap {
    width: 266px !important;
  }
  .all_button {
    line-height: 36.5px;
    width: 272.31px;
    margin-top: 17px;
  }
  .leaderboard_card {
    width: 272.31px;
    height: 46.24px;
    margin-top: 2px;
  }
  .name {
      line-height: 22.66px;
      font-size: 15.11px;
      font-weight: 700;
  }
}
</style>