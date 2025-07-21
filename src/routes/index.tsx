import Files from "@/pages/Files";
import Home from "@/pages/Home";
import Upload from "@/pages/Upload";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div className="animate-fade-in-up">
          <Home />
        </div>
      }
    />
    <Route
      path="/upload"
      element={
        <div className="animate-fade-in-up">
          <Upload />
        </div>
      }
    />
    <Route
      path="/files"
      element={
        <div className="animate-fade-in-up">
          <Files />
        </div>
      }
    />
  </Routes>
);

export default AppRoutes;
