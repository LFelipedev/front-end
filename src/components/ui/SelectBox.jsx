import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { PiTagSimple } from "react-icons/pi"; // importe o ícone aqui
import Button from "./Button"; // ajuste o caminho se necessário

function SelectBox({
    openMenuList,
    setOpenMenuList,
    prevStep,
    showModal,
    setShowModal,
    allCoordinates = []
}) {
    return (
        <div className="bg-white rounded-md shadow-md mb-2 mt-2 p-4 flex flex-col items-center gap-4 flex-1">
            <h1 className="text-xl font-bold">Caixa de Seleção</h1>
            {allCoordinates.length === 0 ? (
                <p className="text-gray-500 text-center">
                    Ainda não há nenhuma caixa de seleção salva para esse documento.
                </p>
            ) : (
                <ul className="w-full mt-2 space-y-2">
                    {allCoordinates.map((coord, index) => (
                        <li key={index} className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <PiTagSimple size={18} />
                            <div className="text-sm">
                                <p><strong>nome: {coord.label}</strong></p>
                                <p className="text-gray-600 text-xs">x: {coord.x}, y: {coord.y}, w: {coord.width}, h: {coord.height}</p>
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
                <Button text="Avançar" variant="primary" onClick={() => setShowModal(!showModal)} />
            </div>

        </div>

    );
}

export default SelectBox;
