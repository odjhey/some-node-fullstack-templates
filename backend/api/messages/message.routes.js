'use strict';

const controller = require('./message.controller');

module.exports = (Router) => {
  const router = new Router({
    prefix: `/messages`,
  });

  router
    .get('/:messageId', controller.getOne)
    .get('/', controller.getAll)
    .post('/', controller.createOne);

  return router;
};
