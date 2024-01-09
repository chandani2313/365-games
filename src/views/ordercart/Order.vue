<template>
  <div class="container_wrap">
    <div class="top_wrap">
      <div class="search_bar">
        <v-select
          :items="items"
          label="Search Order"
          solo
          append-icon="mdi-magnify"
        ></v-select>
      </div>
      <div class="status_bar">
        <v-autocomplete
          chips
          small-chips
          solo
          solo-inverted
          label="Status"
          append-icon="mdi-chevron-down"
        ></v-autocomplete>
      </div>
      <div class="period_bar">
        <v-combobox prepend-inner-icon="mdi-event" multiple small-chips append-icon="mdi-chevron-down" solo label="Period"></v-combobox>
      </div>
    </div>
    <div class="card_container">
      <div class="card_wrapper">
        <div class="wrapper_left">
          <img src="@/assets/ordercart/gem.png" alt="" />
          <div class="text_wrap">
            <div class="top-text-wrap">
              <div class="status_btn completed">Completed</div>
              <div class="order_id">
                Order ID:
                <div>OR0921942178</div>
              </div>
            </div>
            <div class="bottom-text-wrap">
              <div class="product_name">Product Name</div>
              <div class="product_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper_right">
          <div
            style="
              opacity: 0.2;
              border: 1px solid #3e3e3e;
              transform: rotate(0deg);
              height: 120px;
            "
          ></div>
          <div class="status_wrap">
            <div class="quality_status">
              <div class="quality_number">Quality:</div>
              <div style="padding-left: 3px">1</div>
            </div>
            <div class="gem_status">
              <img src="@/assets/ordercart/gemicon.png" alt="" />
              <div class="gem_number">100 G</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card_container">
      <div class="card_wrapper">
        <div class="wrapper_left">
          <img src="@/assets/ordercart/gem.png" alt="" />
          <div class="text_wrap">
            <div class="top-text-wrap">
              <div class="status_btn process">Process</div>
              <div class="order_id">
                Order ID:
                <div>OR0921942178</div>
              </div>
            </div>
            <div class="bottom-text-wrap">
              <div class="product_name">Product Name</div>
              <div class="product_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper_right">
          <div
            style="
              opacity: 0.2;
              border: 1px solid #3e3e3e;
              transform: rotate(0deg);
              height: 120px;
            "
          ></div>
          <div class="status_wrap">
            <div class="quality_status">
              <div class="quality_number">Quality:</div>
              <div style="padding-left: 3px">1</div>
            </div>
            <div class="gem_status">
              <img src="@/assets/ordercart/gemicon.png" alt="" />
              <div class="gem_number">100 G</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card_container">
      <div class="card_wrapper">
        <div class="wrapper_left">
          <img src="@/assets/ordercart/gem.png" alt="" />
          <div class="text_wrap">
            <div class="top-text-wrap">
              <div class="status_btn cancel">Cancel</div>
              <div class="order_id">
                Order ID:
                <div>OR0921942178</div>
              </div>
            </div>
            <div class="bottom-text-wrap">
              <div class="product_name">Product Name</div>
              <div class="product_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper_right">
          <div
            style="
              opacity: 0.2;
              border: 1px solid #3e3e3e;
              transform: rotate(0deg);
              height: 120px;
            "
          ></div>
          <div class="status_wrap">
            <div class="quality_status">
              <div class="quality_number">Quality:</div>
              <div style="padding-left: 3px">1</div>
            </div>
            <div class="gem_status">
              <img src="@/assets/ordercart/gemicon.png" alt="" />
              <div class="gem_number">100 G</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_pagination">
      <v-pagination v-model="page" :length="5" circle></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
.container_wrap {
  margin-top: 30px;
}
.top_wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search_bar {
  width: 270px;
}
.status_bar {
  width: 105px;
}
.period_bar {
  width: 131px;
}
.card_container {
  width: 1120px;
  height: 160px;
  background: #1f1f1f;
  border-radius: 10px;
  margin-bottom: 15px;
}
.card_wrapper {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
}
.wrapper_left {
  display: flex;
  flex-direction: row;
}
.text_wrap {
  margin: 10px 0 0 20px;
}
.top-text-wrap {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
.wrapper_right {
  display: flex;
  flex-direction: row;
}
.status_wrap {
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 40px;
}
.status_bar {
  margin-left: 25px;
}
.period_bar {
  margin-left: 25px;
}
::v-deep .theme--light.v-input {
  color: #ffffff;
  border-radius: 10px;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  color: #ffffff;
}
::v-deep .theme--light.v-label {
  color: #979797;
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
}
::v-deep .v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  border-radius: 10px;
  width: 270px;
  height: 46px;
}
::v-deep
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  min-height: 46px;
}
::v-deep .v-icon.v-icon {
  color: #ffffff;
  font-size: 18px;
}
::v-deep .v-text-field--full-width .v-input__prepend-outer,
.v-text-field--full-width .v-input__prepend-inner,
.v-text-field--full-width .v-input__append-inner,
.v-text-field--full-width .v-input__append-outer,
.v-text-field--enclosed .v-input__prepend-outer,
.v-text-field--enclosed .v-input__prepend-inner,
.v-text-field--enclosed .v-input__append-inner,
.v-text-field--enclosed .v-input__append-outer {
  margin-top: 13px;
}
::v-deep.theme--light.v-text-field--filled
  > .v-inputcontrol
  > .v-inputslot:hover
  fieldset {
  background: #1f1f1f;
}
::v-deep
  .theme--light.v-text-field--filled
  > .v-input__control
  > .v-input__slot {
  background: #1f1f1f;
  display: flex;
  align-items: center;
}
::v-deep .v-text-field fieldset,
.v-text-field .v-input__control {
  width: 270px;
}
::v-deep .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: #1f1f1f;
}
.status_btn {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* color: #45c340;
  background: #375a36; */
  border-radius: 7px;
  height: 33px;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
}
.completed {
  color: #45c340;
  background: #375a36;
}
.process {
color: #FFFFFF;
background: #636363;
}
.cancel {
color: #FF6186;
background: #763D4B;
}
.order_id {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #d0d0d0;
  display: flex;
  margin: 5px 0 0 10px;
}
.order_id div {
  margin-left: 8px;
}
.product_name {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
}
.product_text {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #d0d0d0;
}
.gem_status {
  display: flex;
  align-items: center;
}
.quality_status {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  display: flex;
  margin: 20px 0 20px 0;
}
.gem_number {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-left: 20px;
}
.footer_pagination {
  margin-top: 150px;
}
::v-deep .theme--light.v-pagination .v-pagination__navigation {
  background: none;
}
::v-deep .theme--light.v-pagination .v-pagination__item {
  background: #0e0e0e;
  color: #787686;
}
::v-deep .theme--light.v-pagination .v-pagination__item--active {
  color: #FFFFFF;
}
</style>