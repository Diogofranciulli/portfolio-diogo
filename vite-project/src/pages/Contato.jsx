function Contato() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const message = e.target.message.value;
      console.log(`Email: ${email}, Message: ${message}`);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold text-blue-500 mb-8">Me mande uma mensagem</h1>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contato;