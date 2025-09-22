//import functions of react
import { useState } from "react";
//import components
import Button from "../components/ui/Button";
import Upload from "../components/ui/Upload";
import TitlePage from "../components/layout/TitlePage";
import CreateModal from "../components/modal/CreateModal";
import Delete from "../components/modal/DeleteModal";

//import images
import l1img from "../assets/l1.jpg"

//import icons
import { CiCirclePlus } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";

function Create() {
    const iconSize = 20;
    const [openMenuList, setOpenMenuList] = useState(true);
    const [step, setStep] = useState(1);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleAvancar = () => {
        console.log("Nome:", nome);
        console.log("Descrição:", descricao);
    };

    const AddList = [
        { label: 'Título 1' },
        { label: 'Título 2' },
        { label: 'Título 3' },
        { label: 'Título 4' }
    ];

    const MenuList = [
        { icons: <TbEdit size={iconSize} />, label: 'Editar' },
        { icons: <RiDeleteBin5Fill size={iconSize} />, 
        label: <button className="cursor-pointer" onClick={()=>setShowModalDelete(!showModalDelete)}>Excluir</button> },
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
                        <div className="flex flex-col w-full h-full">
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
                            </div>

                            <div className="flex justify-end">
                                <Button text="Adicionar"
                                        onClick={nextStep}
                                />
                            </div>
                        </div>
                        </div>)}
                    {step === 2 && (
                        <>
                            <div className="flex w-full h-full bg-gray-100">
                                <div className="flex">
                                    <FaArrowLeft className="mr-3 mt-3 cursor-pointer" size={30}
                                    onClick={prevStep}
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="mt-20 flex flex-col gap-y-5">
                                        <Upload />
                                        <div className="ml-165">
                                            <Button text="Adicionar"
                                                onClick={nextStep}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {step === 3 && (
                        <div className="flex w-full bg-gray-100">
                            <div className="flex">
                                <FaArrowLeft className="mr-3 mt-3 cursor-pointer" size={30}
                                onClick={prevStep}
                                />
                            </div>
                            <div className="w-full">
                                <div className="flex gap-4 p-4 h-fit">
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
                                    <div className="bg-white rounded-md shadow-md w-100 mb-2 mt-2 p-4 flex flex-col gap-4 flex-1">
                                        <h1 className="text-xl font-bold">Caixa de Seleção</h1>
                                        <ul>
                                            {AddList.map((item, index) => {
                                                return (
                                                    <li key={index} className="px-3 py-2 rounded-md duration-300 cursor-pointer">
                                                        <div className="flex items-center gap-2">
                                                            <PiBookmarkSimple size={iconSize} />
                                                            <p>{item.label}</p>
                                                            <CiMenuKebab size={iconSize} className="ml-auto" onClick={() => setOpenMenuList(!openMenuList)} />
                                                        </div>
                                                    </li>
                                                );
                                            })

                                            }
                                        </ul>
                                        <div className="mt-auto ml-auto flex gap-x-1">
                                            <Button icon={<CiCirclePlus size={20} />} text="Adicionar Campo" />
                                            <Button text="Avancar" variant="" onClick={()=>setShowModal(!showModal)}></Button>
                                        </div>
                                        
                                    </div>
                                    <CreateModal isOpen={showModal} isClose={() => setShowModal(false)}/>
                                    <Delete isOpen={showModalDelete} isClose={() => setShowModalDelete(false)}/>
                                    {!openMenuList && (
                                        <div className="bg-white rounded-lg shadow-lg w-40 h-40  mb-2 mt-2 p-4 flex flex-col gap-4">
                                            <ul>
                                                {MenuList.map((item, index) => {
                                                    return (
                                                        <li key={index} className="px-3 py-2 rounded-md duration-300 cursor-pointer">
                                                            <div className="flex items-center gap-2">
                                                                <div>{item.icons}</div>
                                                                <p>{item.label}</p>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                                }
                                            </ul>
                                        </div>
                                    )}
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