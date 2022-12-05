import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeadingTertiary,
  MyCardStyle,
  RoundedBox,
} from "../globalCompanents/Global";
import { MyAppBar } from "../globalCompanents/MyAppBar";
import { MyInput } from "../globalCompanents/MyInput";

export const AdminProfile = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [position, setPosition] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("staff"));
    setUsername(user.name);
    setEmail(user.email);
    setPosition(user.position);
    setNumber(user.phoneNumber);
  }, []);
  return (
    <div>
      <MyAppBar
        text={userName}
        active={"profile"}
        navigateToHome={() => navigate("/admin")}
        admin="Add Staff"
        navigateToAdmin={() => navigate("/addStaff")}
      />

      <Card sx={MyCardStyle}>
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Staff information"} />
          <MyInput text={"Staff Name"} value={userName} />
          <MyInput text={"Staff Email"} type="email" value={email} />
          <MyInput text={"Phone number"} type="number" value={number} />
          <MyInput text={"Staff position"} type="text" value={position} />
        </Box>
      </Card>
    </div>
  );
};
