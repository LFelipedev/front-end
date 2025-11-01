import React from "react";
import Button from "../ui/Button";
import GenericModal from "../ui/GenericModal";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FiRotateCw } from "react-icons/fi";

function ErrorDeleteModal({ isOpen, isClose }) {

    if (isOpen) {

        return (
            <>
                <GenericModal
                    icon={<BsExclamationCircleFill />}
                    title="Falha ao excluir template"
                    description="O template não foi excluído, tente novamente."
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

export default ErrorDeleteModal;