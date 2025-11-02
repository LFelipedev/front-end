import { useState, useEffect } from "react";
import { PiTagSimple } from "react-icons/pi";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

//import server
import {getTemplateById} from "../../services/api";


function SelectBox2({
    prevStep,
    templateId,
    selectedFields,
    setSelectedFields,
    hoveredFieldId,
}) {
    const navigate = useNavigate();

    const [template, setTemplate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const res = await getTemplateById(templateId);
                setTemplate(res);
            } catch (err) {
                console.error("Erro ao buscar template:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplate();
    }, [templateId]);

    const toggleField = (field) => {
        if (selectedFields.some(f => f.id === field.id)) {
            setSelectedFields(selectedFields.filter(f => f.id !== field.id));
        } else {
            setSelectedFields([...selectedFields, field]);
        }
    };

    if (loading) return <p>Carregando...</p>;
    if (!template) return <p>Template não encontrado</p>;

    return (
        <div className="bg-white rounded-md shadow-md mb-2 mt-2 p-4 flex flex-col gap-4 flex-1">
            <h1 className="text-xl font-bold text-center">Caixa de Seleção</h1>
            <h2 className="text-lg font-semibold text-center text-gray-700">
                {template.name}
            </h2>

            {template.fields.length === 0 ? (
                <p className="text-gray-500 text-center">
                    Nenhum campo salvo para este template.
                </p>
            ) : (
                <ul className="w-full flex flex-col items-center justify-between gap-2.5">
                    {template.fields.map((field) => (
                        <li
                            key={field.id}
                            className={`w-[80%] flex flex-row items-center justify-between p-2 rounded ${hoveredFieldId === field.id ? "text-red-500 font-bold" : ""
                                }`}
                        >
                            <div key={field.id} className="flex flex-row items-center gap-5">
                                <PiTagSimple size={20} />
                                <input
                                    type="checkbox"
                                    checked={selectedFields.some(f => f.id === field.id)}
                                    onChange={() => toggleField(field)}
                                    className="text-lg cursor-pointer"
                                />
                                {field.name}
                            </div>
                            <p className="text-gray-400 text-sm pl-2">
                                x: {field.x} y: {field.y} w: {field.width} h: {field.height}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-auto flex justify-end gap-x-1">
                <Button text="Voltar" variant="secondary" onClick={() => {navigate("/");}} />
                <Button text="Avançar"/>
            </div>
        </div>
    );
}

export default SelectBox2;
