import React from "react";
import TitlePage from "../components/layout/TitlePage";
import Template from "../components/ui/Template";
import CreateTemplate from "../components/ui/CreateTemplate";

function ViewTemplates() {
    return (
        <div className="w-full overflow-x-hidden">
            <TitlePage Title="Visualizar templates" />

            <div className="py-10">
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-items-center">
                        <CreateTemplate />
                        <Template cardsOnly />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTemplates;
