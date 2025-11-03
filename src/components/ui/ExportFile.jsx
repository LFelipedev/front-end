import { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "./Button";
import ViewFields from "./ViewFields";

function ExportFile({ template, images = [], selectedFields = [], setHoveredFieldId, setExportStep }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const wrapperRef = useRef(null);

    const nextImage = () => setCurrentIndex((i) => (i + 1) % images.length);
    const prevImage = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

    const src = images[currentIndex];

    const handleExport = () => {
        const dataToSend = {
            templateId: template.id,
            images,
            selectedFields,
        };

        console.log("📤 Dados prontos para exportar:", dataToSend);
    };

    return (
        <div className="bg-[#f6f6f6] rounded-xl shadow-md p-6 flex flex-col gap-6 w-screen max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800">
                E-mail de relatório de obras
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-full p-4 min-h-[300px] flex items-center justify-center relative">
                {images.length > 0 ? (
                    <>
                        {currentIndex > 0 && (
                            <button
                                onClick={prevImage}
                                className="relative left-3 p-2 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full transition-all duration-200 shadow-lg"
                            >
                                <IoIosArrowBack size={22} />
                            </button>
                        )}
                        <div
                            ref={wrapperRef}
                            className="w-full flex justify-center items-center overflow-hidden rounded-md"
                        >
                            <ViewFields
                                key={src}
                                imageUrl={src}
                                template={template}
                                selectedFields={selectedFields}
                                hoveredFieldId={null}
                                setHoveredFieldId={setHoveredFieldId}
                            />
                        </div>
                        {currentIndex < images.length - 1 && (
                            <button
                                onClick={nextImage}
                                className="relative right-3 p-2 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full transition-all duration-200 shadow-lg"
                            >
                                <IoIosArrowForward size={22} />
                            </button>
                        )}
                    </>
                ) : (
                    <p className="text-sm text-gray-600">
                        Modelo de template para relatório de obras.
                    </p>
                )}
            </div>

            <div className="text-sm text-gray-700 flex items-center gap-4">
                <span>Selecione o formato que você deseja baixar o arquivo:</span>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" className="accent-gray-800" />
                    PDF
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" className="accent-gray-800" />
                    IMG
                </label>
            </div>
            <div className="mt-auto flex justify-end gap-x-1">
                <Button text="Voltar" variant="secondary" onClick={() => setExportStep(0)} />
                <Button text="Avançar" onClick={handleExport} />
            </div>
        </div>
    );
}

export default ExportFile;
