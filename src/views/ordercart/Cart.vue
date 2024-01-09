<template>
  <div class="container_wrap">
    <div class="top_wrap">
      <v-checkbox v-model="checkbox" :label="'Select All'"></v-checkbox>
    </div>
    <div class="card_container">
      <div class="card_wrapper">
        <div class="wrapper_left">
          <v-checkbox v-model="checkbox"></v-checkbox>
          <img src="@/assets/ordercart/gem.png" alt="" />
          <div class="text_wrap">
            <div class="left-text-wrap">
              <div class="product_name">Product Name</div>
              <div class="product_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies orci dictum quis eu er habitant integer parturient.
                Enim felis sem condimentum egestas ut volutpat. Ornare eget
                scelerisque hac sed.
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
              <button @click="sub">-</button>
              <div>{{ result }}</div>
              <button @click="add">+</button>
            </div>
            <div class="gem_status">
              <img src="@/assets/ordercart/gemicon.png" alt="" />
              <div class="gem_number">100 G</div>
            </div>
          </div>
        </div>
      </div>
      <v-divider style="width: 95%; margin-left: 22px"></v-divider>
      <div class="card_wrapper">
        <div class="wrapper_left">
          <v-checkbox v-model="checkbox"></v-checkbox>
          <img src="@/assets/ordercart/gem.png" alt="" />
          <div class="text_wrap">
            <div class="left-text-wrap">
              <div class="product_name">Product Name</div>
              <div class="product_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies orci dictum quis eu er habitant integer parturient.
                Enim felis sem condimentum egestas ut volutpat. Ornare eget
                scelerisque hac sed.
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
              <button @click="sub">-</button>
              <div>{{ result }}</div>
              <button @click="add">+</button>
            </div>
            <div class="gem_status">
              <img src="@/assets/ordercart/gemicon.png" alt="" />
              <div class="gem_number">100 G</div>
            </div>
          </div>
        </div>
      </div>
      <v-divider style="width: 95%; margin-left: 22px"></v-divider>
      <div class="card_wrapper">
        <div class="wrapper_left">
          <v-checkbox v-model="checkbox"></v-checkbox>
          <img src="@/assets/ordercart/gem.png" alt="" />
          <div class="text_wrap">
            <div class="left-text-wrap">
              <div class="product_name">Product Name</div>
              <div class="product_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies orci dictum quis eu er habitant integer parturient.
                Enim felis sem condimentum egestas ut volutpat. Ornare eget
                scelerisque hac sed.
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
              <button @click="sub">-</button>
              <div>{{ result }}</div>
              <button @click="add">+</button>
            </div>
            <div class="gem_status">
              <img src="@/assets/ordercart/gemicon.png" alt="" />
              <div class="gem_number">100 G</div>
            </div>
          </div>
        </div>
      </div>
      <v-divider style="width: 95%; margin-left: 22px"></v-divider>
      <div class="price_container">
        <div class="total_price_wrap">
          <div class="total_price_texter">Total Price:</div>
          <img src="@/assets/ordercart/gemicon.png" alt="" />
          <div class="total_gems">1,200 G</div>
        </div>
        <button class="process_btn">Process to Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      result: 1,
    };
  },
  props: ["value"],
  methods: {
    emitResult() {
      this.$emit("input", this.result);
    },
    add() {
      this.result += 1;
      this.emitResult();
    },
    sub() {
      this.result -= 1;
      this.emitResult();
    },
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
  margin: 0 0 15px 20px;
}
::v-deep .theme--light.v-label {
  color: #979797;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
}
::v-deep .v-input--selection-controls__input .v-icon {
  color: #ffffff;
}
::v-deep .theme--light.v-divider {
  border-color: #3e3e3e;
}
.card_container {
  width: 1120px;
  height: 1122px;
  background: #000000;
  border-radius: 10px;
}
.card_wrapper {
  height: 160px;
}
::v-deep .v-input--selection-controls.v-input {
  display: flex;
  align-items: center;
  margin-right: 12px;
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
  width: 540px;
}
.gem_status {
  display: flex;
  align-items: center;
  width: 110%;
}
.quality_status {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  background: #2f2f2f;
  border-radius: 7px;
  display: flex;
  margin: 20px 0 20px 0;
  width: 93px;
  height: 30px;
  align-items: center;
}
.quality_status button {
  width: 30px;
  color: #9672ff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
.quality_status div {
  width: 33px;
  text-align: center;
}
.price_container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 25px 62px 0 0;
}
.total_price_wrap {
  display: flex;
  align-items: center;
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
.total_price_texter {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-right: 25px;
}
.total_gems {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-left: 20px;
}
.process_btn {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  background: #7255e9;
  border-radius: 10px;
  color: #ffffff;
  width: 143px;
  height: 47px;
  margin-top: 20px;
}
</style>