import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
  services: [],
  countActive: computed('services', function(){
    var count =0;
    this.get('services').forEach(element => {
      if (element.active) { 
        count = count+1;
      }
    });
    return count;
  }),
  sumActive: computed('services', function() {
    var price = 0;
    this.get('services').forEach(element => {
      if (element.active) { 
        price = price+element.price;
      }
    });
    return price;
  })
});