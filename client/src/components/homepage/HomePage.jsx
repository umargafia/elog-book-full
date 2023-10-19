import { Box } from "@mui/material";
import { Footer } from "../globalCompanents/Footer";
import { Header } from "./Header";
import { Login } from "./Login";

export const HomePage = () => {
  return (
    <Box>
      <Header />
      <Login />
      <Footer />
    </Box>
  );
};
