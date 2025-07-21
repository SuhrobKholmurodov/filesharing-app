import { CloudUpload, File, HardDrive, Lock, Zap, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center backdrop-blur-md px-[200px] py-16 sm:px-4 sm:py-0">
      <div className="text-center">
        <div className="flex justify-center mb-6 sm:mb-4">
          <HardDrive className="w-12 h-12 text-orange-500 sm:w-8 sm:h-8" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4 sm:text-[22px]">
          Welcome to File Sharing
        </h1>
        <p className="text-lg text-gray-700 mb-6 sm:text-base">
          Upload, manage, and download your files with ease.
        </p>
        <p className="text-md text-gray-600 mb-10 sm:text-sm">
          Secure, fast, and beautifully simple – built just for you.
        </p>

        <div className="flex flex-row justify-center items-center gap-4 mb-10 sm:gap-3">
          <Link
            to="/upload"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 transition-colors shadow-md sm:px-6 sm:py-2 sm:text-base"
          >
            <CloudUpload className="mr-2" />
            Upload File
          </Link>

          <Link
            to="/files"
            className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-600 rounded-lg text-lg hover:bg-orange-100 transition-colors shadow-sm sm:px-4 sm:py-2 sm:text-base"
          >
            <File className="mr-2" />
            View Files
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8 sm:grid-cols-1 sm:gap-4 sm:mt-6">
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
            <Lock className="h-6 w-6 text-orange-500 mb-2 mx-auto sm:h-5 sm:w-5" />
            <p className="text-gray-700 font-medium sm:text-sm">
              Secure Storage
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
            <Zap className="h-6 w-6 text-orange-500 mb-2 mx-auto sm:h-5 sm:w-5" />
            <p className="text-gray-700 font-medium sm:text-sm">Fast Uploads</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
            <Smile className="h-6 w-6 text-orange-500 mb-2 mx-auto sm:h-5 sm:w-5" />
            <p className="text-gray-700 font-medium sm:text-sm">Easy to Use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
