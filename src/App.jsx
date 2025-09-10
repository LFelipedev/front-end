//import routes
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./routes/Routes";

function App() {

  return (
    <>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <AppRoutes />
      </div> 
    </>
  );
}

export default App;