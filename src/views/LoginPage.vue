<template>
  <div class="login-container">    
<div class="content-1">
    <form>
         <div class="right-content">Login</div>
        <div class="input-wrapper">
        <input type="text" class="my-input" v-model="email" placeholder="Email" />
        <!-- <i class="far fa-envelope icon"></i> -->
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8333 23.9167H8.16659C4.66659 23.9167 2.33325 22.1667 2.33325 18.0834V9.91671C2.33325 5.83337 4.66659 4.08337 8.16659 4.08337H19.8333C23.3333 4.08337 25.6666 5.83337 25.6666 9.91671V18.0834C25.6666 22.1667 23.3333 23.9167 19.8333 23.9167Z" stroke="#B0B0B0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8334 10.5L16.1817 13.4167C14.9801 14.3733 13.0084 14.3733 11.8067 13.4167L8.16675 10.5" stroke="#B0B0B0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div v-if="emailError" class="err-text">{{emailError}}</div>
        </div>
        <div class="input-wrapper">
        <input :type="passwordFieldType" id="password" class="my-input" v-model="password" placeholder="Password" />
        <i v-bind:class="[passwordFieldType === 'password' ? 'far fa-eye-slash icon' : 'far fa-eye icon']" @click="switchVisibility" style="cursor: pointer;"></i> 
        <div v-if="passwordError" class="err-text">{{passwordError}}</div>
        </div>
        <div class="input-wrapper">
        <div class="forgot-password">
            <div class="checkbox-wrapper">
            <div class="checkbox">
                <input type="checkbox" class="checkbox-wrap" v-model="rememberMe"/>
            </div>
            <div class="forgot">
                Remember Me
            </div>
            </div>
            <router-link class="forgot" data-animation="ripple"  tag="a" :to="{ name: 'ForgotPasswordNew'}"  active-class="active" exact>
            Forgot Password ?
            </router-link>
        </div>
        </div>
        <div class="input-wrapper">
        <button class="btn" @click.prevent="validate()">Login to Your Account</button>
        </div>
        <div style="padding:10px; color: #B0B0B0; font-size: 20px; font-style: normal; font-weight: 300;">- OR -</div>
    <div class="social-logo">
           <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/google" class="socialicon_button facebook">
            <!-- <i class="fab fa-google"></i> -->
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2119 0.4375C5.37688 0.4375 0.646973 5.16706 0.646973 11C0.646973 16.8329 5.37688 21.5625 11.2119 21.5625C20.0226 21.5625 22.0087 13.383 21.1824 9.24011H18.7925H18.0157H11.2095V12.7607H18.0197C17.2367 15.7957 14.4889 18.0411 11.2095 18.0411C7.32085 18.0411 4.16754 14.8886 4.16754 11C4.16754 7.11138 7.32085 3.95886 11.2095 3.95886C12.9779 3.95886 14.5892 4.61521 15.8258 5.69177L18.326 3.19159C16.4479 1.48046 13.952 0.4375 11.2119 0.4375Z" fill="white"/>
</svg>
            <span>Login With Google</span>
          </a>
          <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/facebook" class="socialicon_button facebook">
            <!-- <i class="fab fa-facebook"></i> -->
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.36 5.27996H12.76C13.025 5.27996 13.24 5.06492 13.24 4.79996V1.5662C13.24 1.31468 13.0466 1.1054 12.796 1.08764C12.0323 1.0334 10.5405 0.959961 9.46769 0.959961C6.52001 0.959961 4.60001 2.72636 4.60001 5.9366V9.11996H1.24001C0.97505 9.11996 0.76001 9.335 0.76001 9.59996V12.96C0.76001 13.2249 0.97505 13.44 1.24001 13.44H4.60001V22.56C4.60001 22.8249 4.81505 23.04 5.08001 23.04H8.44001C8.70497 23.04 8.92001 22.8249 8.92001 22.56V13.44H12.3866C12.6314 13.44 12.8368 13.2561 12.8637 13.0128L13.2371 9.65276C13.2688 9.3686 13.0461 9.11996 12.76 9.11996H8.92001V6.71996C8.92001 5.9246 9.56465 5.27996 10.36 5.27996Z" fill="white"/>
</svg>
            <span>Login With Facebook</span>
          </a>
          <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/discord" class="socialicon_button facebook">
            <!-- <i class="fab fa-discord"></i> -->
            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.645 2.60015C18.5752 0.934523 15.3008 0.652179 15.1607 0.642023C14.9433 0.623741 14.7361 0.745617 14.6468 0.946711C14.6386 0.958898 14.5675 1.12343 14.4883 1.37937C15.8574 1.61093 17.5393 2.07609 19.0607 3.02062C19.3044 3.17093 19.3796 3.49187 19.2293 3.73562C19.1297 3.89609 18.9611 3.98343 18.7864 3.98343C18.693 3.98343 18.5975 3.95702 18.5122 3.90421C15.896 2.28124 12.6297 2.19999 12 2.19999C11.3703 2.19999 8.10207 2.28124 5.48785 3.90421C5.2441 4.05655 4.92316 3.9814 4.77285 3.73765C4.62051 3.49187 4.69566 3.17296 4.93941 3.02062C6.46082 2.07812 8.14269 1.61093 9.51176 1.3814C9.43254 1.12343 9.36144 0.960929 9.35535 0.946711C9.26394 0.745617 9.05879 0.619679 8.83941 0.642023C8.69926 0.652179 5.42488 0.934523 3.3266 2.62249C2.23176 3.63609 0.0400391 9.55921 0.0400391 14.68C0.0400391 14.7714 0.064414 14.8587 0.109102 14.938C1.62035 17.5948 5.74582 18.2895 6.68629 18.32C6.69035 18.32 6.69644 18.32 6.70254 18.32C6.8691 18.32 7.02551 18.2408 7.12301 18.1067L8.07363 16.7986C5.50816 16.1364 4.19801 15.0111 4.12285 14.9441C3.90754 14.7551 3.88723 14.4261 4.07816 14.2108C4.26707 13.9955 4.59613 13.9751 4.81144 14.1641C4.84191 14.1925 7.25504 16.24 12 16.24C16.7532 16.24 19.1663 14.1844 19.1907 14.1641C19.406 13.9772 19.733 13.9955 19.9239 14.2128C20.1128 14.4281 20.0925 14.7551 19.8772 14.9441C19.8021 15.0111 18.4919 16.1364 15.9264 16.7986L16.8771 18.1067C16.9746 18.2408 17.131 18.32 17.2975 18.32C17.3036 18.32 17.3097 18.32 17.3138 18.32C18.2543 18.2895 22.3797 17.5948 23.891 14.938C23.9357 14.8587 23.96 14.7714 23.96 14.68C23.96 9.55921 21.7683 3.63609 20.645 2.60015ZM8.62004 12.6C7.61457 12.6 6.80004 11.6697 6.80004 10.52C6.80004 9.3703 7.61457 8.43999 8.62004 8.43999C9.62551 8.43999 10.44 9.3703 10.44 10.52C10.44 11.6697 9.62551 12.6 8.62004 12.6ZM15.38 12.6C14.3746 12.6 13.56 11.6697 13.56 10.52C13.56 9.3703 14.3746 8.43999 15.38 8.43999C16.3855 8.43999 17.2 9.3703 17.2 10.52C17.2 11.6697 16.3855 12.6 15.38 12.6Z" fill="white"/>
</svg>
            <span>Login With Discord</span>
          </a>
          <a target="_blank" href="https://api-staging.365games.net/v1/user/auth/linkedin" class="socialicon_button steam">
            <!-- <i class="fab fa-steam-symbol"></i> -->
            <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7031 0.265625C16.5726 0.265625 14.0195 2.81643 14.0156 5.94598L10.4688 10.4727C10.3955 10.5663 10.3511 10.6794 10.3413 10.7979C10.3314 10.9164 10.3565 11.0352 10.4133 11.1397C10.4702 11.2442 10.5564 11.3297 10.6612 11.3858C10.7661 11.4419 10.8851 11.4661 11.0036 11.4554L11.1853 11.4387C12.8575 11.4462 14.2187 12.8104 14.2187 14.4844C14.2185 14.5092 14.2198 14.5339 14.2226 14.5586C14.2097 14.6031 14.2018 14.6491 14.1992 14.6954C14.115 16.2628 12.8044 17.5312 11.1718 17.5312C10.2157 17.5312 9.37576 17.1083 8.81841 16.4327C8.76813 16.3691 8.70566 16.3161 8.63465 16.2769C8.56365 16.2378 8.48554 16.2132 8.4049 16.2046C8.32426 16.196 8.24271 16.2035 8.16504 16.2268C8.08737 16.2502 8.01513 16.2887 7.95255 16.3403C7.88998 16.3919 7.83833 16.4555 7.80064 16.5273C7.76294 16.5991 7.73996 16.6777 7.73303 16.7585C7.7261 16.8393 7.73537 16.9207 7.76029 16.9978C7.78522 17.075 7.82529 17.1464 7.87817 17.2079C8.66145 18.1573 9.85294 18.75 11.1718 18.75C13.3339 18.75 15.1057 17.1275 15.3704 15.0604C16.6982 14.0204 18.3361 12.7289 19.7122 11.6398C22.8407 11.6348 25.3906 9.08284 25.3906 5.95312C25.3906 2.82029 22.8359 0.265625 19.7031 0.265625ZM19.7031 1.48438C22.1765 1.48438 24.1718 3.47971 24.1718 5.95312C24.1718 8.42654 22.1765 10.4219 19.7031 10.4219H19.4999C19.3627 10.4219 19.2294 10.4684 19.1218 10.5536C17.9382 11.4907 16.5665 12.57 15.3244 13.5453C14.962 11.9579 13.7095 10.7036 12.124 10.3362L15.1046 6.53195C15.1886 6.42473 15.2343 6.29246 15.2343 6.15625V5.95312C15.2343 3.47971 17.2296 1.48438 19.7031 1.48438ZM19.7031 2.5C17.8032 2.5 16.2499 4.05324 16.2499 5.95312C16.2499 7.85301 17.8032 9.40625 19.7031 9.40625C21.6029 9.40625 23.1562 7.85301 23.1562 5.95312C23.1562 4.05324 21.6029 2.5 19.7031 2.5ZM19.7031 3.71875C20.9443 3.71875 21.9374 4.7119 21.9374 5.95312C21.9374 7.19435 20.9443 8.1875 19.7031 8.1875C18.4618 8.1875 17.4687 7.19435 17.4687 5.95312C17.4687 4.7119 18.4618 3.71875 19.7031 3.71875ZM2.27715 8.73776C1.56489 8.73176 0.878175 9.14244 0.578361 9.83432C0.18012 10.7533 0.602451 11.8407 1.52496 12.2405L10.439 16.1594C10.4494 16.1639 10.4598 16.1681 10.4704 16.1721C10.6746 16.2486 10.9077 16.3125 11.1718 16.3125C11.8669 16.3125 12.5525 15.8956 12.8488 15.1906C13.2444 14.2728 12.8235 13.1887 11.9034 12.7888L2.98611 8.88852C2.98558 8.88825 2.98505 8.88799 2.98452 8.88773C2.75476 8.78816 2.51457 8.73976 2.27715 8.73776ZM2.26604 9.9585C2.34534 9.95845 2.42478 9.97363 2.49972 10.0061L11.415 13.9052C11.4157 13.9054 11.4163 13.9057 11.417 13.9059C11.7132 14.0343 11.8599 14.4096 11.73 14.7093C11.7288 14.712 11.7276 14.7146 11.7264 14.7173C11.6153 14.984 11.4094 15.0938 11.1718 15.0938C11.1119 15.0938 11.0208 15.076 10.9028 15.0323L2.01253 11.1233C2.01148 11.1229 2.01042 11.1225 2.00936 11.1221C1.71312 10.9937 1.56685 10.6185 1.69674 10.3187C1.76093 10.1706 1.88666 10.0599 2.03396 10.0025C2.10761 9.97382 2.18675 9.95854 2.26604 9.9585Z" fill="white"/>
</svg>
            <span>Login With Steam</span>
          </a>
        </div>
        </form>
    </div>
  <div class="content-2">
    <div class="outer-shell">
    <div class="top-container">
      <div class="game-icon"><img src="../assets/Loginpage/pugb.png"/></div>
      <div class="game-icon1"><img src="../assets/Loginpage/apex.png"/></div>
      <div class="game-icon"><img src="../assets/Loginpage/fornite.png"/></div>
      <div class="game-icon"><img src="../assets/Loginpage/cod.png"/></div>
    </div>
    <div class="middle-container"><img src="../assets/Loginpage/365.png"/></div>
    <button class="bottom-container">JOIN NOW</button>
  </div>
  </div>
  </div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      passwordFieldType: "password",
      rememberMe: false,
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,/* eslint-disable-line */
    };
  },
  components: {
  },
  methods: {
   switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
  validate() {
      if (!this.reg.test(this.email)) {
        this.emailError = 'Enter a valid mail id';
      } else {
        this.emailError = '';
      }

      if (this.password === '') {
        this.passwordError = 'Password is required.';
      } else {
        this.passwordError = '';
      }

      if (this.reg.test(this.email) && this.password !== '') {
        this.login();
      }
    },
    login() {
      axios
        .post('/user/login', {
          criteria: {
            email: this.email.toLowerCase().trim(),
            password: this.password,
            rememberMe:this.rememberMe
            },
        })
        .then((response) => {
            this.$store.commit('LOGIN', response.data);
            this.$router.push('/dashboard');
        })
        .catch((e) => {
          if (e.response.data.type === 'email_error') {
            const emailData = e.response.data.message;
            this.emailError = emailData;
            if(e.response.data.message === 'Email not verified') {
              const user = e.response.data.userId
              this.$router.push({ name: 'EnterOtp', params: { userId: user, type: 'signup' } });
            }
          } else {
            this.emailError = '';
          }

          if (e.response.data.type === 'password_error') {
            const passwordData = e.response.data.message;
            this.passwordError = passwordData;
          } else {
            this.passwordError = '';
          }
        });
    },
  },
};
</script>

<style scoped>
.login-container {
  font-family: Poppins;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.content-1 {  
  display: flex;
  text-align: center;
  justify-content: center;
  background-color:#0F0E0E;
   padding: 8%;
}
.content-2 {
  background-image: url("../assets/Loginpage/bgimage2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  text-align: center;
  justify-content: center;
}
.right-content {
 color: var(--v-info-base);
 /* font-size: 26px; */
 padding-bottom: 30px;
 text-align: left;
font-size: 50px;
font-style: normal;
font-weight: 600;
}
.v-application a {
  color: #B0B0B0;
}
.input-wrapper {
  padding-bottom: 10px;
  position: relative;
}
.my-input {
  border-radius: 4px;
  padding: 20px;
  background: rgba(88, 88, 88, 0.2);
  width: 450px;
  margin-bottom: 10px;
  /* font-size: 12px; */
  /* color: #B0B0B0;  */
  color: white;
  font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
}
.icon {
    margin-left: -35px;
    position: absolute;
    color: White!important;
    margin-top: 25px;
    opacity: 0.2;

}
.input-wrapper>svg{
  position: absolute;
  top:22px;
  right:12px;
}
.far{
font-size: 20px;
color: white!important;
}
.my-input::placeholder {
  color: #B0B0B0; 
}
.forgot {
  color: #747474!important;
  cursor: pointer;
  /* font-size: 12px; */
  padding: 3px;
  font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 300;
}
.forgot-password {
  display: flex;
  justify-content: space-between;
}
.checkbox-wrapper {
  display: flex;
  align-items: flex-end;
}
.checkbox-wrap {
  margin-right: 4px;
   width: 19px;
    height: 19px;
   background: rgba(88, 88, 88, 0.3);
    border-radius: 50%;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;
}
.checkbox-wrap:checked {
    background-color: #6B4FE8;
}
.err-text {
  color: red;
  font-size: 12px;
  text-align: left;
  padding: 5px;
  font-weight: 500;
  line-height: 0;
}
.btn {
  background: linear-gradient(180deg, #9672FF 0%, #6B4FE8 100%);
  width: 450px;
  height: 70px;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border-style: none;
  margin: 15px auto;
  cursor: pointer;
  /* box-shadow: 5px 10px 20px #141f28; */
  color: var(--v-info-base);
 font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 25px;
}
.social-logo {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  font-size: 34px;
  cursor: pointer;  
  color: var(--v-info-base);
}
span{
  color: var(--v-info-base);
  /* font-size: 12px; */
  padding: 10px;
  font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
}

.social-logo>a {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  position: relative;
}
.social-logo>a::before, .checkbox-wrap::before {
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius:8px; 
  padding:1px; 
  background:linear-gradient(160deg,#9672FF,rgba(150, 114, 255, 0.7),rgba(150, 114, 255, 0.4),rgba(150, 114, 255, 0.1),rgba(0, 0, 0, 0)); 
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out; 
   mask-composite: exclude;
}
.outer-shell{
    padding: 10%;
    margin: 5%;
}
.top-container{
  display: grid;
  grid-template-columns: auto auto;
}
.game-icon,.game-icon1{
  width: 125px; 
  height: 50px;
  margin: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  position: relative;
}
.game-icon1>img{
  width:55%;
}
 .game-icon::before,.bottom-container::before,.game-icon1::before{ 
 content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius:8px; 
  padding:2px; 
  background:linear-gradient(143.07deg, #FFFFFF 21.46%, rgba(255, 255, 255, 0) 85.52%); 
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
   mask-composite: exclude; 
} 
.middle-container{
  display:flex;
  justify-content: center;
  margin: 53% 1% 53% 1%;
}
.middle-container>img{
width: 130px;
}
.bottom-container{
   width: 300px;
   height: 60px;
  position: relative;
   color: var(--v-info-base);
    font-size: 23px;
    font-style: italic;
    font-weight: 600;
}
.image-wrapper{
  position: relative;
}
@media only screen and (max-width: 980px) {
  .login-container{
   flex-directional:column;
  }
  .content-1,.content-2 {
    width: 100%;
    margin: auto;
    padding: auto;
  }
  .my-input,.btn{
    width: 340px;
  }
  span{
    font-size: 9px;
  }
}
@media only screen and (min-width: 780px) {

  .content-1 {
    width: 50%;
    height: 100%;
    margin: auto;
  }
   .content-2 {
    width: 50%;
    height: 100%;
   margin: auto;
  }
}
</style>
