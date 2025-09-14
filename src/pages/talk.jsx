import React, { useState } from "react";

export default function MessagesPage() {
  const [conversations] = useState([
    {
      id: 1,
      username: "Olheiro do Sport",
      lastMessage: "Oi, tudo bem?, vi suas melhores jogadas gostaria de fazer um treino teste com você na base junior",
      time: "2h",
    },
    {
      id: 2,
      username: "Empresario:Jonas",
      lastMessage: "Você tem futuro gostaria de te empresariar",
      time: "5h",
    },
    {
      id: 3,
      username: "Marta ROdriguez",
      lastMessage: "Amei seu god de bicicleta",
      time: "1d",
    },
  ]);

  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-white">
      {/* Sidebar - Lista de conversas */}
      <div className="w-1/3 border-r bg-gray-600">
        <div className="p-4 border-b font-semibold text-lg text-white">Mensagens</div>
        <ul className="divide-y">
          {conversations.map((c) => (
            <li
              key={c.id}
              onClick={() => setSelected(c)}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                selected?.id === c.id ? "bg-gray-600" : ""
              }`}
            >
              <div className="font-medium">{c.username}</div>
              <div className="text-sm text-gray-400 truncate">
                {c.lastMessage}
              </div>
              <div className="text-xs text-gray-400 mt-1 text-purple-300">{c.time}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main - Janela de chat */}
      <div className="flex-1 flex flex-col">
        {selected ? (
          <>
            <div className="p-4.5 border-b font-medium bg-gray-600">
              {selected.username}
            </div>

           <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-600">
  <div className="self-start bg-gray-400 px-3 py-2 rounded-lg text-sm w-max">
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
            : "bg-gray-400 self-start"
        } px-3 py-2 rounded-lg text-sm w-max`}
      >
        {msg.text}
      </div>
    </div>
  ))}
</div>

            <div className="p-3 border-t flex gap-2 bg-gray-600">
  <input
    type="text"
    placeholder="Escreva uma mensagem..."
    className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none bg-gray-500"
    value={input}
    onChange={e => setInput(e.target.value)}
  />
  <button
    className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm"
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
          <div className="flex-1 flex items-center justify-center text-gray-500 bg-gray-300">
            Selecione uma conversa para começar
          </div>
        )}
      </div>
    </div>
  );
}
