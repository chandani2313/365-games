<template>
  <fragment>
    <div>
      <PageLoader />
      <NewLandingPageHeader />
      <HomeIntro />
      <Features />
      <Testimonials />
      <Fqa />
      <Footer />
    </div>
  </fragment>
</template>

<script>
import PageLoader from "@/views/landingpage/PageLoader.vue";
import NewLandingPageHeader from "@/components/NewLandingPageHeader.vue";
import HomeIntro from "@/components/home/HomeIntro.vue";
import Features from "@/components/home/Features.vue";
import Testimonials from "@/components/home/Testimonials.vue";
import Fqa from "@/components/home/Fqa.vue";
import Footer from "@/components/home/Footer.vue";
import { Fragment } from "vue-fragment";

export default {
  components: {
    Fragment,
    PageLoader,
    NewLandingPageHeader,
    HomeIntro,
    Features,
    Testimonials,
    Fqa,
    Footer,
  },
  name: "NewLandingPage",
};
</script>



<style lang="scss" scoped>
// global style
div {
  font-family: "Poppins", sans-serif;
  background: #040404;
  color: #fff;
  overflow-x: hidden;
}
div {
  overflow: hidden;
}
</style>