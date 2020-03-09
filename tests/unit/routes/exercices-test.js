import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exercices', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:exercices');
    assert.ok(route);
  });
});
