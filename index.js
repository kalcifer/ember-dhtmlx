/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-dhtmlx',
  included: function included(app) {
    this._super.included(app);
    app.import('vendor/dhtmlx/codebase/dhtmlxtree.js');
    app.import('vendor/dhtmlx/codebase/dhtmlxtree.css');
  }
};
