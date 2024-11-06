const mongoose = require("mongoose");

const connection = require("../secrets");

const dbConnection = () => {
  mongoose
    .connect(connection)
    .then(() => {
      console.log("MongoDB conectado!");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbConnection;
