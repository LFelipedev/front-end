import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { PiTagSimple } from "react-icons/pi";
import Button from "./Button";

//import server
import axios from 'axios';

//import modal
import CreateModal from "../modal/CreateModal";

function SelectBox({
    openMenuList,
    setOpenMenuList,
    prevStep,
    setStep,
    showModal,
    setShowModal,
    allCoordinates = [],
    templateName,
    templateDescription,
    resetForm
}) {
    const saveCoordinates = async () => {
        try {
            if (!allCoordinates.length) return;
            console.log(templateName);
            console.log(templateDescription);

            const templatePayload = {
                name: templateName || "Template sem nome",
                description: templateDescription || "Sem descrição",
                fields: allCoordinates.map(coord => ({
                    name: coord.label || "sem nome",
                    x: Number(coord.x || 0),
                    y: Number(coord.y || 0),
                    width: Number(coord.width || 0),
                    height: Number(coord.height || 0)
                }))
            };

            console.log("Enviando dados para o servidor:", templatePayload);

            const response = await axios.post('http://localhost:3000/templates', templatePayload);
            console.log("Dados salvos com sucesso:", response.data);

            setShowModal(true);
        } catch (error) {
            console.error("Erro ao salvar os dados:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="bg-white rounded-md shadow-md mb-2 mt-2 p-4 flex flex-col items-center gap-4 flex-1">
            <h1 className="text-xl font-bold">Caixa de Seleção</h1>
            {allCoordinates.length === 0 ? (
                <p className="text-gray-500 text-center">
                    Ainda não há nenhuma caixa de seleção salva para esse documento.
                </p>
            ) : (
                <ul className="w-full flex flex-col items-center justify-between gap-2.5">
                    {allCoordinates.map((coord, index) => (
                        <li key={index} className=" w-[80%] flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-5">
                                <PiTagSimple size={20} />
                                <p className="text-lg">{coord.label}</p>
                            </div>

                            <CiMenuKebab
                                size={18}
                                className="ml-auto cursor-pointer"
                                onClick={() => setOpenMenuList(!openMenuList)}
                            />
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-auto ml-auto flex gap-x-1">
                <Button text="Voltar" variant="secondary" onClick={prevStep} />
                <Button text="Salvar" variant="primary" onClick={saveCoordinates} />
            </div>
            <CreateModal isOpen={showModal}
                isClose={() => setShowModal(false)}
                setStep={setStep}
                resetForm={resetForm}
            />

        </div>

    );
}

export default SelectBox;
