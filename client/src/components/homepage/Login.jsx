import { Person } from "@mui/icons-material";
import { Box, Card, IconButton, Paper, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Link, Navigate, useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  main: {
    minHeight: "83vh",
    padding: " 2rem 3rem",
    backgroundColor: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  card: {
    minHeight: "30rem",
    width: "70%",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "rgba(0, 179 , 0 ,1)",
    "&:hover": {
      backgroundColor: "rgba(0, 179 , 0 ,1)",
    },
  },
  left: {
    flex: 1,
  },
  side: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    transform: "skew(-15deg)",
    cursor: "pointer",
    transition: "all 1s ease",
    textDecoration: "none",
    " & > *": {
      transform: "skew(15deg)",
    },
    "&:hover": {
      backgroundColor: "rgba(0, 179 , 0 ,1)",
      "& >*": {
        color: "white",
      },
    },
  },
  right: {
    flex: 1,
    borderLeft: "2px solid  rgb(0, 179 ,0)",
  },
  text: {
    color: "rgb(0, 179 ,0)",
    textTransform: "uppercase",
    display: "flex",
    alignItems:
      "center                                                                                                                                                                                                                                                                                                                                                                        ",
  },
}));

export const Login = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  return (
    <Box id="login" className={classes.main}>
      <Typography variant="h1" color={"rgb(0, 179 ,0)"}>
        Login as
      </Typography>
      <Card className={classes.card}>
        <Box
          className={`${classes.left} ${classes.side}`}
          onClick={() => navigate("/student")}
        >
          <Typography className={classes.text} variant="h1">
            <Person
              sx={{
                fontSize: "7rem",
              }}
            />
            Student
          </Typography>
        </Box>
        <Box
          className={`${classes.right} ${classes.side}`}
          onClick={() => navigate("/staff")}
        >
          <Typography className={classes.text} variant="h1">
            <Person
              sx={{
                fontSize: "7rem",
              }}
            />
            Staff
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
