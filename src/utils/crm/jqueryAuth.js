define([], function() {
    'use strict';
    return function() {
      var self = this;
      this.callbacks = {
        init: function() {
          return true;
        },
        render: function() {
          self.$authorizedAjax({
            url: 'https://apeducation.kommo.com'
          }).done(function (response) {
            console.log('success', response);
          }).fail(function (err) {
            console.log('error', err);
          });
          return true;
        },
        bind_actions: function() {
          return true;
        }
      };
      return this;
    };
  });