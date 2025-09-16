import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Add your authentication logic here
    navigate('/'); // Redireciona para a homepage
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 border-b border-purple-500 shadow-lg z-50">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-3xl font-extrabold text-purple-400 tracking-tight">NeosPass</span>
        </div>
      </nav>

      {/* Login Card */}
      <main className="flex-1 flex items-center justify-center pt-24 pb-10">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-purple-300 mb-8">Entrar na NeosPass</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition duration-200 font-bold"
            >
              Entrar
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-300">
              Não tem uma conta?{' '}
              <Link to="#" className="text-purple-400 hover:text-purple-300 font-medium">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-center py-6 mt-10 text-gray-300 border-t border-purple-500">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© 2025 NeosPassaBola. Todos os direitos reservados.</span>
          <span className="text-xs text-purple-400">Futebol feminino é futuro!</span>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;