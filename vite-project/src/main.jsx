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

const projects = [
  { title: "Portfólio", description: "Portfólio academico", tech: "React • TailwindCSS • HTML", githubLink: "https://github.com/Diogofranciulli/portfolio-diogo", image: "/assets/portfolio.jpg" },

  { title: "Blean", description: "Global solution do primeiro semestre FIAP", tech: "React • TailwindCSS • HTML • Node • Python • C++ • Arduino ", githubLink: "https://github.com/ryanbritodev/blean", image: "/assets/blean.jpg" },

  { title: "E-Way", description: "Sprint Tech Mahindra", tech: "React • TailwindCSS • HTML • Node • Python", githubLink: "https://github.com/ulipese/eway", image: "/assets/eway.jpg" },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path: "/projetos", element: <Projetos projects={projects}/>},
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
