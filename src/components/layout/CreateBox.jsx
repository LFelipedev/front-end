//import images
import l1img from "../../assets/l1.jpg"

function CreateBox(){
    return(
        <>
            <div className="ml-5 bg-white rounded-md shadow-lg w-96 mb-2 mt-2 p-4 flex flex-col gap-4 flex-1">
                <h1 className="text-xl font-bold">Nome do Template</h1>
                <div className="bg-cover bg-center w-full h-50" style={{ backgroundImage: `url(${l1img})` }}></div>
                <div className="rounded-md shadow-lg mt-auto">
                    <h3 className="">Valores das Coordenadas</h3>
                    <p>x: <input type="number" placeholder="default" /></p>
                    <p>y: <input type="number" placeholder="default" /></p>
                    <p>width: <input type="number" placeholder="default" /></p>
                    <p>height: <input type="number" placeholder="default" /></p>
                </div>
            </div>
        </>
    )
}
export default CreateBox;