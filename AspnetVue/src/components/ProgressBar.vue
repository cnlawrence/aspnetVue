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
    created() {
        EventBus.$on('toggleProgress', (toggle) => {
            this.show = !this.show;
        });
    }
}
</script>

<style scoped>

</style>