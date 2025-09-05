import Sidebar from "../components/layout/Sidebar";
import TitlePage from "../components/layout/TitlePage";

function Home() {

    return (
        <>
            <div className="flex">
                <Sidebar />
                <TitlePage Title="Home" />
            </div>
        </>
    );

}
export default Home;