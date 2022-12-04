import { Typography } from "@mui/material";
import Axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { StudentAction } from "../../../store/studentSlice";
import {
  FormButton,
  FormStyle,
  HeadingSecondary,
} from "../../globalCompanents/Global";
import { MyInput } from "../../globalCompanents/MyInput";

export const SignUp = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [company, setCompany] = useState("");

  //signup student
  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      password,
      name,
      regNo: regNumber,
      number,
      department,
      course,
      company,
    };

    Axios.post(`${API}/students/register`, data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(StudentAction.login());
        setLoading(false);
        navigate("/studentHome");
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
    <form style={FormStyle} onSubmit={handleSignup}>
      <HeadingSecondary
        text="Create an Account"
        style={{ marginBottom: "2rem", textTransform: "unset" }}
      />
      {error && (
        <Typography variant="h3" textAlign={"center"} color="red">
          {error}
        </Typography>
      )}
      <MyInput
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type={"email"}
        text="Email"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type={"password"}
        text="create password"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setName(e.target.value);
        }}
        type={"text"}
        text="student Name"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setRegNumber(e.target.value);
        }}
        type={"text"}
        text="registration number"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        type={"text"}
        text="Phone number"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setDepartment(e.target.value);
        }}
        type={"text"}
        text="department"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setCourse(e.target.value);
        }}
        type={"text"}
        text="course of study"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        type={"text"}
        text="name of company attached"
        required={true}
      />
      <FormButton
        text={loading ? "loading..." : "Create Account"}
        onClick={handleSignup}
      />
    </form>
  );
};
