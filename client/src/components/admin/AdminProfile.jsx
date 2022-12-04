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
  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("staff"));
    setUser(user.name);
  }, []);
  return (
    <div>
      <MyAppBar
        text={user}
        active={"profile"}
        navigateToHome={() => navigate("/admin")}
        admin="Add Staff"
        navigateToAdmin={() => navigate("/addStaff")}
      />

      <Card sx={MyCardStyle}>
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Staff information"} />
          <MyInput text={"Staff Name"} />
          <MyInput text={"Staff Email"} type="email" />
          <MyInput text={"Phone number"} type="number" />
          <MyInput text={"Staff position"} />
        </Box>
      </Card>
    </div>
  );
};
