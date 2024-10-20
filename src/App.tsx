import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './componnent/layout/Layout'
import Product from './componnent/Products/Products'
import NotFound from './componnent/NotFound/NotFound'


export default function App() {
  const routers=createBrowserRouter([
    {path:"",element:<Layout/> , children:[
      {index:true,element:<Product />},
      {path:"products",element:<Product />},
      {path:"*",element:<NotFound />},
    ]},
  
    ])
  return <>
  <RouterProvider router={routers}/>
  </>
}
