import { Routes, Route } from "react-router-dom";
import ViewTemplates from "../pages/ViewTemplates.jsx";
import View from "../pages/View.jsx"
import Login from "../pages/Login.jsx";
import Register from "../pages/Cad.jsx";
import Create from "../pages/Create.jsx";
import ImgCropper from "../components/ui/ImgCropper.jsx";
import NewField from "../components/modal/NewField.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<ViewTemplates />} />
      <Route path="/visualizar" element={<ViewTemplates />} />
      <Route path="/criar" element={<Create />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/croppr" element={<ImgCropper />} />
      <Route path="/modal" element={<NewField isOpen={true} />} />
    </Routes>
  );
}

export default AppRoutes;