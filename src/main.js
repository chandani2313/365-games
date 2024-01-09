import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { getUser } from './StorageFactory'
import vueCountryRegionSelect from 'vue-country-region-select';
import CountryFlag from 'vue-country-flag';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import { baseURL } from './config'
import socket from './service/socket'
import VueProgressBar from 'vue-progressbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const options = {
  color: '#9672ff',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.9s',
    opacity: '0.6s',
    termination: 800,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.config.productionTip = false
Vue.use(vueCountryRegionSelect);
Vue.component('country-flag', CountryFlag);
Vue.component('VuePhoneNumberInput', VuePhoneNumberInput);
Vue.use(VueProgressBar, options);
axios.defaults.baseURL = `${baseURL}v1/`;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401 && ['token-expired', 'invalid-user'].includes(error.response.data.message)) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    );
    const user = getUser();
    if (user) {
      this.$store.commit('SET_USER_DATA', user);
      axios.defaults.headers.common['Authorization'] = `JWT ${ user?.token }`;
      this.$store.dispatch('getSubscriptionStatus');
    }
    this.$store.dispatch('loadCartOnAppStart');
  },
  mounted() {
    AOS.init()
    const user = this.$store.getters.user
    if(user) {
      socket.emit('join', { jwt: user?.token })
      socket.on('reconnect', () => {
        socket.emit('join', { jwt: user?.token })
      })
    }
  }
}).$mount('#app')
