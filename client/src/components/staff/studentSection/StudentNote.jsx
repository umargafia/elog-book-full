import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormButton,
  HeadingTertiary,
  MyInfo,
  StaffArrowBack,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { Day } from "./Day";

export const StudentNote = () => {
  const navigate = useNavigate();

  const style = {
    main: {
      height: "calc(100vh - 13rem)",
      background: "white",
      padding: " 0 1rem",
      display: "flex",
      marginTop: "13rem",
      alignItems: "center",
    },
    left: {
      flex: "1",
      borderRight: "3px solid green",
      height: "97%",
    },

    roundedBox: {
      border: "1px solid gray",
      padding: "2rem ",
      margin: "2rem",
      height: "80%",
      borderRadius: ".5rem",
      overflow: "auto",
    },
    link: {
      fontSize: "2rem",
      textDecoration: "none",
      color: "green",
      position: "fixed",
      top: "17rem",
      left: "10rem",
      borderBottom: "1px solid gray",
      textTransform: "uppercase",
    },
  };
  return (
    <Box>
      <StaffArrowBack link={"/staff/studentWeeks"} />
      <MyAppBar
        text={"Student name note"}
        navigateToProfile={() => navigate("/staffProfile")}
        navigateToHome={() => navigate("/staffHome")}
      />

      <Box sx={style.main}>
        <Box sx={style.left}>
          <HeadingTertiary text={"week 1"} />
          <a href="#comment" style={style.link}>
            write a review
          </a>
          <Box sx={style.roundedBox}>
            <Day day="monday" />
            <Day day="tuesday" />
            <Day day="wednesday" />
            <Day day="thursday" />
            <Day day="friday" />
            <Day day="saturday" />

            <TextField
              placeholder="Write a note"
              multiline
              fullWidth
              maxRows={6}
              minRows={6}
              variant="filled"
              id="comment"
            />
            <Typography textAlign={"center"} variant={"h4"} color="gray">
              Write a Remark
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
