const mongoose = require("mongoose");
const DOCUMENT_NAME = "temporary";
const COLLECTION_NAME = "temporary";

var temporarySchema = new mongoose.Schema(
  {
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, temporarySchema);
