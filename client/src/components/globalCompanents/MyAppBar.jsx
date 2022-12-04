import { AppBar, Button, List, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../images/Alqalam_university_Logo-removebg-preview.png";
import { Shadow2 } from "./Global";
import HomeIcon from "@mui/icons-material/Home";
import { Logout, Person } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { StudentAction } from "../../store/studentSlice";
const useStyle = makeStyles({
  appBar: {
    background: "green",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: "10rem",
  },
});

export const MyAppBar = ({
  active,
  text,
  navigateToHome,
  navigateToProfile,
  admin,
  navigateToAdmin,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const style = useStyle();
  const listItem = {
    color: "white",
    fontSize: "3rem",
    marginRight: "2rem",
    transition: "all .8s",
    "&:hover": {
      color: "rgba(199, 194, 194, 0.738)",
      transform: "scale(1.15) skewX(-10deg)",
    },
  };

  const logoIcon = {
    fontSize: "4rem",
  };
  const activeClass = {
    color: "white",
    cursor: "default",
    fontSize: "3rem",
    marginRight: "2rem",

    boxShadow: Shadow2,
    "&:focus": {
      borderBottom: "1px solid rgba(199, 194, 194, 0.738)",
    },
  };

  return (
    <Box>
      <AppBar>
        <Toolbar className={style.appBar}>
          <img src={logo} alt="auk logo" className={style.logo} />
          <Typography textTransform={"uppercase"} variant="h2">
            {text}
          </Typography>
          <List>
            <Button
              sx={active === "home" ? activeClass : listItem}
              onClick={navigateToHome}
            >
              <HomeIcon sx={logoIcon} />
              Home
            </Button>
            <Button
              sx={active === "profile" ? activeClass : listItem}
              onClick={navigateToProfile}
            >
              <Person sx={logoIcon} />
              Profile
            </Button>

            {admin && (
              <Button
                sx={active === "admin" ? activeClass : listItem}
                onClick={navigateToAdmin}
              >
                {admin}
              </Button>
            )}

            <Button
              sx={listItem}
              style={{ marginLeft: "5rem" }}
              onClick={() => {
                navigate("/");
                dispatch(StudentAction.logout());
              }}
            >
              <Logout sx={logoIcon} />
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
