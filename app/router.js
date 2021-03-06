import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('hello', function () {
    this.route('suite');
  });
  this.route('exercices', function () {
    this.route('ex1');
    this.route('ex2');
    this.route('ex3');
  });
});

export default Router;
