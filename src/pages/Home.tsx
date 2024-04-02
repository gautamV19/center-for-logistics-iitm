import React from "react";
import Landing from "../components/Landing";
import Vision from "../components/Vision";
import VisionSecond from "../components/VisionSecond";
import About from "../components/About";

const Home: React.FC = () => {
  return (
    <>
      <Landing />
      <Vision />
      <VisionSecond />
      <About />
    </>
  );
};

export default Home;
