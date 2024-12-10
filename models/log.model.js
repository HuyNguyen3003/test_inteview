const mongoose = require("mongoose");
const DOCUMENT_NAME = "logs";
const COLLECTION_NAME = "logs";
const { StatusLog } = require("../config");

var logSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      unique: true,
      required: true,
    },
    status: {
      type: Number,
      default: StatusLog.PENDING,
      enum: Object.values(StatusLog),
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, logSchema);
