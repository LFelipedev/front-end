import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import View from "../pages/View.jsx"
import Login from "../pages/Login.jsx";
import Register from "../pages/Cad.jsx";
import Create from "../pages/Create.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view" element={<View />} />
      <Route path="/criar" element={<Create />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;