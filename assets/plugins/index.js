import { loadFonts } from './webfontloader';
import router from '../router';

export function registerPlugins(app) {
  loadFonts();
  app
    .use(router);
}
