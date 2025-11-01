import { RiDeleteBin6Fill } from "react-icons/ri";
import { PiTagSimple } from "react-icons/pi";
import Button from "./Button";

//import server
import { createTemplate } from "../../services/api";

//import modal
import CreateModal from "../modal/CreateModal";
import ErrorCeate from "../modal/ErrorCeateModal";

function SelectBox({
    prevStep,
    setStep,
    modalType,
    setModalType,
    allCoordinates = [],
    setAllCoordinates,
    templateName,
    templateDescription,
    resetForm
}) {
    const handleDelete = (index) => {
        const updated = allCoordinates.filter((_, i) => i !== index);
        setAllCoordinates(updated);
    };

    const saveCoordinates = async () => {
        try {
            if (!allCoordinates.length) return;

            const templatePayload = {
                name: templateName || "Template sem nome",
                description: templateDescription || "Sem descrição",
                fields: allCoordinates.map(coord => ({
                    name: coord.label || "sem nome",
                    x: Number(coord.x || 0),
                    y: Number(coord.y || 0),
                    width: Number(coord.width || 0),
                    height: Number(coord.height || 0)
                }))
            };

            console.log("Enviando dados para o servidor:", templatePayload);

            const response = await createTemplate(templatePayload);
            console.log("Dados salvos com sucesso:", response.data);

            setModalType("success");
        } catch (error) {
            console.error("Erro ao salvar os dados:", error.response ? error.response.data : error.message);
            setModalType("error");
        }
    };

    return (
        <div className="bg-white rounded-md shadow-md mb-2 mt-2 p-4 flex flex-col items-center gap-4 flex-1">
            <h1 className="text-xl font-bold">Caixa de Seleção</h1>
            {allCoordinates.length === 0 ? (
                <p className="text-gray-500 text-center">
                    Ainda não há nenhuma caixa de seleção salva para esse documento.
                </p>
            ) : (
                <ul className="w-full flex flex-col items-center justify-between gap-2.5">
                    {allCoordinates.map((coord, index) => (
                        <li key={index} className=" w-[80%] flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-5">
                                <PiTagSimple size={20} />
                                <p className="text-lg">{coord.label}</p>
                            </div>

                            <RiDeleteBin6Fill
                                size={18}
                                className="ml-auto cursor-pointer text-[#602E31]"
                                onClick={() => handleDelete(index)}
                            />
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-auto ml-auto flex gap-x-1">
                <Button text="Voltar" variant="secondary" onClick={prevStep} />
                <Button text="Salvar" variant="primary" disabled={allCoordinates.length === 0} onClick={saveCoordinates} />
            </div>
            {modalType === "success" && (
                <CreateModal
                    isOpen={true}
                    isClose={() => setModalType(null)}
                    setStep={setStep}
                    resetForm={resetForm}
                />
            )}
            {modalType === "error" && (
                <ErrorCeate
                    isOpen={true}
                    setStep={setStep}
                    isClose={() => setModalType(null)}
                />
            )}

        </div>

    );
}

export default SelectBox;
