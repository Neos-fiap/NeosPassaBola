import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPassaBola from "../assets/logo_passabola.png";

export default function MessagesPage() {
  const [conversations] = useState([
    {
      id: 1,
      username: "OlheiroKaizer",
      lastMessage: "Oi, tudo bem?, vi suas melhores jogadas e gostaria de fazer um treino teste com você na base junior do Corinthians",
      time: "2h",
    },
    {
      id: 2,
      username: "JonasEmpresario01",
      lastMessage: "Você tem futuro, gostaria de te empresariar",
      time: "5h",
    },
    {
      id: 3,
      username: "MartaRodriguezJogadora",
      lastMessage: "Amei seu gol de bicicleta! você joga bem!",
      time: "1d",
    },
  ]);

  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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
          <span className="text-3xl font-extrabold text-purple-400 tracking-tight justify-center flex items-center">NeosPass</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex pt-24 pb-10 max-w-7xl mx-auto w-full">
        {/* Sidebar - Lista de conversas */}
        <aside className="w-1/3 bg-gray-800 rounded-l-2xl shadow-lg flex flex-col">
          <div className="p-6 border-b border-purple-500 font-bold text-lg text-purple-300">Conversas</div>
          <ul className="divide-y divide-gray-700 flex-1 overflow-y-auto">
            {conversations.map((c) => (
              <li
                key={c.id}
                onClick={() => setSelected(c)}
                className={`p-6 cursor-pointer hover:bg-gray-700 transition ${
                  selected?.id === c.id ? "bg-gray-700" : ""
                }`}
              >
                <div className="font-bold text-white">{c.username}</div>
                <div className="text-sm text-gray-400 truncate mt-1">
                  {c.lastMessage}
                </div>
                <div className="text-xs text-purple-400 mt-2">{c.time}</div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Area */}
        <section className="flex-1 bg-gray-900 rounded-r-2xl shadow-lg flex flex-col">
          {selected ? (
            <>
              <div className="flex items-center justify-between p-6 border-b border-purple-500 bg-gray-900 rounded-tr-2xl">
                <span className="font-bold text-lg text-purple-300">{selected.username}</span>
                <span className="text-xs text-gray-400">{selected.time}</span>
              </div>
              <div className="flex-1 p-8 space-y-4 overflow-y-auto">
                <div className="self-start bg-gray-700 px-4 py-2 rounded-lg text-sm text-gray-100 w-max shadow">
                  {selected.lastMessage}
                </div>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.fromUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`${
                        msg.fromUser
                          ? "bg-purple-500 text-white self-end"
                          : "bg-gray-700 text-gray-100 self-start"
                      } px-4 py-2 rounded-lg text-sm w-max shadow`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-purple-500 flex gap-2 bg-gray-900 rounded-br-2xl">
                <input
                  type="text"
                  placeholder="Escreva uma mensagem..."
                  className="flex-1 border border-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none bg-gray-700 text-gray-100"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />
                <button
                  className="px-6 py-2 bg-purple-500 text-white rounded-full text-sm font-bold hover:bg-purple-400 transition"
                  onClick={() => {
                    if (input.trim()) {
                      setMessages([...messages, { text: input, fromUser: true }]);
                      setInput("");
                    }
                  }}
                >
                  Enviar
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 bg-gray-900 rounded-r-2xl flex flex-col space-y-10">
              <img src={logoPassaBola} alt="logo" className="bg-gray-800 rounded-full h-50 w-50 space-x-10  " />
              <span className="text-lg flex flex-col">Selecione uma conversa para começar</span>
            </div>
          )}
        </section>
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