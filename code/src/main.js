// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { Swipe, SwipeItem,Button,Field   } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(Field);


import errLog from 'store/errLog'
import './store/config'

import 'normalize.css/normalize.css'
import 'styles/index.scss'
import 'vant/lib/index.css';

// 生产环境错误日志
if (process.env === 'production') {
  Vue.config.errorHandler = function(err, vm) {
    errLog.pushLog({
      err,
      url: window.location.href,
      vm
    })
  };
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
