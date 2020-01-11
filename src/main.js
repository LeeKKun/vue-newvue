import Vue from 'vue';
import ElementUI from 'element-ui'; // 基于vue 的插件
import router from './router';

import App from './App.vue';

// 引入默认样式文件
import './styles/base.less';
import 'element-ui/lib/theme-chalk/index.css';

// 只要是基于vue 的插件，要use下
Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
