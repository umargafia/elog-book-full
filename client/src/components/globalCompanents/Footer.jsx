import { Box, Typography } from "@mui/material";

export const Footer = () => {
  const style = {
    footer: {
      height: "10rem",
      backgroundColor: "gray",
      position: "relative",
    },
  };
  return (
    <Box sx={style.footer}>
      <Typography
        textTransform={"uppercase"}
        color="white"
        variant="h4"
        sx={{
          position: "absolute",
          bottom: "1rem",
          left: "45%",
        }}
        className={style.text}
      >
        copy right
      </Typography>
    </Box>
  );
};
