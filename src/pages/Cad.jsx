import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";

function Cad(){
    return(
        <div className="flex">
            <div className="p-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">Register</h1>

            {/* Botões visíveis */}
            <Button variant="secondary" text="Voltar" />
            <Button text="Avançar" />
            </div>
        </div>
    );
}
export default Cad;