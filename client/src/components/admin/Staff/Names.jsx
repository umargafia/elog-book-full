import { Delete } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Shadow2 } from "../../globalCompanents/Global";

export const StaffsName = ({ name, number, onclick, position, role }) => {
  const style = {
    main: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0rem 10rem",
      marginBottom: "2rem",
      background: "rgba(118, 116, 116, 0.1)",
      boxShadow: Shadow2,
      borderRadius: ".3rem",
      transition: "1s",
      overFlow: "hidden",
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
    nav: {
      padding: "2rem 50% 2rem 2rem",
      transition: "1s",
      "&:hover": {
        "> *": {
          color: "white",
        },
      },
    },
  };
  return (
    <Box sx={style.main} >
      <Typography variant="h3" sx={style.text} color="green" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="h3" sx={style.text} color="green" fontWeight={600}>
        {position}
      </Typography>
      <Typography variant="h3" sx={style.text} color="gray">
        {number}
      </Typography>
      <Typography variant="h3" sx={style.text} color="gray">
        {role}
      </Typography>
      <IconButton onClick={onclick}>
        <Delete sx={{ fontSize: "4rem" }} />
      </IconButton>
    </Box>
  );
};
