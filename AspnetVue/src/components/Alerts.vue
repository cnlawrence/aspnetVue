<template>
    <div>
        <v-alert v-for="alert in alerts" :value="alert.value" transition="scale-transition" :type="alert.type" dismissible>
            {{alert.message}}
        </v-alert>
    </div>    
</template>

<script>
import { EventBus } from '../utility/event-bus.ts'

export default {
    data: () => ({
        alerts: [ ]
    }),
    mounted() {
        EventBus.$on('alert', (alerted) => {
        console.log(alerted);
        this.alerts.push(alerted);
        });
    }
}
</script>

<style scoped>

</style>