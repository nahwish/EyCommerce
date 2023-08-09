import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context/index";
import { directionLink, activeLinkAcount } from "./urls";

const NavBar = () => {
  const { count } = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";


  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        {directionLink.map(({ name, url },index) => (
          <li className="font-semibold text-lg" key={index}>
            <NavLink
              to={url}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {name}
            </NavLink>
          </li>
        ))}

      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">nadaro@outlook.com</li>
        {activeLinkAcount.map(({ name, url }, index) => (
          <li className="font-semibold text-lg" key={index}>
            <NavLink
              to={url}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {name}
            </NavLink>
          </li>
        ))}
        <li> 🛒{ count } </li>
      </ul>
    </nav>
  );
};
export default NavBar;
