const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const typeDefs = require('./graphql/shcema/index');
const resolvers = require('./graphql/resolvers/index');

dotenv.config();
require('./DataBase/Config')
const _PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.applyMiddleware({ app });

app.listen({ port: _PORT }, () => 
console.log(`Server ready at http://localhost:${_PORT}${server.graphqlPath}`)
);