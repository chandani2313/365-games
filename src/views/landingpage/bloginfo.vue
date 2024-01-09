<template>
  <div class="main_container">
      <router-link class="back_btn" tag="div" :to="{ name: 'Blog' }" exact>
    <div class="back_btn_wrap">
      <div class="back_arrow"><img src="@/assets/blog/arrow.png" alt="" /></div>
        <div class="back_btn">Back</div>
    </div>
      </router-link>
    <div class="wrap_container">
      <div class="main_wrapper">
        <div class="top_wrap" data-aos="fade-up" data-aos-duration="2000">
          <img v-if="blog.bigPoster" class="image_blog"
                :src="`https://ps-mg.s3.amazonaws.com/${blog.bigPoster}`" width="1262px" height="710px"/>
                <img v-else src="@/assets/blog/main-image.png" alt="blog image" />
          <!-- <img src="@/assets/blog/main-image.png" alt="" /> -->
          <div
            class="top_wrap_header"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {{blog.heading}} 
          </div>
          <div
            class="top_wrap_header_text"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            {{blog.longDescription}}
          </div>
          <v-divider></v-divider>
          <div class="text_wrap">
            <div
              class="text_wrap_para"
              data-aos="zoom-in-up"
              data-aos-duration="1600"
              v-html="blog.content"
            >
              <!-- {{blog.content}} -->
            </div>
            <!-- <div
              class="text_wrap_para"
              data-aos="zoom-in-down"
              data-aos-duration="2100"
            >
              Curabitur venenatis euismod ex id fermentum. Donec facilisis
              tellus erat, nec lacinia elit efficitur eget. Vivamus dapibus
              nulla pellentesque lacus aliquam facilisis. Nulla porttitor turpis
              eu lorem commodo cursus. Nullam sagittis, lectus a vehicula
              blandit, velit libero fringilla lorem, ut luctus nunc eros nec
              metus. Ut luctus, ex sit amet tristique condimentum, lacus tortor
              mollis diam, id egestas diam libero at augue. Donec aliquam mi
              augue, id finibus ligula accumsan vitae. In dictum magna vel enim
              auctor congue. Pellentesque non odio gravida, elementum augue et,
              iaculis quam. Morbi vitae vestibulum nulla, eu convallis sapien.
              Vestibulum id feugiat justo. Integer felis sapien, pulvinar eget
              pulvinar ut, sollicitudin non nibh. Morbi in eleifend massa.
              Curabitur magna eros, dignissim eget magna non, dapibus commodo
              est. Mauris rhoncus massa ac tortor eleifend, et porttitor est
              feugiat.
            </div> -->
          </div>
          <v-divider></v-divider>
          <div class="footer_wrap">
            <div class="date_wrap">{{changeDate(blog.date)}}</div>
            <div class="social_login_wrap">
              <a class="logo_wrap" href="https://www.facebook.com/">
                <img src="@/assets/blog/facebook-logo.png" />
              </a>
              <a class="logo_wrap" href="https://www.telegram.org/">
                <img src="@/assets/blog/telegram-logo.png" />
              </a>
              <a class="logo_wrap" href="https://www.whatsapp.com/">
                <img src="@/assets/blog/whatsapp-logo.png" />
              </a>
              <a class="logo_wrap" href="https://www.tiktok.com/">
                <img src="@/assets/blog/wykn-logo.png" />
              </a>
            </div>
          </div>
        </div>
        <div class="latest_wrap">
          <div class="title_wrapper">Latest news</div>
          <div class="blog_card_grid">
            <div
              class="blog_cards"
              v-for="blog in blogs"
              :key="blog._id"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div class="blog_image">
                <!-- <img src="@/assets/blog/blogPoster.png" alt="blog image" /> -->
                <img v-if="blog.smallPoster"
                :src="`https://ps-mg.s3.amazonaws.com/${blog.smallPoster}`" width="356px" height="200px"/>
                <img v-else src="@/assets/blog/blogPoster.png" alt="blog image" />
              </div>
              <div class="bottom_content">
                <div class="blog_title">{{blog.name}}</div>
                <div class="blog_para">
                  {{blog.heading}}
                </div>
                <div class="date_more">
                  <div class="date">{{changeDate(blog.date)}}</div>
                  <!-- <router-link
                    class="learn_more"
                    tag="div"
                    :to="{ name: 'BlogInfo' , params: { id: blog._id }}"
                    exact
                  > -->
                    <div class="learn_more" @click="getBlogView(blog._id)">Learn More</div>
                  <!-- </router-link> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_section">
          <div class="section_header">
            Comments
            <div class="comments_numbers">123</div>
          </div>
          <div class="new_comment_wrap">
            <div class="profile_image1">
              <img src="@/assets/blog/profile-image1.png" alt="blog image" />
            </div>
            <div class="comment_text_wrap">
              <v-text-field label="Leave a comment" single-line></v-text-field>
            </div>
          </div>
          <div class="old_comment_wrap">
            <div class="profile-image2">
              <img src="@/assets/blog/profile-image2.png" alt="blog image" />
            </div>
            <div class="profile_details">
              <div class="comment_text_header">
                Praesent armare
                <div class="comment_days">2 days ago</div>
              </div>
              <div class="comment_texter">
                Maecenas suscipit rutrum tortor, nec semper libero scelerisque
                sed. Suspendisse potenti. Donec vel consectetur lacus, sed
                euismod nulla.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    <div class="first_left_gradation"></div>
    <div class="second_right_gradation"></div>
  </div>
</template>


<script>
import axios from "axios";
import Footer from "@/views/landingpage/footer.vue";
import moment from "moment";

export default {
  components: {
    Footer,
  },
  name: "BlogInfo",
  data() {
    return {
      blog:"",
      blogs: []
    };
  },
  mounted() {
    this.getBlog();
    this.getAllBlogs();
  },
  methods: {
      changeDate(date) {
      return moment(date).format("L");
    },
    getBlog() {
      axios
      .get(`/blog/find/${this.$route.params.id}`).then((res) => {
        this.blog = res.data
      });
    },
    getBlogView(blogId) {
      this.$router.push({name: 'BlogInfo', params: { id: blogId } })
      this.getBlog();
    },
       getAllBlogs() {
      axios.post("/blog/find/all", { criteria: {},limit: 3,
      sort: { createdAt: -1 },
 }).then((res) => {
        this.blogs = res.data
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main_container {
  background: #040404;
  display: flex;
  flex-direction: column;
  position: relative;
}
.back_btn_wrap {
  margin: 16em 0 4em 8em;
  display: flex;
  align-items: center;
  gap: 25px;
  cursor: pointer;
}
.back_btn {
  font-weight: 500;
  font-size: 18px;
  line-height: 64px;
  color: #7255e9;
  transition: 0.8s;
}
.back_arrow {
  transition: all 0.8s ease;
}
.back_arrow:hover {
  transform: rotateZ(-720deg);
}
.wrap_container {
  display: flex;
  justify-content: center;
}
.main_wrapper {
  width: 66%;
}
.top_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}
.top_wrap_header {
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  color: #ffffff;
  margin-top: 15px;
}
.top_wrap_header_text {
  font-weight: 600;
  font-size: 36px;
  line-height: 160%;
  color: #ffffff;
}
.text_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  font-size: 24px;
  line-height: 180%;
  color: #ffffff;
}
.text_wrap_para {
  width: 75%;
}
::v-deep .theme--light.v-divider {
  border-color: rgb(205, 202, 219, 0.3);
}
.footer_wrap {
  display: flex;
  justify-content: space-between;
  margin-top: -50px;
}
.date_wrap {
  font-size: 24px;
  line-height: 180%;
  color: #cdcadb;
}
.social_login_wrap {
  display: flex;
  gap: 75px;
  align-items: center;
}
.logo_wrap {
  cursor: pointer;
}
.latest_wrap {
  margin-top: 7.5em;
}
.blog_card_grid {
  grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
  grid-auto-flow: dense;
  display: grid;
  grid-gap: 2.5rem;
}
.blog_cards {
}
.title_wrapper {
  font-weight: 600;
  font-size: 36px;
  line-height: 160%;
  color: #ffffff;
  margin-bottom: 30px;
}
.blog_title {
  margin-top: 15px;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  color: #ffffff;
  text-transform: capitalize;
}
.blog_para {
  white-space: nowrap;
  width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
}
.date_more {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}
.date {
  font-size: 14px;
  line-height: 160%;
  color: #cdcadb;
}
.learn_more {
  cursor: pointer;
  width: 156px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7255e9;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  color: #ffffff;
}
.bottom_section {
  margin: 8em 0;
}
.section_header {
  display: flex;
  gap: 25px;
  flex-direction: row;
  font-weight: 600;
  font-size: 36px;
  color: #ffffff;
}
.comments_numbers {
  font-size: 24px;
  line-height: 62px;
  color: #cdcadb;
}
.new_comment_wrap {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
}
.profile_image1 {
  border-radius: 50px;
}
.comment_text_wrap {
  width: 900px;
}
::v-deep .theme--light.v-label {
  font-size: 24px;
  color: rgb(205, 202, 219, 0.4);
  line-height: 18px;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  font-size: 24px;
  color: rgb(205, 202, 219, 0.4);
  line-height: 40px;
}
::v-deep.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: rgb(205, 202, 219, 0.3);
}
::v-deep.theme--light.v-text-field--outline
  > .v-input__control
  > .v-input__slot:hover {
  border-color: rgb(205, 202, 219, 0.3);
}
.old_comment_wrap {
  display: flex;
  gap: 50px;
  margin-top: 95px;
}
.profile-image2 {
  border-radius: 50px;
  width: 158px;
}
.profile_details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.comment_text_header {
  display: flex;
  gap: 40px;
  font-weight: 600;
  font-size: 18px;
  line-height: 180%;
  color: #ffffff;
}
.comment_days {
  font-size: 18px;
  line-height: 180%;
  color: #cdcadb;
}
.comment_texter {
  width: 70%;
  font-size: 24px;
  line-height: 180%;
  color: #ffffff;
}
.container_wrap {
  width: 100%;
  position: absolute;
  bottom: 15px;
  display: flex;
}
.bottom_wrap {
  display: flex;
  flex-direction: column;
  width: 66%;
}
// .wrap_footer {
//   display: flex;
//   justify-content: center;
//   gap: 25px;
// }
// .wrap_footer_btn {
//   font-family: "Poppins";
//   font-size: 16px;
//   font-weight: normal;
//   line-height: 33px;
//   color: #ffffff;
// }

// .wrap_footer_btn:hover {
//   color: rgb(218 205 255 / 36%);
// }
::v-deep.theme--light.v-divider {
  border-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  margin: 20px 0 30px 0;
}
.texter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rigth_text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 33px;
  color: #ffffff;
}
.social_icons {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.sicon {
  margin-left: 20px;
}
.first_left_gradation {
  position: absolute;
  width: 250px;
  height: 1500px;
  background: rgba(150, 114, 255, 0.3);
  filter: blur(150px);
  left: -271px;
  bottom: 600px;
}
.second_right_gradation {
  position: absolute;
  width: 250px;
  height: 1500px;
  background: rgba(150, 114, 255, 0.3);
  filter: blur(200px);
  right: -210px;
  top: 650px;
}
.image_blog{
  object-fit: cover;
}
</style>