import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
