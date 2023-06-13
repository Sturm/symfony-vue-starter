import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import axios from './plugins/axios';
import App from './App.vue';
import { registerPlugins } from './plugins';
import store from './store/user';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(store);

registerPlugins(app);

const defaultTheme = {
  dark: false,
  colors: {
    background: '#d3d3d3',
    surface: '#FFFFFF',
    primary: '#003cee',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme,
    },
  },
});

app.use(vuetify).mount('#app');
