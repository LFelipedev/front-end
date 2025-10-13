import React from "react";
import Upload from "../components/ui/Upload";
import CreateBox from "../components/ui/CreateBox";
import SelectBox from "../components/ui/SelectBox";
import TitlePage from "../components/layout/TitlePage";

function UploadDocument() {
    return (
        <>
            <div className="flex flex-col w-full h-full">
                <TitlePage Title="Relatório de Obras" />
                <div className="flex flex-row h-full w-full p-10 justify-between">
                    <div className="w-[50%] h-full justify-between">
                        <div className="h-[50%]">
                            <Upload />
                        </div>
                        

                    </div>
                    <div className="w-[45%]">
                        <SelectBox />
                    </div>
                </div>
            </div>

        </>
    );
}

export default UploadDocument