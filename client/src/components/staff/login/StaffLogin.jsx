import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { useDispatch } from "react-redux";

import {
  AlqalamHeader,
  HeadingTertiary,
  MyBackArrow,
  FormButton,
} from "../../globalCompanents/Global";
import { MyInput } from "../../globalCompanents/MyInput";
import { StaffAction } from "../../../store/staffSlice";

export const StaffLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post(`${API}/staff/login`, {
      email,
      password,
    })
      .then((data) => {
        localStorage.setItem("staff", JSON.stringify(data.data));
        dispatch(StaffAction.login(data.data));
        const role = data.data.role;
        navigate(role === "staff" ? "/staffHome" : "/admin");
        setLoading(false);
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setError(message);
      });
  };

  const formStyle = {
    margin: "5rem auto",
    width: "50%",
    background: "white",
    border: "1px solid green",
    padding: "3rem",
    borderRadius: "10px",
  };
  return (
    <Box>
      <MyBackArrow link={"/"} />
      <AlqalamHeader />
      <HeadingTertiary text={"Staff login"} />
      <form style={formStyle} onSubmit={handleLogin}>
        <MyInput
          type="text"
          text="Staff ID"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          type="password"
          text="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton text={loading ? "loading..." : "Login"} />
        {error && (
          <Typography
            fontSize={"2rem"}
            color={"brown"}
            textAlign="center"
            fontStyle={"italic"}
          >
            wrong username or password
          </Typography>
        )}
      </form>
    </Box>
  );
};
