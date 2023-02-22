import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Estilo/GlobalStyle";
import LoginPage from "./Paginas/LoginPage";
import CadastroPage from "./Paginas/CadastroPage";
import HabitosPage from "./Paginas/HabitosPage";
import HojePage from "./Paginas/HojePage";
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
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}