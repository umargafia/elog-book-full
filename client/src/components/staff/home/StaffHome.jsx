import { Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  HeadingTertiary,
  MyCardStyle,
  RoundedBox,
} from "../../globalCompanents/Global";
import { MyAppBar } from "../../globalCompanents/MyAppBar";
import { Names } from "./Names";

export const StaffHome = () => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/staffProfile");
  };
  return (
    <Box>
      <MyAppBar
        active={"home"}
        text={"Staff Dashboard"}
        navigateToProfile={navigateToProfile}
      />
      <Card sx={MyCardStyle}>
        <Box sx={RoundedBox}>
          <HeadingTertiary text={"Students"} />
          <Names
            name="umar musa"
            RegNumber={"Nas/ste/19/1104"}
            onclick={() => navigate("/staff/studentWeeks")}
          />
          <Names name="musa isa" RegNumber={"Nas/ste/19/1000"} />
          <Names name="kabir mustapha" RegNumber={"Nas/ste/19/2007"} />
        </Box>
      </Card>
    </Box>
  );
};
