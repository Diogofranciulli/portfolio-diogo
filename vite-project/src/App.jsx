import { Link, Outlet, useLocation } from 'react-router-dom';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Nav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex flex-col md:flex-row w-full text-2xl md:text-4xl font-bold justify-end p-4 bg-white shadow-lg space-y-4 md:space-y-0 md:space-x-8">
      <Link
        to="/"
        className={`${
          isActive('/') ? 'text-blue-500 underline' : 'text-black'
        }`}
      >
        Sobre mim
      </Link>
      <Link
        to="/projetos"
        className={`${
          isActive('/projetos') ? 'text-blue-500 underline' : 'text-black'
        }`}
      >
        Projetos
      </Link>
      <Link
        to="/contato"
        className={`${
          isActive('/contato') ? 'text-blue-500 underline' : 'text-black'
        }`}
      >
        Contato
      </Link>
    </nav>
  );
}


function Footer() {
  return (
    <footer className="py-4 mt-auto w-full bg-white text-center flex justify-between items-center px-8">
      <p>Copyright © 2024</p>
      <div className="flex space-x-4">
        <a href="https://github.com/Diogofranciulli" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/diogo-leles-franciulli" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Outlet/>
        <Footer />
      </div>
  );
}

export default App;
