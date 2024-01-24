import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueAxios from 'vue-axios';
import axios from './plugins/axios';
import App from './App.vue';
import { registerPlugins } from './plugins';

const pinia = createPinia();
const app = createApp(App);
app.use(VueAxios, axios);
app.use(pinia);

registerPlugins(app);

const defaultTheme = {
  dark: false,
  colors: {
    background: '#f5f5f9',
    surface: '#FFFFFF',
    primary: '#6870ee',
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
app.use(vuetify);

app.mount('#app');
