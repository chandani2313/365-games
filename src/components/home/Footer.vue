<template>
  <fragment>
    <footer class="bootstrap-fa footer">
      <!-- shadow image -->
      <img
        src="@/assets/images/shadow-bg.png"
        alt="shadow bg"
        class="shadow-bg"
      />
      <!-- shadow image -->

      <!-- footer bg -->
      <img
        src="@/assets/images/footer-bg-new.svg"
        alt="footer bg"
        class="footer__bg"
      />
      <!-- footer bg -->

      <div class="bootstrap-fa container bootstrap-fa footer__container">
        <div class="footer__floating-img">
          <img src="@/assets/images/footer-img.svg" alt="footer img" />
          <!-- floating icons -->
          <img
            src="@/assets/images/icons/triangle.svg"
            alt="triangle icon"
            class="footer__floating-img__icon triangle-icon rotate-360"
            width="30"
          />
          <img
            src="@/assets/images/icons/x.svg"
            alt="x icon"
            class="footer__floating-img__icon x-icon rotate-360"
          />
          <img
            src="@/assets/images/icons/square.svg"
            alt="square icon"
            class="footer__floating-img__icon square-icon rotate-360"
          />
          <!-- end floating icons -->
        </div>
        <div class="bootstrap-fa text-center">
          <h2
            class="footer__heading page-heading bootstrap-fa mb-4"
            data-aos="fade-up"
          >
            Newsletter
          </h2>
          <p
            class="
              bootstrap-fa
              footer__desc
              bootstrap-fa
              mb-4
              bootstrap-fa
              pb-3
            "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get the latest updates about our new games and prizes
          </p>
        </div>

        <form
          class="bootstrap-fa form bootstrap-fa footer__form"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Enter your email"
              class="form__input me-3"
            />

            <button
              class="
                bootstrap-fa
                button
                bootstrap-fa
                button--full-border
                bootstrap-fa
                form__button
              "
            >
              <span>Subscribe </span>
            </button>
          </div>
        </form>
      </div>
    </footer>
    <div class="container">
      <div class="bootstrap-fa footer__nav">
        <div class="bootstrap-fa row">
          <div class="bootstrap-fa col-lg-4">
            <div class="footer__copyright-text">
              &copy;2022 <span>365games</span>. All Rights Reserved.
            </div>
          </div>

          <div
            class="
              bootstrap-fa
              col-lg-4
              bootstrap-fa
              my-4
              bootstrap-fa
              py-2
              bootstrap-fa
              py-lg-0
              bootstrap-fa
              my-lg-0
            "
          >
            <ul
              class="
                footer__links
                d-flex
                align-items-center
                justify-content-center
                bootstrap-fa
                p-0
                bootstrap-fa
                m-0
              "
            >
              <li v-for="(link, index) in footerLinks" :key="index">
                <a :href="link.path">{{ link.text }}</a>
              </li>
            </ul>
          </div>

          <div class="bootstrap-fa col-lg-4">
            <ul
              class="
                footer__social-icons
                d-flex
                align-items-center
                justify-content-center
                bootstrap-fa
                justify-content-lg-end
                bootstrap-fa
                p-0
                bootstrap-fa
                m-0
              "
            >
              <li>
                <a href="#" class="facebook-icon" aria-label="facebook link"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.2416 3.47399 18.1719 8.01563 18.8846V12.2461H5.60352V9.5H8.01563V7.40703C8.01563 5.02609 9.43395 3.71094 11.6039 3.71094C12.643 3.71094 13.7305 3.89648 13.7305 3.89648V6.23437H12.5326C11.3525 6.23437 10.9844 6.96673 10.9844 7.71875V9.5H13.6191L13.1979 12.2461H10.9844V18.8846C15.526 18.1719 19 14.2416 19 9.5Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="twitter-icon" aria-label="twitter link"
                  ><svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.97721 15.5772C13.1453 15.5772 17.067 9.85713 17.067 4.89819C17.067 4.73739 17.0633 4.573 17.0558 4.4122C17.8187 3.88092 18.4771 3.22286 19 2.46893C18.2895 2.77334 17.5351 2.97214 16.7627 3.05856C17.576 2.58908 18.185 1.85156 18.4768 0.982713C17.7116 1.41938 16.8748 1.72741 16.0023 1.8936C15.4144 1.29207 14.6371 0.893785 13.7906 0.760325C12.9441 0.626865 12.0754 0.765661 11.319 1.15525C10.5626 1.54485 9.96059 2.16354 9.60596 2.91568C9.25133 3.66781 9.16388 4.5115 9.35713 5.31629C7.80781 5.24142 6.29212 4.85386 4.90832 4.17872C3.52452 3.50358 2.30351 2.55594 1.32443 1.39724C0.826816 2.22341 0.674545 3.20105 0.898566 4.13145C1.12259 5.06185 1.70609 5.87521 2.53049 6.40621C1.91158 6.38729 1.30623 6.22682 0.764453 5.93808V5.98454C0.763899 6.85154 1.07516 7.69198 1.64533 8.36299C2.2155 9.03399 3.00938 9.49415 3.89203 9.66524C3.31871 9.81629 2.71699 9.8383 2.13342 9.72956C2.38249 10.4752 2.86708 11.1273 3.51957 11.595C4.17206 12.0627 4.95989 12.3225 5.77311 12.3382C4.3925 13.3825 2.68705 13.949 0.931445 13.9463C0.620102 13.9458 0.309066 13.9275 0 13.8913C1.78351 14.9931 3.85821 15.5783 5.97721 15.5772Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="instagram-icon" aria-label="instagram link"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 1.71074C12.0383 1.71074 12.3389 1.72187 13.3371 1.76641C14.2648 1.80723 14.7658 1.96309 15.0998 2.09297C15.5414 2.26367 15.8605 2.47148 16.1908 2.80176C16.5248 3.13574 16.7289 3.45117 16.8996 3.89277C17.0295 4.22676 17.1854 4.73144 17.2262 5.65547C17.2707 6.65742 17.2818 6.95801 17.2818 9.49258C17.2818 12.0309 17.2707 12.3314 17.2262 13.3297C17.1854 14.2574 17.0295 14.7584 16.8996 15.0924C16.7289 15.534 16.5211 15.8531 16.1908 16.1834C15.8568 16.5174 15.5414 16.7215 15.0998 16.8922C14.7658 17.0221 14.2611 17.1779 13.3371 17.2187C12.3352 17.2633 12.0346 17.2744 9.5 17.2744C6.96172 17.2744 6.66113 17.2633 5.66289 17.2187C4.73516 17.1779 4.23418 17.0221 3.9002 16.8922C3.45859 16.7215 3.13945 16.5137 2.80918 16.1834C2.4752 15.8494 2.27109 15.534 2.10039 15.0924C1.97051 14.7584 1.81465 14.2537 1.77383 13.3297C1.7293 12.3277 1.71816 12.0271 1.71816 9.49258C1.71816 6.9543 1.7293 6.65371 1.77383 5.65547C1.81465 4.72773 1.97051 4.22676 2.10039 3.89277C2.27109 3.45117 2.47891 3.13203 2.80918 2.80176C3.14316 2.46777 3.45859 2.26367 3.9002 2.09297C4.23418 1.96309 4.73887 1.80723 5.66289 1.76641C6.66113 1.72187 6.96172 1.71074 9.5 1.71074ZM9.5 0C6.9209 0 6.59805 0.0111328 5.58496 0.0556641C4.57559 0.100195 3.88164 0.263476 3.28047 0.497266C2.65332 0.742187 2.12266 1.06504 1.5957 1.5957C1.06504 2.12266 0.742188 2.65332 0.497266 3.27676C0.263477 3.88164 0.100195 4.57187 0.0556641 5.58125C0.0111328 6.59805 0 6.9209 0 9.5C0 12.0791 0.0111328 12.402 0.0556641 13.415C0.100195 14.4244 0.263477 15.1184 0.497266 15.7195C0.742188 16.3467 1.06504 16.8773 1.5957 17.4043C2.12266 17.9312 2.65332 18.2578 3.27676 18.499C3.88164 18.7328 4.57188 18.8961 5.58125 18.9406C6.59434 18.9852 6.91719 18.9963 9.49629 18.9963C12.0754 18.9963 12.3982 18.9852 13.4113 18.9406C14.4207 18.8961 15.1147 18.7328 15.7158 18.499C16.3393 18.2578 16.8699 17.9312 17.3969 17.4043C17.9238 16.8773 18.2504 16.3467 18.4916 15.7232C18.7254 15.1184 18.8887 14.4281 18.9332 13.4187C18.9777 12.4057 18.9889 12.0828 18.9889 9.50371C18.9889 6.92461 18.9777 6.60176 18.9332 5.58867C18.8887 4.5793 18.7254 3.88535 18.4916 3.28418C18.2578 2.65332 17.935 2.12266 17.4043 1.5957C16.8773 1.06875 16.3467 0.742187 15.7232 0.500976C15.1184 0.267187 14.4281 0.103906 13.4188 0.059375C12.402 0.0111328 12.0791 0 9.5 0Z"
                    />
                    <path
                      d="M9.50098 4.61719C6.80684 4.61719 4.62109 6.80293 4.62109 9.49707C4.62109 12.1912 6.80684 14.377 9.50098 14.377C12.1951 14.377 14.3809 12.1912 14.3809 9.49707C14.3809 6.80293 12.1951 4.61719 9.50098 4.61719ZM9.50098 12.6625C7.75313 12.6625 6.33555 11.2449 6.33555 9.49707C6.33555 7.74922 7.75313 6.33164 9.50098 6.33164C11.2488 6.33164 12.6664 7.74922 12.6664 9.49707C12.6664 11.2449 11.2488 12.6625 9.50098 12.6625Z"
                    />
                    <path
                      d="M15.7121 4.42832C15.7121 5.05918 15.2 5.56758 14.5729 5.56758C13.942 5.56758 13.4336 5.05547 13.4336 4.42832C13.4336 3.79746 13.9457 3.28906 14.5729 3.28906C15.2 3.28906 15.7121 3.80117 15.7121 4.42832Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Footer",
  components: {
    Fragment,
  },
  data() {
    return {
      footerLinks: [
        {
          text: "Advertise",
          path: "/contact",
        },
        {
          text: "Sponsor",
          path: "/contact",
        },
        {
          text: "Careers",
          path: "/contact",
        },
      ],
    };
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

.form {
  &__input {
    background: rgba(#fff, 0.08);
    border-radius: 5px;
    outline: none;
    border: 1px solid transparent;
    transition: all 0.3s;
    padding: 19px 25px;
    color: #fff;
    width: 100%;
    font-weight: 300;
    &::placeholder {
      color: rgba(#fff, 0.8);
    }
    &:focus {
      border-color: rgba($mainColor, 0.5);
    }
  }
  &__button {
    font-size: 16px;
    padding: 10px 30px;
    font-weight: 300;
  }
}

// Footer
.footer {
  position: relative;
  padding: 350px 0 100px;
  z-index: 1;

  @include maxMdScreen {
    padding: 180px 0 20px;
  }

  @include maxExScreen {
    padding: 75px 0 20px;
  }

  &__bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-2.67deg);
    z-index: -1;
    animation: scale alternate 15s infinite ease-in-out;
  }

  .shadow-bg {
    position: absolute;
    z-index: -1;
    left: 0;
    top: -400px;
  }

  &__container {
    position: relative;
  }

  &__floating-img {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-50%);
    z-index: -1;
    animation: float alternate 3s infinite ease-in-out;

    @include maxMdScreen {
      max-width: 30%;
    }

    @include maxExScreen {
      left: 30px;
    }

    &__icon {
      position: absolute;

      @include maxExScreen {
        width: 20px;
      }

      &.x-icon {
        top: 13%;
        right: -14%;
      }

      &.triangle-icon {
        top: 0;
        left: 0;
      }

      &.square-icon {
        bottom: 0;
        left: -12%;
      }
    }
  }

  &__desc {
    opacity: 0.6;
    font-weight: 300;
  }

  &__form {
    .form__input {
      max-width: 330px;
      flex: 1 0 0%;

      @include maxExScreen {
        padding: 18px 25px;
        font-size: 13px;
      }
    }

    .form__button {
      @include maxExScreen {
        font-size: 13px;
      }
    }
  }

  &__nav {
    padding: 30px 0 50px;
    border-top: 1px solid rgba(#fff, 0.1);
    margin-top: 50px;
    font-weight: 300;
    font-size: 13px;
    @include maxMdScreen {
      text-align: center;
      // font-size: 15px;
    }
  }

  &__copyright-text {
    span {
      color: $mainColor;
    }
  }

  &__links {
    gap: 10px 30px;
    list-style: none;

    li {
      a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
          color: $mainColor;
        }
      }
    }
  }

  &__social-icons {
    list-style: none;
    gap: 5px 22px;
    li {
      a {
        svg {
          transition: all 0.3s;
          fill: #fff;
        }
        &:hover {
          svg {
            fill: $mainColor;
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
.justify-content-center {
  justify-content: center !important;
}
.align-items-center {
  align-items: center !important;
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
.bootstrap-fa .container,
.container {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .bootstrap-fa .container,
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .bootstrap-fa .container,
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .bootstrap-fa .container,
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .bootstrap-fa .container,
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .bootstrap-fa .container,
  .container {
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
@media (max-width: 960px) {
  .bootstrap-fa .row {
    display: unset;
  }
}
@media (min-width: 992px) {
  .bootstrap-fa .col-lg-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
}
.d-flex {
  display: flex !important;
}
@media (min-width: 992px) {
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
}
.v-application ul,
.v-application ol {
  padding-left: unset;
}
</style>