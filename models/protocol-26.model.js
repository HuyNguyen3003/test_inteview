const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-26s";
const COLLECTION_NAME = "protocol-26s";

var protocol26Schema = new mongoose.Schema(
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
    historyArr: {
      type: [Number],
    },
    historyData: {
      resultObjArr: [
        {
          gameNo: Number,
          gameNoRound: Number,
          result: Number,
          resultContent: String,
        },
      ],
      historyStatus: Number,
      dataArr1: [Number],
      dataArr2: [[Number]],
      dataArr3: [[Number]],
      dataArr4: [[Number]],
      dataArr5: [[Number]],
      dataArr6: [Number],
      bankerCount: Number,
      playerCount: Number,
      tieCount: Number,
      bankerPairCount: Number,
      playerPairCount: Number,
      bigCount: Number,
      smallCount: Number,
      bankerGodCount: Number,
      playerGodCount: Number,
      super6Count: Number,
      totalCount: Number,
      bankerAsk3: Number,
      bankerAsk4: Number,
      bankerAsk5: Number,
      playerAsk3: Number,
      playerAsk4: Number,
      playerAsk5: Number,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol26Schema);
