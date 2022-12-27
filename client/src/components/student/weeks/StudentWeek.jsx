import { Card, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { Footer } from "../../globalCompanents/Footer";
import {
  FormButton,
  HeadingPrimary,
  HeadingTertiary,
  RoundedBox,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { Day } from "./Day";

export const StudentWeek = () => {
  const week = JSON.parse(localStorage.getItem("week"));
  const weekId = JSON.parse(localStorage.getItem("id"));

  const [from, setFrom] = useState("");

  useEffect(() => {
    getWeek();
  }, []);

  const navigate = useNavigate();
  const style = {
    box: {
      margin: "15rem 1rem 0 1rem",
    },
    card: {
      padding: "3rem",
      position: "relative",
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

  const getWeek = () => {
    if (weekId === "") return;
    Axios.get(`${API}/students/week/${weekId}`)
      .then((res) => {
        const newWeek = res.data.data.weeks;
        localStorage.setItem("week", JSON.stringify(newWeek));
        console.log(week[0].name);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
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
              <TextField
                type="date"
                variant="standard"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              />
            </Box>
            <Box sx={style.date}>
              <Typography variant="h3" marginRight={"2rem"}>
                To:
              </Typography>
              <TextField type="date" variant="standard" />

              <div
                style={{ position: "absolute", top: "2rem", right: "3.7rem" }}
              >
                <FormButton onClick={() => console.log(from)} text={"Update"} />
              </div>
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
      </Box>{" "}
      <Footer />
    </>
  );
};
