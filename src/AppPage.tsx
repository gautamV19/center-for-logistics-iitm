import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./components/Mobile/Header";

// Define a type for the component's props
interface AppPageProps {
  children: ReactNode;
}

const AppPage: React.FC<AppPageProps> = (props) => {
  const matches = useMediaQuery("(max-width:1300px)");

  return (
    <>
      {matches ? <MobileHeader /> : <Header />}
      {props.children}
      <Footer />
    </>
  );
};

export default AppPage;
