import { Box, Typography } from "@mui/material";
import React from "react";
import {
  HeadingTertiary,
  RoundedBox,
  Shadow2,
} from "../../globalCompanents/Global";

export const Day = ({ day }) => {
  const style = {
    textArea: {
      background: "rgba(221, 229, 226, 0.866)",
      minHeight: "5rem",
      marginTop: "4rem",
      boxShadow: Shadow2,
      fontsize: "5rem",
      fontWeight: "600",
      padding: "2rem",
      borderRadius: ".5rem",
    },
  };

  return (
    <Box sx={RoundedBox}>
      <HeadingTertiary text={day} />
      <Typography variant="h4" textAlign={"center"} lineHeight={".2rem"}>
        Date
      </Typography>
      <Typography sx={style.textArea} variant="h5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        nostrum, eveniet quod veritatis officiis exercitationem quisquam
        accusantium minima voluptate velit harum pariatur sint corporis, a atque
        quae expedita magni debitis.
      </Typography>
    </Box>
  );
};
