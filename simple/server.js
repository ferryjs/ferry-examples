'use strict';

var path = require('path');

var Ferry = require('ferry');
var Router = require('ferry-router-basic');
var Specification = Ferry.Specification;
var Storage = require('ferry-waterline');

var spec = path.join(path.dirname(module.filename), 'spec.json');

// Implement basic Specification processor.
Specification.prototype.process = function process() {
  this.basePath = this.source.basePath;
  this.version = this.source.version;
  this.resources = this.source.resources;
  this.routes = this.source.resources;
}

var server = new Ferry({
  router: new Router(),
  specification: new Specification(spec),
  storage: new Storage({
    adapters: {
      default: require('sails-disk')
    },
    connections: {
      default: {
        adapter: 'default'
      }
    }
  })
});

server.start(process.env.PORT || 3333);
