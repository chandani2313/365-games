<template>
  <div class="featured_container">
    <div class="featured_outer">
      <div class="featured_head">Featured</div>
      <div class="arrow">
        <img src="../../assets/dashboard365/icon-arrow-right.svg" />
      </div>
    </div>
    <div class="featured_poster">
      <!-- <img src="../../assets/dashboard365/ShapeBG.png" alt="" /> -->
      <img src="../../assets/dashboard365/dashboard-feature.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Featured",
};
</script>
<style scoped>
.featured_outer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.featured_head {
  text-transform: capitalize;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.featured_poster > img {
  width: 100%;
  border-radius: 26px;
}
.arrow {
  cursor: pointer;
  font-size: 20px;
  color: #ffffff;
}

@media screen and (min-width: 1920px) {
  .featured_head{
    font-size: 23.1207px;
line-height: 35px;
  }
  .featured_container {
    width: 465.75px;
  }
  .featured_poster {
    width: 465.75px;
    height: 660.86px;
  }
}
</style>