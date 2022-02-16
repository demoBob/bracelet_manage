import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '../router';
import axios from 'axios';
import md5 from 'js-md5';

Vue.use(ElementUI);
Vue.config.productionTip = false

const api = axios.create()

axios.interceptors.request.use(config => {
config.headers.TOKEN=localStorage.getItem('access_token')!=null&&localStorage.getItem('access_token')!= ""?localStorage.getItem('access_token'):"";return config
},error => {
return Promise.reject(error)
})

Vue.prototype.$Laxios = api
Vue.prototype.$axios = axios
Vue.prototype.$ip='http://172.16.18.87:30271'
Vue.prototype.$md5 = md5;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
