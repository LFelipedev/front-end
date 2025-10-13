import React from "react"
import { Link } from "react-router-dom";

function Template() {
    return (
        <>
            <div className="w-[40vh] h-[40vh] flex flex-col items-center justify-start border-2 border-[#602E31] rounded-lg bg-white">
                <div className="flex h-[45%] w-full bg-[#602E31]">
                </div>
                <div className="p-4">
                    <h2 className="font-semibold text-lg uppercase">Controle qualitativo de concreto asfáltico</h2>
                    <p className="text-xs">Criado em 20 de maio</p>
                    <p className="text-sm">
                        Descrição do template:  Relatório de controle qualitativo de concreto asfáltico com gráfico de curva granulométrica
                    </p>
                    <Link to="/enviar">
                        <p className="uppercase text-[var(--vinho-secundario)] font-medium underline">ir para template</p>
                    </Link>
                </div>
            </div>

        </>
    );
}

export default Template;