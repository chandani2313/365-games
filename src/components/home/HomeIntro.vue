<template>
  <!-- intro -->
  <section
    class="
      intro
      bootstrap-fa
      pb-5
      bootstrap-fa
      text-center
      bootstrap-fa
      text-lg-start
    "
  >
    <!-- bg image -->
    <img
      src="@/assets/images/bg/header-bg.svg"
      alt="intro bg"
      class="intro__bg"
    />
    <!-- end bg image -->

    <!-- shadow images -->
    <img
      src="@/assets/images/shadow-bg.png"
      alt="shadow bg"
      class="shadow-bg shadow-bg--left"
    />
    <img
      src="@/assets/images/shadow-bg.png"
      alt="shadow bg"
      class="shadow-bg shadow-bg--right"
    />
    <!-- end shadow images -->

    <div class="bootstrap-fa container">
      <div
        class="bootstrap-fa row align-items-center flex-lg-nowrap"
        style="justify-content: center"
      >
        <!-- intro__content -->
        <div
          class="
            bootstrap-fa
            col-lg-6
            bootstrap-fa
            mb-4
            bootstrap-fa
            mb-lg-5
            bootstrap-fa
            pb-lg-5
            intro__content
            bootstrap-fa
            order-2
            bootstrap-fa
            order-lg-1
          "
        >
          <div>
            <h1
              class="intro__title mb-0"
              data-aos="fade-right"
              data-aos-offset="0"
            >
              <span>PLAY</span><strong>4</strong> <br />
              PURPOSE
            </h1>
            <router-link class="ask_btn" :to="{ name: 'SignupPage' }" exact>
              <button
                class="
                  bootstrap-fa
                  button
                  bootstrap-fa
                  button--full-left-border
                  intro__btn
                  bootstrap-fa
                  mt-5
                "
                style="margin-top: 50px !important"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-offset="0"
              >
                <span class="bootstrap-fa me-5">JOIN NOW</span>
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55273 2.33449L6.76048 7.54225L1.55273 12.75"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.792 2.33449L16.9997 7.54225L11.792 12.75"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </router-link>

            <!-- partners -->
            <div
              class="
                partners
                bootstrap-fa
                pt-2
                bootstrap-fa
                px-0
                bootstrap-fa
                mt-5
                bootstrap-fa
                mb-lg-5
                bootstrap-fa
                col-lg-8
              "
              data-aos="fade-up"
              data-aos-offset="0"
            >
              <div
                class="
                  bootstrap-fa
                  row
                  align-items-center
                  justify-content-center justify-content-sm-start
                  bootstrap-fa
                  text-center
                "
                style="margin-top: 20px"
              >
                <div
                  class="bootstrap-fa col-3"
                  v-for="i in 4"
                  :key="i"
                  style="display: flex; justify-content: center"
                >
                  <div>
                    <div class="partner__img">
                      <img
                        :src="require(`@/assets/images/partners/${i}.svg`)"
                        alt="partner image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end partners -->
          </div>
        </div>
        <!-- end intro__content -->

        <!-- intro__shape -->
        <div
          class="
            intro__shape
            bootstrap-fa
            col-lg-8
            bootstrap-fa
            order-1
            bootstrap-fa
            order-lg-2
            bootstrap-fa
            mb-4
            bootstrap-fa
            mb-lg-0
          "
        >
          <div>
            <div class="intro__img" data-aos="zoom-in" data-aos-duration="1500">
              <img
                src="@/assets/images/icons/triangle.svg"
                alt="triangle icon"
                class="triangle-icon rotate-360"
              />
              <img
                src="@/assets/images/icons/x.svg"
                alt="x icon"
                class="x-icon rotate-360"
              />
              <!-- <img
                src="@/assets/images/icons/circle.svg"
                alt="circle icon"
                class="circle-icon rotate-360"
              /> -->
              <img
                src="@/assets/images/icons/square.svg"
                alt="square icon"
                class="square-icon rotate-360"
              />

              <img
                src="@/assets/images/intro-new.svg"
                alt="intro image"
                data-aos="scale"
                data-aos-delay="400"
              />
              <img
                src="@/assets/images/smoke.svg"
                alt="smoke image"
                class="smoke-img"
              />
              <img
                src="@/assets/images/intro-circle.svg"
                alt="circle image"
                class="intro__img__circle"
              />
            </div>
          </div>
        </div>
        <!-- end intro__shape -->
      </div>
    </div>
  </section>
  <!-- end intro -->
</template>

<script>
export default {
  name: "home-intro",
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
  @media (min-width: 1350px) {
    @content;
  }
}

@mixin minXgScreen {
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
/* // intro section */
.intro {
  position: relative;
  padding-top: 110px;
  z-index: 1;

  @include maxMdScreen {
    padding: 80px 35px;
  }

  &__bg {
    position: absolute;
    top: -160px;
    left: 0;
    width: 100%;
    z-index: -1;
    animation: smoke alternate 15s infinite ease-in-out;
    opacity: 0.8;

    @include maxMdScreen {
      // height: 100%;
    }
  }

  .shadow-bg {
    position: absolute;
    z-index: -1;

    &--left {
      left: 0;
      top: -350px;
    }

    &--right {
      right: 0;
      top: 30%;
      transform: rotate(180deg);
    }
  }

  &__content {
    position: relative;
    z-index: 2;
    bottom: 25px;
    // @include minXgScreen {
    //   right: 5.5%;
    //   position: relative;
    // }
  }

  &__title {
    font-weight: 700;
    font-size: 80px;

    @include minXlScreen {
      font-size: 130px;
      line-height: 1;
    }

    @include maxSmScreen {
      font-size: 50px;
    }

    span {
      font-weight: 300;
    }

    strong {
      color: $mainColor;
      font-size: 1.5em;
      font-style: italic;
    }
  }

  &__btn {
    padding: 25px 40px 25px 60px;

    @include maxSmScreen {
      font-size: 16px;
      padding: 18px 40px;
    }

    svg path {
      animation: arrow 0.5s infinite alternate linear;

      &:first-of-type {
        animation-delay: 0.5s;
      }
    }
  }

  &__shape {
    @include minLgScreen {
      margin-left: -16.6%;
    }
  }

  &__img {
    position: relative;
    // width: 95%;
    // margin-left: auto;
    .rotate-360 {
      position: absolute;

      &.triangle-icon {
        top: 5%;
        right: 5%;
      }

      &.x-icon {
        top: 60%;
        right: 20%;
      }

      &.square-icon {
        top: 60%;
        left: -35px;
        @include maxMdScreen {
          left: 0;
        }
      }

      @include maxSmScreen {
        width: 20px;
      }
    }
    .smoke-img {
      position: absolute;
      top: 66%;
      left: -70px;
      z-index: -1;
      animation: fire alternate forwards 4s infinite;
    }
    &__circle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 95%;
      height: 95%;
      z-index: -1;
      animation: rotate-360 10s infinite linear;
      display: block;
      transform: translate(-50%, -50%);

      &--sm {
        width: 75%;
        height: 75%;
        animation-delay: 1s;
      }
    }
  }
}

/* // partners-section */
.partners {
  .partner {
    &__img {
      backface-visibility: hidden;

      img {
        transition: transform 0.3s;

        &:hover {
          transform: translateY(-5px);
        }
      }
    }
  }
}

.button {
  border: none;
  color: #fff;
  padding: 15px 39px;
  font-size: 18px;
  background: transparent;
  position: relative;
  overflow: hidden;
  // background-image: url("data:image/svg+xml,%3Csvg width='125' height='60' preserveAspectRatio='none' viewBox='0 0 125 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.999992 5V55C0.999992 57.2091 2.79086 59 4.99999 59H120C122.209 59 124 57.2091 124 55V16.1421C124 15.2999 123.734 14.4791 123.24 13.7969L115.176 2.6547C114.424 1.6154 113.218 1 111.935 1H4.99999C2.79086 1 0.999992 2.79086 0.999992 5Z' stroke='url(%23paint0_linear_734_1736)' stroke-width='2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_734_1736' x1='62.5' y1='-2.69076e-06' x2='22.9911' y2='65.9319' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%239672FF'/%3E%3Cstop offset='1' stop-color='%236B4FE8' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    bottom: 0;
    background: $mainColor;
    background: linear-gradient(180deg, $mainColor 0%, #6b4fe8 100%);
    clip-path: polygon(92% 0%, 100% 26%, 100% 100%, 0 100%, 0 0);
    z-index: -1;
    transition: all 0.3s;
    width: 0;
    border-radius: 5px;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }

  &--full-border {
    background-image: url("data:image/svg+xml,%3Csvg width='194' height='66' preserveAspectRatio='none' viewBox='0 0 194 66' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M193 18.0766C193 17.0012 192.567 15.9711 191.799 15.2187L178.445 2.14206C177.697 1.40999 176.692 1 175.646 1H5C2.79086 1 1 2.79086 1 5V61C1 63.2091 2.79086 65 5 65H189C191.209 65 193 63.2091 193 61V18.0766Z' stroke='url(%23paint0_linear_734_1853)' stroke-width='2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_734_1853' x1='97' y1='0' x2='97' y2='66' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%239672FF'/%3E%3Cstop offset='1' stop-color='%236B4FE8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
  }

  &--full-left-border {
    background-image: url("data:image/svg+xml,%3Csvg width='343' height='103' preserveAspectRatio='none' viewBox='0 0 343 103' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M340.221 5.6875V97.096C340.221 98.4767 339.102 99.596 337.721 99.596H5.47559C4.09488 99.596 2.97559 98.4767 2.97559 97.096V21.0163C2.97559 20.3532 3.23898 19.7173 3.70782 19.2485L19.0366 3.91973C19.5054 3.45089 20.1413 3.1875 20.8043 3.1875H337.721C339.102 3.1875 340.221 4.30679 340.221 5.6875Z' stroke='url(%23paint0_linear_735_273)' stroke-width='5'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_735_273' x1='171.599' y1='0.6875' x2='171.599' y2='102.096' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%239672FF'/%3E%3Cstop offset='1' stop-color='%236B4FE8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    &::before {
      clip-path: polygon(7% 0, 100% 0, 100% 100%, 0 100%, 0 26%);
      left: auto;
      right: 0;
    }
  }
}

.intro__btn {
  padding: 25px 40px 25px 60px !important;
}
.me-5 {
  margin-right: 3rem !important;
}
.flex-lg-nowrap {
  flex-wrap: nowrap;
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
  margin-left: -15px;
  margin-right: -15px;
}
.bootstrap-fa .row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap-reverse;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
}
// .bootstrap-fa .row > * {
//   flex-shrink: 0;
//   width: 100%;
//   max-width: 100%;
//   padding-right: calc(var(--bs-gutter-x) / 2);
//   padding-left: calc(var(--bs-gutter-x) / 2);
//   margin-top: var(--bs-gutter-y);
// }
// .mb-lg-5 {
//   margin-bottom: 3rem !important;
// }
.pb-lg-5 {
  padding-bottom: 3rem !important;
}
.order-2 {
  order: 2 !important;
}
.order-lg-1 {
  order: 1 !important;
}
.mb-lg-0 {
  margin-bottom: 0 !important;
}
.col-3 {
  flex: 0 0 auto;
  width: 25%;
}
.order-lg-2 {
  order: 2 !important;
}
@media (min-width: 992px) {
  .bootstrap-fa .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}
@media (min-width: 992px) {
  .bootstrap-fa .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
.justify-content-center {
  justify-content: center !important;
}

.justify-content-sm-start {
  justify-content: flex-start !important;
}
.align-items-center {
  align-items: center;
}
</style>
