"use client";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FilterProductContext } from "../../Context/filterProductContext";
import { ShoppingCartContext } from "../../Context/cartContext";
import { directionLink, signInLinks } from "./urls";
import { AuthContext } from "../../Context/auth";

/**
 * Componente NavBar para la barra de navegación principal.
 * @function
 * @returns {JSX.Element} Elemento JSX que representa el componente NavBar.
 */

const NavBar = () => {
  const { setSearchByCategory } = useContext(FilterProductContext);
  let { count, cartProduct } = useContext(ShoppingCartContext);
  let context = useContext(AuthContext);
  const activeStyle = "underline underline-offset-4";

  // Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
// Calcular si el usuario está "cerrado" o "desconectado".
// `context.signOut` es una variable del contexto que indica si el usuario está desconectado.
// Si `context.signOut` es `true`, entonces el usuario está desconectado.
// Si `parsedSignOut` es `true`, significa que el usuario ha marcado la opción de "cerrar sesión".
// `isUserSignOut` será `true` si cualquiera de las dos condiciones es `true`.
  const isUserSignOut = context.signOut || parsedSignOut;
  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // Has an account
  const noAccountInLocalStorage = parsedAccount
  ? Object.keys(parsedAccount).length === 0
  : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-black/60">{parsedAccount?.email}</li>
          {signInLinks.map(({name,url},index)=>{
            return (
              <li key={index}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign in
            </NavLink>
          </li>
          
        </>
      );
    }
  };



  return (
    <nav className="flex justify-around items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={`${isUserSignOut ? "/sign-in" : "/"}`}>Shopi</NavLink>
        </li>
        {
          directionLink.map(({name,url,category},index)=>{
            return (
              <li key={index}>
                <NavLink
                  to={url}
                  onClick={() => setSearchByCategory(category)}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })
        }
      </ul>
      <ul className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
          />
        </svg>
        {renderView()}
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div>{cartProduct.length}</div>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
