const mongoose = require("mongoose");

const { MONGO_ATLAS, MONGO_LOCAL, NODE_ENV } = process.env;

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

NODE_ENV === "development" ? connectDb(MONGO_LOCAL) : connectDb(MONGO_ATLAS);
