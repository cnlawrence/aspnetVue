import { EventBus } from '../utility/event-bus.ts'

export default {
    toggle: () => {
        EventBus.$emit('toggleProgress', { })
    },
}      