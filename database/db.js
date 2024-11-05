const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://root:@todolist.o26eq.mongodb.net/?retryWrites=true&w=majority&appName=todolist"
    )
    .then(() => {
      console.log("MongoDB conectado!");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbConnection;
