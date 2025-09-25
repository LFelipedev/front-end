import Sidebar from "../components/layout/Sidebar";
import TitlePage from "../components/layout/TitlePage";
import NewCropp from "../components/layout/NewCropp";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

//images
import l1Img from "../assets/l1.jpg";
import l2Img from "../assets/l2.jpg";
import l3Img from "../assets/l3.jpg";
import l4Img from "../assets/l4.jpg";
import l5Img from "../assets/l5.jpg";
import l6Img from "../assets/l6.jpg";
import l7Img from "../assets/sl1.jpg";
import l8Img from "../assets/sl2.jpg"

function Home() {

    const ListTemplates = [
        { id: 1, name: "Template 1", img: l1Img },
        { id: 2, name: "Template 2", img: l2Img },
        { id: 3, name: "Template 3", img: l3Img },
        { id: 4, name: "Template 4", img: l4Img },
        { id: 5, name: "Template 5", img: l5Img },
        { id: 6, name: "Template 6", img: l6Img },
        { id: 7, name: "Template 7", img: l7Img },
        { id: 8, name: "Template 8", img: l8Img }
        ];

    return (
        <>
            <div className="flex min-h-screen">
                <div className="bg-gray-400 p-6 m-5 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        <Link
                            to="/Criar"
                            className="flex flex-col items-center justify-center border-2 border-pink-900 rounded-lg bg-white hover:shadow-md p-6"
                        >
                            <CiCirclePlus size={50} className="text-pink-900 mb-2" />
                            <span className="text-pink-900 font-medium">CRIAR TEMPLATE</span>
                        </Link>
                        {ListTemplates.map((tpl) => (
                            <Link
                                key={tpl.id}
                                to="/view"
                                state={{ template: tpl }}
                                className="border rounded-lg bg-white shadow-sm hover:shadow-md overflow-hidden"
                            >
                                <img
                                    src={tpl.img}
                                    alt={tpl.name}
                                    className="w-full h-32 object-cover"
                                />
                                <div className="p-3">
                                    <h3 className="font-medium text-gray-700">{tpl.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}
export default Home;