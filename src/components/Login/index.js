import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <C.Container>
      <C.Content>
        <C.Title>Faça o teste do chat de conversação!</C.Title>
        <C.Button onClick={handleSignin}>Login com Google</C.Button>
        <C.Icons>
          <C.IconLink href="https://github.com/CaioLariel" target="_blank">
            <FaGithub size={30} />
          </C.IconLink>
          <C.IconLink href="https://www.linkedin.com/in/caio-gabriel-fuente-a8a366216/" target="_blank">
            <FaLinkedin size={30} />
          </C.IconLink>
        </C.Icons>
      </C.Content>
    </C.Container>
  );
};

export default Login;
