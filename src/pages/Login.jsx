import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginImage from "../assets/Login_Image.png";
import LoginUser from "../apollo/QueryApollo/hooks/loginUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const datas = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(datas);

  const { login, LoadingloginUser, LoginUserData, ErrorloginUser } =
    LoginUser();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // const Checkdata = LoginUserData;
  // console.log(data);
  const userData = LoginUserData?.mini_project_user[0];
  console.log(LoginUserData?.mini_project_user[0]);
  // console.log();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    login({
      variables: {
        Email: data.email,
        Password: data.password,
      },
    });
  };

  useEffect(() => {
    if (LoginUserData?.mini_project_user.length === 1) {
      localStorage.setItem("idUser", userData?.id);
    }
    return navigate("/", { replace: true });
  }, [userData]);

  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
      }}
    >
      <Grid
        item
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${LoginImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <Box
          sx={{
            margin: 30,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            sx={{
              mb: 3,
            }}
          >
            SIGN IN
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={data.email}
              onChange={handleChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={data.password}
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography>{"Don't have an account?"}</Typography>
                <Typography>
                  <Link to="/Register">Register</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
