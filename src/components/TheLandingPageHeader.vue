<template>
  <div class="navbar">
    <nav class="indextop-nav">
      <div class="indextop-nav-wrapper">
        <div class="playtonia-logo">
          <a href="/">
            <img src="/img/assets/landing-page/365-logo-final-white.png" />
          </a>
        </div>
        <div class="navbar_btns">
          <button>
            <router-link
              class="btns"
              data-animation="ripple"
              tag="div"
              :to="{ name: 'NewLandingPage' }"
              active-class="active"
              exact
            >
              Home
            </router-link>
          </button>
          <button>
            <router-link
              class="btns"
              data-animation="ripple"
              tag="div"
              :to="{ name: 'AboutUs2' }"
              active-class="active"
              exact
            >
              About us
            </router-link>
          </button>
          <button>
            <router-link
              class="btns"
              data-animation="ripple"
              tag="div"
              :to="{ name: 'HowItWorks2' }"
              active-class="active"
              exact
            >
              How it works
            </router-link>
          </button>
          <button>
            <router-link
              class="btns"
              data-animation="ripple"
              tag="div"
              :to="{ name: 'Blog' }"
              active-class="active"
              exact
            >
              Blog
            </router-link>
          </button>
          <button>
            <router-link
              class="btns"
              data-animation="ripple"
              tag="div"
              :to="{ name: 'Contact2' }"
              active-class="active"
              exact
            >
              Contact
            </router-link>
          </button>
          <router-link
            class="Playtonia-register-btn"
            tag="div"
            :to="{ name: 'Login' }"
            exact
          >
            <button class="login-btn">Login</button>
          </router-link>
          <!-- <router-link 
              class="Playtonia-register-btn"
              tag="div"
              :to="{ name: 'Signup' }"
              exact
            >
              <div class="button">
                <div class="qube">
                  <div class="front">SIGNUP</div>
                  <div class="back">SIGNUP</div>
                </div>
              </div>
            </router-link>
          </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheLandingPageHeader",
};
</script>

<style scoped lang="scss">
.btns {
  font-family: "poppins";
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  line-height: 40px;
  overflow: hidden;
}
button {
  cursor: unset;
}
.active {
  color: #ffffff;
  font-size: 21px;
  font-weight: bold;
  line-height: 40px;
  overflow: hidden;
}
.active {
  border-bottom: 1px solid #ffffff;
  position: relative;
  bottom: -1px;
}
// .btns::before {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 2px;
//   bottom: -2px;
//   left: 0;
//   background-color: #ffffff;
//   visibility: hidden;
//   -webkit-transform: scaleX(0);
//   transform: scaleX(0);
//   -webkit-transition: all 0.3s ease-in-out 0s;
//   transition: all 0.3s ease-in-out 0s;
// }
.login-btn {
  margin-left: 20px;
  font-family: "poppins";
  font-weight: 500;
  font-size: 20px;
  position: relative;
  color: #ffffff;
  cursor: pointer;
  width: 135px;
  height: 60px;
}
.login-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  padding: 2px;
  background: linear-gradient(
    160deg,
    #9672ff,
    rgba(150, 114, 255, 0.7),
    rgba(150, 114, 255, 0.4),
    rgba(150, 114, 255, 0.1),
    rgba(0, 0, 0, 0)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.navbar {
  position: absolute;
  z-index: 2;
  width: 100%;
  // background: linear-gradient(180deg,#000000c9,#00000073,#00000052,#00000000);
}
.indextop-nav {
  height: 180px;
}
.indextop-nav-wrapper {
  display: flex;
  justify-content: space-around;
  //   flex-direction: row;
  // padding: 0 0px;
  align-items: center;
  height: 100%;
}
.playtonia-logo {
  display: flex;
  width: 172px;
  align-items: center;
  cursor: pointer;
  // margin-left: 155px;
}
.navbar_btns {
  display: flex;
  align-items: center;
  // margin-right: 110px;
}
.Playtonia-register {
  display: flex;
  align-items: center;
  font-size: 25px;
}
.Playtonia-register-btn {
  padding: 0 8px;
}
.desktop {
  display: block;
}
.mobile {
  display: none;
}
@media (min-width: 320px) and (max-width: 767px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .indextop-nav-wrapper {
    padding: 0 10px;
  }
  .playtonia-logo {
    width: 150px;
  }
  .Playtonia-register-btn {
    padding: 0 4px;
  }
  .login-btn,
  .signup-btn {
    padding: 2px 10px;
    font-size: 12px;
    line-height: 1.7;
  }
}
</style>
