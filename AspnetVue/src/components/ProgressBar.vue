<template>
    <div>
        <v-progress-linear :indeterminate="true" :active="show"></v-progress-linear>
    </div>
</template>

<script>
import { EventBus } from '../utility/event-bus.ts'

export default {
    data: () => ({
        show: false,
    }),
    mounted() {
        EventBus.$on('toggleProgress', (toggle) => {
            console.log(toggle);
            this.show = !this.show;
        });
    }
}
</script>

<style scoped>

</style>