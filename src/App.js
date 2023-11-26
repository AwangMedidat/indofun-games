import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/index";
import Register from "./pages/register/index";
import Login from "./pages/login/index";
import LandingPage from "./pages/landingpage/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
