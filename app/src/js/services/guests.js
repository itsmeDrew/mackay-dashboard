'use strict';

var app = angular.module('App.Service.Guests', ['firebase']);

app.service('guestsService', guestsCtrl);

function guestsCtrl ($firebaseObject) {
  var vm = this;

  vm.getGuests = getGuests;

  function getGuests(ref) {
    return $firebaseObject(ref);

    ref.on("child_changed", function(snapshot) {
      if (snapshot.val()) {
        return $firebaseObject(ref);
      } else {
        return false;
      }
    })
  }

};

module.exports = guestsCtrl;
