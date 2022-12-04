import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { HeadingTertiary, RoundedBox } from "../../globalCompanents/Global";

export const Day = ({ day }) => {
  return (
    <Box sx={RoundedBox}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:not(:last-child)": {
            marginRight: "3rem",
          },
        }}
      >
        <HeadingTertiary text={day} />
        <TextField type="date" variant="filled" />
      </Box>
      <TextField multiline fullWidth maxRows={6} minRows={6} variant="filled" />
    </Box>
  );
};
