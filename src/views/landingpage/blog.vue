<template>
  <div>
    <div class="blog_main_wrapper">
      <div class="blog_wrap">
        <div
          class="title_wrapper"
          data-aos="fade-left"
          data-aos-duration="1600"
        >
          Blog
        </div>
        <div class="blog_card_grid">
          <div
            class="blog_cards"
            data-aos="flip-left"
            data-aos-duration="2000"
            v-for="blogList in blog"
            :key="blogList._id"
          >
            <div class="blog_image">
              <img v-if="blogList.smallPoster"
                :src="`https://ps-mg.s3.amazonaws.com/${blogList.smallPoster}`" width="356px" height="200px"/>
                <img v-else src="@/assets/blog/blogPoster.png" alt="blog image" />
              <!-- <img src="@/assets/blog/blogPoster.png" alt="blog image" /> -->
            </div>
            <div class="bottom_content">
              <div class="blog_title">{{blogList.heading}}</div>
              <div class="blog_para">{{blogList.shortDescription}}</div>
              <div class="date_more">
                <div class="date">{{changeDate(blogList.date)}}</div>
                <router-link
                  class="learn_more"
                  tag="div"
                  :to="{ name: 'BlogInfo', params: { id: blogList._id } }"
                  exact
                >
                  <div class="learn_more">Learn More</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="blog_card_grid">
          <div
            class="blog_cards"
            data-aos="flip-left"
            data-aos-duration="2000"
            v-for="i in 3"
            :key="i"
          >
            <div class="blog_image">
              <img src="@/assets/blog/blogPoster.png" alt="blog image" />
            </div>
            <div class="bottom_content">
              <div class="blog_title">Lorem ipsum dolor sit ame</div>
              <div class="blog_para">
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div class="date_more">
                <div class="date">01.02.2021</div>
                <router-link
                  class="learn_more"
                  tag="div"
                  :to="{ name: 'BlogInfo' }"
                  exact
                >
                  <div class="learn_more">Learn More</div>
                </router-link>
              </div>
            </div>
          </div>
        </div> -->
        <div class="more" data-aos="zoom-in" data-aos-duration="1800">
          <button class="btn_more">More news</button>
        </div>
        <Footer />
      </div>
      <div class="gradation1_img_left"></div>
      <div class="gradation2_img_right"></div>
    </div>
  </div>
</template>
<script>
// import { Fragment } from "vue-fragment";
import Footer from "@/views/landingpage/footer.vue";
import axios from "axios";
import moment from "moment";

export default {
  name: "Blog",
  data() {
    return {
      blog: [],
    };
  },
  components: {
    // Fragment,
    Footer,
  },
  mounted() {
    this.getBlog();
  },
  methods: {
       changeDate(date) {
      return moment(date).format("L");
    },
    getBlog() {
      axios.post("/blog/find/all", { criteria: {} }).then((res) => {
        this.blog = res.data
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.blog_main_wrapper {
  background: #040404;
  min-height: 120vh;
  display: flex;
  justify-content: center;
}
.blog_wrap {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 180px;
}
.title_wrapper {
  color: #ffffff;
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 50px;
}
.blog_card_grid {
  grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 2.5rem;
  margin-bottom: 24px;
}
.blog_cards {
}
.blog_image {
}
.bottom_content {
}
.blog_title {
  margin-top: 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  font-feature-settings: "salt" on, "liga" off;
  color: #ffffff;
}
.blog_para {
  white-space: nowrap;
  width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* border: 1px solid #000000; */
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  /* or 29px */

  font-feature-settings: "salt" on, "liga" off;

  color: #ffffff;
}
.date_more {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}
.date {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  font-feature-settings: "salt" on, "liga" off;

  /* second text */

  color: #cdcadb;
}
.learn_more {
  cursor: pointer;
  width: 156px;
  height: 40px;
  display: flex;
  justify-content: center;
  background: rgba(150, 114, 255, 0.3);
  border-radius: 10px;
  color: #ffffff;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  align-items: center;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;
  color: #ffffff;
}
.more {
  display: flex;
  justify-content: center;
  /* margin-top: 22px; */
  margin: 75px 0px 75px;
}
.btn_more {
  position: relative;
  cursor: pointer;
  height: 76px;
  width: 243px;
  font-style: italic;
  font-family: Poppins;
  font-style: italic;
  font-weight: 800;
  font-size: 22px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
}
.btn_more::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  padding: 1.5px;
  background: linear-gradient(
    160deg,
    #9672ff,
    rgba(150, 114, 255, 0.7),
    rgba(150, 114, 255, 0.4),
    rgba(150, 114, 255, 0.1),
    rgba(0, 0, 0, 0)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
// .map_wrap {
//   background-image: url("/img/assets/landing-page/map.png");
//   background-size: cover;
//   margin: 150px auto;
//   height: 600px;
//   width: 150%;
//   position: relative;
//   right: 300px;
// }
::v-deep.theme--light.v-divider {
  // border-color: rgb(150 124 255 / 43%);
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
}
.gradation1_img_left {
  position: absolute;
  width: 367px;
  height: 1190px;
  background: rgba(150, 114, 255, 0.4);
  filter: blur(300px);
  left: -250px;
  // top: 100px;
  bottom: 0px;
}
.gradation2_img_right {
  position: absolute;
  width: 367px;
  height: 878px;
  background: rgba(150, 114, 255, 0.4);
  filter: blur(300px);
  right: -350px;
  top: 250px;
}
</style>