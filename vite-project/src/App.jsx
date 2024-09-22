import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import fotoDePerfil from './assets/foto_de_perfil.jpg';
import githubIcon from './assets/iconmonstr-github-3.svg';
import linkedinIcon from './assets/iconmonstr-linkedin-3.svg';

function Nav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-around p-4 bg-white shadow-lg">
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
          isActive('/projetos') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-black'
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
    <footer className="mt-auto py-4 bg-white text-center">
      <p>Copyright © 2024</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <img
          className="rounded-full w-32 h-32 mx-auto mb-4 border border-gray-300 shadow-lg"
          src={fotoDePerfil}
          alt="Foto de perfil"
        />
        <h1 className="text-2xl font-bold text-blue-500 mb-2">Diogo Leles Fanciulli</h1>
        <p className="text-blue-500 mb-1">
          <a href="https://www.fiap.com.br" className="underline">FIAP</a> 
          <span className='text-black font-bold'> - Engenharia de Software</span>
        </p>
        <p className="text-blue-500 mb-1">
          <a href="https://www.itau.com.br" className="underline">Itaú</a> 
          <span className='text-black font-bold'> - Jovem Aprendiz em Sistemas</span>
        </p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-blue-500 mb-4">Um pouco sobre mim</h2>
        <p className="max-w-lg mx-auto text-gray-700">
          Meu nome é Diogo Leles Franciulli, tenho 18 anos, estou cursando Engenharia de Software na FIAP e trabalho como Jovem Aprendiz no Itaú!
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-500 mb-4">Minhas Habilidades</h2>
        <ul className="list-disc text-left mt-4 max-w-lg mx-auto text-gray-700">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Figma</li>
          <li>Python</li>
          <li>Git</li>
          <li>Github</li>
          <li>Gitlab</li>
          <li>Terraform</li>
          <li>AWS</li>
          <li>Arduino</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
