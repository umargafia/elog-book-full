import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Shadow2 } from "../../globalCompanents/Global";

export const Names = ({ name, RegNumber, onclick }) => {
  const style = {
    main: {
      display: "flex",
      justifyContent: "space-between",
      padding: "2rem 10rem",
      marginBottom: "2rem",
      background: "rgba(118, 116, 116, 0.1)",
      boxShadow: Shadow2,
      borderRadius: ".3rem",
      transition: "1s",
      cursor: "pointer",
      "&:hover": {
        background: "green",
        "> *": {
          color: "white",
        },
      },
    },
    text: {
      textTransform: "uppercase",
    },
  };
  return (
    <Box sx={style.main} onClick={onclick}>
      <Typography variant="h3" sx={style.text} color="green" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="h3" sx={style.text} color="gray">
        {RegNumber}
      </Typography>
    </Box>
  );
};
