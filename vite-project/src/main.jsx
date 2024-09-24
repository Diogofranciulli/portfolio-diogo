import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Contato from './pages/Contato.jsx'
import Projetos from './pages/Projetos.jsx'
import Home from './pages/Home.jsx'
import Error404 from './pages/Error404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path: "/projetos", element: <Projetos/>},
      {path: "/contato", element: <Contato/>},
      {path: "/Error404", element: <Error404/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
