import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
  services: [],
  countActive: computed('services.@each.active', function(){
    return this.get('services').filterBy('active', true).length;
  }),
  sumActive: computed('services.@each.active', function() {
    var price = 0;
    this.get('services').filterBy('active', true).forEach(element => {
      price = price+element.price;
    });
    return price;
  }),
  checkedPromo: false,
  visiblePromo: computed('checkedPromo', function(){
      if (this.get('checkedPromo')) {
          return 'visible';
      } else {
          return 'hidden';
      }
  }),
});