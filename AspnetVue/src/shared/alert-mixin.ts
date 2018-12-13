import { EventBus } from '../utility/event-bus';

export default {
    success: (message: string) => {
        EventBus.$emit('alert', { value: true, type: 'success', message: message ? message : 'Success.'});
    },
    info: (message: string) => {
        EventBus.$emit('alert', { value: true, type: 'info', message});
    },
    warning: (message: string) => {
        EventBus.$emit('alert', { value: true, type: 'warning', message: message ? message : 'There was an unknown warning.'});
    },
    error: (message: string) => {
        EventBus.$emit('alert', { value: true, type: 'error', message: message ? message : 'There was an unknown error.'});
    },
};