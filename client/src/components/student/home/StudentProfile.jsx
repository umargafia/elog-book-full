import { Card, Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeadingTertiary, MyCard, MyCardStyle, RoundedBox } from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { MyInput } from "../../globalCompanents/MyInput";
export const StudentProfile = () => {
  const navigate = useNavigate();
 
  const navigateToHome = () => {
    navigate("/studentHome");
  };

 
  return (
    <Box>
      <MyAppBar
        active={"profile"}
        navigateToHome={navigateToHome}
        
      />
      <Card sx={MyCardStyle} >
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Student's particulars"} />
          <MyInput type="text" text="Student Name" required />
          <MyInput type="text" text="Registration number" required />
          <MyInput type="text" text="Course of study" required />
          <MyInput type="text" text="Department" required />
          <MyInput type="text" text="name Of company" />
          <MyInput type="text" text="Address Of company" />
          <MyInput type="text" text="Name of industry based supervisor" />
        </Box>
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Organization profile"} />
          <MyInput type="text" text="name of establishment" />
          <MyInput type="text" text="Location" />
          <MyInput type="text" text="Year of operation stated" />
          <MyInput type="text" text="Year of operation stated" />
          <Box sx={RoundedBox}>
            <MyInput type="text" text="Principal area of operation" />
            <MyInput type="text" text="1" />
            <MyInput type="text" text="2" />
            <MyInput type="text" text="3" />
          </Box>
          <Box sx={RoundedBox}>
            <MyInput type="text" text="products/jobs undertaken" />
            <MyInput type="text" text="1" />
            <MyInput type="text" text="2" />
            <MyInput type="text" text="3" />
          </Box>
          <Box sx={RoundedBox}>
            <HeadingTertiary text="employment size" />
            <MyInput type="text" text="Professional" />
            <MyInput type="text" text="Non-professional" />
          </Box>
          <Box sx={RoundedBox}>
            <HeadingTertiary text="Plant capacity if applicable" />
            <MyInput type="text" text="Installed" />
            <MyInput type="text" text="Utilized" />
          </Box>
          <MyInput type="text" text="Capital Investment To date" />
          <MyInput type="text" text="Any other relevant information" />
        </Box>
      </Card>
    </Box>
  );
};
