import { gql } from "apollo-server";

export const typeDefs = gql`
  type Meal {
    id: ID!
    title: String!
    description: String!
    imgsrc: String
    price: Float!
    categoryId: ID!
    category: Category
  }
  input MealInput {
    title: String!
    description: String!
    imgsrc: String
    price: Float!
    categoryId: ID!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    address: String!
    email: String!
    newsletter: Boolean!
  }
  input UserInput {
    firstName: String!
    lastName: String!
    address: String!
    email: String!
    newsletter: Boolean!
  }
  type Category {
    id: ID!
    title: String!
    meals: [Meal]
  }
  type Result {
    ok: Boolean!
    errors: [Error]
  }
  type Error {
    message: String!
  }
  type Query {
    meals: [Meal]
    meal(id: ID!): Meal
    users: [User]
    categories: [Category]
  }
  type Mutation {
    addUser(input: UserInput!): Result
    addMeal(input: MealInput!): Result
    updateMeal(id: ID!, input: MealInput!): Result
    deleteMeal(id: ID!): Result
  }
`;
