const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./TypeDefs");
const resolvers = require("./Resolvers");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("from express");
  });

  mongoose.Promise = global.Promise;

  await mongoose
    .connect("mongodb://localhost:27017/graphqlpoc", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("mongodDB is connected"));

  app.listen(4000, () => console.log("server in 4000 port"));
}

startServer();
