//import functions of react 
import { useState } from "react";
import { Link } from "react-router-dom";

//imports iconsNav
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import {MdMenuOpen} from "react-icons/md";

//imports iconsTemplate
import { FiFileText } from "react-icons/fi";
import { FiFilePlus } from "react-icons/fi";
import { LuFilePen } from "react-icons/lu";
import { LuFileX } from "react-icons/lu";

//imports iconsConfig
import { FiUser } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";

//imports iconsUser
import { FaUserCircle } from "react-icons/fa";

function Sidebar(){
    const[open, setOpen] = useState(true);
    const iconSize = 30;

    const MenuTemplates = [
        {
            icons:<FiFileText size={iconSize}/>,
            to:"/view",
            label:'Visualizar'
        },
        {
            icons:<FiFilePlus size={iconSize}/>,
            to:"/add",
            label:'Adcionar/criar'
        },
        {
            icons:<LuFilePen size={iconSize}/>,
            to:"",
            label:'Editar'
        },
        {
            icons:<LuFileX size={iconSize}/>,
            to:"",
            label:'Excluir'
        }
    ];
    const MenuConfig =[
        {
            icons:<FiUser size={iconSize}/>,
            to:"/login",
            label:'Usuario'
        },
        {
            icons:<IoExitOutline size={iconSize}/>,
            to:"",
            label:'Sair'
        }
    ];

    return(
        <nav className={`shadow-md h-screen bg-black text-white duration-500 ${open? 'w-60':'w-16'}`}>

            <div className="px-3 py-2 h-10 flex justify-between items-center">
                {open &&(
                    <div className="flex items-center gap-2 ">
                        <MdCheckBoxOutlineBlank />
                        <h1>RO</h1>
                     </div>
                )}
                <MdMenuOpen size={30} className="cursor-pointer" onClick={()=> setOpen(!open)}/>   
            </div>

            <div className={`flex flex-col sm:items-center sm:gap-4 sm:py-4`}>
                {open &&(
                    <div>
                        <br />
                        <FaUserCircle size={100}/>
                        <p>Fulano de Tal</p>
                    </div>               
                )}
                {!open &&(
                    <div>
                        <FaUserCircle size={50}/>
                    </div>
                )}              
            </div>
            <ul>
                {open &&(
                    <h4 className="text-gray-500 px-3">Templates</h4>
                )}
                {!open &&(
                    <h4 className="text-gray-500 px-2">Temp</h4>
                )}
                {MenuTemplates.map((item,index)=>{
                    return(
                        <li key={index} className="px-3 py-2 hover:bg-rose-500/25 rounded-md duration-300 cursor-pointer">
                            <Link to={item.to} className="flex items-center gap-2">
                                <div>{item.icons}</div>
                                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <br/>
            <ul>
                {open &&(
                    <h4 className="text-gray-500 px-3">Configurações</h4>
                )}
                {!open &&(
                    <h4 className="text-gray-500 px-2">Config</h4>
                )}
                {MenuConfig.map((item,index)=>{
                    return(
                        <li key={index} className="px-3 py-2 hover:bg-rose-500/25 rounded-md duration-300 cursor-pointer">
                            <Link to={item.to} className="flex items-center gap-2">
                                <div>{item.icons}</div>
                                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>    
        </nav> 
    );
}

export default Sidebar;