<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Acceptance</span> &nbsp;
        <span class="font-weight-light">ASPNETCORE/VUE DEMO</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>    
      <!-- Progress bar component -->
      <ProgressBar/>
      <!-- Alerts bar component -->
      <Alerts/>

      <HelloWorld/>
    </v-content>
    <v-footer dark color="primary">
      <v-flex primary text-xs-center white--text> &copy; {{ new Date().getFullYear() }} Acceptance Insurance Company </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Alerts from './components/Alerts.vue';
import alertMixin  from './shared/alert-mixin.ts'
import progressBarMixin  from './shared/progress-bar-mixin.ts';
import ProgressBar from './components/ProgressBar.vue';
import DataServices from './services/data-services.ts';

export default {
  name: 'App',
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('sessionId');
    if (sessionId === null) {
      //TODO: This does not work
      alertMixin.error('Something is wrong with the SessionId.');
      return;
    }

    //This works
    progressBarMixin.toggle();

    DataServices.getUserSessionData(sessionId)
      .then((result) => {
        console.log(result)
        //This works
        alertMixin.success('Your sessionId is valid');
      })
      .catch((err) => {
        alertMixin.error(err); 
      })
      .finally(() => {        
        //TODO: This does not work
        progressBarMixin.toggle();
      });
  },
  components: {
    HelloWorld,
    Alerts,
    ProgressBar,
  },
  mixins: [alertMixin, progressBarMixin]
}
</script>
