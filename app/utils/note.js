import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
  MAX: 100,
  content: 'Entrez votre note',
  size: computed('content', function(){
    return this.get('MAX')-this.get('content').length;
  }),
  style: computed('size', function(){
    let size =this.get('size');
    if (size > 50) {
      return 'positive';
    } else if (size > 20) {
      return 'warning';
    } else {
      return 'negative';
    }
  }),
  visible: 'hidden',
  style_info: 'info',
  msg_info: computed('content', function() {
    return 'modified message';
  })
});