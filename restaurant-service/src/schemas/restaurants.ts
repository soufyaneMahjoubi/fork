import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Restaurant {
    restaurantUuid: String
    name: String
    country: Country
    images: [String]
    allowedReview: Boolean
  }

  type Country {
    code: String
    locales: [String]
  }

  type Query {
    restaurants: [Restaurant]
  }
`;
