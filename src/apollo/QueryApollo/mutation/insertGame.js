import { gql } from "@apollo/client";

export const InsertGame = gql`
  mutation InsertGameReview($objects: [mini_project_game_rev_insert_input!]!) {
    insert_mini_project_game_rev(objects: $objects) {
      returning {
        id
        title
        image_url
        genre
        GameRev {
          ratings
          review_game
        }
      }
    }
  }
`;
