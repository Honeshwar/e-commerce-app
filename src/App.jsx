import React, { useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import { Footer, Navbar } from "./components";
import { Home, CategoryProducts, Product } from "./pages";
import "./App.scss";
import useFetch from "./hooks/useFetch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// layout of our application
const Layout = () => {
  const { data, error, loading } = useFetch("/categories");
  // for scroll to top when navigate to another page/component or reset previous scroll
  const location = useLocation();
  const prevLocation = useRef();//initially .current = undefined


  useEffect(() => {
    // Check if the location has changed
    if (prevLocation.current !== location.pathname) {
      // Save the current location to the ref
      prevLocation.current = location.pathname;

      // Scroll to the top or any specific position as needed
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar categories={data} error={error} loading={loading} />
      <Outlet />
      <Footer categories={data} error={error} loading={loading} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

// app component of our application
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
