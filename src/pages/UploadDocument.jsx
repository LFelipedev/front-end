import { useState, useEffect } from "react";
import Upload from "../components/ui/Upload";
import SelectBox2 from "../components/ui/SelectBox2";
import TitlePage from "../components/layout/TitlePage";
import ViewFields from "../components/ui/ViewFields";
import { useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ExportFile from "../components/ui/ExportFile";

//import server
import { getTemplateById } from "../services/api";

import Button from "../components/ui/Button";

function UploadDocument() {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [template, setTemplate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedFields, setSelectedFields] = useState([]);
    const [hoveredFieldId, setHoveredFieldId] = useState(null);
    const [exportStep, setExportStep] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadedUrls, setUploadedUrls] = useState([]);

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

    const nextImage = () => setCurrentIndex((i) => (i + 1) % selectedImage.length);
    const prevImage = () => setCurrentIndex((i) => (i - 1 + selectedImage.length) % selectedImage.length);

    if (loading) {
        return <p className="text-center mt-10 text-gray-500">Carregando template...</p>;
    }

    if (!template) {
        return <p className="text-center mt-10 text-red-500">Template não encontrado.</p>;
    }

    return (
        <div className="flex flex-col w-full h-full">
            {exportStep == 0 && (
                <>
                    <TitlePage Title="Ver Templates" />

                    <div className="flex flex-col lg:flex-row w-full h-full p-6 lg:p-10 gap-6">
                        <div className="flex flex-col w-full lg:w-1/2 h-auto lg:h-full justify-between gap-6">
                            <div className="h-[40%]">
                                <Upload multiple
                                    files={uploadedFiles}
                                    fileUrls={uploadedUrls}
                                    setFiles={setUploadedFiles}
                                    setFileUrls={setUploadedUrls}
                                    onFileChange={(urls) => {
                                        if (!urls || urls.length === 0) {
                                            setSelectedImage([]);
                                            return;
                                        }
                                        setSelectedImage(urls);
                                        setCurrentIndex(0);
                                    }}
                                />
                            </div>
                            <div className="relative flex items-center justify-center mt-0.5">

                                {selectedImage.length > 0 && (
                                    <>
                                        {currentIndex > 0 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="relative left-0 p-3 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full transition-all duration-200 shadow-lg mr-1"
                                                >
                                                    <IoIosArrowBack size={22} />
                                                </button>
                                            </>
                                        )}
                                        <ViewFields
                                            key={selectedImage[currentIndex]}
                                            imageUrl={selectedImage[currentIndex]}
                                            template={template}
                                            selectedFields={selectedFields}
                                            hoveredFieldId={hoveredFieldId}
                                            setHoveredFieldId={setHoveredFieldId}
                                        />
                                        {currentIndex < selectedImage.length - 1 && (
                                            <>
                                                <button
                                                    onClick={nextImage}
                                                    className="relative right-0 p-3 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full transition-all duration-200 shadow-lg ml-1"
                                                >
                                                    <IoIosArrowForward size={22} />
                                                </button>
                                            </>
                                        )}
                                    </>
                                )}

                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 h-auto">
                            <SelectBox2
                                templateId={template.id}
                                selectedFields={selectedFields}
                                setSelectedFields={setSelectedFields}
                                hoveredFieldId={hoveredFieldId}
                                setExportStep={setExportStep}
                            />
                        </div>
                    </div>
                </>
            )}
            {exportStep == 1 && (
                <>
                    <TitlePage Title="Documento Processado" />
                    <div>
                        <ExportFile
                            template={template}
                            images={uploadedUrls}
                            selectedFields={selectedFields}
                            setHoveredFieldId={setHoveredFieldId}
                            setExportStep={setExportStep}
                        />
                    </div>

                </>
            )}
        </div>
    );
}

export default UploadDocument;
