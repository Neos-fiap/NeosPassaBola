export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">Neos Pass</div>

          {/* Search */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Menu (simples sem libs) */}
          <div className="flex items-center space-x-5 text-lg">
            <button className="hover:text-blue-500">🏠</button>
            <button className="hover:text-blue-500">Login</button>
            <button className="hover:text-blue-500">👤</button>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="pt-20 max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold">Maria Alencar</p>
              <p className="text-xs text-gray-500">2h atrás</p>
            </div>
          </div>
          <p className="mt-3 text-gray-800">
            Marcando o gol da vitoria da copa escolinhas 🚀
          </p>
          <div className="mt-3 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/600/300"
              alt="Post"
              className="w-full"
            />
          </div>
          <div className="flex justify-between mt-3 text-xl">
            <button>❤️</button>
            <button>💬</button>
            <button>🔗</button>
          </div>
        </div>
      </main>
    </div>
  );
}
