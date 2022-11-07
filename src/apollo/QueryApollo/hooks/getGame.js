import { useQuery } from "@apollo/client";
import { GetGame } from "../query/getGame";

const useGetGame = () => {
  const {
    data: gameData,
    loading: gameLoading,
    error: gameError,
  } = useQuery(GetGame);
  return { gameData, gameLoading, gameError };
};

export default useGetGame;
