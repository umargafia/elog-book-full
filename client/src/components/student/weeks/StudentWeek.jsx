import { Card, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeadingPrimary,
  HeadingTertiary,
  RoundedBox,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { Day } from "./Day";

export const StudentWeek = () => {
  const navigate = useNavigate();
  const style = {
    box: {
      margin: "15rem 1rem",
    },
    card: {
      padding: "3rem",
    },
    date: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:not(:last-child)": {
        marginRight: "3rem",
      },
    },
    paragraph: {
      fontSize: "1.6rem",
    },
  };

  const navigateToHome = () => {
    navigate("/studentHome");
  };

  const navigateToProfile = () => {
    navigate("/studentProfile");
  };

  return (
    <Box sx={style.box}>
      <MyAppBar
        text={"Weekly progress chart (week) 1"}
        navigateToHome={navigateToHome}
        navigateToProfile={navigateToProfile}
      />
      <Card sx={style.card}>
        <Box sx={style.date}>
          <Box sx={style.date}>
            <Typography variant="h3" marginRight={"2rem"}>
              From:
            </Typography>
            <TextField type="date" variant="standard" />
          </Box>
          <Box sx={style.date}>
            <Typography variant="h3" marginRight={"2rem"}>
              To:
            </Typography>
            <TextField type="date" variant="standard" />
          </Box>
        </Box>
        <Day day="monday" />
        <Day day="tuesday" />
        <Day day="wednesday" />
        <Day day="thursday" />
        <Day day="friday" />
        <Day day="saturday" />
        <Box sx={style.date}>
          <TextField
            multiline
            maxRows={3}
            minRows={3}
            sx={{ width: "45%", marginRight: "3rem" }}
            variant="filled"
            label="Add a note"
          />
          <TextField
            multiline
            maxRows={3}
            minRows={3}
            sx={{ width: "45%", marginRight: "3rem" }}
            variant="filled"
            label="comment by industrial based supervisor"
          />
        </Box>
        <Box sx={RoundedBox}>
          <HeadingTertiary
            text={"co-coordinator/head of department comments"}
          />
          <Typography variant="p" sx={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            molestias fugit incidunt adipisci iste est, deserunt velit libero
            rerum cupiditate voluptate vitae neque officia animi ducimus esse
            minima suscipit asperiores.
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
