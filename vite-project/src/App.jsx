import { Link, Outlet, useLocation } from 'react-router-dom';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Nav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex w-full text-4xl font-bold justify-end p-4 bg-white shadow-lg space-x-8">
      <Link
        to="/"
        className={`${
          isActive('/') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-black'
        }`}
      >
        Sobre mim
      </Link>
      <Link
        to="/projetos"
        className={`${
          isActive('/projetos') ? ' text-blue-500 border-b-2 border-blue-500' : 'text-black'
        }`}
      >
        Projetos
      </Link>
      <Link
        to="/contato"
        className={`${
          isActive('/contato') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-black'
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
      <p>copyright © 2024</p>
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
