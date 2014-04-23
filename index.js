/**
 * Handlebars Helpers: {{rel}}
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

// Node.js
var path = require('path');
var _ = require('lodash');

module.exports = function (config) {
  var Handlebars = config.Handlebars;
  var opts = config.options;

  var helpers = {};
  helpers.rel = function (to) {
    var context = _.extend({}, opts, opts.data, this);

    // if the 'site' obj exists in the config, and `site.root`
    // exists, then join the `site.root` to each filename
    var destBase = context.site.root || context.site.base;
    to = context.site ? path.join(destBase, to) : to;

    var from = path.dirname(context.page.dest);
    var filename = path.basename(to);

    var relativePath = path.relative(from, path.dirname(to));
    var dest = path.join(relativePath, filename).replace(/\\/g, '/');
    return new Handlebars.SafeString(dest);
  };

  return helpers;
};

