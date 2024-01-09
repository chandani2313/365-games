<template>
  <div class="faq">
    <div class="faq_background">
      <div class="title_faq_header">
        <div class="title_name">FAQ</div>
        <div class="header_tabs">
          <v-tabs>
            <!-- <div class="search_icon"
            ><img src="/img/assets/landing-page/searchi.png" alt=""
          /></div> -->
            <div class="input-wrapper">
              <!-- <span>Search with Username.</span> -->
              <!-- <input v-model="query" placeholder="Search ..." type="text" /> -->
              <v-text-field
                v-model="query"
                hide-spin-button
                append-icon="mdi-magnify"
                light
                style="margin: 0 25px 15px 0; padding: 8px 0 0 0"
              ></v-text-field>
              <div class="helper"></div>
            </div>
            <v-tab
              v-for="(type, index) in faqTypes"
              :key="index"
              @click="slectedTab(type)"
              >{{ type }}</v-tab
            >
            <!-- <v-tab>Shipping</v-tab>
          <v-tab>Returns</v-tab>
          <v-tab>Game</v-tab>
          <v-tab>Leaderboard</v-tab>
          <v-tab>Tournment</v-tab> -->
          </v-tabs>
        </div>
      </div>
      <v-divider dark></v-divider>
      <div class="div_background">
        <div
          id="app"
          class="faq_list"
          v-for="(faq, i) in filteredTypes"
          :key="i"
        >
          <v-expansion-panels multiple>
            <v-expansion-panel style="background: #1e1c1c; color: #ffffff">
              <v-expansion-panel-header
                >{{ faq.question }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider dark></v-divider>
                {{ faq.answer }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="footer_pagination">
        <v-pagination v-model="page" :length="5" circle></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Faq",
  data() {
    return {
      collapseOnClick: false,
      faqs: [],
      page: 1,
      faqTypes: [],
      selectedType: null,
      query: "",
    };
  },
  computed: {
    filteredTypes() {
      if (this.selectedType) {
        return this.faqs.filter(
          (element) => element.type === this.selectedType
        );
      } else {
        return this.faqs;
      }
    },
  },
  methods: {
    slectedTab(selectedType) {
      this.selectedType = selectedType;
    },
    getFaqByserach() {
      const criteria = {};
      if (this.query) {
        criteria["question"] = { $regex: this.query, $options: "i" };
      }
      axios
        .post("/faq/find/all", {
          criteria,
          limit: 5,
        })
        .then((response) => {
          this.faqs = response.data;
        })
        .catch((e) => {
          console.log("err", e);
        });
    },
    getAllFaq() {
      this.$Progress.start();
      axios
        .post("/faq/find/all", {
          criteria: {},
        })
        .then((response) => {
          this.faqs = response.data;
          const array = this.faqs.map((element) => element.type);
          this.faqTypes = [...new Set(array)];
          this.selectedType = this.faqTypes[0];
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log("err", e.response);
        });
    },
  },
  mounted() {
    this.getAllFaq();
  },
  watch: {
    query: {
      immediate: true,
      handler() {
        this.getFaqByserach();
      },
    },
  },
};
</script>
<style scoped>
.input-wrapper span {
  padding: 4px;
}
input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
.input-wrapper input:focus {
  border: 2px solid var(--v-primary-base) !important;
}
.input-wrapper input {
  width: 100%;
  position: relative;
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  /* margin-block-end: 12px; */
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
.faq_background {
  padding: 25px;
  /* background: transparent
    linear-gradient(26deg, #45108a 2%, #3d065f 29%, #12054e 100%, #10054d 100%); */
  margin: 10px;
}
.search_icon {
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
}
::v-deep.v-slide-group__content {
  justify-content: flex-end;
}
::v-deep.theme--light.v-tabs > .v-tabs-bar {
  background-color: #0e0e0e;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}
::v-deep.v-application .primary--text {
  color: var(--v-accent-lighten5) !important;
  caret-color: var(--v-accent-lighten5) !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #cdcadb;
  font-weight: 400;
}
::v-deep.v-tab {
  font-size: 14px;
  margin-left: 18px;
  padding: unset;
  text-transform: capitalize;
}
::v-deep.theme--dark.v-divider {
  margin-bottom: 18px;
}
::v-deep.v-tab.v-tab--active {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}
::v-deep .v-tabs-slider {
  background-color: #ffffff;
}
.footer_pagination {
  position: absolute;
  bottom: 15px;
}
.page {
  display: flex;
  justify-content: center;
}
::v-deep .theme--light.v-pagination .v-pagination__item {
  background: rgb(14 14 14);
  color: #ffffff;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: #0e0e0e;
}
.title_faq_header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
  width: 100%;
  /* font: 500 22px/33px Poppins; */
}
.title_name {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  left: 0;
  position: absolute;
  margin-left: 40px;
}

.div_background {
  padding-top: 25px;
  /* background: #222222; */
}

.faq_list {
  margin-top: 20px;
}

.v-expansion-panel-content {
  font-size: 14px;
  line-height: 26px;
  font-family: "Poppins";
}
::v-deep .v-expansion-panel-header {
  font-family: "Poppins";
  font-weight: 500;
  font-size: 16px;
  color: #cccadb;
  height: 70px;
}
::v-deep .v-expansion-panel-header.v-expansion-panel-header--active {
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
}
.v-expansion-panel {
  position: relative;
  border-radius: 10px;
}
.v-expansion-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  padding: 1px;
  background: linear-gradient(
    180deg,
    #9672ff,
    rgba(150, 114, 255, 0.7),
    rgb(150 114 255 / 56%),
    rgb(42 38 54 / 12%),
    rgba(0, 0, 0, 0)
  );
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
::v-deep.v-expansion-panel {
  animation: fadeIn 0.8s linear;
  animation-fill-mode: both;
}
::v-deep.v-expansion-panel:nth-child(1) {
  animation-delay: 0.25s;
}
::v-deep.v-expansion-panel:nth-child(2) {
  animation-delay: 0.5s;
}
::v-deep.v-expansion-panel:nth-child(3) {
  animation-delay: 0.75s;
}
::v-deep.v-expansion-panel:nth-child(4) {
  animation-delay: 1s;
}
::v-deep.v-expansion-panel:nth-child(5) {
  animation-delay: 1.25s;
}
::v-deep.v-expansion-panel:nth-child(6) {
  animation-delay: 1.45s;
}
::v-deep.v-expansion-panel:nth-child(7) {
  animation-delay: 1.75s;
}
::v-deep.v-expansion-panel:nth-child(8) {
  animation-delay: 1.95s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    top: 100px;
  }
  75% {
    opacity: 0.5;
    top: 0px;
  }
  100% {
    opacity: 1;
  }
}
.text_view {
  font: normal normal normal 20px/30px Poppins;
  color: #e5e5e5;
  letter-spacing: 0px;
  color: #e5e5e5;
  text-transform: capitalize;
  opacity: 1;
}

.align_end {
  align-items: center;
  text-align: center;
}

::v-deep.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: #e5e5e5 !important;
  font-size: 25px;
  background-color: #373739;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  /* border-left: 10px solid transparent; */
  /* border-right: 10px solid transparent; */
  /* border-top: 12px solid #e5e5e5; */
}
::v-deep .v-icon.v-icon {
  color: #ffffff;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  color: #ffffff;
}
::v-deep .v-autocomplete.v-input > .v-input__control > .v-input__slot {
  color: transparent;
}
::v-deep
  .theme--light.v-text-field
  > .v-input__control
  > .v-input__slot:before {
  border-color: transparent;
  /* content: none; */
  content: unset;
}
::v-deep .theme--light.v-text-field > .v-input__control > .v-input__slot:hover {
  border-color: transparent;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before,
::v-deep v-text-field > .v-input__control > .v-input__slot:after {
  border-color: #0e0e0e;
}
</style>
