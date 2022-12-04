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
            <MyInfo text={"name"} value={"umar faruk musa"} />
            <MyInfo text={"registration number"} value={"nas/ste/19/1104"} />
            <MyInfo text={"Course of study"} value={"Software Engineering"} />
            <MyInfo value="" text="Course of study" />
            <MyInfo value="" text="Department" />
            <MyInfo value="" text="name Of company" />
            <MyInfo value="" text="Address Of company" />
            <MyInfo value="" text="Name of industry based supervisor" />
          </Box>
          <Box sx={RoundedBox}>
            <HeadingTertiary text={"Organization profile"} />
            <MyInfo value="" text="name of establishment" />
            <MyInfo value="" text="Location" />
            <MyInfo value="" text="Year of operation stated" />
            <MyInfo value="" text="Year of operation stated" />
            <Box sx={RoundedBox}>
              <MyInfo value="" text="Principal area of operation" />
              <MyInfo value="" text="1" />
              <MyInfo value="" text="2" />
              <MyInfo value="" text="3" />
            </Box>
            <Box sx={RoundedBox}>
              <MyInfo value="" text="products/jobs undertaken" />
              <MyInfo value="" text="1" />
              <MyInfo value="" text="2" />
              <MyInfo value="" text="3" />
            </Box>
            <Box sx={RoundedBox}>
              <HeadingTertiary text="employment size" />
              <MyInfo value="" text="Professional" />
              <MyInfo value="" text="Non-professional" />
            </Box>
            <Box sx={RoundedBox}>
              <HeadingTertiary text="Plant capacity if applicable" />
              <MyInfo value="" text="Installed" />
              <MyInfo value="" text="Utilized" />
            </Box>
            <MyInfo value="" text="Capital Investment To date" />
            <MyInfo value="" text="Any other relevant information" />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
