<template>
  <div class="right_wrap">
    <div class="updates_wrap">
      <div class="heading">Latests updates</div>
    </div>
    <div class="cards_container">
      <div v-for="i in 3" :key="i + 'i'" class="card_wrapper">
        <div class="text">Apex Legends</div>
        <div class="text_content">
          Apex Legends server issues fix may take a few more days
        </div>
      </div>
      <div v-for="i in 2" :key="i + 'j'" class="card_wrapper2">
        <div class="text">Fortnite</div>
        <div class="text_content">
          Apex Legends server issues fix may take a few more days
        </div>
      </div>
      <div v-for="i in 2" :key="i + 'k'" class="card_wrapper3">
        <div class="text">Warzone</div>
        <div class="text_content">
          Apex Legends server issues fix may take a few more days
        </div>
      </div>
      <div v-for="i in 2" :key="i + 'l'" class="card_wrapper">
        <div class="text">Apex Legends</div>
        <div class="text_content">
          Apex Legends server issues fix may take a few more days
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewUpdates",
};
</script>
<style scoped>
/*------------------------------right section css-------------------------------------------*/
.right_wrap {
  background-color: #1b1b1b;
  border-radius: 10px;
  width: 301px;
  height: 1495px;
  margin-left: 16px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .right_wrap {
    width: 100%;
    margin-left: unset;
    display: flex;
    flex-direction: column;
  }
  .cards_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.cards_container {
  width: 301px;
  margin: 0 20px 0 20px;
}
.heading {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  padding: 25px 25px 10px 25px;
}
.card_wrapper {
  background-image: url(".././/../assets/NewProfile/latest-updates1.png");
  height: 146px;
  border-radius: 10px;
  padding: 13px 20px 20px 20px;
  width: 260px;
  position: relative;
  margin-bottom: 12px;
}
.card_wrapper2 {
  background-image: url(".././/../assets/NewProfile/latest-updates2.png");
  height: 146px;
  border-radius: 10px;
  padding: 13px 20px 20px 20px;
  width: 260px;
  position: relative;
  margin-bottom: 12px;
}
.card_wrapper3 {
  background-image: url(".././/../assets/NewProfile/latest-updates3.png");
  height: 146px;
  border-radius: 10px;
  padding: 13px 20px 20px 20px;
  width: 260px;
  position: relative;
  margin-bottom: 12px;
}
.text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
}
.text_content {
  position: absolute;
  width: 210px;
  bottom: 14px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #cdcadb;
}
</style>