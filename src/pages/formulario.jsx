import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Formulario() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form enviado:", form);
    setSent(true);
    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col font-sans text-white">
      <nav className="fixed top-0 left-0 w-full bg-gray-800 border-b border-purple-500 shadow-lg z-50">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="bg-white rounded-full shadow p-2 hover:bg-gray-200 transition" title="Voltar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <span className="text-lg font-bold text-purple-300">Formulário de Interesse</span>
          <div />
        </div>
      </nav>

      <main className="flex-1 pt-24 pb-10 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Participe e fortaleça o futebol feminino</h2>
          <p className="text-gray-300 text-sm mb-6">Preencha o formulário abaixo para enviar proposta, se candidatar a programas ou pedir suporte.</p>

          {sent ? (
            <div className="bg-green-600/20 border border-green-600 text-green-200 p-4 rounded-md">
              Obrigado! Seu formulário foi enviado. Redirecionando...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-300">Nome</label>
                <input name="nome" value={form.nome} onChange={handleChange} required className="w-full mt-2 px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full mt-2 px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              <div>
                <label className="text-sm text-gray-300">Mensagem</label>
                <textarea name="mensagem" value={form.mensagem} onChange={handleChange} rows="5" required className="w-full mt-2 px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" className="bg-purple-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-400 transition">Enviar</button>
                <button type="button" onClick={() => navigate(-1)} className="bg-gray-900 text-purple-300 px-4 py-2 rounded-full border border-purple-400 hover:bg-gray-800 transition">Cancelar</button>
              </div>
            </form>
          )}
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-center py-6 text-gray-300 border-t border-purple-500">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs text-purple-400">Futebol feminino é futuro!</span>
        </div>
      </footer>
    </div>
  );
}