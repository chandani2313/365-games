<template>
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
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerLinks: [
        {
          text: "Advertise",
          path: "##",
        },
        {
          text: "Sponsor",
          path: "##",
        },
        {
          text: "Careers",
          path: "##",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// Footer
$mainColor: #9672ff;
$secondColor: #cdcadb;
@mixin maxMdScreen {
  @media (max-width: 991.98px) {
    @content;
  }
}
.footer {
  &__nav {
    padding: 30px 0 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 75px;
    font-weight: 300;
    font-size: 13px;
    color: #fff;

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
.justify-content-center {
  justify-content: center !important;
}
.align-items-center {
  align-items: center !important;
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
    max-width: 1232px;
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