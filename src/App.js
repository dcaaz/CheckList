import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import LoginPage from "./LoginPage";
import CadastroPage from "./CadastroPage";
import HabitosPage from "./HabitosPage";
import HojePage from "./HojePage";
import HistoricoPage from "./HistoricoPage";
import { createContext, useState } from "react";

export default function App() {

    const AuthContext = createContext({});

    function AuthProvider({children}){
        
    }

    const [token, setToken] = useState("");

    return (
        <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<LoginPage setToken={setToken} />}></Route>
                    <Route path="/cadastro" element={<CadastroPage />}></Route>
                    <Route path="/habitos" element={<HabitosPage token={token} />}></Route>
                    <Route path="/hoje" element={<HojePage />}></Route>
                    <Route path="/historico" element={<HistoricoPage />}></Route>
                </Routes>
        </BrowserRouter>
    )
}