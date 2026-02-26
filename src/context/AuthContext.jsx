import React, { createContext, useEffect, useState } from 'react'


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {

        const storedAuth = localStorage.getItem("isAuth")
        return storedAuth === "true"
    });

    useEffect(() => {
        localStorage.setItem("isAuth", JSON.stringify(isLoggedIn))
    }, [isLoggedIn])

    const login = () => {
        setIsLoggedIn(true)
        localStorage.setItem("isAuth", true)
    }
    const logout = () => {
        setIsLoggedIn(false)
        localStorage.setItem("isAuth", false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
