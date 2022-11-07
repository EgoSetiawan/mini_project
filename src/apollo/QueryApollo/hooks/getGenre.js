import { useQuery } from "@apollo/client";
import { GetGameId } from "../query/getGameById";

const useGetGameId = () => {
  const {
    data: gameDataById,
    loading: gameLoadingById,
    error: gameErrorById,
  } = useQuery(GetGameId);
  return { gameDataById, gameLoadingById, gameErrorById };
};

export default useGetGameId;
