import { CloudUpload, File, HardDrive, Lock, Zap, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] backdrop-blur-md px-6 py-16">
      <div className="max-w-3xl text-center">
        <div className="flex justify-center mb-6">
          <HardDrive className="h-12 w-12 text-orange-500" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Welcome to File Sharing
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Upload, manage, and download your files with ease.
        </p>
        <p className="text-md text-gray-600 mb-10">
          Secure, fast, and beautifully simple – built just for you.
        </p>

        <div className="flex flex-row justify-center items-center gap-4 mb-10">
          <Link
            to="/upload"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 transition-colors shadow-md"
          >
            <CloudUpload className="mr-2" />
            Upload File
          </Link>

          <Link
            to="/files"
            className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-lg text-lg hover:bg-orange-100 transition-colors shadow-sm"
          >
            <File className="mr-2" />
            View Files
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
            <Lock className="h-6 w-6 text-orange-500 mb-2 mx-auto" />
            <p className="text-gray-700 font-medium">Secure Storage</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
            <Zap className="h-6 w-6 text-orange-500 mb-2 mx-auto" />
            <p className="text-gray-700 font-medium">Fast Uploads</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
            <Smile className="h-6 w-6 text-orange-500 mb-2 mx-auto" />
            <p className="text-gray-700 font-medium">Easy to Use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
