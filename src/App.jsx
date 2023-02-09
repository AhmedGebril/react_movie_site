import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Parent from './components/Parent/Parent'
import About from './components/About/About'
import Home from './components/Home/Home'
import Shows from './components/front/Shows'
import Movies from './components/back/Movies'

export default function App() {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Parent/>,
      children:[
        {index:true,element:<Home/>},
        {path:'/about',element:<About/>,children:[
          {path:'Shows',element:<Shows/>},
          {index:true,element:<Movies/>}
        ]},
      ]
    }
  ])
  return (
    <RouterProvider router={router} />                     
  )
}

