import { EventBus } from '../utility/event-bus.ts'

export default {
    success: (message) => {
        EventBus.$emit('alert', { value: true, type: 'success', message: message ? message : 'Success.'})
    },
    info: (message) => {
        EventBus.$emit('alert', { value: true, type: 'info', message: message})
    },
    warning: (message) => {
        EventBus.$emit('alert', { value: true, type: 'warning', message: message ? message : 'There was an unknown warning.'})
    },
    error: (message) => {
        EventBus.$emit('alert', { value: true, type: 'error', message: message ? message : 'There was an unknown error.'})
    },
}      