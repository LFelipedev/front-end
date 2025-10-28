//import functions of react
import { useState } from "react";
//import components
import Button from "../components/ui/Button";
import Upload from "../components/ui/Upload";
import TitlePage from "../components/layout/TitlePage";
import CreateModal from "../components/modal/CreateModal";
import Delete from "../components/modal/DeleteModal";
import CreateBox from "../components/ui/CreateBox";
import SelectBox from "../components/ui/SelectBox";

//import icons
import { CiCirclePlus } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import CoordinateBox from "../components/ui/CoordinateBox";
import { PiTagSimple } from "react-icons/pi";

function Create() {
    const iconSize = 20;
    const [openMenuList, setOpenMenuList] = useState(true);
    const [step, setStep] = useState(1);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [allCoordinates, setAllCoordinates] = useState([]);
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    const handleSaveField = (fieldData) => {
        setAllCoordinates((prev) => [...prev, fieldData]);
    };


    const AddList = [
        { label: 'Título 1' },
        { label: 'Título 2' },
        { label: 'Título 3' },
        { label: 'Título 4' }
    ];

    const MenuList = [
        { icons: <TbEdit size={iconSize} />, label: 'Editar' },
        {
            icons: <RiDeleteBin5Fill size={iconSize} />,
            label: <button className="cursor-pointer" onClick={() => setShowModalDelete(!showModalDelete)}>Excluir</button>
        },
        { icons: <BiEditAlt size={iconSize} />, label: 'Renomear' }
    ];

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
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                                    />
                                    {!nome.trim() && (<span className="text-red-800 text-xs pl-1">é necessário preencher o nome</span>)}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Descrição</label>
                                    <input
                                        type="text"
                                        placeholder='Ex: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."'
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                                    />
                                    {!descricao.trim() && (<span className="text-red-800 text-xs pl-1">é necessário preencher a descrição</span>)}
                                </div>

                                <div className=" flex justify-end mt-4">
                                    <Button text="Adicionar"
                                        onClick={nextStep}
                                        disabled={!nome.trim() || !descricao.trim()}
                                    />
                                </div>
                            </div>
                        </div>)}
                    {step === 2 && (
                        <>
                            <div className="flex flex-col w-full h-full bg-gray-100">
                                <div className="w-full">
                                    <div className="flex flex-col gap-y-1">
                                        <Upload onFileChange={(file) => setUploadedImage(URL.createObjectURL(file))} />
                                            {!uploadedImage &&(<span className="text-red-800 text-xs pl-14">é necessário inserir uma imagem</span>)}
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
                                        name_template={nome}
                                        onCropChange={setCoordinates}
                                        coordinates={coordinates}
                                        onSaveField={handleSaveField}
                                        image_cropp={uploadedImage}
                                    />
                                </div>
                                <div className="w-[35%] flex flex-col gap-5">
                                    <CoordinateBox coordinates={coordinates} onChange={setCoordinates} />
                                    <SelectBox allCoordinates={allCoordinates}
                                        openMenuList={openMenuList}
                                        setOpenMenuList={setOpenMenuList}
                                        prevStep={prevStep}
                                        setStep={setStep}
                                        showModal={showModal}
                                        setShowModal={setShowModal}
                                        templateName={nome}
                                        templateDescription={descricao}
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