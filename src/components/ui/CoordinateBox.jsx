import React from "react"
import { BsArrowsExpand } from "react-icons/bs";

function CoordinateBox() {

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white w-full py-5 px-10 gap-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold ">Valores das Coordenadas:</h3>
                <div className="flex flex-row justify-between gap-10">
                    <div className="flex flex-col gap-4.5">
                        <div className="flex flex-row gap-2 justify-between items-center">
                            <p className="uppercase">x:</p>
                            <div className="flex flex-row justify-center items-center w-20 px-3 py-0.75 border-2 border-gray-300 rounded-lg">
                                <input type="number" placeholder="px" className="w-[70%] text-center"/>
                                <BsArrowsExpand className="text-gray-500"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 justify-between items-center">
                            <p className="uppercase">y:</p>
                            <div className="flex flex-row justify-center items-center w-20 px-3 py-0.75 border-2 border-gray-300 rounded-lg">
                                <input type="number" placeholder="px" className="w-[70%] text-center"/>
                                <BsArrowsExpand className="text-gray-500"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4.5">
                        <div className="flex flex-row gap-2 justify-between items-center">
                            <p>Largura:</p>
                            <div className="flex flex-row justify-center items-center w-20 px-3 py-0.75 border-2 border-gray-300 rounded-lg">
                                <input type="number" placeholder="px" className="w-[70%] text-center"/>
                                <BsArrowsExpand className="text-gray-500"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 justify-between items-center">
                            <p>Altura:</p>
                            <div className="flex flex-row justify-center items-center w-20 px-3 py-0.75 border-2 border-gray-300 rounded-lg">
                                <input type="number" placeholder="px" className="w-[70%] text-center"/>
                                <BsArrowsExpand className="text-gray-500"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoordinateBox;