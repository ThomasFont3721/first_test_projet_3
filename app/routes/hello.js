import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
    model(){
        return {nom:'Smith',
                details:'Des détails sur Smith...'}
      },
      actions: {
        changeName(m, newNom) {
            set(m, 'nom', newNom);
        }
      }
});
