<template>
  <!-- fqa section -->
  <section class="fqa bootstrap-fa py-5">
    <!-- shadow image -->
    <img
      src="@/assets/images/shadow-bg.png"
      alt="shadow bg"
      class="shadow-bg"
    />
    <!-- shadow image -->
    <div class="bootstrap-fa container bootstrap-fa py-5">
      <h2
        class="fqa__heading page-heading bootstrap-fa text-center"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        Frequently Asked Questions
      </h2>
      <div class="bootstrap-fa row" style="justify-content: center">
        <div class="bootstrap-fa col-lg-5 bootstrap-fa col-xl-4">
          <div class="fqa__intro bootstrap-fa pe-lg-5">
            <h3
              class="fqa__intro__title bootstrap-fa mb-4"
              data-aos="fade-right"
            >
              Do you have any questions?
              <br />Please check if your question is already listed here
            </h3>
            <p
              class="fqa__intro__desc bootstrap-fa mb-4 bootstrap-fa pb-3"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              If your question is not listed here, <br />please feel free to
              contact support.
            </p>
            <router-link class="ask_btn" :to="{ name: 'Contact2' }" exact>
              <button
                class="fqa__intro__btn bootstrap-fa button button--full-border"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <span>Ask your Question</span>
              </button>
            </router-link>
          </div>
        </div>
        <div class="bootstrap-fa col-lg-7 bootstrap-fa col-xl-8">
          <div>
            <ul class="fqa__list" data-aos="fade-up">
              <li
                class="fqa__list__item bootstrap-fa expanded"
                v-for="question in fqaList"
                :key="question.id"
              >
                <div
                  class="
                    fqa__list__item__header
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                  ref="fqa__list__item__header"
                  @click="expandCard"
                >
                  {{ question.question }}
                </div>
                <div
                  class="fqa__list__item__body"
                  v-html="question.answer"
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end fqa section -->
</template>

<script>
export default {
  name: "fqu",
  data() {
    return {
      fqaList: [
        {
          id: 1,
          question: "How much does it cost to bea 365 member?",
          answer:
            "<p style='padding-top: 12px;'>For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend</p>",
        },
        {
          id: 2,
          question: "How can I join as a influincer?",
          answer:
            "<p style='padding-top: 12px;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>",
        },
        {
          id: 3,
          question: "What is the prizes for the daily playing?",
          answer:
            "<p style='padding-top: 12px;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>",
        },
        {
          id: 4,
          question: "Can I make cash payments?",
          answer:
            "<p style='padding-top: 12px;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>",
        },
        {
          id: 5,
          question: "How do I get the payment complete?",
          answer:
            "<p style='padding-top: 12px;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>",
        },
      ],
    };
  },
  methods: {
    expandCard(e) {
      if (e.currentTarget.classList.contains("expanded")) {
        e.currentTarget.classList.remove("expanded");
        e.currentTarget.nextElementSibling.style.maxHeight = "0";
      } else {
        this.$refs["fqa__list__item__header"].forEach((item) => {
          item.classList.remove("expanded");
          item.nextElementSibling.style.maxHeight = "0";
        });
        e.currentTarget.classList.add("expanded");
        e.currentTarget.nextElementSibling.style.maxHeight =
          e.currentTarget.nextElementSibling.scrollHeight + "px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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

// fqa
.fqa {
  position: relative;
  z-index: 2;
  margin-top: 185px;

  @include maxMdScreen {
    padding: 0 25px;
  }
  .shadow-bg {
    position: absolute;
    z-index: -1;
    left: 0;
    top: -350px;
  }

  &__heading {
    margin-bottom: 90px;

    @include maxMdScreen {
      // font-size: 35px;
      margin-bottom: 50px;
    }
  }

  &__intro {
    @include maxMdScreen {
      text-align: center;
      margin-bottom: 60px;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.6;

      @include maxLgScreen {
        font-size: 18px;
      }
    }

    &__desc {
      color: $secondColor;
      font-weight: 300;
      line-height: 1.8;

      @include maxLgScreen {
        font-size: 15px;
      }
    }

    &__btn {
      font-size: 15px !important;
      padding: 20px 30px !important;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-weight: 300;

    &__item {
      // margin-bottom: 25px;
      &:first-of-type &__header {
        padding-top: 0;
      }

      &__header {
        font-size: 17px;
        border-bottom: 1.5px solid rgba($mainColor, 0.3);
        padding: 25px 5px;
        user-select: none;
        cursor: pointer;
        gap: 20px;

        @include maxExScreen {
          font-size: 16px;
        }

        &::after {
          content: url("data:image/svg+xml,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.94437 8.56073C9.94437 8.85644 9.83146 9.15211 9.60612 9.37756L2.51154 16.4721C2.06023 16.9234 1.32852 16.9234 0.877403 16.4721C0.426282 16.0209 0.426282 15.2894 0.877403 14.838L7.15508 8.56073L0.877622 2.28338C0.426502 1.83208 0.426502 1.10059 0.877622 0.649504C1.32874 0.197981 2.06045 0.197981 2.51176 0.649504L9.60634 7.7439C9.83171 7.96946 9.94437 8.26513 9.94437 8.56073Z' fill='%239672FF'/%3E%3C/svg%3E%0A");
          transform-origin: left;
          transition: transform 0.2s;
        }

        &.expanded::after {
          transform: rotate(90deg);
        }
      }

      &__body {
        font-weight: 300;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;

        @include maxSmScreen {
          padding-top: 12px;
        }

        &.hide {
          max-height: 0;
        }

        p {
          margin-bottom: 20px;
          opacity: 0.75;
          line-height: 1.8;

          @include maxExScreen {
            font-size: 15px;
          }

          &:first-of-type {
            margin-top: 25px;
          }

          &:last-of-type {
            margin-bottom: 25px;
          }
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
    background: linear-gradient(180deg, $mainColor 0%, #361e9e 100%);
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
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}
.fqa__list__item__body p {
  margin-top: 16px;
}
.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
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
  .bootstrap .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .bootstrap-fa .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .bootstrap-fa .container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .bootstrap-fa .container {
    width: 1140px;
  }
}
@media (min-width: 1400px) {
  .bootstrap-fa .container {
    width: 1320px;
  }
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
@media (min-width: 992px) {
  .bootstrap-fa .col-lg-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }
}
@media (min-width: 1200px) {
  .bootstrap-fa .col-xl-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
}
@media (min-width: 992px) {
  .bootstrap-fa .pe-lg-5 {
    padding-right: 3rem !important;
  }
}
@media (min-width: 992px) {
  .bootstrap-fa .col-lg-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }
}
@media (min-width: 1200px) {
  .bootstrap-fa .col-xl-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }
}
.d-flex {
  display: flex !important;
}
</style>