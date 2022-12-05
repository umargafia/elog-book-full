import { Cancel } from "@mui/icons-material";
import {
  Button,
  Card,
  Icon,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentAction } from "../../store/studentSlice";

export const Model = ({ children }) => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.student.isOpen);

  const handleClick = () => {
    dispatch(StudentAction.model());
  };

  const style = {
    container: {
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    childrenStyle: {
      background: "white",
      minWidth: "50rem",
      position: "relative",
      padding: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  };
  return (
    <Modal open={open} sx={style.container}>
      <Card sx={style.childrenStyle}>
        <IconButton
          onClick={handleClick}
          sx={{
            position: "absolute",
            top: "0rem",
            right: "0rem",
          }}
        >
          <Cancel sx={{ fontSize: "3rem" }} />
        </IconButton>
        {children}
      </Card>
    </Modal>
  );
};
