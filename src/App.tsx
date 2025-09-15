// React hooks for managing side effects and component state
import { useEffect, useRef } from "react";

// React Router for managing routing in the application
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// React hook for getting information about the current location
import { useLocation } from "react-router";

// Components used in the application
import { Footer, Navbar } from "./components";

// Pages used in the application
import { Home, CategoryProducts, Product } from "./pages";

// Custom hook for fetching data from an API
import useFetch from "./hooks/useFetch";

// Toast notifications for displaying messages to the user
import { ToastContainer } from "react-toastify";

// CSS styles for the toast notifications
import "react-toastify/dist/ReactToastify.css";

// Type definitions for the useFetch hook
import type { Categories } from "./hooks/types/useFetch.types";

// layout of our application
const Layout = () => {
  const { data, error, loading } = useFetch<Categories[]>("/categories");
  // for scroll to top when navigate to another page/component or reset previous scroll
  const location = useLocation();
  const prevLocation = useRef<string>(""); //initially .current = undefined

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
