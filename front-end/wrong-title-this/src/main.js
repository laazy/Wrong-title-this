import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueQuilEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

Vue.config.productionTip = false
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(vueQuilEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
