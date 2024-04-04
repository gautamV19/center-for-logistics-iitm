import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box, CssBaseline, Typography, useMediaQuery } from "@mui/material";

import Home from "./pages/Home";
import About from "./pages/About";
import Internships from "./pages/Internships";
import People from "./pages/People";
import Error from "./pages/Error";
import Events from "./pages/Events";
import AppPage from "./AppPage";

const router = createBrowserRouter([
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
]);

function App() {
  const matches = useMediaQuery("(max-width:1080px)");

  return (
    <>
      <CssBaseline />
      {matches ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Box
            border="1.5px solid black"
            width="90%"
            p={2}
            bgcolor="background.paper"
            boxShadow={3}
            borderRadius={2}
          >
            <Typography variant="h5" color="textPrimary" textAlign="center">
              Currently this website is only supported on desktop. Try accessing
              it from a desktop.
            </Typography>
          </Box>
        </Box>
      ) : (
        <div
          style={{
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
