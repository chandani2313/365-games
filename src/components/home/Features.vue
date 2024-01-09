<template>
  <!-- features section -->
  <section class="features bootstrap-fa pb-5">
    <!-- bg image -->
    <img
      src="@/assets/images/steps-bg-2.svg"
      alt="features bg"
      class="features__bg"
    />
    <!-- end bg image -->

    <!-- shadow image -->
    <img
      src="@/assets/images/shadow-bg.png"
      alt="shadow bg"
      class="shadow-bg"
    />
    <!-- shadow image -->

    <div class="bootstrap-fa container bootstrap-fa py-5">
      <h2
        class="features__heading page-heading bootstrap-fa text-center"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        3 Easy-Steps
      </h2>
      <div class="bootstrap-fa features__row">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="feature.id"
          :feature="feature"
          :hideSvgLine="index !== features.length - 1"
          :data-aos-delay="200 * index"
          :data-aos-svg-delay="(index + 1) * 800"
        />

        <!-- floating icons -->
        <img
          src="@/assets/images/icons/triangle.svg"
          alt="triangle icon"
          class="features__row__icon triangle-icon rotate-360"
          width="35"
        />
        <img
          src="@/assets/images/icons/x.svg"
          alt="x icon"
          class="features__row__icon x-icon rotate-360"
        />
        <img
          src="@/assets/images/icons/square.svg"
          alt="square icon"
          class="features__row__icon square-icon rotate-360"
        />
        <img
          src="@/assets/images/icons/square.svg"
          alt="square icon"
          class="features__row__icon square-icon--sm rotate-360"
          width="25"
        />
        <!-- end floating icons -->
      </div>
    </div>
  </section>
  <!-- end features section -->
</template>

<script>
import FeatureCard from "@/components/home/FeatureCard.vue";
export default {
  name: "features",
  components: { FeatureCard },
  data() {
    return {
      features: [
        {
          id: 1,
          number: 1,
          title: "JOIN",
          desc: "Subscribe to 365 Games and choose your membership (1, 3 or 6-months)",
        },
        {
          id: 2,
          number: 2,
          title: "PLAY",
          desc: "Play your favorite Battle Royale game (COD Warzone, Apex Legend or Fortnite)",
        },
        {
          id: 3,
          number: 3,
          title: "EARN",
          desc: "Earn up to 1 million dollars by playing tournaments or by lucky draws!",
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
// page heading
.page-heading {
  font-size: 80px;
  @include maxLgScreen {
    font-size: 45px;
  }
  @include maxMdScreen {
    font-size: 35px;
  }
}

// features-section
.features {
  position: relative;
  padding-top: 100px;
  z-index: 1;

  @include maxLgScreen {
    padding-top: 30px;
  }

  @include maxSmScreen {
    padding-top: 0;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotate(15deg);
    z-index: -1;
    animation: scale-2 alternate 15s infinite ease-in-out;
  }

  // footer scale bg
  @keyframes scale-2 {
    from {
      transform: translateX(-50%) rotate(5deg);
    }
    to {
      transform: translateX(-50%) rotate(10deg) scale(1.3);
    }
  }
  .shadow-bg {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: -500px;
    transform: rotate(180deg);
  }

  &__heading {
    margin-bottom: 90px;
    letter-spacing: 5px;
    font-size: 80px;
    font-weight: 700;

    @include maxMdScreen {
      font-size: 40px;
    }

    @include maxExScreen {
      line-height: 1;
      padding: 0;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px 30px;
    position: relative;

    @include maxMdScreen {
      justify-content: center;
    }

    &__icon {
      position: absolute;
      z-index: -1;

      &.triangle-icon {
        top: 0;
        right: 20%;

        @include maxMdScreen {
          right: 0;
        }
      }

      &.x-icon {
        left: 20%;
        top: 48%;

        @include maxMdScreen {
          left: 20px;
        }
      }

      &.square-icon {
        top: 80%;
        left: -40px;

        @include maxMdScreen {
          left: 20px;
        }
      }

      &.square-icon--sm {
        top: 50%;
        right: 38%;

        @include maxMdScreen {
          right: 0;
        }
      }
    }
  }

  &__card {
    max-width: 242px;
    position: relative;

    &:hover &__number {
      color: transparent;
      transform: translateY(-10px);
    }

    @include maxMdScreen {
      text-align: center;
    }

    &__number {
      font-weight: 700;
      font-size: 140px;
      background: linear-gradient(#9471fc, #886fcf);
      -webkit-background-clip: text;
      -webkit-text-stroke: 8px transparent;
      color: $darkColor;
      transition: all 0.3s;

      @include maxMdScreen {
        font-size: 100px;
      }
    }

    &__title,
    &__desc {
      padding: 0 8px;
    }

    &__title {
      font-weight: 700;
      font-size: 45px;
      margin-bottom: 15px;
      background: $darkColor;
      display: inline-block;

      @include maxMdScreen {
        font-size: 30px;
      }
    }

    &__desc {
      font-size: 15px;
      margin-bottom: 0;
      font-weight: 300;
      line-height: 1.8;
    }

    svg {
      position: absolute;
      top: 5px;
      left: 59%;
      z-index: -1;
      width: 152%;

      @include maxLgScreen {
        width: 90%;
        top: 30px;
        left: 55%;
      }

      @include maxMdScreen {
        display: none;
      }

      path:first-of-type {
        // stroke-dasharray: 1000;
        // stroke-dashoffset: 1000;
        // animation: drawLine 2s linear forwards;
      }
    }
  }
}
@media (max-width: 1270px) {
  .features__row {
    max-width: 1296px;
  }
}
.pb-5 {
  padding-bottom: 180px !important;
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
::v-deep .v-application .pb-5 {
  padding-bottom: 3rem !important;
}
</style>
