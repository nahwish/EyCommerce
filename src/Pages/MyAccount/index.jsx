import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../Context/auth";
import Layout from "../../Components/Layout";

/**
 * Componente que muestra la información de la cuenta del usuario y permite editarla.
 * @component
 */

function MyAccount() {
  const context = useContext(AuthContext);

  // Estado para controlar la vista (información de usuario o edición de información).
  const [view, setView] = useState("user-info");

  // Obtiene los datos de la cuenta del usuario desde el almacenamiento local.
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const form = useRef(null);

  /**
   * Función para editar la información de la cuenta del usuario y actualizar el contexto.
   */

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Actualiza la cuenta en el almacenamiento local.
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data); // Actualiza el contexto con los nuevos datos de la cuenta.
  };

  /**
   * Función que renderiza la vista de información de usuario.
   * @returns {JSX.Element} - Elemento JSX que muestra la información de usuario.
   */

  const renderUserInfo = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className="font-light text-sm">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className="border border-black rounded-lg mt-6 py-3"
          onClick={() => setView("edit-user-info")}
        >
          Edit
        </button>
      </div>
    );
  };

  /**
   * Función que renderiza la vista de edición de información de usuario.
   * @returns {JSX.Element} - Elemento JSX que muestra el formulario de edición.
   */

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="hi@helloworld.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="******"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <button
          className="bg-black text-white w-full rounded-lg py-3"
          onClick={() => {
            setView("user-info"), editAccount();
          }}
        >
          Edit
        </button>
      </form>
    );
  };

  /**
   * Función que decide qué vista renderizar según el estado "view".
   * @returns {JSX.Element} - Elemento JSX que representa la vista actual.
   */
  
  const renderView = () =>
    view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">My account</h1>
      {renderView()}
    </Layout>
  );
}

export default MyAccount;
