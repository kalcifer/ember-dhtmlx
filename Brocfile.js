/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var pickFiles   = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');

/*
  This Brocfile specifes the options for the dummy test app of this
  addon, located in `/tests/dummy`

  This Brocfile does *not* influence how the addon or the app using it
  behave. You most likely want to be modifying `./index.js` or app's Brocfile
*/


var fontawesome = pickFiles('vendor/dhtmlx/codebase/imgs/', {
	srcDir:'dhxtree_skyblue/',
  	destDir: '/assets'
});

var app = new EmberAddon();

module.exports = mergeTrees([
  fontawesome,
  app.toTree() // module.exports = app.toTree();
])
