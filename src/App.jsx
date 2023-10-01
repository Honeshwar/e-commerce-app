import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, CategoryProducts, Product } from "./pages";
import "./App.scss";
import useFetch from "./hooks/useFetch";

const Layout = () => {
  const { data,error,loading } = useFetch("/categories");
  return (
    <>
      <Navbar categories={data} error={error} loading={loading} />
      <Outlet />
      <Footer categories={data} error={error} loading={loading}/>
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
