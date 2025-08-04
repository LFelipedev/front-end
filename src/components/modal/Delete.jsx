import React from "react";
import Button from "../ui/Button";
import GenericModal from "../ui/GenericModal";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Delete({ isOpen }) {

    if (isOpen) {

        return (
            <>
                <GenericModal
                    icon={<RiDeleteBin5Fill />}
                    title="Tem certeza que deseja excluir esse template?"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                    actions={[
                        <Button text="Cancelar" variant="secondary" />,
                        <Button text="Continuar" variant="primary" />
                    ]}
                />
            </>
        );
    }

    return null;
}

export default Delete;
