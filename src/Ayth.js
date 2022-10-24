import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [token, setToken] = useState("");
    const [foto, setFoto] = useState("");
    const [porcentagem, setPorcentagem] = useState(0);

    return (
        <AuthContext.Provider value={{ token, setToken, foto, setFoto, porcentagem, setPorcentagem }}>
            {children}
        </AuthContext.Provider>
    )

}