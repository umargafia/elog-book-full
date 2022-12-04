import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormButton,
  HeadingSecondary,
  MyInfo,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";

import { StaffWeeks } from "./StaffWeeks";

export const StaffStudentWeeks = () => {
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
    right: {
      height: "100%",
      flex: "1",
      padding: "0 2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    roundedBox: {
      border: "1px solid gray",
      padding: "2rem ",
      margin: "2rem",
      height: "90%",
      borderRadius: ".5rem",
      overflow: "auto",
    },
    info: {
      display: "flex",
      flexWrap: "wrap",
    },
  };
  return (
    <Box>
      <MyAppBar
        text={"Student name note"}
        navigateToProfile={() => navigate("/staffProfile")}
        navigateToHome={() => navigate("/staffHome")}
      />

      <Box sx={style.main}>
        <Box sx={style.left}>
          <Box sx={style.roundedBox}>
            <StaffWeeks />
            <StaffWeeks />
            <StaffWeeks />
          </Box>
        </Box>
        <Box sx={style.right}>
          <HeadingSecondary text={"Student Information"} />
          <Box sx={style.info}>
            <MyInfo text={"name"} value={"Umar musa"} />
            <MyInfo text={"registration number"} value={"nas/ste/19/1104"} />
            <MyInfo text={"Course of study"} value={"Software Engineering"} />
            <MyInfo text={"Organization"} value={"Organization name"} />
          </Box>

          <Box sx={style.sign}>
            <FormButton text={"More"} onClick={() => navigate("/more")} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
