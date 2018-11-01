import { EventBus } from '../utility/event-bus.ts'

export const Alertify = {
    install(Vue, options) {    
        Vue.mixin({
            methods: {
                success: (message) => {
                    EventBus.$emit('alert', { value: true, type: 'success', message: message})
                },
            },
        });
    }
}