export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-600">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-purple-400 shadow-sm z-50">
        <div className="max-w-full mx-auto px-4 py-2 flex items-center justify-between bg-gray-600">
          {/* Logo */}
          <div className=" font-sans text-2xl font-bold text-purple-400">NeosPass</div>

          {/* Search */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              type="text"
              placeholder="Pesquisar..."
              className=" font-sans w-full bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Menu (simples sem libs) */}
          <div className="flex items-center space-x-5 text-lg ">
            <button className="font-sans font-bold text-purple-400 hover:text-blue-500">Conecte-se</button>
            <button className="hover:text-blue-500 "></button>
              <img src="src/assets/imagem_icone_semfundo_add.png" className="h-9 w-9" alt="foto icone" />
            <button className="hover:text-blue-500 "></button>
               <img src="src/assets/icone_notificacao.png" className="h-9 w-9" alt="foto icone" />
            
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="pt-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow p-4 mb-6 bg-gray-300">
          <div className="flex items-center space-x-3">
            <img src="src/assets/profi_gol_perna.png" className="w-10 h-10 rounded-full background" alt="fotojogadora" />
            <div>
              <p className="font-sans font-semibold">Maria Alencar</p>
              <p className="font-sans text-xs text-gray-500">30min atrás</p>
            </div>
          </div>
          <p className=" font-sans mt-3 text-gray-800">
            Grande vitória na semi-final da copa escolinhas, rumo a final! 🚀 #Gol #Final #VitoriaNaCopaEscolhinhas
          </p>
          <div className="mt-3 rounded-lg overflow-hidden">
            <img
              src="src/assets/garinhas_vitoria.png"
              alt="Post"
              className="w-full"
            />
          </div>
          <div className="flex justify-between mt-3 text-xl">
            <button>💜</button>
            <input type="text" placeholder="Comentar..." className="flex-1 mx-2 px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 " />
            <button>🔗</button>
          </div>
        </div>
      </main>
    <main className="pt-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <div className="flex items-center space-x-3">
            <img src="src/assets/profi_gol_perna.png" className="w-10 h-10 rounded-full background" alt="fotojogadora" />
            <div>
              <p className=" font-sans font-semibold">Maria Alencar</p>
              <p className="font-sans text-xs text-gray-500">2h atrás</p>
            </div>
          </div>
          <p className="font-sans mt-3 text-gray-800">
            Marcando o gol da vitoria da copa escolinhas 🚀 #Gol #RumoAFinal #GolNaSemi
          </p>
          <div className="mt-3 rounded-lg overflow-hidden h-240">
            <img
              src="src/assets/garotinha_gol_falta.png"
              alt="Post"
              className="w-full"
            />
          </div>
          <div className="flex justify-between mt-3 text-xl">
            <button>💜</button>
            <input type="text" placeholder="Comentar..." className="flex-1 mx-2 px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 " />
            <button>🔗</button>
          </div>
        </div>
      </main>
    </div>
  );
}
