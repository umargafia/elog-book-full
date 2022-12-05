import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { StudentAction } from "../../../store/studentSlice";
import { FormButton, HeadingSecondary } from "../../globalCompanents/Global";
import { Model } from "../../globalCompanents/Model";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { MyInput } from "../../globalCompanents/MyInput";
import { StudentWeeks } from "../weeks/StudentWeeks";

export const StudentHome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [weeks, setWeeks] = useState([]);
  const [weekLength, setLength] = useState();
  const [weekName, setWeekName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("id");
    getWeeks();
  }, []);

  const getWeeks = () => {
    Axios.get(`${API}/students/weeks/${user._id}`)
      .then((response) => {
        const data = response.data;
        localStorage.setItem("weeks", JSON.stringify(data.data));
        setWeeks(data.data.weeks);
        setLength(data.noOfWeeks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addWeek = () => {
    dispatch(StudentAction.model());
  };

  const createWeek = () => {
    Axios.post(`${API}/students/createWeek`, {
      name: weekName,
      weekId: user._id,
    })
      .then(() => getWeeks())
      .catch((e) => {
        console.log(e);
      });
    dispatch(StudentAction.model());
  };

  const deleteWeek = (id) => {
    Axios.delete(`${API}/students/weeks/${id}`)
      .then(() => getWeeks())
      .catch((e) => console.log(e));
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
      <MyAppBar
        active="home"
        navigateToProfile={navigateToProfile}
        text={user.name}
        admin="create new week"
        navigateToAdmin={addWeek}
      />
      <Box sx={{ padding: " 2rem", marginTop: "15rem" }}>
        {weeks.map((w) => {
          return (
            <StudentWeeks
              key={w._id}
              name={w.name}
              onClick={() => {
                localStorage.setItem("id", JSON.stringify(w._id));
                navigate("/studentWeek");
              }}
              deleteAction={() => {
                deleteWeek(w._id);
              }}
            />
          );
        })}
      </Box>
      <Model>
        <HeadingSecondary text={"Week name"} />
        <form style={{ marginTop: "4rem" }} onSubmit={createWeek}>
          <MyInput
            text={"week name"}
            type="text"
            required
            label="e.g Week 1"
            onChange={(e) => setWeekName(e.target.value)}
          />
          <FormButton text={"create"} />
        </form>
      </Model>
    </Box>
  );
};
