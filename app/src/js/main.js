'use strict';

require('angular');
require('angularfire');
require('firebase');
require('./templates');

require('./services/guests');

var app = angular.module('App', [
  'ui.router',
  'firebase',
  'templates',
  'App.Service.Guests'
]);

app.controller('AppCtrl', require('./controllers/AppCtrl'));

app.constant('App.Config', window.config);
