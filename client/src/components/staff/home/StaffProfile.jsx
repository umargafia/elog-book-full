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
  const navigateToHome = () => {
    navigate("/staffHome");
  };
  return (
    <Box>
      <MyAppBar active={"profile"} navigateToHome={navigateToHome} />
      <Card sx={MyCardStyle}>
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Staff information"} />
          <MyInput text={"Staff Name"} />
          <MyInput text={"Staff Email"} type="email" />
          <MyInput text={"Phone number"} type="number" />
          <MyInput text={"Staff position"} />
        </Box>
      </Card>
    </Box>
  );
};
