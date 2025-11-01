import React from "react";
import Button from "../ui/Button";
import GenericModal from "../ui/GenericModal";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FiRotateCw } from "react-icons/fi";

function ErrorCeate({ isOpen, isClose, setStep }) {

    if (isOpen) {

        return (
            <>
                <GenericModal
                    icon={<BsExclamationCircleFill />}
                    title="Falha ao finalizar template"
                    description="Seu template não foi finalizado, tente novamente."
                    actions={[
                        <Button icon={<FiRotateCw />} text="Tentar novamente"
                        onClick={() => {
                            isClose();
                        }} />
                    ]}
                    onClose={isClose}
                />
            </>
        );
    }

    return null;
}

export default ErrorCeate;