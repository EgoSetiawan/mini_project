import { useQuery } from "@apollo/client";
import { GetGameId } from "../query/getGameById";

const useGetGameId = () => {
  const {
    data: gameData,
    loading: gameLoading,
    error: gameError,
  } = useQuery(GetGameId, {
    variables: {
      Id,
    },
  });
  return { gameData, gameLoading, gameError };
};

export default useGetGameId;
