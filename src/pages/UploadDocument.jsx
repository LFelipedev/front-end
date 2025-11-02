import React, { useState, useEffect } from "react";
import Upload from "../components/ui/Upload";
import SelectBox2 from "../components/ui/SelectBox2";
import TitlePage from "../components/layout/TitlePage";
import ViewFields from "../components/ui/ViewFields";
import { useParams } from "react-router-dom";
import axios from "axios";

//import server
import { getTemplateById } from "../services/api";

function UploadDocument() {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState([]);
    const [template, setTemplate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedFields, setSelectedFields] = useState([]);
    const [hoveredFieldId, setHoveredFieldId] = useState(null);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const res = await getTemplateById(id);
                setTemplate(res);
            } catch (error) {
                console.error("Erro ao carregar template:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplate();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-10 text-gray-500">Carregando template...</p>;
    }

    if (!template) {
        return <p className="text-center mt-10 text-red-500">Template não encontrado.</p>;
    }

    return (
        <div className="flex flex-col w-full h-full">
            <TitlePage Title="Ver Templates" />

            <div className="flex flex-col lg:flex-row w-full h-full p-6 lg:p-10 gap-6">
                <div className="flex flex-col w-full lg:w-1/2 h-auto lg:h-full justify-between gap-6">
                    <div className="h-[40%]">
                        <Upload multiple
                            onFileChange={(file) => {
                                if (!file) {
                                    setSelectedImage([]);
                                    return;
                                }
                                const filesArray = Array.isArray(file) ? file : [file];
                                const previews = filesArray.map(f => URL.createObjectURL(f));
                                setSelectedImage(previews);
                            }}
                        />
                    </div>
                    <div className="">
                        {selectedImage.length > 0 &&
                            selectedImage.map((image) => (
                                <ViewFields
                                    key={image}
                                    imageUrl={image}
                                    template={template}
                                    selectedFields={selectedFields}
                                    hoveredFieldId={hoveredFieldId}
                                    setHoveredFieldId={setHoveredFieldId}
                                />
                            ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 h-auto">
                    <SelectBox2
                        templateId={template.id}
                        selectedFields={selectedFields}
                        setSelectedFields={setSelectedFields}
                        hoveredFieldId={hoveredFieldId}
                    />
                </div>
            </div>
        </div>
    );
}

export default UploadDocument;
