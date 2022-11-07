import { gql } from "@apollo/client";

export const GetGameByGenre = gql`
  query getGameByGenre($Genre: String!) {
    mini_project_game_rev(where: { genre: { _ilike: $Genre } }) {
      id
      title
      genre
      GameRev {
        ratings
        review_game
      }
    }
  }
`;
