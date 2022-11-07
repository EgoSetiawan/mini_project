import { gql } from "@apollo/client";

export const GetGameId = gql`
  query getGame($Id: Int!) {
    mini_project_game_rev_by_pk(id: $Id) {
      id
      title
      genre
      GameRev {
        ratings
        review_game
      }
      GameComments {
        comment
      }
    }
  }
`;
