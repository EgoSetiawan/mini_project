import { useMutation } from "@apollo/client";
import { SignUp } from "../mutation/signUp";

const Register = () => {
  const [
    RegisterUser,
    { loading: loadingRegisterUser, error: errorRegisterUser },
  ] = useMutation(SignUp);
  return { RegisterUser, loadingRegisterUser, errorRegisterUser };
};

export default Register;
