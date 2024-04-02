import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Define a type for the component's props
interface AppPageProps {
  children: ReactNode;
}

const AppPage: React.FC<AppPageProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default AppPage;
