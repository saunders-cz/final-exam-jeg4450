import { gql } from "apollo-server";

export const typeDefs = gql`
  type Meal {
    id: ID!
    title: String!
    description: String!
    price: Float!
    categoryId: ID
    category: Category
  }

  type Category {
    id: ID!
    title: String!
  }

  type Query {
    meals: [Meal]
    meal(id: ID!): Meal
  }
`;
