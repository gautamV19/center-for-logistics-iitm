import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./components/MobileHeader";
import MoblieFooter from "./components/MobileFooter";

// Define a type for the component's props
interface AppPageProps {
  children: ReactNode;
}

const AppPage: React.FC<AppPageProps> = (props) => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <>
      {matches ? <MobileHeader /> : <Header />}
      {props.children}
      {matches ? <MoblieFooter /> : <Footer />}
    </>
  );
};

export default AppPage;
