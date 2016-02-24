'use strict';

var app = angular.module('App.Service.Guests', ['firebase']);

app.service('guestsService', guestsCtrl);

function guestsCtrl ($firebaseArray) {
  var vm = this;

  vm.getGuests = getGuests;

  function getGuests(ref) {
    return $firebaseArray(ref);

    ref.on("child_changed", function(snapshot) {
      if (snapshot.val()) {
        return $firebaseArray(ref);
      } else {
        return false;
      }
    })
  }

};

module.exports = guestsCtrl;
