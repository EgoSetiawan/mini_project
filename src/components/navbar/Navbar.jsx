import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComp from "./Drawer";

function Header() {
  const [value, setValue] = useState("/");
  const theme = useTheme();
  console.log(value);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar sx={{ backgroundColor: "secondary.light" }}>
        <Toolbar color="primary">
          <Typography sx={{ fontSize: "2rem" }}>GameReview</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" value="/" component={Link} to="/" />
                <Tab
                  label="Your Reviwew"
                  value="/Review"
                  component={Link}
                  to="/Review"
                />
              </Tabs>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                value="/SignIn"
                component={Link}
                to="/Login"
              >
                Sign In
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
