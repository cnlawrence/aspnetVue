import { EventBus } from '../utility/event-bus';

export default {
    toggle: () => {
        EventBus.$emit('toggleProgress', { });
    },
};