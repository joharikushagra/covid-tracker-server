const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    countries: [Countries!]!
    global: Global!
  }
  type Global {
    _id:ID!
    NewConfirmed: String!
    TotalConfirmed: String!
    NewDeaths: String!
    TotalDeaths: String!
    NewRecovered: String!
    TotalRecovered: String!
    Date: String!
  }
  type Countries {
    _id:ID!
    Country: String!
    CountryCode: String
    Slug: String
    NewConfirmed: String
    TotalConfirmed: String
    NewDeaths: String
    TotalDeaths: String
    NewRecovered: String
    TotalRecovered: String
    Date: String
    Premium: String
  }
  type Mutation {
    addCountries: [Countries]!
    addGlobal: Global!
  }
`;
