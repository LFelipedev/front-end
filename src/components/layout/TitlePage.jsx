import React from "react";

function TitlePage({Title}) {
    return (
        <>
            <div className="flex w-full self-center">
                <h1 className="text-4xl font-medium mr-10">{Title}</h1>
                <span className="bg-[var(--vinho-primario)] ml-auto w-3/5 h-[5px] rounded-4xl self-center"></span>
            </div>
        </>
    );
}

export default TitlePage;