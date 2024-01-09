<template>
  <div
    class="
      testimonials__card
      bootstrap-fa
      text-dark
      bootstrap-fa
      bg-white
      bootstrap-fa
      pnx-sm-5
    "
    v-if="testimonial"
  >
    <img
      :src="require(`@/assets/images/testimonials/${testimonial.imgName}`)"
      alt="testimonial image"
      class="testimonials__card__img"
    />
    <div class="testimonials__card__body bootstrap-fa mt-4 bootstrap-fa d-flex">
      <div class="bootstrap-fa ms-3">
        <p class="testimonials__card__desc bootstrap-fa mb-4">
          {{ testimonial.desc }}
        </p>
        <h3 class="testimonials__card__heading">{{ testimonial.name }}</h3>
        <small class="text-muted">{{ testimonial.title }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "testimonials-card",
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-white {
  background: #fff;
}
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
.testimonials__card {
  border-radius: 15px;
  margin-bottom: 30px;
  img {
    max-width: 185px;
    max-height: 120px;
  }
  &__body {
    &::before {
      content: url("data:image/svg+xml,%3Csvg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99674 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z' fill='%239672FF'/%3E%3C/svg%3E%0A");
    }
  }

  &__desc {
    font-weight: 300;
    line-height: 1.8;
    color: #212529;
    font-size: 16px;

    @include maxExScreen {
      font-size: 15px;
    }
  }

  &__heading {
    color: $mainColor;
    font-size: 18px;
    font-weight: 600;
  }
}
.text-muted {
  color: rgb(108, 117, 125);
}
.pnx-sm-5 {
  padding: 1.5rem 3rem;
}
.d-flex {
  display: flex !important;
}
</style>