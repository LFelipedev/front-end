//import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";
import ShowCropp from "../components/layout/ShowCropp";

function Home(){
    <>
        <div className="flex">
            <Sidebar/>
            <div className="p-4 flex flex-col gap-4">
               <h1 className="text-xl font-bold">Home</h1>

                {/* Botões visíveis */}
                <Button variant="secondary" text="Voltar" />
                <Button text="Avançar" />
            </div>
        </div>
    </>
}
export default Home;