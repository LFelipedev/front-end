//import functions of react
import { useState } from "react";

//import components
import Button from "../components/ui/Button";
import Upload from "../components/ui/Upload";
import TitlePage from "../components/layout/TitlePage";
import CreateBox from "../components/ui/CreateBox";
import SelectBox from "../components/ui/SelectBox";

//import icons
import CoordinateBox from "../components/ui/CoordinateBox";

function Create() {
    const [openMenuList, setOpenMenuList] = useState(true);
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [modalType, setModalType] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [allCoordinates, setAllCoordinates] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const [files, setFiles] = useState([]);
    const [fileUrls, setFileUrls] = useState([]);
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    const [touched, setTouched] = useState({
        name: false,
        description: false,
        image: false,
    });
    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const handleSaveField = (fieldData) => {
        setAllCoordinates((prev) => [...prev, fieldData]);
    };

    const resetForm = () => {
        setName("");
        setDescription("");
        setUploadedImage(null);
        setAllCoordinates([]);
        setCoordinates({ x: 0, y: 0, width: 0, height: 0 });
        setStep(1);
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);


    return (
        <>
            <div className="flex flex-col w-screen">
                <div>
                    <div>
                        <TitlePage Title="Criar template" />
                    </div>
                </div>
                <div className="w-full">
                    {step === 1 && (
                        <div className="flex flex-col mx-auto w-[90%] h-full">
                            <div className="bg-white align-top w-full p-6 rounded-lg shadow-md relative">
                                <h2 className="text-lg font-semibold mb-1">Novo Template</h2>
                                <p className="text-gray-500 text-sm mb-6">
                                    Lorem Ipsum... descrição do que é o template
                                </p>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">
                                        Nome do Template
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Ex: "Título"'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onBlur={() => handleBlur("name")}
                                        className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200 
                                        ${touched.name && !name.trim() ? "border-red-800" : "border-gray-300"}`}
                                    />
                                    {touched.name && !name.trim() && (
                                        <span className="text-red-800 text-xs pl-1">
                                            É necessário preencher o nome
                                        </span>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Descrição</label>
                                    <input
                                        type="text"
                                        placeholder='Ex: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        onBlur={() => handleBlur("description")}
                                        className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200 
                                        ${touched.description && !description.trim() ? "border-red-800" : "border-gray-300"}`}
                                    />
                                    {touched.description && !description.trim() && (
                                        <span className="text-red-800 text-xs pl-1">
                                            É necessário preencher a descrição
                                        </span>
                                    )}
                                </div>

                                <div className=" flex justify-end mt-4">
                                    <Button text="Adicionar"
                                        onClick={nextStep}
                                        disabled={!name.trim() || !description.trim()}
                                    />
                                </div>
                            </div>
                        </div>)}
                    {step === 2 && (
                        <>
                            <div className="flex flex-col w-full h-full bg-gray-100">
                                <div className="w-full">
                                    <div className="flex flex-col gap-y-1">
                                        <Upload
                                            files={files}
                                            setFiles={setFiles}
                                            fileUrls={fileUrls}
                                            setFileUrls={setFileUrls}
                                            onFileChange={(file) => {
                                                if (!file) {
                                                    setUploadedImage(null);
                                                    setPreviewImage(null);
                                                    return;
                                                }
                                                const selectedFile = Array.isArray(file) ? file[0] : file;
                                                if (!(selectedFile instanceof File)) {
                                                    console.warn("Valor inválido recebido no Upload:", selectedFile);
                                                    return;
                                                }

                                                setUploadedImage(selectedFile);
                                                const previewUrl = URL.createObjectURL(selectedFile);
                                                setPreviewImage(previewUrl);
                                            }} />
                                        <div className="flex justify-between px-[5%]">
                                            <Button
                                                text="Voltar" variant="secondary" onClick={prevStep}
                                            />
                                            <Button
                                                text="Adicionar" onClick={nextStep}
                                                disabled={!uploadedImage}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {step === 3 && (
                        <div className="w-full h-full">
                            <div className="flex flex-row justify-between mx-15">
                                <div className="w-[60%]">
                                    <CreateBox
                                        name_template={name}
                                        onCropChange={setCoordinates}
                                        coordinates={coordinates}
                                        onSaveField={handleSaveField}
                                        image_cropp={previewImage}
                                    />
                                </div>
                                <div className="w-[35%] flex flex-col gap-5">
                                    <CoordinateBox coordinates={coordinates} onChange={setCoordinates} />
                                    <SelectBox allCoordinates={allCoordinates}
                                        setAllCoordinates={setAllCoordinates}
                                        openMenuList={openMenuList}
                                        setOpenMenuList={setOpenMenuList}
                                        prevStep={prevStep}
                                        setStep={setStep}
                                        modalType={modalType}
                                        setModalType={setModalType}
                                        templateName={name}
                                        templateDescription={description}
                                        resetForm={resetForm}
                                        imageFile={uploadedImage}
                                    />

                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Create;