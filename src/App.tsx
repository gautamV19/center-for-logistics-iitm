import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Internships from "./pages/Internships";
import People from "./pages/People";
import Vision from "./pages/Vision";
import Error from "./pages/Error";
import Events from "./pages/Events";
import AppPage from "./AppPage";

import { Grid } from "@material-ui/core";

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
    path: "/vision",
    element: <AppPage children={<Vision />} />,
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
  return (
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
