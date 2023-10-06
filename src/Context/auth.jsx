import React, { createContext, useState } from "react";


/**
 * Contexto de autenticación que proporciona información sobre la cuenta y el estado de inicio de sesión.
 * @typedef {Object} AuthContextType
 * @property {Object} account - La cuenta del usuario.
 * @property {Function} setAccount - Función para actualizar la cuenta del usuario.
 * @property {boolean} signOut - Estado de inicio de sesión.
 * @property {Function} setSignOut - Función para actualizar el estado de inicio de sesión.
 * @property {Object} parsedSignOut - Valor analizado del estado de inicio de sesión almacenado en el almacenamiento local.
 * @property {Object} parsedAccount - Valor analizado de la cuenta del usuario almacenada en el almacenamiento local.
 */


export const AuthContext = createContext();

let parsedAccount;
let parsedSignOut;
/**
 * Inicializa las variables en el almacenamiento local y en el estado local si no existen.
 */
export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem("account");
  const signOutInLocalStorage = localStorage.getItem("sign-out");

  if (!accountInLocalStorage) {
    localStorage.setItem("account", JSON.stringify({}));
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }
  if (!signOutInLocalStorage) {
    localStorage.setItem("sign-out", JSON.stringify(false));
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }
};

/**
 * Componente que proporciona el contexto de autenticación a los componentes hijos.
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos.
 * @returns {React.ReactNode} - El contexto de autenticación y los componentes hijos.
 */

const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState({});
  const [signOut, setSignOut] = useState(false);

  const valueContext = {
    account,
    setAccount,
    signOut,
    setSignOut,
    parsedSignOut,
    parsedAccount,
  };
  
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
