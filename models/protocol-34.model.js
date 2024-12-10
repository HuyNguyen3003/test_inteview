const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-34s";
const COLLECTION_NAME = "protocol-34s";

var protocol20Schema = new mongoose.Schema(
  {
    gameID: {
      type: Number,
    },
    onlinePeople: {
      type: Number,
    },
    groupArr: [
      {
        groupID: {
          type: Number,
        },
        userCount: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol20Schema);
