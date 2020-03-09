import Route from '@ember/routing/route';
import Services from 'first-project/utils/services';
import EmberObject, { computed } from '@ember/object';

export default Route.extend({
    model() {
        return Services.create({
                services: [
                    {
                        "name": "Web Development",
                        "price": 300,
                        "active": true
                    }, {
                        "name": "Design",
                        "price": 400,
                        "active": false
                    }, {
                        "name": "Integration",
                        "price": 250,
                        "active": true
                    }, {
                        "name": "Formation",
                        "price": 220,
                        "active": false
                    }
                ],
                codePromo: '',
                
                promos: {
                    "B22":0.05,
                    "AZ":0.01,
                    "UBOAT":0.02
                  }
            })
        
    }
});
