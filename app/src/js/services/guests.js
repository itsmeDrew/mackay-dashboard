'use strict';

var app = angular.module('App.Service.Guests', []);

app.service('guestsService', guestsCtrl);

function guestsCtrl () {
  var vm = this;

  vm.getGuests = getGuests;

  function getGuests() {
    console.log('guest service');
  }

};

module.exports = guestsCtrl;
