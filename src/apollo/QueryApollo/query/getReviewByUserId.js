import { gql } from "@apollo/client";

export const GetGameByUserId = gql`
  query getGameUserId($Id: Int!) {
    mini_project_user_by_pk(id: $Id) {
      id
      firstname
      lastname
      UserRev {
        ratings
        review_game
      }
    }
  }
`;
