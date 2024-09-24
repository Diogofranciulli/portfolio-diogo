function Home() {
    return (
      <div className="flex flex-col h-full min-h-screen p-8 bg-gray-50">
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:space-x-12">
          <div className="flex flex-col gap-16">
            <img
              className="rounded-full w-52 h-52 mb-5 mx-0 border-4 border-blue-500"
              src='/assets/foto_de_perfil.jpg'
              alt="Foto de perfil"
            />
            <h1 className="text-3xl font-bold text-blue-500 mb-2">Diogo Leles Fanciulli</h1>
            <p className="text-blue-500 mb-1">
              <a href="https://www.fiap.com.br" className="underline text-3xl">FIAP</a> 
              <span className='text-black font-bold text-3xl'> - Engenharia de Software</span>
            </p>
            <p className="text-blue-500 mb-1">
              <a href="https://www.itau.com.br" className="underline text-3xl">Itaú</a> 
              <span className='text-black font-bold text-3xl'> - Jovem Aprendiz na área de dados e analytics</span>
            </p>
          </div>
  
          <div className="md:w-2/3 flex flex-col gap-16 mt-10 ml-12">
            <div className=''>
              <h2 className="text-5xl font-bold text-blue-500 mb-4">Um pouco sobre mim</h2>
              <p className="max-w-lg text-3xl text-gray-700">
                Meu nome é Diogo Leles Franciulli, tenho 18 anos, estou cursando Engenharia de Software na FIAP e trabalho como Jovem Aprendiz no Itaú!
              </p>
            </div>
  
            <div>
              <h2 className="text-5xl font-bold text-blue-500 mb-4">Minhas Habilidades</h2>
              <ul className="list-disc text-3xl text-left mt-4 max-w-lg text-gray-700">
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
        </div>
      </div>
    );
  }

export default Home