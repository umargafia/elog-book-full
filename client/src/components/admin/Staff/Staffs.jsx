import Axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../../../api";
import { StaffsName } from "./Names";

export const Staffs = () => {
  const [Staffs, setStaffs] = useState([]);
  useEffect(() => {
    getStaffs();
  }, []);

  const getStaffs = () => {
    Axios.get(`${API}/staff`).then((res) => {
      setStaffs(res.data);
    });
  };

  const handleDelete = (id) => {
    Axios.delete(`${API}/staff/delete/${id}`).then(() => getStaffs());
  };

  return Staffs.map((staff) => {
    return (
      <StaffsName
        name={staff.name}
        number={staff.phoneNumber}
        position={"vc"}
        role={staff.role}
        key={staff._id}
        onclick={() => {
          handleDelete(staff._id);
        }}
      />
    );
  });
};
