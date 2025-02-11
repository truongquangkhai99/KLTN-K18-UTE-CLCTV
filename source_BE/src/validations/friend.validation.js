const Joi = require('joi');
const { objectId } = require('./custom.validation');

const friend = {
  body: Joi.object().keys({
    friendId: Joi.string().custom(objectId).required(),
  }),
};

const getListFriend = {
  query: Joi.object().keys({
    type: Joi.string().valid('white', 'black'),
    sortBy: Joi.string(),
    populate: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  friend,
  getListFriend,
};
