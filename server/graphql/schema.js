const {gql} = require('apollo-server');

const typeDefs = gql`
  
  type Query {
    ads(userId: ID, classification: Category, recently: Boolean): [Ad]
    ad(adId: ID!): Ad
    categories : [Category]
    user(userId: ID): User
  }
    
  type Ad{
    _id: ID!
    description: String
    tittle: String!
    owner: User!
    classification: Category!
    price: Int!
    date:  String!
  }
  
  enum Category{
    car
    motorcycle
    property
    cycle
    clothing
    watch
    gadget
    mobile
  }
  
  type Profile{
     name: String
     lastName: String
     avatar: String
     number: Int
  }
  
  extend type User {
  _id: ID
  profile: Profile
  }
  
  extend input CreateUserInput {
      profile: CreateUserProfileInput
  }
  
  input CreateUserProfileInput {
     name: String
     lastName: String
     avatar: String
     number: Int
  }
  
  type Mutation{
    createAd(tittle: String!, owner: ID!, description: String, classification: Category!, price: Int!): Ad!
    
    modifyAd(tittle: String, adId: ID!, description: String, classification: Category, price: Int): Ad!
    
    modifyUser(userId: ID!, lastName: String, avatar: String, number: Int, name: String): User  
  } 
`;
module.exports = typeDefs;
