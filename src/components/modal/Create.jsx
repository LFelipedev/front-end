import React from "react";
import GenericModal from "../ui/GenericModal.jsx";
import Button from "../ui/Button.jsx";
import { FiHome } from "react-icons/fi";
import { BsPlusLg, BsCheckCircleFill } from "react-icons/bs";

function Create({ isOpen }) {

  if (isOpen) {

    return (
      <>
        <GenericModal 
          icon={<BsCheckCircleFill />}
          title="Template criado com sucesso!"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          actions={[
            <Button icon={<FiHome />} text="Voltar ao início" variant="secondary" />,
            <Button icon={<BsPlusLg />} text="Criar outro template" />
          ]}
        />
      </>
    );
  }
}

export default Create;