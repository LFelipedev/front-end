import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Template({ cardsOnly = false }) {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await axios.get("http://localhost:3000/templates");
                setTemplates(res.data);
            } catch (error) {
                console.error("Erro ao carregar templates:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    if (loading) {
        return <p className="text-center mt-10 text-gray-500">Carregando templates...</p>;
    }

    if (!templates || templates.length === 0) {
        return <p className="text-center mt-10 text-gray-500">Nenhum template encontrado.</p>;
    }

    const cards = templates.map((template) => (
        <div
            key={template.id}
            className="w-full sm:w-[40vh] h-[40vh] flex flex-col items-center justify-start border-2 border-[#602E31] rounded-lg bg-white hover:shadow-md transition-all duration-200"
        >
            <div className="flex h-[45%] w-full bg-[#602E31] rounded-t-md" />

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

                <Link to={`/enviar/${template.id}`}>
                    <p className="uppercase text-[#602E31] font-medium underline hover:text-[#401c1e] transition-colors">
                        Ir para template
                    </p>
                </Link>
            </div>
        </div>
    ));

    if (cardsOnly) return <>{cards}</>;

    return <div className="flex flex-wrap gap-8 justify-center p-6">{cards}</div>;
}

export default Template;
