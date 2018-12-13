<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>      
      <v-flex>
        <v-layout>        
          <v-btn color="primary" @click="doStuff()">Create Alert Success</v-btn>
          <v-btn color="primary" @click="toggleProgress()">Toggle Progress</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { EventBus } from '../utility/event-bus'
import  alertMixin  from '../shared/alert-mixin'
import  progressBarMixin  from '../shared/progress-bar-mixin'

import { Component, Vue } from 'vue-property-decorator';

@Component({
  
})

export default class HelloWorld extends Vue {
  
  constructor() {
    super();
    
  }

  doStuff() {
    alertMixin.success('Mixin Success!');
  };
  
  toggleProgress() {
    progressBarMixin.toggle();
  };
}
</script>

<style>

</style>
