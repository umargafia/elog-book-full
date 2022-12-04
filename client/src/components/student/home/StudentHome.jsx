import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { StudentAction } from "../../../store/studentSlice";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { StudentWeeks } from "../weeks/StudentWeeks";
import { Weeks } from "./Weeks";

export const StudentHome = () => {
  const navigate = useNavigate();
  const [weeks, setWeeks] = useState(JSON.parse(localStorage.getItem("weeks")));

  useEffect(() => {
    getWeeks();
  }, []);

  const getWeeks = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    Axios.get(`${API}/students/weeks/${user._id}`)
      .then((response) => {
        const data = response.data;
        localStorage.setItem("weeks", JSON.stringify(data));
        setWeeks(data.weeks);
      })
      .catch((error) => {});
  };

  const style = {
    background: "green",
    fontSize: "2rem",
    "&:hover": {
      background: "rgb(1, 56, 1);",
    },
  };

  const navigateToProfile = () => {
    navigate("/studentProfile");
  };
  return (
    <Box>
      <MyAppBar active="home" navigateToProfile={navigateToProfile} />
      <Box sx={{ padding: " 2rem", marginTop: "15rem" }}>
        <Weeks week={weeks} />
        <StudentWeeks name={"Week 1"} />
        <StudentWeeks name={"Week 2"} />
        {/* {weeks &&
          weeks.week.map((w) => {
            return <StudentWeeks key={w._id} name={w.name} />;
          })} */}
        <Button variant={"contained"} sx={style}>
          New Week
        </Button>
      </Box>
    </Box>
  );
};
