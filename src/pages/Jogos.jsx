import { useEffect, useState } from "react";

export default function FutebolFeminino() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("https://api.api-futebol.com.br/v1/campeonatos/99/partidas", {
      headers: {
        Authorization: "live_10920a15aa7a78d3653a607fe73242"
      }
    })
      .then(res => res.json())
      .then(data => {
        setJogos(Array.isArray(data) ? data : data.partidas || []);
        setLoading(false);
      })
      .catch(err => {
        setErro("Erro ao carregar jogos.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col font-sans">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-purple-400 mb-8">Jogos do Brasileirão Feminino</h1>
        {loading ? (
          <p className="text-gray-200">Carregando...</p>
        ) : erro ? (
          <p className="text-red-400">{erro}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jogos.map(jogo => (
              <div key={jogo.partida_id || `${jogo.data_realizacao}-${jogo.time_mandante?.nome_popular}-${jogo.time_visitante?.nome_popular}`} className="p-6 bg-gray-800 text-gray-100 shadow rounded-2xl">
                <p className="font-bold text-purple-300 text-lg mb-2">
                  {jogo.time_mandante?.nome_popular} <span className="text-gray-400">x</span> {jogo.time_visitante?.nome_popular}
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  {jogo.data_realizacao} {jogo.hora_realizacao ? `- ${jogo.hora_realizacao}` : ""}
                </p>
                <p className="text-sm text-gray-400">
                  {jogo.estadio?.nome_popular || "Estádio não informado"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { FutebolFeminino as JogosFem };