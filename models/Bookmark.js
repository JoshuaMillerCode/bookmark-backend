const { Schema, model } = require('../config/db-connection');

const bookmarkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Bookmark', bookmarkSchema);
