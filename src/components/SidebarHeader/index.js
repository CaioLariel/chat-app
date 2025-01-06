import React, { useState } from "react";
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import Swal from "sweetalert2"; // Importando o SweetAlert2
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    Swal.fire({
      title: "Criar Chat",
      input: "email", // Input será de tipo e-mail
      inputPlaceholder: "Digite o e-mail para iniciar o chat",
      showCancelButton: true,
      confirmButtonText: "Criar Chat",
      cancelButtonText: "Cancelar",
      inputValidator: (emailInput) => {
        if (!emailInput) {
          return "E-mail não pode estar vazio!";
        }

        if (!EmailValidator.validate(emailInput)) {
          return "E-mail inválido!";
        } else if (emailInput === user.email) {
          return "Insira um e-mail diferente do seu!";
        } else if (chatExists(emailInput)) {
          return "Chat já existe!";
        }

        // Criar o chat se tudo estiver válido
        db.collection("chats").add({
          users: [user.email, emailInput],
        });

        return null; // Retorna null se tudo estiver correto
      },
      preConfirm: (emailInput) => {
        // Função executada após a confirmação (se a validação passar)
        Swal.fire({
          icon: "success",
          title: "Chat criado com sucesso!",
          text: `Você agora pode conversar com ${emailInput}.`,
        });
      },
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default SidebarHeader;
