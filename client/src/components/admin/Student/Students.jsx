import { Alert } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { Names } from "./Names";

export const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    Axios.get(`${API}/students`).then((res) => {
      setStudents(res.data);
      });
  };

  const handleDelete = (id) => {
    Axios.delete(`${API}/students/delete/${id}`).then(() => getStudents());
  };

  return students.map((cur) => {
    return (
      <Names
        name={cur.name}
        RegNumber={cur.regNo}
        key={cur._id}
        onclick={() => handleDelete(cur._id)}
      />
    );
  });
};
