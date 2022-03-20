const { ApolloServer, gql } = require("apollo-server");
const { mongoose } = require("mongoose");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
require('dotenv').config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.w2lg8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err.message));

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
});

server.listen(process.env.PORT).then(({ url }) => console.log("Server Started on port" + url));
