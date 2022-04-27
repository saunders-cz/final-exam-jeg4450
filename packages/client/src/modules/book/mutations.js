import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation ADD_BOOK($input: BookInput!) {
    addBook(input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UPDATE_BOOK($updateBookId: ID!, $input: BookInput!) {
    updateBook(id: $updateBookId, input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;
