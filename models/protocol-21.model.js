const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-21s";
const COLLECTION_NAME = "protocol-21s";

var protocol21Schema = new mongoose.Schema(
  {
    gameID: {
      type: Number,
    },
    groupID: {
      type: Number,
    },
    groupType: {
      type: Number,
    },
    gameNo: {
      type: Number,
    },
    gameNoRound: {
      type: Number,
    },
    dealerID: {
      type: Number,
    },
    dealerName: {
      type: String,
      trim: true,
    },
    dealerImage: {
      type: String,
      trim: true,
    },
    dealerImage2: {
      type: String,
      trim: true,
    },
    dealer2ID: {
      type: Number,
    },
    dealer2Name: {
      type: String,
      trim: true,
    },
    dealer2Image: {
      type: String,
      trim: true,
    },
    dealer2Image2: {
      type: String,
      trim: true,
    },
    betMilliSecond: {
      type: Number,
    },
    bWantToShuffle: {
      type: Boolean,
    },
    bWantToEnd: {
      type: Boolean,
    },
    keyStatus: {
      type: Number,
    },
    gameMode: {
      type: Number,
    },
    singleLimit: {
      type: Number,
    },
    tableMinBet: {
      type: Number,
    },
    tableMaxBet: {
      type: Number,
    },
    tableTieMinBet: {
      type: Number,
    },
    tableTieMaxBet: {
      type: Number,
    },
    tablePairMinBet: {
      type: Number,
    },
    tablePairMaxBet: {
      type: Number,
    },
    tableType: {
      type: Number,
    },
    tableStatus: {
      type: Number,
    },
    tableSort: {
      type: Number,
    },
    tableSort2: {
      type: Number,
    },
    reservedTable: {
      type: Number,
    },
    reservedTableParentIDArr: {
      type: [Number], // Array of numbers
    },
    reservedTableMemberIDArr: {
      type: [Number], // Array of numbers
    },
    tableDtExtend: {
      netGroupName: {
        type: String,
        trim: true,
      },
      phoneGroupName: {
        type: String,
        trim: true,
      },
      tableName: {
        type: String,
        trim: true,
      },
      netType: {
        type: String,
        trim: true,
      },
      phoneType: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol21Schema);
