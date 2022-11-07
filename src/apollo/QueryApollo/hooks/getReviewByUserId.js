import { useQuery } from "@apollo/client";
import { GetGameByUserId } from "../query/getReviewByUserId";

const useGetGameId = () => {
  const {
    data: gameData,
    loading: gameLoading,
    error: gameError,
  } = useQuery(GetGameByUserId, {
    variables: {
      Id,
    },
  });
  return { gameData, gameLoading, gameError };
};

export default useGetGameId;
