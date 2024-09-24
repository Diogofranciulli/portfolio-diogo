import { Link } from 'react-router-dom';

function Projetos() {
    const projects = [
      { id: 1, title: "Portfólio", description: "Portfólio academico", tech: "React • TailwindCSS • HTML", githubLink: "https://github.com/Diogofranciulli/portfolio-diogo", image: "/assets/portfolio.jpg" },

      { id: 2,title: "Blean", description: "Global solution do primeiro semestre FIAP", tech: "React • TailwindCSS • HTML • Node • Python • C++ • Arduino ", githubLink: "https://github.com/ryanbritodev/blean", image: "/assets/blean.jpg" },

      { id: 3, title: "E-Way", description: "Sprint Tech Mahindra", tech: "React • TailwindCSS • HTML • Node • Python", githubLink: "https://github.com/ulipese/eway", image: "/assets/eway.jpg" },
    ];
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
          <h1 className="text-2xl font-bold text-blue-500 mb-8">Meus projetos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-lg font-bold text-blue-500">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-blue-500">{project.tech}</p>
                <Link to={`/projetos/${project.id}`} className="text-blue-500 underline mt-4 block">
                  Ver detalhes
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Projetos;