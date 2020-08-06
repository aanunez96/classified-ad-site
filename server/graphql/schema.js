const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    ad(adId: ID): Ad
  }  
  type Ad{
    _id: ID!
    description: String!
  }
`;
module.exports = typeDefs;
