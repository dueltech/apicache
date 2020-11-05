"use strict";
const express = require("express");
const compression = require("compression");
const addRoutes = require("./lib/routes");

function MockAPI(expiration, options, toggle) {
  const apicache = require("../../src/apicache").newInstance(options);
  let app = express();

  // ENABLE COMPRESSION
  app.use(
    compression({
      threshold: 1,
    })
  );

  // EMBED UPSTREAM RESPONSE PARAM
  app.use(function (req, res, next) {
    res.id = 123;
    next();
  });

  // ENABLE APICACHE
  app.use(apicache.middleware(expiration, toggle));
  app.apicache = apicache;

  // ADD API ROUTES
  app = addRoutes(app);

  return app;
}

module.exports = {
  create: function (expiration, config, toggle) {
    return new MockAPI(expiration, config, toggle);
  },
};
