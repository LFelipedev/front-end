//import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";
import ShowCropp from "../components/layout/ShowCropp";

function View(){
    return(
        <>
            <div className="flex min-h-screen bg-[#f2f2f2]">
                <Sidebar />
                <main className="flex-1 p-5 overflow-y-auto">
                    <ShowCropp />
                </main>
            </div>
        </> 
    );
}
export default View;