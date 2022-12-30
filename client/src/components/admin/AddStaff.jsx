import {
  Box,
  Card,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { Footer } from "../globalCompanents/Footer";
import {
  HeadingTertiary,
  MyCardStyle,
  RoundedBox,
  FormButton,
} from "../globalCompanents/Global";
import { MyAppBar } from "../globalCompanents/MyAppBar";
import { MyInput } from "../globalCompanents/MyInput";

export const AddStaff = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: name,
      email: email,
      password: password,
      phoneNumber: number,
      position: position,
      role: role,
    };

    Axios.post(`${API}/staff/register`, data)
      .then(() => {
        setLoading(false);
        navigate("/admin");
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
  return (
    <div>
      <MyAppBar
        active={"admin"}
        admin="Add Staff"
        navigateToProfile={() => navigate("/adminProfile")}
        navigateToHome={() => navigate("/admin")}
      />
      <Card sx={MyCardStyle}>
        <form style={RoundedBox} onSubmit={handleSubmit}>
          <HeadingTertiary text={"Add Staff"} />
          <MyInput
            text={"Staff Name"}
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <MyInput
            text={"Staff Email"}
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MyInput
            text={"password"}
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <MyInput
            text={"Phone number"}
            type="text"
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <MyInput
            text={"Staff position"}
            required
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
          <MyInput
            text={"Account Type"}
            required
            label="admin or staff"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />

          <FormButton text={loading ? "loading..." : "Create staff"} />
          {error && (
            <Typography variant="h3" textAlign={"center"} color="red">
              {error}
            </Typography>
          )}
        </form>
      </Card>
      <Footer />
    </div>
  );
};
