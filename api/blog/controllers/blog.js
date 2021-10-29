'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.blog.search(ctx.query);
    } else {
      entities = await strapi.services.blog.find(ctx.query);
    }
    return entities.map((entity) => {
      const blog = sanitizeEntity(entity, { model: strapi.models.blog });
      // do not return the whole content, find the first line that is not a heading or empty line
      blog.summary = blog.content.split('\n').find((line) => line && !line.startsWith('#') && !line.startsWith(' '));
      Reflect.deleteProperty(blog, 'content');
      return blog;
    });
  },
};
