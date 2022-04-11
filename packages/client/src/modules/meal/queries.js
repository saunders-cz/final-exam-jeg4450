import { gql } from "@apollo/client";
export const GET_MEALS = gql`
  query GET_MEALS {
    meals {
      id
      title
      description
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

export const GET_MEAL = gql`
  query GET_MEAL($id: ID!) {
    meal(id: $id) {
      title
      description
      imgsrc
      price
      categoryId
    }
  }
`;
