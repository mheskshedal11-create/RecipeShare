import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
import axios from "axios";

const getAllRecipes = async () => {
  const res = await axios.get("http://localhost:5000/api/recipes");
  return res.data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getAllRecipes,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
