import { useState } from "react";
import { Link } from "react-router-dom";
import iconeAdd from "../assets/imagem_icone_semfundo_add.png";
import profiGolPerna from "../assets/profi_gol_perna.png";
import garinhasVitoria from "../assets/garinhas_vitoria.png";
import garotinhaGolFalta from "../assets/garotinha_gol_falta.png";
import iconeChat from "../assets/icone_conversa.png";

export default function HomePage() {
  // Estado para os likes de cada post
  const [likes, setLikes] = useState([0, 0]);

  // Função para incrementar likes
  const handleLike = (index) => {
    setLikes((prev) => {
      const updated = [...prev];
      updated[index] += 1;
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 border-b border-purple-500 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-purple-400 tracking-tight">NeosPass</span>
          </div>
          {/* Search */}
          <div className="hidden md:flex flex-1 mx-8">
            <input
              type="text"
              placeholder="Pesquisar jogadoras, clubes, posts..."
              className="w-full bg-gray-900 text-gray-100 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>
          {/* Menu */}
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="font-bold text-purple-400 hover:text-purple-300 transition"
            >
              Conecte-se
            </Link>
            <Link to="/perfil" title="Perfil">
              <img src={iconeAdd} className="h-9 w-9 rounded-full hover:scale-110 transition" alt="Perfil" />
            </Link>
            <Link to="/talk" title="Mensagens">
              <img src={iconeChat} className="h-9 w-9 rounded-full hover:scale-110 transition" alt="Mensagens" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-10 bg-gradient-to-r from-purple-900 via-gray-700 to-gray-800 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-2 drop-shadow-lg">Bem-vindo ao NeosPass</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">A rede social para talentos do futebol feminino!</p>
        <Link
          to="/login"
          className="inline-block bg-purple-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-400 transition"
        >
          Comece agora
        </Link>
      </section>

      {/* Feed */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Post 1 */}
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center gap-4 px-6 py-4">
            <img src={garotinhaGolFalta} className="w-12 h-12 rounded-full border-2 border-purple-400" alt="fotojogadora" />
            <div>
              <p className="font-bold text-purple-300">Maria Alencar</p>
              <p className="text-xs text-gray-400">30min atrás</p>
            </div>
          </div>
          <p className="px-6 pb-2 text-gray-100 text-base">
            Grande vitória na semi-final da copa escolinhas, rumo a final! 🚀 <span className="text-purple-400">#Gol #Final #VitoriaNaCopaEscolhinhas</span>
          </p>
          <img src={garinhasVitoria} alt="Post" className="w-full h-150 object-cover" />
          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-700">
            <button
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              onClick={() => handleLike(0)}
            >
              💜 <span className="text-base font-bold">{likes[0]}</span>
            </button>
            <input type="text" placeholder="Comentar..." className="flex-1 mx-4 px-4 py-2 rounded-full border border-gray-600 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <button className="text-purple-400 hover:text-purple-300 text-xl">🔗</button>
          </div>
        </div>
        {/* Post 2 */}
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center gap-4 px-6 py-4">
            <img src={garotinhaGolFalta} className="w-12 h-12 rounded-full border-2 border-purple-400" alt="fotojogadora" />
            <div>
              <p className="font-bold text-purple-300">Maria Alencar</p>
              <p className="text-xs text-gray-400">2h atrás</p>
            </div>
          </div>
          <p className="px-6 pb-2 text-gray-100 text-base">
            Marcando o gol da vitória da copa escolinhas 🚀 <span className="text-purple-400">#Gol #RumoAFinal #GolNaSemi</span>
          </p>
          <img src={garotinhaGolFalta} alt="Post" className="w-full h-150 object-cover" />
          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-700">
            <button
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              onClick={() => handleLike(1)}
            >
              💜 <span className="text-base font-bold">{likes[1]}</span>
            </button>
            <input type="text" placeholder="Comentar..." className="flex-1 mx-4 px-4 py-2 rounded-full border border-gray-600 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <button className="text-purple-400 hover:text-purple-300 text-xl">🔗</button>
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
}