//import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";
import ShowCropp from "../components/layout/ShowCropp";

function View(){
    return(
        <>
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
                <main className="flex-1 p-5 overflow-y-auto">
                    <ShowCropp />
                </main>
            </div>
        </> 
    );
}
export default View;