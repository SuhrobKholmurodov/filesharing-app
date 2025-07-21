import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Files from "./pages/Files";
import Header from "./components/common/Header";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main className="mx-auto px-[200px] py-8">
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
        </main>
      </div>
    </Router>
  );
};

export default App;
