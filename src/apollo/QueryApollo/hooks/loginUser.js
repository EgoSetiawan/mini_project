import { useLazyQuery } from "@apollo/client";
import { LoginUser } from "../query/loginUser";

const loginUser = () => {
  const [
    login,
    { data: LoginUserData, loading: LoadingloginUser, error: ErrorloginUser },
  ] = useLazyQuery(LoginUser);
  return { login, LoginUserData, LoadingloginUser, ErrorloginUser };
};

export default loginUser;
