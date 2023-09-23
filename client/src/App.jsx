import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, ProductDetails, Products } from './pages';



const Layout = () => { 
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            errorElement:<h1>Error</h1>,
            children:[
                //throught outlet comp in react-router-dom can use this child pass route element 
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/product/:id',
                    element:<ProductDetails/>
                },
                {
                    path:'/products/:id',
                    element:<Products/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App