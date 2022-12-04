import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Shadow } from "../../globalCompanents/Global";

export const StudentWeeks = ({ name }) => {
  const navigate = useNavigate();
  const style = {
    background: "white",
    margin: "0 0rem 2rem 0rem",
    padding: "3rem",
    borderRadius: "1rem",
    cursor: "pointer",
    transition: "all 1s",
    boxShadow: Shadow,
    "&:hover": {
      background: "green",
      "> *": {
        color: "white",
      },
    },
  };

  return (
    <Box
      sx={style}
      onClick={() => {
        navigate("/studentWeek");
      }}
    >
      <Typography variant="h1" color={"green"}>
        {name}
      </Typography>
      <Typography variant="h3" color={"brown"} fontWeight="800">
        From monday
      </Typography>
      <Typography variant="h3" color={"rgb(33, 34, 34)"} fontWeight="700">
        To friday
      </Typography>
    </Box>
  );
};
