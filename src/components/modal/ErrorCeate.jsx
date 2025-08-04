import React from "react";
import Button from "../ui/Button";
import GenericModal from "../ui/GenericModal";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FiRotateCw } from "react-icons/fi";

function ErrorCeate({ isOpen }) {

    if (isOpen) {

        return (
            <>
                <GenericModal
                    icon={<BsExclamationCircleFill />}
                    title="Falha ao finalizar template"
                    description="Seu template não foi finalizado, tente novamente."
                    actions={[
                        <Button icon={<FiRotateCw />} text="Tentar novamente" />
                    ]}
                />
            </>
        );
    }

    return null;
}

export default ErrorCeate;