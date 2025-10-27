import React from "react";

function TitlePage({Title}) {
    return (
        <>
            <div className="flex w-full h-[15vh] pl-15 self-center items-center justify-between">
                <h1 className="text-4xl font-medium flex-shrink-0">{Title}</h1>
                <span className="bg-[var(--vinho-primario)] right-0 w-[60%] h-[5px] rounded-4xl self-center"></span>
            </div>
        </>
    );
}

export default TitlePage;