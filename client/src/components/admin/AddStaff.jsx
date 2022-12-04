import { Box, Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeadingTertiary,
  MyCardStyle,
  RoundedBox,
} from "../globalCompanents/Global";
import { MyAppBar } from "../globalCompanents/MyAppBar";
import { MyInput } from "../globalCompanents/MyInput";

export const AddStaff = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MyAppBar
        active={"admin"}
        admin="Add Staff"
        navigateToProfile={() => navigate("/adminProfile")}
        navigateToHome={() => navigate("/admin")}
      />
      <Card sx={MyCardStyle}>
        <form style={RoundedBox}>
          <HeadingTertiary text={"Add Staff"} />
          <MyInput text={"Staff Name"} />
          <MyInput text={"Staff Email"} type="email" />
          <MyInput text={"Phone number"} type="number" />
          <MyInput text={"Staff position"} />
        </form>
      </Card>
    </div>
  );
};
