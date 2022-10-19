import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import LoginPage from "./LoginPage";
import CadastroPage from "./CadastroPage";
import HabitosPage from "./HabitosPage";
import HojePage from "./HojePage";
import HistoricoPage from "./HistoricoPage";


export default function App() {

    return (
        <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/cadastro" element={<CadastroPage />}></Route>
                    <Route path="/habitos" element={<HabitosPage />}></Route>
                    <Route path="/hoje" element={<HojePage />}></Route>
                    <Route path="/historico" element={<HistoricoPage />}></Route>
                </Routes>
        </BrowserRouter>
    )
}