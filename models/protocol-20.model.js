const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-20s";
const COLLECTION_NAME = "protocol-20s";
var protocol20Schema = new mongoose.Schema(
  {
    gameID: {
      type: Number,
    },
    groupID: {
      type: Number,
    },
    gameStage: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol20Schema);
