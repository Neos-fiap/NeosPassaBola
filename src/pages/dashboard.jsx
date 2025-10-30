import React from "react";
import { Link } from "react-router-dom";
import logoPassaBola from "../assets/logo_passabola.png";
import iconeBola from "../assets/imagem_bola_icone.png";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col font-sans text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 border-b border-purple-500 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoPassaBola} alt="logo" className="h-10 w-10 rounded-full bg-gray-200 object-cover" />
            <span className="text-2xl font-extrabold text-purple-400 tracking-tight">NeosPass</span>
            <span className="text-xs bg-purple-400 text-white px-2 py-0.5 rounded-full ml-1">Dashboard</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/talk" title="Mensagens">
              <img src={iconeBola} alt="mensagens" className="h-8 w-8 rounded-full bg-gray-900 p-1 hover:scale-105 transition" />
            </Link>
            <Link to="/jogos" title="Jogos">
              <img src={iconeBola} alt="jogos" className="h-8 w-8 rounded-full bg-gray-900 p-1 hover:scale-105 transition" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-24 pb-8 bg-gradient-to-r from-purple-900 via-gray-700 to-gray-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-3">Futebol Feminino importa — e muda o jogo</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Investir, visibilizar e apoiar jogadoras transforma carreiras, fortalece comunidades e inspira novas gerações.
            Nesta plataforma reunimos recursos, histórias e oportunidades para amplificar o futebol feminino.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/jogos" className="inline-block bg-gray-900 text-purple-300 border border-purple-400 px-5 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition">
              Ver jogos
            </Link>
            <Link to="/formulario" className="inline-block bg-purple-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-purple-400 transition">
              Quero participar
            </Link>
          </div>
        </div>
      </header>

      {/* Stats / Impact */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-2xl p-6 shadow">
            <h3 className="text-lg font-bold text-purple-300">Visibilidade</h3>
            <p className="mt-2 text-gray-300">Programas, transmissões e cobertura jornalística aumentam o alcance do futebol feminino.</p>
            <div className="mt-4 text-3xl font-extrabold text-purple-400">+120%</div>
            <div className="text-xs text-gray-400">crescimento mídia (últimos 2 anos)</div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow">
            <h3 className="text-lg font-bold text-purple-300">Oportunidades</h3>
            <p className="mt-2 text-gray-300">Formação, intercâmbios e programas de base ampliam o pipeline de talentos.</p>
            <div className="mt-4 text-3xl font-extrabold text-purple-400">+350</div>
            <div className="text-xs text-gray-400">programas & iniciativas apoiadas</div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow">
            <h3 className="text-lg font-bold text-purple-300">Comunidade</h3>
            <p className="mt-2 text-gray-300">Clubes, treinadores e apoiadores criam redes essenciais para desenvolvimento.</p>
            <div className="mt-4 text-3xl font-extrabold text-purple-400">24k</div>
            <div className="text-xs text-gray-400">membros engajados</div>
          </div>
        </div>
      </section>

      {/* Feature / Callouts */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 md:flex md:items-center md:gap-6 shadow-lg">
          <div className="md:flex-1">
            <h2 className="text-2xl font-bold text-purple-300">Como você pode ajudar</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Compartilhe jogos e conquistas para aumentar visibilidade.</li>
              <li>• Apoie programas locais de formação e escolinhas.</li>
              <li>• Divulgue oportunidades e vagas para jogadoras.</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0 md:w-64">
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-400">Próximo grande jogo</div>
              <div className="mt-2 text-purple-300 font-bold text-lg">Sport Recife x Corinthians</div>
              <div className="text-xs text-gray-400 mt-1">10/11 • 19:00 • Estádio Principal</div>
              <Link to="/jogos" className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-400 transition">
                Ver partidas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources / Links */}
      <section className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-2xl p-5 shadow">
          <h4 className="text-purple-300 font-bold">Treinamento</h4>
          <p className="text-gray-300 text-sm mt-2">Conteúdos pedagógicos e planos de treino específicos para jogadoras.</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-5 shadow">
          <h4 className="text-purple-300 font-bold">Mentoria</h4>
          <p className="text-gray-300 text-sm mt-2">Conexões com ex-jogadoras e treinadores para orientação profissional.</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-5 shadow">
          <h4 className="text-purple-300 font-bold">Financiamento</h4>
          <p className="text-gray-300 text-sm mt-2">Programas de bolsas e apoio para participação em campeonatos.</p>
        </div>
      </section>

      {/* CTA to Form */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <p className="text-gray-300 mb-4">Quer se juntar a iniciativas, enviar uma proposta ou participar de um programa?</p>
        <Link to="/formulario" className="inline-block bg-purple-500 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-400 transition">
          Ir para formulário
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-center py-6 text-gray-300 border-t border-purple-500 mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© 2025 NeosPassaBola. Todos os direitos reservados.</span>
          <span className="text-xs text-purple-400">Futebol feminino é futuro!</span>
        </div>
      </footer>
    </div>
  );
}