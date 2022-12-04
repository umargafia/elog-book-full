import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Alqalam_university_Logo-removebg-preview.png";

export const Shadow = "1rem 1rem 2rem rgba(0, 0, 0, 0.496)";
export const Shadow2 = "1rem .5rem 1rem rgba(0, 0, 0, 0.496)";

export const HeadingPrimary = ({ text }) => {
  return (
    <Typography
      variant="h1"
      textAlign="center"
      color="brown"
      marginTop="-4rem"
      textTransform="uppercase"
    >
      {text}
    </Typography>
  );
};

export const HeadingSecondary = ({ text, style }) => {
  return (
    <Typography
      variant="h3"
      textAlign="center"
      color="brown"
      textTransform="uppercase"
      fontSize={"4rem"}
      style={style}
    >
      {text}
    </Typography>
  );
};

export const AlqalamHeader = () => {
  const styles = {
    imgSection: {
      width: "15rem",
      margin: "5rem auto",
    },
    img: {
      width: "100%",
    },
  };
  return (
    <>
      <Box style={styles.imgSection}>
        <img src={logo} alt="al-qalam logo" style={styles.img} />
      </Box>
      <HeadingSecondary text="Al-qalam university katsina " />
    </>
  );
};

export const FormStyle = {
  width: "100%",
  margin: "0 auto",
  paddingTop: "3rem",
};

export const FormButton = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      sx={{
        height: "3.5rem",
        fontSize: "2.5rem",
        padding: "3rem",
        background: "green",
        "&:hover": {
          background: "DarkGreen",
        },
      }}
      type="submit"
    >
      {text}
    </Button>
  );
};

export const HeadingTertiary = ({ text }) => {
  return (
    <Typography
      variant="h4"
      color="green"
      fontSize="3.6rem"
      textAlign={"center"}
      textTransform="capitalize"
      margin={"1rem"}
    >
      {text}
    </Typography>
  );
};

export const MyBackArrow = ({ link }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <IconButton
        onClick={() => navigate(link)}
        aria-label="next"
        href="#login"
        sx={{
          position: "fixed",
          top: "2rem",
          left: "2rem",
        }}
      >
        <ArrowBack style={{ fontSize: "5rem" }} />
      </IconButton>
    </Box>
  );
};

export const RoundedBox = {
  border: "1px solid gray",
  padding: "2rem ",
  margin: "3rem 0",
};

export const MyCardStyle = {
  margin: "15rem 3rem 0 3rem",
  padding: "3rem",
  borderRadius: "1rem",
};

export const MyInfo = ({ text, value }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h3"
        margin={"2.5rem"}
        color="gray"
        textTransform={"capitalize"}
      >
        {text}:
      </Typography>
      <Typography variant="h2" color="green" textTransform={"capitalize"}>
        {value}
      </Typography>
    </Box>
  );
};

export const StaffArrowBack = ({ link, top= "15rem" }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(link)}
      aria-label="next"
      href="#login"
      sx={{
        position: "fixed",
        top: "15rem",
        left: "2rem",
      }}
    >
      <ArrowBack style={{ fontSize: "5rem" }} />
    </IconButton>
  );
};
