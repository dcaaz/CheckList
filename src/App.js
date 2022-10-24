import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import LoginPage from "./Pages/LoginPage";
import CadastroPage from "./Pages/CadastroPage";
import HabitosPage from "./Pages/HabitosPage";
import HojePage from "./Pages/HojePage";
import HistoricoPage from "./Pages/HistoricoPage";
import AuthProvider from "./Ayth";

export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/cadastro" element={<CadastroPage />}></Route>
                    <Route path="/habitos" element={<HabitosPage />}></Route>
                    <Route path="/hoje" element={<HojePage />}></Route>
                    <Route path="/historico" element={<HistoricoPage />}></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}