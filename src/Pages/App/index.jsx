import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { useContext } from "react";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../Myorders";
import NotFound from "../NotFound";
import Signin from "../Signin";
import NavBar from "../../Components/NavBar";
import { CheckoutContextProvider } from "../../Context/checkoutContext";
import { FilterProductProvider } from "../../Context/filterProductContext";
import CartContextProvider from "../../Context/cartContext";
import CheckoutMenu from "../../Components/CheckoutMenu";
import AuthProvider from "../../Context/auth";
import { AuthContext, initializeLocalStorage } from "../../Context/auth";

import "./App.css";

const AppRoutes = () => {
  const context = useContext(AuthContext);
  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut;

  let routes = useRoutes([
    {
      path: "/",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/clothes",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/electronics",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/furnitures",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/toys",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/others",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <Signin /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  initializeLocalStorage();
  return (
    <BrowserRouter>
      <FilterProductProvider>
        <CheckoutContextProvider>
          <CartContextProvider>
            <AuthProvider>
              <NavBar />
              <AppRoutes />
              <CheckoutMenu />
            </AuthProvider>
          </CartContextProvider>
        </CheckoutContextProvider>
      </FilterProductProvider>
    </BrowserRouter>
  );
};

export default App;
