import Controller from '@ember/controller';
import {get,set} from '@ember/object';

export default Controller.extend({
    actions: {
        toggleActive(service) {
            console.log(!get(service, 'active'))
            set(service, 'active', !get(service, 'active'));
        }
    }
});
