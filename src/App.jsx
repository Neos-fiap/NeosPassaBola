import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import InstaProfile from "./pages/perfil";
import MessagesPage from "./pages/talk";
import JogosFem from "./pages/Jogos";
import Formulario from "./pages/formulario"; // <-- maiúscula aqui
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/perfil" element={<InstaProfile />} />
        <Route path="/talk" element={<MessagesPage />} />
        <Route path="/jogos" element={<JogosFem />} />
        <Route path="/formulario" element={<Formulario />} /> {/* <-- use a tag com maiúscula */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}