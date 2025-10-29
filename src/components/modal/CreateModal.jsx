import React from "react";
import { useState } from "react";
import GenericModal from "../ui/GenericModal.jsx";
import Button from "../ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BsPlusLg, BsCheckCircleFill } from "react-icons/bs";

function CreateModal({ isOpen, isClose, setStep, resetForm }) {
    const navigate = useNavigate();

    if (isOpen) {

        return (
            <>
                <GenericModal
                    icon={<BsCheckCircleFill />}
                    title="Template criado com sucesso!"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                    actions={[
                        <Button icon={<FiHome />} text="Voltar ao início" variant="secondary"  onClick={() => {
                            setStep(1);
                            isClose();
                            navigate("/");
                        }}/>,
                        <Button icon={<BsPlusLg />} text="Criar outro template" onClick={() => {
                            setStep(1);
                            resetForm();
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

export default CreateModal;