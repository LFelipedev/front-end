import Sidebar from "../components/layout/Sidebar";
import TitlePage from "../components/layout/TitlePage";
import NewCropp from "../components/layout/NewCropp";
import { CiCirclePlus } from "react-icons/ci";
import l1Img from "../assets/l1.jpg";
import { Link } from "react-router-dom";

function Home() {

    const ListTemplates = [
            {
                
            },
            {
               
            },
            {
                
            },
            {
                
            }
        ];

    return (
        <>
            <div className="bg-white w-full flex justify-center">
                <div className="bg-gray-400 flex w-4/5 mt-2 mb-2">
                    <div className="mt-2 ml-2 flex flex-col items-center justify-center w-2/5 h-2/4 bg-white rounded-lg border border-pink-900">
                        <Link to="/Criar"><CiCirclePlus size={50} className="fill-pink-900" />
                        <h1 className="text-pink-900">Home</h1></Link>
                    </div>
                    <div className="mt-2 ml-2 flex flex-col items-center justify-center w-2/5 h-2/4 bg-white rounded-lg border border-pink-900">
                        <img
                            src={l1Img}
                            alt="gabarito"
                            className="rounded-md mb-auto mt-2"
                        />
                        <div className="w-fit bg-amber-200 mb-auto">
                            <p className="">Template 1</p>
                        </div>
                    </div>
                    <div className="mt-2 ml-2 flex flex-col items-center justify-center w-2/5 h-2/4 bg-white rounded-lg border border-pink-900">
                        <img
                            src={l1Img}
                            alt="gabarito"
                            className="rounded-md mb-auto mt-2 w-11/12"
                        />
                        <div className="w-fit bg-amber-200 mb-auto">
                            <p className="">Template 2</p>
                        </div>
                    </div>
                    <div className="mt-2 ml-2 flex flex-col items-center justify-center w-2/5 h-2/4 bg-white rounded-lg border border-pink-900">
                        <img
                            src={l1Img}
                            alt="gabarito"
                            className="rounded-md mb-auto mt-2 w-11/12"
                        />
                        <div className="w-fit bg-amber-200 mb-auto">
                            <p className="">Template 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Home;