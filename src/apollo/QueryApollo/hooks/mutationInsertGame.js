import { useMutation } from "@apollo/client";
import { InsertGame } from "../mutation/insertGame";
import { GetGameByUserId } from "../query/getReviewByUserId";

const InsertGameReview = () => {
  const [
    insertGameReview,
    { loading: loadingGameReview, error: errorGameReview },
  ] = useMutation(InsertGame, {
    refetchQueries: [{ query: GetGameByUserId }],
  });
  return { insertGameReview, loadingGameReview, errorGameReview };
};

export default InsertGameReview;
