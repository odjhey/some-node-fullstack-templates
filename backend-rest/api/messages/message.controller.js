'use strict';

const generateId = require('../../utils/generateId.util');

/**
 * Mock database, replace this with your db models import, required to perform query to your database.
 */
const db = {
  messages: [
    {
      id: 'bff28903-042e-47c2-b9ee-07c3954989ec',
      message: 'Hello World!',
      created_at: 1558536830937,
    },
    {
      id: 'dca01a32-36e6-4886-af75-8e7caa0162a9',
      message: 'Yaharu',
      created_at: 1558536843742,
    },
    {
      id: 'dca01a32-36e6-4886-af75-8e7caa0162a9',
      message: 'We about to paint the town!',
      created_at: 1558536863550,
    },
  ],
};

exports.getOne = (ctx) => {
  const { messageId } = ctx.params;
  const message = db.messages.find((message) => message.id === messageId);
  ctx.assert(message, 404, "The requested message doesn't exist");
  ctx.status = 200;
  ctx.body = message;
};

exports.getAll = async (ctx) => {
  ctx.status = 200;
  ctx.body = db.messages;
};

exports.createOne = async (ctx) => {
  try {
    const { message } = ctx.request.body;
    ctx.assert(message, 400, 'Message is malformed!');
    const id = generateId();
    const newMessage = {
      id,
      message,
      timestamp: Date.now(),
    };
    db.messages.push(newMessage);
    const createdMessage = db.messages.find((message) => message.id === id);
    ctx.status = 201;
    ctx.body = createdMessage;
  } catch (e) {
    console.error(e);
  }
};
