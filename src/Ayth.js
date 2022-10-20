import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [token, setToken] = useState("");
    const [foto, setFoto] = useState("");

    return (
        <AuthContext.Provider value={{ token, setToken, foto, setFoto }}>
            {children}
        </AuthContext.Provider>
    )

}