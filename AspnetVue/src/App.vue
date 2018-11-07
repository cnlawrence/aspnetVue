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
import HelloWorld from './components/HelloWorld'
import Alerts from './components/Alerts';
import ProgressBar from './components/ProgressBar';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Alerts,
    ProgressBar
  },
}
</script>
