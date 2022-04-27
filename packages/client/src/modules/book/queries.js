import { gql } from "@apollo/client";
export const GET_BOOKS = gql`
  query GET_BOOKS {
    books {
      id
      title
      description
      publisher
      author
      imgsrc
      price
      categoryId
      category {
        id
        title
      }
    }
  }
`;

export const GET_BOOK = gql`
  query GET_BOOK($id: ID!) {
    book(id: $id) {
      title
      description
      publisher
      author
      imgsrc
      price
      categoryId
    }
  }
`;
