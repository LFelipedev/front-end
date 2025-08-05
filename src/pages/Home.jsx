import React from "react";
import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";

function Home() {

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="p-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Home</h1>
                </div>
            </div>
        </>
    );

}
export default Home;