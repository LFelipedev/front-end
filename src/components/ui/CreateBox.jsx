import React from "react";

import Button from "./Button";
import { GoPlus } from "react-icons/go";
import l1img from "../../assets/l1.jpg"

function CreateBox() {
    return (
        <>
            <div className=" bg-white h-[70vh] rounded-md shadow-lg p-4 flex flex-col gap-1 justify-between">
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold">Nome do Template</h2>
                    <p>Selecione o campo que deseja adicionar no template:</p>
                </div>
                <div className="bg-cover bg-center w-full h-50" style={{ backgroundImage: `url(${l1img})` }}></div>
                <div className="flex justify-end">
                    <Button icon={<GoPlus size={20} />} text="Adicionar Campo" />
                </div>

            </div>
        </>
    )
}
export default CreateBox;