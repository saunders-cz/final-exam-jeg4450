import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($input: UserInput!) {
    addUser(input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const ADD_MEAL = gql`
  mutation AddMeal($input: MealInput!) {
    addMeal(input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const UPDATE_MEAL = gql`
  mutation UPDATE_MEAL($id: ID!, $input: MealInput!) {
    updateMeal(id: $id, input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const DELETE_MEAL = gql`
  mutation DELETE_MEAL($id: ID!) {
    deleteMeal(id: $id) {
      ok
      errors {
        message
      }
    }
  }
`;
