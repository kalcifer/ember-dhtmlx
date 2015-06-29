import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function(){
	this.route('main', {path:'/'});
	this.route('nextone',{path:'/nextone'})
});

export default Router;
