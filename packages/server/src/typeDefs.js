import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    description: String!
    publisher: String!
    author: String!
    imgsrc: String
    price: Float!
    categoryId: ID!
    category: Category
  }

  input BookInput {
    title: String!
    description: String!
    publisher: String!
    author: String!
    imgsrc: String
    price: Float!
    categoryId: ID!
  }

  type Category {
    id: ID!
    title: String!
    books: [Book]
  }

  type Result {
    ok: Boolean!
    errors: [Error]
  }

  type Error {
    message: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    categories: [Category]
  }

  type Mutation {
    addBook(input: BookInput!): Result
    updateBook(id: ID!, input: BookInput!): Result
  }
`;
