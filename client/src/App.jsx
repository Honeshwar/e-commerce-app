import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, CategoryProducts, Product } from "./pages";
import "./App.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <h1>Error</h1>,
      children: [
        //throught outlet comp in react-router-dom can use this child pass route element
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/category-products/:id",
          element: <CategoryProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
