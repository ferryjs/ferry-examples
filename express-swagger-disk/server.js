'use strict';

var Ferry = require('ferry');
var Router = require('ferry-express');
var Specification = require('ferry-swagger');

var databaseConfig = require('./database');

var path = require('path');
var spec = path.join(path.dirname(module.filename), 'swagger.json');

var server = new Ferry({
  router: Router,
  specification: new Specification(spec),
  database: databaseConfig
});

server.start(3333);
