import React from "react";
import Button from "../ui/Button";
import GenericModal from "../ui/GenericModal";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiHome } from "react-icons/fi";

function SucessDelete({ isOpen }) {

    if (isOpen) {

        return (
            <>
                <GenericModal
                    icon={<BsCheckCircleFill />}
                    title="Template excluído com sucesso!"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    actions={[
                        <Button icon={<FiHome />} text="Voltar ao início" />
                    ]}
                />
            </>
        );
    }

    return null;
}

export default SucessDelete;