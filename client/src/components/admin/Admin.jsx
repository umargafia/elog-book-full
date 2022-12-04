import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MyAppBar } from "../globalCompanents/MyAppBar";
import AdminTabs from "./AdminTabs";
import { Staffs } from "./Staff/Staffs";
import { Students } from "./Student/Students";

export const Admin = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("staff"));
    setUser(user.name);
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <MyAppBar
        text={user}
        active={"home"}
        navigateToProfile={() => navigate("/adminProfile")}
        navigateToAdmin={() => navigate("/addStaff")}
        admin="Add Staff"
      />
      <AdminTabs header={"Student"} body1={<Students />} body2={<Staffs />} />
    </div>
  );
};
