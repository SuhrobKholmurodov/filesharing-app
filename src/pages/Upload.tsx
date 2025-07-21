import { CircleCheck, CloudUpload } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import uploadIcon from "../assets/upload.png";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
    }
  };

  const handleSubmit = () => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileData = {
          name: file.name,
          size: (file.size / 1024).toFixed(2) + " KB",
          content: reader.result,
        };
        const files = JSON.parse(localStorage.getItem("files") || "[]");
        files.push(fileData);
        localStorage.setItem("files", JSON.stringify(files));
        navigate("/files");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center h-[70vh] w-full bg-gray-50 sm:bg-transparent overflow-hidden">
      <Helmet>
        <title>Upload files | FileShare</title>
        <link rel="icon" type="image/png" href={uploadIcon} />
      </Helmet>
      <div className="w-full max-w-md mx-4">
        <div className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 transform hover:shadow-2xl">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Upload Your Files
          </h1>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 transition-colors duration-200 hover:border-orange-400">
            {fileName ? (
              <div className="flex flex-col items-center">
                <CircleCheck className="text-green-500 h-12 w-12 mb-2" />
                <p className="text-gray-700 font-medium truncate w-full">
                  {fileName}
                </p>
              </div>
            ) : (
              <label className="flex flex-col items-center cursor-pointer">
                <CloudUpload className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-gray-500 mb-2">
                  Click to select or drag and drop
                </p>
                <p className="text-sm text-gray-400">
                  Supported formats: All types
                </p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!file}
            className={`w-full py-3 px-4 rounded-lg font-medium shadow-md transition-all duration-300 ${
              file
                ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 transform hover:-translate-y-1"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {file ? "Upload Now" : "Select File First"}
          </button>

          {file && (
            <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center break-words">
              <p className="text-sm text-gray-600">
                Ready to upload:
                <span className="font-medium break-words">{fileName}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
