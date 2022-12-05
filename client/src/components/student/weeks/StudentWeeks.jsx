import { Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Shadow } from "../../globalCompanents/Global";
import { Delete } from "@mui/icons-material";

export const StudentWeeks = ({ name, deleteAction,onClick }) => {
  const navigate = useNavigate();
  const style = {
    background: "white",
    margin: "0 0rem 2rem 0rem",
    borderRadius: "1rem",
    cursor: "pointer",
    transition: "all 1s",
    padding: "3rem",
    boxShadow: Shadow,
    display: "flex",
    position: "relative",
    overFlow: "hidden",
    "&:hover": {
      background: "green",
      "> *": {
        color: "white",
      },
    },
  };

  const box = {
    flex: "10",
    transition: "all 1s",
    "&:hover": {
      background: "transparent",
      "> *": {
        color: "white",
      },
    },
  };

  const buttonStyle = {
    position: "absolute",
    right: "2rem",
    top: "1rem",
  };
  return (
    <Box sx={style}>
      <IconButton onClick={deleteAction} sx={buttonStyle}>
        <Delete sx={{ fontSize: "4rem" }} />
      </IconButton>
      <Box
        sx={box}
        onClick={onClick}
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
      <div style={{ flex: 1 }}></div>
    </Box>
  );
};
