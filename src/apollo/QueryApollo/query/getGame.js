import { gql } from "@apollo/client";

export const GetGame = gql`
  query getGame {
    mini_project_game_rev {
      id
      title
      genre
      image_url
      GameRev {
        ratings
        review_game
      }
    }
  }
`;
