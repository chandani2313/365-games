<template>
  <div class="main_container">
    <div class="wrapper">
      <div class="header">
        <div class="header_text" data-aos="fade-up" data-aos-duration="2000">
          How It Works?
        </div>
      </div>
      <div class="content_wrapper">
        <div class="timeline">
          <div class="outer">
            <div class="card">
              <div
                class="number_wrap"
                data-aos="flip-left"
                data-aos-duration="1800"
              >
                01
              </div>
              <div
                class="card_wrapper"
                data-aos="flip-left"
                data-aos-duration="1800"
              >
                <div class="title_text">Subscribe</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Venenatis scelerisque at quam congue
                </p>
              </div>
              <div
                class="image_wrap sub"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <img
                  src="/img/assets/landing-page/howitworks/subscribe-logo.png"
                />
              </div>
            </div>
            <div class="card">
              <div
                class="image_wrap play"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <img src="/img/assets/landing-page/howitworks/play-logo.png" />
              </div>
              <div
                class="number_wrap odd_wrap"
                data-aos="flip-right"
                data-aos-duration="1800"
              >
                02
              </div>
              <div
                class="card_wrapper"
                data-aos="flip-right"
                data-aos-duration="1800"
              >
                <h3 class="title_text">Play</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Venenatis scelerisque at quam congue
                </p>
              </div>
            </div>
            <div class="card">
              <div
                class="number_wrap"
                data-aos="flip-left"
                data-aos-duration="1800"
              >
                03
              </div>
              <div
                class="card_wrapper"
                data-aos="flip-left"
                data-aos-duration="1800"
              >
                <h3 class="title_text">Earn</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Venenatis scelerisque at quam congue
                </p>
              </div>
              <div
                class="image_wrap earn"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <img src="/img/assets/landing-page/howitworks/earn-logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div class="first_left_gradation"></div>
      <div class="second_right_gradation"></div>
    </div>
  </div>
</template>

<script>
import Footer from "@/views/landingpage/footer.vue";

export default {
  components: {
    Footer,
  },
  name: "HowItWorks2",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main_container {
  background: #040404;
  position: relative;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  margin-top: 14em;
}
.header_text {
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
}
.content_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 8em;
}

.timeline {
  margin: 1px auto;
}

/* Card container */
.card {
  display: flex;
  position: relative;
  align-items: center;
  /* max-width: 800px; */
}

/* setting padding based on even or odd */
.card:nth-child(odd) {
  padding: 120px 0 100px 100px;
}
.card:nth-child(even) {
  padding: 150px 75px 150px 0;
}
/* Global ::before */
.card::before {
  content: "";
  position: absolute;
  width: 50%;
  border: dotted rgb(150, 114, 255, 0.3);
}
/* Setting the border of top, bottom, left */
.card:nth-child(odd)::before {
  left: -8px;
  top: -6px;
  bottom: -6px;
  border-width: 10px 0 10px 10px;
  border-radius: 200px 0 0 200px;
}
/* Setting the top and bottom to "-5px" because earlier it was out of a pixel in mobile devices */
@media only screen and (max-width: 400px) {
  .card:nth-child(odd)::before {
    top: -5px;
    bottom: -5px;
  }
}

/* Setting the border of top, bottom, right */
.card:nth-child(even)::before {
  right: 15px;
  top: -3px;
  bottom: -3px;
  border-width: 10px 10px 10px 0px;
  border-radius: 0 200px 200px 0;
}
/* Removing the border if it is the first card */
.card:first-child::before {
  border-top: 0;
  border-top-left-radius: 0;
}

/* Removing the border if it is the last card  and it's odd */
.card:last-child:nth-child(odd)::before {
  border-bottom: 0;
  border-bottom-left-radius: 0;
}

/* Removing the border if it is the last card  and it's even */
.card:last-child:nth-child(even)::before {
  border-bottom: 0;
  border-bottom-right-radius: 0;
}

/* card_wrapper about the timeline */
.card_wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}
.card_wrapper p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
  width: 490px;
  margin-bottom: 0;
  margin-top: 25px;
}
.number_wrap {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  line-height: 64px;
  color: #ffffff;
  margin-left: 50px;
}
.odd_wrap {
  margin-left: 150px;
}
/* Title of the card */
.title_text {
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 32px;
  color: #ffffff;
  text-transform: uppercase;
}
.image_wrap {
  width: 234px;
  height: 234px;
  background: #9672ff;
  border-radius: 200px;
  margin-left: 100px;
}
.sub img {
  position: relative;
  top: 35px;
  left: -6px;
}
.play img {
  position: relative;
  top: 10px;
  left: 40px;
}
.earn img {
  position: relative;
  top: 16px;
  left: -16px;
}
/* text right if the card is even  */
/* .card:nth-child(even) > .card_wrapper > .title_text {
  text-align: right;
} */

/* setting dot to the left if the card is odd */
.card:nth-child(odd) > .card_wrapper > .title_text::before {
  left: -45px;
}

/* setting dot to the right if the card is odd */
.card:nth-child(even) > .card_wrapper > .title_text::before {
  right: -45px;
}
.first_left_gradation {
  position: absolute;
  width: 360px;
  height: 450px;
  background: rgba(150, 114, 255, 0.3);
  filter: blur(150px);
  left: -271px;
  bottom: 400px;
}
.second_right_gradation {
  position: absolute;
  width: 360px;
  height: 500px;
  background: rgba(150, 114, 255, 0.3);
  filter: blur(200px);
  right: -210px;
  top: 650px;
}
</style>