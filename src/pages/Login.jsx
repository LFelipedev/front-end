import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";

function Login(){
    return(
        <div className="flex">
            <div className="p-4 flex flex-col gap-4">
                <h1 className="text-xl font-bold">Login</h1>
                <Button variant="" text="Voltar" />
                <Button text="Avançar" />
            </div>
        </div>
    );
}
export default Login;