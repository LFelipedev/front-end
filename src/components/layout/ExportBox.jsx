import { useEffect, useRef, useState } from "react";
import l1Img from "../../assets/l1.jpg";
import Button from "../ui/Button";

function ExportBox(){
    return(
        <>
            <div className="bg-white w-dvh rounded-md shadow-lg p-4 flex flex-col">
                <h1 className="text-xl font-bold">Nome do Template</h1>
                <div className="mt-2 flex">
                    <img
                    src={l1Img}
                    alt="gabarito"
                    className="rounded-md"
                    />
                </div>
            </div>
        </>
    );
}
export default ExportBox;