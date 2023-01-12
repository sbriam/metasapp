import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextoAuth } from "../../../memoria/Auth";
import { acceder } from "../../../servicios/Auth.ts";
import Credenciales from "../../compartidos/Credenciales.tsx";


function Acceso() {

  const navegar = useNavigate();


  const [Auth, enviarAuth] = useContext(ContextoAuth);
  const enviar = async (form) => {
    const token = await acceder(form);
    enviarAuth({ tipo: 'colocar', token });
    navegar('/lista');
  };

  return <Credenciales
    enviar={enviar}
    titulo="Acceso"
    boton="Acceder"
  ></Credenciales>

}

export default Acceso;