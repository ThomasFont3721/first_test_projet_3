import Route from '@ember/routing/route';
import Note from 'first-project/utils/note';

export default Route.extend({
    model() {
        return Note.create();
    },
    actions: {
        clear(model) {
            model.set('content', '');
        },
        visible(model){
            console.log(model);
        },
        invisible(model, value){
            console.log('changer');
        }
    }
});
