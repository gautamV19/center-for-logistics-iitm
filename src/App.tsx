import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

import Home from "./pages/Home";
import About from "./pages/About";
import Internships from "./pages/Internships";
import People from "./pages/People";
import Error from "./pages/Error";
import Events from "./pages/Events";
import AppPage from "./AppPage";

import MobileHome from "./pages/MobileHome";
import MobileAbout from "./pages/MobileAbout";
import MobileInternships from "./pages/MobileInternships";
import MobilePeople from "./pages/MobilePeople";
import MobileError from "./pages/MobileError";
import MobileEvents from "./pages/MobileEvents";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppPage children={<Home />} />,
    },
    {
      path: "/about",
      element: <AppPage children={<About />} />,
    },
    {
      path: "/internships",
      element: <AppPage children={<Internships />} />,
    },
    {
      path: "/people",
      element: <AppPage children={<People />} />,
    },
    {
      path: "/events",
      element: <AppPage children={<Events />} />,
    },
    {
      path: "*",
      element: <AppPage children={<Error />} />,
    },
  ],
  { basename: "/logistics" }
);

const mobileRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppPage children={<MobileHome />} />,
    },
    {
      path: "/about",
      element: <AppPage children={<MobileAbout />} />,
    },
    {
      path: "/internships",
      element: <AppPage children={<MobileInternships />} />,
    },
    {
      path: "/people",
      element: <AppPage children={<MobilePeople />} />,
    },
    {
      path: "/events",
      element: <AppPage children={<MobileEvents />} />,
    },
    {
      path: "*",
      element: <AppPage children={<MobileError />} />,
    },
  ],
  { basename: "/logistics" }
);

function App() {
  const matches = useMediaQuery("(max-width:1300px)");

  return matches ? (
    <RouterProvider router={mobileRouter} />
  ) : (
    <div
      style={{
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
