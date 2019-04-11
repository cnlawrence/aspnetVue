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
      <DataTable/>
    </v-content>
    <v-footer dark color="primary">
      <v-flex primary text-xs-center white--text> &copy; {{ new Date().getFullYear() }} Acceptance Insurance Company </v-flex>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from './components/HelloWorld.vue'
import Alerts from './components/Alerts.vue';
import alertMixin  from './shared/alert-mixin'
import progressBarMixin  from './shared/progress-bar-mixin';
import ProgressBar from './components/ProgressBar.vue';
import { DataServicesClient, defaultDataServicesClientOptions }  from '@acceptance/dataservices/build'
import ISeriesResponse from './services/iseries-response'
import DataTable from './components/DataTable.vue';
import { EnvironmentType } from '@acceptance/dataservices/build/types';

@Component({
  components: {
    HelloWorld,
    Alerts,
    ProgressBar,
    DataTable
  }
})

export default class App extends Vue {
  private sessionId: string = '';
  constructor() {
    super();

  }

  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.sessionId = urlParams.get('sessionId') !== null ? urlParams.get('sessionId')! : '' ;

    if (this.sessionId === '') {
      console.log('SessionId is null')
      alertMixin.error('Something is wrong with the SessionId.');

      return;
    }

    progressBarMixin.toggle();

    this.getAgentInformation();    
  }

  getAgentInformation(){
    // EXAMPLE: Use to override specific default options 
    // defaultDataServicesClientOptions.environmentTypeOverride = EnvironmentType.local;
    // const client = new DataServicesClient(defaultDataServicesClientOptions);

    const client = new DataServicesClient(); // Leave blank for default options
    const response = client.invokeISeriesService('GetAgentInformation', {
      SESSIONID: this.sessionId
    }).then((result) => {
        console.log(JSON.stringify(result));
        ISeriesResponse.checkISeriesResponse(result.data);
        alertMixin.success('Your sessionId is valid');
      })
      .catch((err) => {
        alertMixin.error(`Dataservice Error: ${err.name} - ${err.message}`);
      })
      .finally(() => {
        progressBarMixin.toggle();
      });
  }
}
</script>
