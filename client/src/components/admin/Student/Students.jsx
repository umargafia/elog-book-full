import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { Names } from "./Names";

export const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    Axios.get(`${API}/students`).then((res) => {
      setStudents(res.data);
      console.log(res.data);
    });
  }, []);

  const handleDelete = (id)=>{

  }

  return students.map((cur) => {
    return (
      <Names name={cur.name} RegNumber={cur.number} key={cur._id} onclick={()=>handleDelete(cur._id)} />
    );
  });
};
