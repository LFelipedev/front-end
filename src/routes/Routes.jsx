import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import View from "../pages/View.jsx"
import Login from "../pages/Login.jsx";
import Register from "../pages/Cad.jsx";
import Add from "../pages/Add.jsx"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view" element={<View />} />
      <Route path="/add" element={<Add />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;