const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./schema/resolvers");
const { typeDefs } = require("./schema/type-defs");
/**
 * Your Apollo Server class requires 2 arguments
 * typeDefs -> schema of your GQL
 * resolvers -> these are basiclly fn that will be doing the Logical work, eg: DB calls,HTTP calls
 */
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`API started at ${url} :`);
});
