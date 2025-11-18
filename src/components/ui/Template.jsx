import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import l1img from "../../assets/l1.jpg";

import { RiDeleteBin6Fill } from "react-icons/ri";

//import server
import { getTemplate } from "../../services/api";

function Template({ cardsOnly = false, onOpenDeleteModal }) {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await getTemplate();
                setTemplates(res);
            } catch (error) {
                console.error("Erro ao carregar templates:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    useEffect(() => {
        const handleDeleted = (e) => {
            const deletedId = e.detail;
            setTemplates((prev) => prev.filter((t) => t.id !== deletedId));
        };
        window.addEventListener("templateDeleted", handleDeleted);
        return () => window.removeEventListener("templateDeleted", handleDeleted);
    }, []);

    if (loading) {
        return <p className="text-center mt-10 text-gray-500">Carregando templates...</p>;
    }

    if (!templates || templates.length === 0) {
        return <p className="text-center mt-10 text-gray-500">Nenhum template encontrado.</p>;
    }
    console.log(API_URL);

    const cards = Array.isArray(templates) && templates.map((template) => (
        <div
            key={template.id}
            className="w-full sm:w-[40vh] h-[40vh] flex flex-col items-center justify-start border-2 border-[#602E31] rounded-lg bg-white hover:shadow-md transition-all duration-200"
        >
            <div className="h-[45%] w-full rounded-t-md overflow-hidden">
                <img
                    src={template.imagePath ? `${API_URL}/uploads/${template.imagePath}` : l1img}
                    alt={template.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 flex flex-col justify-between h-[55%] w-full">
                <div>
                    <h2 className="font-semibold text-lg uppercase text-[#1a1a1a]">
                        {template.name}
                    </h2>
                    <p className="text-xs text-gray-600">
                        Criado em{" "}
                        {new Date(template.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "long",
                        })}
                    </p>
                    <p className="text-sm mt-1 text-gray-700">
                        Descrição: {template.description || "Sem descrição"}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <Link to={`/enviar/${template.id}`}>
                        <p className="uppercase text-[#602E31] font-medium underline hover:text-[#401c1e] transition-colors">
                            Ir para template
                        </p>
                    </Link>
                    <RiDeleteBin6Fill
                        size={18}
                        className="cursor-pointer text-[#602E31] hover:text-[#1a1a1a] transition-colors"
                        onClick={() => onOpenDeleteModal(template)}
                    />
                </div>
            </div>

        </div>
    ));

    if (cardsOnly) return <>{cards}</>;

    return <div className="flex flex-wrap gap-8 justify-center p-6">{cards}</div>;
}

export default Template;
