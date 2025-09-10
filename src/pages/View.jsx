//import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";
import ShowCropp from "../components/layout/ShowCropp";
import TitlePage from "../components/layout/TitlePage";

function View(){
    return(
        <>
            <div className="flex min-h-screen bg-gray-100">
                <main className="flex-1 p-5 overflow-y-auto">
                    <div>
                        <TitlePage Title="Criar template" />
                    </div>
                    <ShowCropp />
                </main>
            </div>
        </> 
    );
}
export default View;