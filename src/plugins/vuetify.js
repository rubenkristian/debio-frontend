import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import SkinIcon from '../components/icons/SkinIcon'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      'dgi-skin': {
        component: SkinIcon,
      }
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#F60689',
        secondary: '#3F2040',
        light_primary: '#FDC0FF',
      }
    }
  }
});