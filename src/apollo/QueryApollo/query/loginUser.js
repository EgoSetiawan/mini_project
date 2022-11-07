import { gql } from "@apollo/client";

export const LoginUser = gql`
  query Login($Email: String!, $Password: String!) {
    mini_project_user(
      where: { email: { _eq: $Email }, _and: { password: { _eq: $Password } } }
    ) {
      id
      firstname
      lastname
      email
    }
  }
`;
