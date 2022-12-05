import { Box, Card } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import {
  HeadingTertiary,
  MyCardStyle,
  RoundedBox,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { Names } from "./Names";

export const StaffHome = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    localStorage.removeItem("id");
    getStudents();
  }, []);

  const getStudents = () => {
    Axios.get(`${API}/students`).then((res) => {
      setStudents(res.data);
    });
  };

  const navigateToProfile = () => {
    navigate("/staffProfile");
  };
  return (
    <Box>
      <MyAppBar
        active={"home"}
        text={"Staff Dashboard"}
        navigateToProfile={navigateToProfile}
      />
      <Card sx={MyCardStyle}>
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Students"} />
          {students.map((s) => {
            return (
              <Names
                key={s._id}
                name={s.name}
                RegNumber={s.regNo}
                onclick={() => {
                  localStorage.setItem("id", JSON.stringify(s));
                  navigate("/staff/studentWeeks");
                }}
              />
            );
          })}
        </Box>
      </Card>
    </Box>
  );
};
