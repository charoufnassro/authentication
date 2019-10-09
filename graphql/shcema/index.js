const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        getUsers: [User],
        getUserByEmail(emailAdress: String!): User
    }
    type User {
        username: String!
        password: String!
        token: String!
        role: String!
        name: String
        surname: String
        phoenNumber: String
        emailAdress: String!
        isEnable: Boolean
        createdAt: String!
        createdBy: ID
        updatedAt: String!
        updatedBy: ID
    }
    input userInput {
        username: String!
        password: String!
        token: String!
        role: String!
        name: String
        surname: String
        phoenNumber: String
        emailAdress: String!
        isEnable: Boolean
        createdAt: String!
        createdBy: ID
        updatedAt: String!
        updatedBy: ID
    }
    type Mutation {
        addUser(
        username: String!
        password: String!
        token: String!
        role: String!
        name: String
        surname: String
        phoenNumber: String
        emailAdress: String!
        isEnable: Boolean
        createdAt: String!
        createdBy: ID
        updatedAt: String!
        updatedBy: ID 
        ): User
    }
`;

module.exports = typeDefs