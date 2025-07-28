import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";


function Add(){
   return(
         <>
            <div className="flex gap-x-5">
                <Sidebar/>
                <div className=" border border-dashed w-80 p-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Nome do Template</h1>
                </div>
                <div className=" border border-dashed w-100 p-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Caixa de Seleção</h1>
                    <Button variant="secondary" text="Voltar" />
                    <Button text="Avançar" />
                </div>
            </div>
        </>
   );
}
export default Add;