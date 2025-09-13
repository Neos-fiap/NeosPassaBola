import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import InstaProfile from "./pages/perfil";
import MessagesPage from "./pages/talk";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/perfil" element={<InstaProfile />} />
        <Route path="/talk" element={<MessagesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
