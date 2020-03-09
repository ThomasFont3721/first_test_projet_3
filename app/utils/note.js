import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
  MAX: 100,
  content: 'Entrez votre note',
  size: computed('content', function(){
    return this.get('MAX')-this.get('content').length;
  }),
  style: computed('size', function(){
    let size =this.get('size');
    if (size > 75) {
      return 'positive';
    } else if (size > 40) {
      return 'info';
    } else if (size > 10) {
      return 'warning';
    } else {
      return 'negative'
    }
  })
});