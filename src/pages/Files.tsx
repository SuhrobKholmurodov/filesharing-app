import { useEffect, useState } from "react";
import {
  DownloadCloud,
  File,
  FolderMinus,
  HardDrive,
  Trash2,
} from "lucide-react";
import { toast } from "react-fox-toast";
import { fileTypeToIcon } from "@/utils";
import DeleteDialog from "@/components/common/DeleteDialog";
interface FileData {
  name: string;
  size: string;
  content: string;
}
const Files = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<Set<number>>(new Set());

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("files") || "[]");
    setFiles(storedFiles);
  }, []);

  const handleDownload = (file: FileData) => {
    const link = document.createElement("a");
    link.href = file.content;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSelectFile = (index: number) => {
    const newSelectedFiles = new Set(selectedFiles);
    if (newSelectedFiles.has(index)) {
      newSelectedFiles.delete(index);
    } else {
      newSelectedFiles.add(index);
    }
    setSelectedFiles(newSelectedFiles);
  };

  const handleDownloadSelected = () => {
    selectedFiles.forEach((index) => {
      handleDownload(files[index]);
    });
  };

  const handleDeleteSelected = () => {
    const updatedFiles = files.filter((_, index) => !selectedFiles.has(index));
    setFiles(updatedFiles);
    localStorage.setItem("files", JSON.stringify(updatedFiles));
    const count = selectedFiles.size;
    setSelectedFiles(new Set());
    toast.custom(
      <div className="flex items-center gap-2 text-sm font-medium">
        <span>{count} file(s) deleted successfully!</span>
      </div>,
      {
        position: "top-center",
        icon: (
          <div className="flex size-8 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
            <FolderMinus size={18} />
          </div>
        ),
      }
    );
  };

  const onConfirmSingleDelete = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    localStorage.setItem("files", JSON.stringify(newFiles));
    toast.custom(
      <div className="flex items-center gap-2 text-sm font-medium">
        <span>File deleted successfully!</span>
      </div>,
      {
        position: "top-center",
        icon: (
          <div className="flex size-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
            <Trash2 size={18} />
          </div>
        ),
      }
    );
  };

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center space-x-2">
              <HardDrive className="text-indigo-600" />
              <span>File Manager</span>
            </h1>
            <div className="flex space-x-3">
              <button
                onClick={handleDownloadSelected}
                disabled={selectedFiles.size === 0}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  selectedFiles.size === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                } transition-colors`}
              >
                <DownloadCloud size={18} className="mr-2" />
                Download ({selectedFiles.size})
              </button>
              <DeleteDialog
                onConfirm={handleDeleteSelected}
                selectedCount={selectedFiles.size}
                trigger={
                  <button
                    disabled={selectedFiles.size === 0}
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      selectedFiles.size === 0
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-red-100 text-red-600 hover:bg-red-200"
                    } transition-colors`}
                  >
                    <Trash2 size={18} className="mr-2" />
                    Delete ({selectedFiles.size})
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 flex-1">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {files.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <File className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                No files yet
              </h3>
              <p className="text-gray-500 mb-4">
                Upload your first file to get started
              </p>
              <a
                href="/upload"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Upload Files
              </a>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedFiles.has(index)}
                    onChange={() => handleSelectFile(index)}
                    className="h-4 w-4 text-indigo-600 rounded border-gray-300 mr-4"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {fileTypeToIcon(file.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleDownload(file)}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                      title="Download"
                    >
                      <DownloadCloud size={20} />
                    </button>
                    <DeleteDialog
                      onConfirm={() => onConfirmSingleDelete(index)}
                      selectedCount={1}
                      trigger={
                        <button
                          className="text-red-500 hover:text-red-700 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={20} />
                        </button>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Files;
