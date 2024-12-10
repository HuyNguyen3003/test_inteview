const mongoose = require("mongoose");

const connectString =
  "mongodb://admin:password@localhost:27017/crawl-data-socket?retryWrites=true&authSource=admin";

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect() {
    mongoose
      .connect(connectString)
      .then(() => {
        console.log("Connected to MongoDB");
        // countConnect();
      })
      .catch((err) => {
        console.log("Failed to connect to MongoDB", err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
