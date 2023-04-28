'use strict';

/**
 * newsblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsblog.newsblog');
