const mongoose = require('mongoose');
const { toJSONM, paginateClient, paginateUserGroup, paginateWaitingGroup } = require('./plugins');

const searchSchema = new mongoose.Schema(
  {
    subname: { required: true, type: String },
    email: { required: true, type: String },
    username: { required: true, type: String },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);
// add plugin that converts mongoose to json
searchSchema.plugin(toJSONM);
searchSchema.plugin(paginateClient);
searchSchema.plugin(paginateUserGroup);
searchSchema.plugin(paginateWaitingGroup);

/**
 * @typedef Search
 */
const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
