import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeadingTertiary,
  MyCardStyle,
  RoundedBox,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { MyInput } from "../../globalCompanents/MyInput";

export const StaffProfile = () => {
  const navigate = useNavigate();
  const staff = JSON.parse(localStorage.getItem("staff"));

  const navigateToHome = () => {
    navigate("/staffHome");
  };
  return (
    <Box>
      <MyAppBar
        active={"profile"}
        navigateToHome={navigateToHome}
        text={staff.name}
      />
      <Card sx={MyCardStyle}>
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Staff information"} />
          <MyInput text={"Staff Name"} value={staff.name} />
          <MyInput text={"Staff Email"} type="email" value={staff.email} />
          <MyInput
            text={"Phone number"}
            type="number"
            value={staff.phoneNumber}
          />
          <MyInput text={"Staff position"} value={staff.position} />
        </Box>
      </Card>
    </Box>
  );
};
