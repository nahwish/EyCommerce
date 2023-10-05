import React, { createContext, useState } from "react";

export const AuthContext = createContext();

let parsedAccount;
let parsedSignOut;
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
