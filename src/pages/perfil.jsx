import { Link } from "react-router-dom";
import profiGolPerna from "../assets/profi_gol_perna.png";
import rafaControleBola from "../assets/imagem_rafa_controle_bola.png";

export default function InstaProfile({ user = null }) {
  const sample = {
    name: "Rafaela Almeida",
    username: "Rafa.Almeida8",
    avatarAlt: "Avatar de Rafa",
    bio: "Jogadora da escolinha do Sport Recife 15 Anos",
    website: "https://example.com",
    posts: 128,
    followers: "24.3k",
    following: 312,
    highlights: ["Viagem", "Pets", "Futebol"],
    grid: [
      { id: 1, img: profiGolPerna },
      { id: 2, img: rafaControleBola },
      { id: 3, img: profiGolPerna },
      { id: 4, img: rafaControleBola },
      { id: 5, img: profiGolPerna },
      { id: 6, img: rafaControleBola },
      { id: 7, img: profiGolPerna },
      { id: 8, img: rafaControleBola },
      { id: 9, img: profiGolPerna },
    ],
  };

  const u = user || sample;

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 border-b border-purple-500 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="bg-white rounded-full shadow p-2 hover:bg-gray-200 transition"
            title="Voltar para Home"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <span className="text-3xl font-extrabold text-purple-400 tracking-tight">NeosPass</span>
          <span className="text-xs bg-purple-400 text-white px-2 py-0.5 rounded-full ml-2">Perfil</span>
        </div>
      </nav>

      {/* Hero/Profile Section */}
      <section className="pt-24 pb-10 bg-gradient-to-r from-purple-900 via-gray-700 to-gray-800 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-400 bg-gray-900 mx-auto shadow-lg">
            <img
              src={profiGolPerna}
              alt={u.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-purple-300">{u.name}</h1>
          <span className="text-lg text-gray-200">@{u.username}</span>
          <p className="text-base text-gray-200 max-w-md mx-auto">{u.bio}</p>
          {u.website && (
            <a
              href={u.website}
              className="inline-block mt-2 text-sm text-purple-400 underline"
              target="_blank"
              rel="noreferrer"
            >
              {u.website}
            </a>
          )}
          <div className="flex gap-8 justify-center mt-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-purple-300 text-xl">{u.posts}</span>
              <span className="text-xs text-gray-300">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-purple-300 text-xl">{u.followers}</span>
              <span className="text-xs text-gray-300">Seguidores</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-purple-300 text-xl">{u.following}</span>
              <span className="text-xs text-gray-300">Seguindo</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <button className="px-5 py-2 rounded-full bg-purple-500 text-white font-bold hover:bg-purple-400 transition shadow">Seguir</button>
            <button className="px-4 py-2 rounded-full bg-gray-900 text-purple-400 font-bold border border-purple-400 hover:bg-gray-800 transition shadow">Mensagem</button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex gap-6 justify-center">
          {u.highlights.map((h, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-purple-400 flex items-center justify-center text-lg text-purple-300 font-bold shadow">{h[0]}</div>
              <span className="text-xs mt-1 text-gray-300 font-sans">{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex gap-8 text-sm font-medium text-gray-400 font-sans justify-center border-b border-gray-600 pb-2">
          <div className="flex items-center gap-2 text-purple-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/></svg>
            Posts
          </div>
          
          <div className="flex items-center gap-2 opacity-60">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/></svg>
            Marcados
          </div>
        </div>
      </section>

      {/* Grid of posts */}
      <main className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {u.grid.map(item => (
          <div key={item.id} className="w-full pb-full relative bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-800 shadow-lg">
            <img
              src={item.img}
              alt={`Post ${item.id}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
        <style>{`.pb-full{padding-bottom:100%;}`}</style>
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