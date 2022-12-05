import { Card, Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import {
  FormButton,
  HeadingTertiary,
  MyCard,
  MyCardStyle,
  RoundedBox,
} from "../../globalCompanents/Global";
import { Model } from "../../globalCompanents/Model";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { MyInput } from "../../globalCompanents/MyInput";
export const StudentProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [regNo, setRegNo] = useState(user.regNo || "");
  const [number, setNumber] = useState(user.number || "");
  const [department, setDepartment] = useState(user.department || "");
  const [course, setCourse] = useState(user.course || "");
  const [company, setCompany] = useState(user.company || "");
  const [location, setLocation] = useState(user.location || "");
  const [superVisor, setSuperVisor] = useState(user.superVisor) || "";
  const [state, setState] = useState(user.state);

  const navigateToHome = () => {
    navigate("/studentHome");
  };

  const updateUser = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.patch(`${API}/students/update/${user._id}`, {
      name,
      email,
      regNo,
      number,
      department,
      course,
      company,
      location,
      superVisor,
      state,
    })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <Box>
      <MyAppBar
        active={"profile"}
        navigateToHome={navigateToHome}
        text={user.name}
      />
      <Card sx={MyCardStyle}>
        <form onSubmit={updateUser}>
          <Box sx={RoundedBox}>
            <HeadingTertiary text={"Student's particulars"} />
            <MyInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              text="Student Name"
              required
            />
            <MyInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              text="email"
              required
            />
            <MyInput
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              type="text"
              text="Registration number"
              required
            />
            <MyInput
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              text="phone number"
              required
            />
            <MyInput
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              type="text"
              text="Department"
              required
            />
            <MyInput
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              type="text"
              text="Course of study"
              required
            />
          </Box>
          <Box sx={RoundedBox}>
            <HeadingTertiary text={"Organization profile"} />
            <MyInput
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              text="name Of company"
            />
            <MyInput
              value={superVisor}
              onChange={(e) => setSuperVisor(e.target.value)}
              type="text"
              text="Name of industry based supervisor"
            />
            <MyInput
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              text="state"
            />
            <MyInput
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              text="Address Of company"
            />
          </Box>
          <FormButton text={loading ? "loading..." : "update"} />
        </form>
      </Card>
    </Box>
  );
};
