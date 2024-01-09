<template>
  <div class="features__card" v-if="feature">
    <div :data-aos-delay="dataAosDelay" data-aos="fade-up">
      <h3 class="features__card__number">
        <span>
          <span v-if="feature.number < 10">0</span>{{ feature.number }}
        </span>
      </h3>
      <h4 class="features__card__title bootstrap-fa text-uppercase">
        {{ feature.title }}
      </h4>
      <p class="features__card__desc">{{ feature.desc }}</p>
    </div>

    <svg
      width="358"
      height="221"
      viewBox="0 0 358 221"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-if="hideSvgLine"
    >
      <path
        d="M1.74517 188.319C38.7553 220.669 132.041 254.741 209.103 132.228C305.43 -20.912 156.17 -35.4214 185.381 69.5084C214.592 174.438 286.046 219.819 357.241 194.026"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="3"
        stroke-dasharray="6 6"
        data-aos="draw-line"
        data-aos-duration="1000"
        data-aos-easing="linear"
        :data-aos-delay="dataAosSvgDelay"
        :data-aos-offset="windowHeight - 50"
      />
      <path
        d="M1.74517 188.319C38.7553 220.669 132.041 254.741 209.103 132.228C305.43 -20.912 156.17 -35.4214 185.381 69.5084C214.592 174.438 286.046 219.819 357.241 194.026"
        stroke="#040404"
        stroke-width="3"
        stroke-dasharray="6 6"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "feature-card",
  data() {
    return {
      windowHeight: window.outerHeight,
    };
  },
  props: {
    feature: {
      type: Object,
      required: true,
    },
    hideSvgLine: {
      type: Boolean,
      default: true,
    },
    dataAosDelay: {
      default: 300,
    },
    dataAosSvgDelay: {
      default: 800,
    },
  },
};
</script>

<style lang="scss" scoped>
// main colors
$darkColor: #040404;
$mainColor: #9672ff;
$secondColor: #cdcadb;

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
// features card
.features__card {
  max-width: 242px;
  position: relative;
  z-index: 1;

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
    position: relative;
    left: -15px;

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
h3 {
  line-height: 1.2;
}
</style>