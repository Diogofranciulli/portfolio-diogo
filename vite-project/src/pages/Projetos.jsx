function Projetos() {
    const projects = [
      { title: "Portfólio", description: "Portfólio academico", tech: "React • TailwindCSS • HTML", githubLink: "https://github.com/Diogofranciulli/portfolio-diogo", image: "https://via.placeholder.com/150" },

      { title: "Blean", description: "Global solution do primeiro semestre FIAP", tech: "React • TailwindCSS • HTML • Node • Python • C++ • Arduino ", githubLink: "https://github.com/ryanbritodev/blean", image: "https://via.placeholder.com/150" },

      { title: "E-Way", description: "Sprint Tech Mahindra", tech: "React • TailwindCSS • HTML • Node • Python", githubLink: "https://github.com/ulipese/eway", image: "https://via.placeholder.com/150" },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <h1 className="text-4xl font-bold text-blue-500 mb-36 ">Meus projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-blue-500">{project.title}</h2>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <p className="text-blue-500 mt-4">{project.tech}</p>
                <a href={project.githubLink} className="block mt-4 text-blue-500 underline">
                  Veja no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projetos;