'use strict';

var app = angular.module('App.Controller.App', []);

app.controller('AppCtrl', AppCtrl);

function AppCtrl ($scope, $firebaseObject, guestsService) {
  var vm = this;

  var guestsRef = new Firebase(window.baseRef + 'guests');

  vm.guests = guestsService.getGuests(guestsRef);
};

module.exports = AppCtrl;
