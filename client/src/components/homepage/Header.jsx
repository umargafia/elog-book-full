import { Box, IconButton, Typography } from "@mui/material";
import logo from "../../images/Alqalam_university_Logo-removebg-preview.png";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HeadingPrimary } from "../globalCompanents/Global";

const useStyles = makeStyles({
  imgSection: {
    width: "20rem",
    margin: "5rem auto",
  },
  img: {
    width: "100%",
  },
  pmb: {
    textTransform: "uppercase",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box className={classes.imgSection}>
        <img src={logo} alt="al-qalam logo" className={classes.img} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeadingPrimary text="Al-qalam university katsina " />
        <Typography
          variant="h4"
          textTransform={"uppercase"}
          letterSpacing={".8rem"}
          textAlign="center"
        >
          Dutsin-ma road, P.M.B. katsina state nigeria
        </Typography>
        <Typography
          textTransform={"capitalize"}
          variant="h3"
          marginTop={"4rem"}
          letterSpacing=".1rem"
          color={"brown"}
          fontWeight="500"
        >
          student industrial work experience scheme
        </Typography>
        <Typography textTransform={"uppercase"} variant="h4" fontSize="4rem">
          [siwes]
        </Typography>

        <Typography
          variant="h1"
          color="green"
          marginTop={"4rem"}
          textTransform="uppercase"
          textAlign="center"
        >
          Online training log book
        </Typography>

        <IconButton aria-label="next" href="#login">
          <KeyboardArrowDownIcon style={{ fontSize: "10rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
