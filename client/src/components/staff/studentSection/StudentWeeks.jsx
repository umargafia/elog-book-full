import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import {
  FormButton,
  HeadingSecondary,
  MyInfo,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";

import { StaffWeeks } from "./StaffWeeks";

export const StaffStudentWeeks = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("id"));
  const [weeks, setWeeks] = useState([]);

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

  useEffect(() => {
    console.log(student);
    getWeeks();
  }, []);

  const getWeeks = () => {
    console.log(student._id);
    Axios.get(`${API}/students/weeks/${student._id}`)
      .then((response) => {
        const data = response.data;
        localStorage.setItem("weeks", JSON.stringify(data.data.weeks));
        setWeeks(data.data.weeks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <MyAppBar
        text={`${student.name}'s note`}
        navigateToProfile={() => navigate("/staffProfile")}
        navigateToHome={() => navigate("/staffHome")}
      />

      <Box sx={style.main}>
        <Box sx={style.left}>
          <Box sx={style.roundedBox}>
            {weeks.map((e) => {
              return <StaffWeeks name={e.name} key={e._id} />;
            })}
          </Box>
        </Box>
        <Box sx={style.right}>
          <HeadingSecondary text={"Student Information"} />
          <Box sx={style.info}>
            <MyInfo text={"name"} value={student.name} />
            <MyInfo text={"registration number"} value={student.regNo} />
            <MyInfo text={"Course of study"} value={student.course} />
            <MyInfo text={"Organization"} value={student.company} />
          </Box>

          <Box sx={style.sign}>
            <FormButton text={"More"} onClick={() => navigate("/more")} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
