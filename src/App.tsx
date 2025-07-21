import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-fox-toast";
import Header from "./components/common/Header";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main className="mx-auto px-[200px] py-8">
          <AppRoutes />
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
