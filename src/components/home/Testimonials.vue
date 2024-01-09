<template>
  <!-- testimonials section -->
  <section class="testimonials bootstrap-fa pb-lg-5">
    <!-- bg image -->
    <img
      src="@/assets/images/testimonials-bg-new.svg"
      alt="testimonials bg"
      class="testimonials__bg"
    />
    <!-- end bg image -->

    <div class="bootstrap-fa container bootstrap-fa pt-5">
      <div
        class="bootstrap-fa col-xl-10 bootstrap-fa mx-auto bootstrap-fa px-0"
      >
        <div class="bootstrap-fa row">
          <div class="bootstrap-fa col-md-6">
            <div>
              <div
                class="
                  testimonials__heading
                  bootstrap-fa
                  d-flex
                  align-items-start
                  bootstrap-fa
                  mb-5
                "
              >
                <svg
                  width="150"
                  height="125"
                  viewBox="0 0 185 155"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-aos="fade-right"
                  data-aos-offset="1500"
                >
                  <path
                    d="M182.261 23.3283C155.579 36.6817 141.437 52.6921 141.437 71.6161V73.4012L143.211 73.6032C154.581 74.898 163.902 79.4607 171.281 87.2784C178.67 95.1075 182.319 104.093 182.319 114.317C182.319 125.264 178.749 134.399 171.63 141.851C164.532 149.281 155.638 153 144.8 153C132.695 153 122.2 148.177 113.231 138.353C104.275 128.544 99.7857 116.65 99.7857 102.549C99.7857 60.3187 123.329 27.0143 171.21 2.66352L182.261 23.3283ZM84.4522 23.3324C57.5678 36.6807 43.3105 52.6871 43.3105 71.6161V73.405L45.0885 73.6037C56.6942 74.9004 66.1241 79.4687 73.4953 87.2784C80.8847 95.1075 84.5329 104.093 84.5329 114.317C84.5329 125.255 80.913 134.386 73.6844 141.84C66.4687 149.28 57.512 153 46.6733 153C34.5696 153 24.1359 148.178 15.2828 138.362C6.43711 128.555 2 116.657 2 102.549C2 60.311 25.4405 27.0061 73.1046 2.65712L84.4522 23.3324Z"
                    stroke="url(#paint0_linear_734_1791)"
                    stroke-width="4"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_734_1791"
                      x1="92.5"
                      y1="0"
                      x2="92.5"
                      y2="155"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9672FF" />
                      <stop offset="1" stop-color="#6B4FE8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="testimonials__heading__wrapper">
                  <h2
                    class="testimonials__heading__title page-heading"
                    style="width: 90%"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-offset="0"
                  >
                    What Players Say
                  </h2>
                </div>
              </div>

              <TestimonialsCard
                :testimonial="testimonials[0]"
                data-aos="fade-up"
              />
            </div>
          </div>

          <div class="bootstrap-fa col-md-6">
            <div class="testimonials__list">
              <TestimonialsCard
                v-for="testimonial in testimonials.slice(1)"
                :key="testimonial.id"
                :testimonial="testimonial"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-offset="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end testimonials section -->
</template>

<script>
import TestimonialsCard from "@/components/home/TestimonialsCard.vue";
export default {
  name: "testimonials",
  components: { TestimonialsCard },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          imgName: "1.svg",
          name: "Jesper Wecksell",
          title: "Player, Fanatic Team",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          id: 2,
          imgName: "2.svg",
          name: "Matthea Wünsch",
          title: "Manager, Team Liquid",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          id: 3,
          imgName: "3.svg",
          name: "Wang Chunyu",
          title: "Leader, LGD Gaming",
          desc: "365 games gave us a new genereatio of gaming",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
// main colors
$darkColor: #040404;
$mainColor: #9672ff;
$secondColor: #cdcadb;
// media query helpers
@mixin maxExScreen {
  @media (max-width: 575.98px) {
    @content;
  }
}

@mixin maxSmScreen {
  @media (max-width: 767.98px) {
    @content;
  }
}

@mixin maxMdScreen {
  @media (max-width: 991.98px) {
    @content;
  }
}

@mixin maxLgScreen {
  @media (max-width: 1199.98px) {
    @content;
  }
}

@mixin minSmScreen {
  @media (min-width: 576px) {
    @content;
  }
}

@mixin minMdScreen {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin minLgScreen {
  @media (min-width: 992px) {
    @content;
  }
}

@mixin minXlScreen {
  @media (min-width: 1400px) {
    @content;
  }
}
// smoke
@keyframes smoke {
  0% {
    transform: translateX(5%) scale(1);
  }

  100% {
    transform: translateX(-5%) scale(1.6);
  }
}

@keyframes smoke-2 {
  0% {
    transform: translateX(1%) scale(1);
  }

  100% {
    transform: translateX(-1%) scale(1.3);
  }
}

// arrow
@keyframes arrow {
  from {
    stroke: rgba(#fff, 0.5);
  }

  to {
    stroke: #fff;
  }
}

// rotate-360
@keyframes rotate-360 {
  from {
    transform: rotate(0) translate(-50%, -50%);
    transform-origin: 0 0;
  }

  to {
    transform: rotate(-359deg) translate(-50%, -50%);
    transform-origin: 0 0;
  }
}

.rotate-360 {
  animation: rotate-360 5s infinite linear;
}

// drawLine
// @keyframes drawLine {
//   to {
//       stroke-dashoffset: 0;
//   }
// }

// footer scale bg
@keyframes scale {
  from {
    transform: translate(-50%, -50%) rotate(-2.67deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(2.67deg) scale(1.3);
  }
}

@keyframes float {
  from {
    transform: translateY(calc(-50% - 10px));
  }
  to {
    transform: translateY(calc(-50% + 10px));
  }
}

@keyframes fire {
  from {
    transform: scale(0.7) translate(63px, -43px);
    opacity: 0;
    // transform: translate(63px, -43px);
  }
  to {
    transform: scale(1);
    opacity: 0.5;
  }
}

// aos custom animation
[data-aos="draw-line"] {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition-property: all;

  &.aos-animate {
    stroke-dashoffset: 0;
  }
}

[data-aos="scale"] {
  transition-property: transform;
  transform-origin: bottom;
  transform: scale(0);
  &.aos-animate {
    transform: scale(1);
  }
}

[data-aos][data-aos][data-aos-easing="ease-out-back"],
body[data-aos-easing="ease-out-back"] [data-aos] {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

// testimonials
.testimonials {
  position: relative;
  padding-top: 100px;
  z-index: 1;

  @include maxMdScreen {
    padding: 50px 25px;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    animation: smoke-2 alternate 15s infinite ease-in-out;
    opacity: 0.9;

    @include maxMdScreen {
      // height: 100%;
    }
  }

  &__heading {
    margin-top: -70px;

    & > svg {
      min-width: 150px;
    }

    &__wrapper {
      margin-left: -45px;
      margin-top: 55px;
      flex: 100% 1 1;
    }

    &__title {
    }

    & + .testimonials__card {
      @include minXlScreen {
        margin-left: 110px;
      }
    }
  }

  &__list &__card:last-of-type {
    @include minXlScreen {
      max-width: 70%;
    }
  }
}
// page heading
.page-heading {
  font-size: 62px;
  font-weight: 700;
  @include maxLgScreen {
    font-size: 45px;
  }
  @include maxMdScreen {
    font-size: 35px;
  }
}
.align-items-start {
  align-items: start;
}
.bootstrap-fa .container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .bootstrap-fa .container,
  .bootstrap-fa .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .bootstrap-fa .container,
  .bootstrap-fa .container-md,
  .bootstrap-fa .container-sm {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .bootstrap-fa .container,
  .bootstrap-fa .container-lg,
  .bootstrap-fa .container-md,
  .bootstrap-fa .container-sm {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .bootstrap-fa .container,
  .bootstrap-fa .container-lg,
  .bootstrap-fa .container-md,
  .bootstrap-fa .container-sm,
  .bootstrap-fa .container-xl {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .bootstrap-fa .container,
  .bootstrap-fa .container-lg,
  .bootstrap-fa .container-md,
  .bootstrap-fa .container-sm,
  .bootstrap-fa .container-xl,
  .bootstrap-fa .container-xxl {
    max-width: 1320px;
  }
}
.bootstrap-fa .row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
}
// .row > * {
//   flex-shrink: 0;
//   width: 100%;
//   max-width: 100%;
//   padding-right: calc(var(--bs-gutter-x) / 2);
//   padding-left: calc(var(--bs-gutter-x) / 2);
//   margin-top: var(--bs-gutter-y);
// }

@media (min-width: 1200px) {
  .bootstrap-fa .col-xl-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }
}
.bootstrap-fa .mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
@media (max-width: 840px) {
  .bootstrap-fa .col-md-6 {
    padding: calc(var(--bs-gutter-x) * 0);
  }
}
@media (min-width: 840px) {
  .bootstrap-fa .col-md-6 {
    padding-right: calc(var(--bs-gutter-x) * 1.2);
  }
}
@media (min-width: 768px) {
  .bootstrap-fa .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
.d-flex {
  display: flex !important;
}
@media only screen and (min-width: 992px) {
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
}
</style>