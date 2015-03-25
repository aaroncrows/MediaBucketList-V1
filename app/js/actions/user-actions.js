'use strict';
var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  signIn: function(data) {
    Dispatcher.handleAction({
      actionType: 'USER_SIGN_IN',
      data: data
    });
  },
};