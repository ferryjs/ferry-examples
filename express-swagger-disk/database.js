'use strict';

module.exports = {
  adapters: {
    default: require('sails-disk')
  },
  connections: {
    default: {
      adapter: 'default'
    }
  },
  defaults: {
    migrate: 'safe'
  }
};
