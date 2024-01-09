<template>
    <div class="inner_container">
      <div class="inner_container2">
        <div class="inner_subwrapper">
          <div class="header_wrap">info</div>
          <div
            v-if="selectedTournament"
            class="info_wrapper"
            v-html="selectedTournament.description"
          ></div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TournamentInfo",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["selectedTournament"]),
  },
};
</script>
<style scoped>
.info_wrapper{
  color: white;
}
img {
  width: 100%;
  display: block;
}
.inner_container {
  border-radius: 8px;
  width: 100%;
}
.inner_subwrap {
  margin: 10px 0px 5px 5px;
  min-width: 180px;
  height: 30px;
  border-radius: 5px;
  border: 0.25px solid #ffffff;
  text-align: center;
  font: 300 16px //*25px*/ Poppins;;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  padding: 5px;
}
.inner_container2 {
  background: #1e0741;
  display: flex;
}
.inner_subwrapper {
  padding: 20px;
}
.header_wrap {
  padding: 10px 10px 10px 0px;
  text-align: left;
  font: 20px/21px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
}
@media screen and (max-width: 640px) {
  .inner_container {
    width: 80%;
    display: block;
  }
  .inner_subshell {
    display: none;
  }
}

@media screen and (max-width: 560px) {
  .inner_container {
    width: 100%;
    display: block;
  }
}
@media screen and (max-width: 480px) {
  .inner_container {
    width: 100%;
    display: block;
  }
}
</style>
