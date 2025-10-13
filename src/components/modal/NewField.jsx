import Button from "../ui/Button";
import React from "react"
import { IoClose } from "react-icons/io5";

function NewField({ isOpen, isClose }) {

    if (isOpen) {
        return (
            <>
                <div className="fixed inset-0 m-auto flex flex-col justify-center bg-[#F8F9FA] w-[60vw] h-[30vh] p-5 rounded-2xl shadow-md">

                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2.5">
                            <div className="flex flex-row justify-between">
                                <h2 className="text-2xl font-semibold text-[#344054]">Novo Campo de Seleção</h2>
                                <div>
                                    <button className="cursor-pointer" onClick={isClose}>
                                        <IoClose className="text-[24px]" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-[#344054]">Aqui pode aparecer uma prévia das coordenadas</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div>
                                <p className="font-medium text-[#344054]">Nome da Caixa de Seleção</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <input type="text" placeholder='Ex: "Título"' className="w-[90%] p-1.5 border-2 border-gray-300 rounded-lg" />
                                <Button text="Salvar" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return null;

}

export default NewField;