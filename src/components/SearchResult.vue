<template>
  <div class="main-container">
    <div class="Apex-container">
      <div class="searching-result">Searching results</div>
      <v-divider dark></v-divider>
      <div class="card-containers" v-for="i in 5" :key="i">
        <img src="@/assets/Apexlegends.png" class="apex-legends-image" />
        <div class="content-header">
          <div class="paraheader">
            Apex Legends - The Next Evolution Of Hero Shooter
          </div>
          <div class="content">
            Apex Legends is a free-to-play hero shooter game where legendary
            competitors battle for glory,fame,and fortune on the fringes of the
            Frontier.
          </div>
          <div class="content-bottom">
            <div class="players">Players: up to 60 players</div>
            <div class="release-date">Release date: March 09,2021</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-container {
  background-color: #0e0e0e;
  padding: 40px;
}
.searching-result {
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
  padding-bottom: 15px;
}
.paraheader {
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
}
.content {
  font-size: 13px;
  color: #cdcadb;
  font-weight: 400;
  max-width: 504px;
}
.players,
.release-date {
  font-size: 13px;
  color: #cdcadb;
  font-weight: 400;
}
.card-containers {
  display: flex;
  gap: 29px;
  margin-top: 45px;
}

.content-header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 3px;
}
.content-bottom {
  display: flex;
  gap: 45px;
}
.apex-legends-image {
  object-fit: contain;
  height: 126px;
}
</style>