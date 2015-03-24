'use strict';

var Ferry = require('ferry');
var Router = require('ferry-express');
var Specification = require('ferry-swagger');
var Storage = require('ferry-waterline');

var path = require('path');
var spec = path.join(path.dirname(module.filename), 'swagger.json');

var server = new Ferry({
  router: Router,
  specification: new Specification(spec),
  storage: new Storage(require('./database'))
});

server.start(3333);
