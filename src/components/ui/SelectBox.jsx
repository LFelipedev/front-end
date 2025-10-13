import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { PiTagSimple } from "react-icons/pi"; // importe o ícone aqui
import Button from "./Button"; // ajuste o caminho se necessário

function SelectBox({
    AddList = [],
    openMenuList,
    setOpenMenuList,
    prevStep,
    showModal,
    setShowModal
}) {
    return (
        <div className="bg-white rounded-md shadow-md mb-2 mt-2 p-4 flex flex-col items-center gap-4 flex-1">
            <h1 className="text-xl font-bold">Caixa de Seleção</h1>
            <p>Ainda não há nenhuma caixa de seleção salva para esse documento.</p>
            <ul>
                {AddList.map((item, index) => (
                    <li key={index} className="px-3 py-2 rounded-md duration-300 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <PiTagSimple size={18} />
                            <p>{item.label}</p>
                            <CiMenuKebab
                                size={18}
                                className="ml-auto"
                                onClick={() => setOpenMenuList(!openMenuList)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-auto ml-auto flex gap-x-1">
                <Button text="Voltar" variant="secondary" onClick={prevStep} />
                <Button text="Avançar" variant="primary" onClick={() => setShowModal(!showModal)} />
            </div>

        </div>

    );
}

export default SelectBox;
