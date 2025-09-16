import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconeBola from "../assets/imagem_bola_icone.png"; // ícone na pasta assets

export default function FutebolFeminino() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await fetch(
          "https://api.api-futebol.com.br/v1/campeonatos/{campeonato_id}/partidas",
          {
            headers: {
              Authorization: "Bearer live_10920a15aa7a78d3653a607fe73242", // <- CORRETO
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        setJogos(Array.isArray(data) ? data : []); // a API retorna array
      } catch (err) {
        console.error(err);
        setErro("Erro ao carregar jogos.");
      } finally {
        setLoading(false);
      }
    };

    fetchJogos();
  }, []);

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
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 6l-6 6 6 6"
                stroke="#6B21A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-purple-400 tracking-tight">
              NeosPass
            </span>
            <span className="text-xs bg-purple-400 text-white px-2 py-0.5 rounded-full">
              Jogos
            </span>
          </div>
          <img
            src={iconeBola}
            className="h-9 w-9 ml-4 rounded-full"
            alt="Jogos"
          />
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-1 max-w-5xl mx-auto pt-24 pb-10 px-4">
        <h1 className="text-4xl font-extrabold text-purple-300 mb-8 text-center drop-shadow-lg">
          Jogos do Brasileirão Feminino
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="text-lg text-gray-200 animate-pulse">
              Carregando...
            </span>
          </div>
        ) : erro ? (
          <div className="flex justify-center items-center h-64">
            <span className="text-lg text-red-400">{erro}</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jogos.map((jogo) => (
              <div
                key={jogo.partida_id}
                className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:scale-[1.02] transition"
              >
                {/* Times */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={jogo.time_mandante.escudo}
                      alt={jogo.time_mandante.nome_popular}
                      className="w-10 h-10 rounded-full border-2 border-purple-400 bg-gray-900"
                    />
                    <span className="font-bold text-purple-300 text-lg">
                      {jogo.time_mandante.nome_popular}
                    </span>
                  </div>
                  <span className="font-bold text-gray-400 text-xl">x</span>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-purple-300 text-lg">
                      {jogo.time_visitante.nome_popular}
                    </span>
                    <img
                      src={jogo.time_visitante.escudo}
                      alt={jogo.time_visitante.nome_popular}
                      className="w-10 h-10 rounded-full border-2 border-purple-400 bg-gray-900"
                    />
                  </div>
                </div>

                {/* Data e estádio */}
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>
                    {new Date(jogo.data_realizacao).toLocaleDateString("pt-BR")}{" "}
                    {jogo.hora_realizacao || ""}
                  </span>
                  <span>{jogo.estadio?.nome_popular || "Estádio não informado"}</span>
                </div>

                {/* Placar */}
                {jogo.placar_oficial_mandante !== null &&
                  jogo.placar_oficial_visitante !== null && (
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <span className="text-2xl font-bold text-purple-400">
                        {jogo.placar_oficial_mandante}
                      </span>
                      <span className="text-lg text-gray-400">-</span>
                      <span className="text-2xl font-bold text-purple-400">
                        {jogo.placar_oficial_visitante}
                      </span>
                    </div>
                  )}

                {/* Status */}
                <div className="flex justify-end">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      jogo.status === "finalizado"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-900 text-purple-400"
                    }`}
                  >
                    {jogo.status === "finalizado" ? "Finalizado" : "Agendado"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-center py-6 mt-10 text-gray-300 border-t border-purple-500">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© 2025 NeosPassaBola. Todos os direitos reservados.</span>
          <span className="text-xs text-purple-400">
            Futebol feminino é futuro!
          </span>
        </div>
      </footer>
    </div>
  );
}
