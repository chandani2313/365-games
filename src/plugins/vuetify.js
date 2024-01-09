import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            background: '#222222',
            primary: '#7255E9',
            secondary: '#9672FF',
            info: '#FFFFFF',
          },
        },
      },

});
