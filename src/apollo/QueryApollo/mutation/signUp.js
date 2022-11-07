import { gql } from "@apollo/client";

export const SignUp = gql`
  mutation SignUp($objects: [mini_project_user_insert_input!]!) {
    insert_mini_project_user(objects: $objects) {
      returning {
        id
        email
      }
    }
  }
`;
