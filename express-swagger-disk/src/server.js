'use strict';

var path = require('path');

var Ferry = require('ferry');
var Router = require('ferry-express');
var Specification = require('ferry-swagger');
var Storage = require('ferry-waterline');

var spec = path.join(path.dirname(module.filename), '../spec/swagger.json');

var server = new Ferry({
  router: new Router(),
  specification: new Specification(spec),
  storage: new Storage(require('./database')),
  callback: function() {

    server.start(process.env.PORT || 3333, function(err) {

      if (err) {
        console.error(err);
      } else {
        console.log('Ferry has launched.');
      }

    });

  }
});
