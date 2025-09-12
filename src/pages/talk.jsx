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

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Lista de conversas */}
      <div className="w-1/3 border-r bg-white">
        <div className="p-4 border-b font-semibold text-lg">Mensagens</div>
        <ul className="divide-y">
          {conversations.map((c) => (
            <li
              key={c.id}
              onClick={() => setSelected(c)}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                selected?.id === c.id ? "bg-gray-100" : ""
              }`}
            >
              <div className="font-medium">{c.username}</div>
              <div className="text-sm text-gray-500 truncate">
                {c.lastMessage}
              </div>
              <div className="text-xs text-gray-400 mt-1">{c.time}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main - Janela de chat */}
      <div className="flex-1 flex flex-col">
        {selected ? (
          <>
            <div className="p-4 border-b font-medium">
              {selected.username}
            </div>

            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              <div className="self-start bg-gray-200 px-3 py-2 rounded-lg text-sm w-max">
                {selected.lastMessage}
              </div>
              <div className="self-end bg-blue-500 text-white px-3 py-2 rounded-lg text-sm w-max">
                Beleza!
              </div>
            </div>

            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                placeholder="Escreva uma mensagem..."
                className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
                Enviar
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Selecione uma conversa para começar
          </div>
        )}
      </div>
    </div>
  );
}
