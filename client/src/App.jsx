import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<span>Home</span>
        },
        {
            path:'/product/:id',
            element:<span>Product deatils</span>
        },
        {
            path:'/products/:id',
            element:<span>products</span>
        }
    ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App