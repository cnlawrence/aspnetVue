import Vue from 'vue';
import App from './App.vue';
import './plugins/vuetify';

Vue.config.productionTip = false;

// Allow vue instance to be accesible to Vue and non-Vue files e.g. data-services.ts
export let vm: Vue;

// Fetch App Settings json file and new up Vue instance
fetch('/appSettings.json')
  .then(res => res.json())
  .then(config => {
    vm = new Vue({
      // retrieve config like vm.$root.$data
      data(){
        return config
      },
      render: h => h(App),
    }).$mount('#app');
  }).catch(error => {
    console.log(error);
  });