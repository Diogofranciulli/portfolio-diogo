import { Link } from 'react-router-dom';

function Projetos({projects}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
          <h1 className="text-2xl font-bold text-blue-500 mb-8">Meus projetos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <img src={project.image} alt={`project image ${index}`} />
                <h2 className="text-lg font-bold text-blue-500">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-blue-500">{project.tech}</p>
                <Link to={`/projetos/${index}`} className="text-blue-500 underline mt-4 block">
                  Ver detalhes
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Projetos;