import { ArrowBack } from "@mui/icons-material";
import { Box, Card, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeadingTertiary,
  MyCardStyle,
  MyInfo,
  RoundedBox,
  StaffArrowBack,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { MyInput } from "../../globalCompanents/MyInput";

export const More = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("id"));

  return (
    <Box>
      <StaffArrowBack link={"/staff/studentWeeks"} />
      <MyAppBar
        navigateToHome={() => navigate("/staffHome")}
        navigateToProfile={() => navigate("/staffProfile")}
      />
      <Box>
        <Card sx={MyCardStyle}>
          <Box sx={RoundedBox}>
            <HeadingTertiary text={"Student's particulars"} />
            <MyInfo text={"name"} value={student.name} />
            <MyInfo value={student.email} text="email" />
            <MyInfo text={"registration number"} value={student.regNo} />
            <MyInfo value={student.number} text="Phone number" />
            <MyInfo value={student.department} text="Department" />
            <MyInfo text={"Course of study"} value={student.course} />
          </Box>
          <Box sx={RoundedBox}>
            <HeadingTertiary text={"organization info"} />
            <MyInfo text={"organization name"} value={student.company} />
            <MyInfo
              value={student.superVisor}
              text="Name of industry based supervisor"
            />
            <MyInfo value={student.state} text="state" />
            <MyInfo
              text={"Address Of company"}
              value={student.location}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
