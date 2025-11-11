import { useState, useEffect } from 'react';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import { FiUploadCloud } from "react-icons/fi";
import { message } from 'antd';

function Upload({ onFileChange, multiple = false, files = [], setFiles, fileUrls = [], setFileUrls }) {
    const [UploadBig, setUploadBig] = useState(true);

    useEffect(() => {
        setUploadBig(files.length === 0);
    }, [files]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const validTypes = ['image/png', 'image/jpeg'];
        const validFiles = selectedFiles.filter(file => validTypes.includes(file.type));

        if (validFiles.length !== selectedFiles.length) {
            message.warning('Apenas PNG e JPG são permitidos.');
        }

        if (validFiles.length === 0) return;

        const urls = validFiles.map(file => URL.createObjectURL(file));
        const newFiles = multiple ? [...files, ...validFiles] : validFiles;
        const newUrls = multiple ? [...fileUrls, ...urls] : urls;

        setFiles(newFiles);
        setFileUrls(newUrls);
        setUploadBig(false);

        if (onFileChange) {
            onFileChange(multiple ? newFiles : newFiles[0]);
        }
    };

    const handleRemoveFile = (index) => {
        URL.revokeObjectURL(fileUrls[index]);
        
        const updatedFiles = files.filter((_, i) => i !== index);
        const updatedUrls = fileUrls.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        setFileUrls(updatedUrls);

        if (updatedFiles.length === 0) {
            setUploadBig(true);
            if (onFileChange) onFileChange(null);
        } else if (onFileChange) {
            onFileChange(updatedUrls);
        }
    };

    return (
        <>
            {UploadBig ? (
                <div className="flex flex-col bg-white mx-auto shadow-md rounded-lg gap-5 p-10 w-[90%] h-full pb-[15%]">
                    <div className="flex flex-col items-start gap-2.5">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center">Upload Arquivo</h2>
                        <p className="text-sm text-gray-600">Envie uma imagem (PNG ou JPG).</p>
                    </div>

                    <label
                        htmlFor="pdf-upload"
                        className="border-2 border-dashed border-gray-300 p-10 text-center block cursor-pointer rounded-xl mb-10"
                    >
                        <div className="flex flex-col items-center">
                            <FiUploadCloud className="text-[32px] text-gray-700" />
                            <p className="mt-2">
                                <span className="text-indigo-800 font-bold">Clique em Upload</span> ou arraste uma imagem
                            </p>
                            <p className="text-sm text-gray-500">PNG ou JPG</p>
                            <input
                                id="pdf-upload"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleFileChange}
                                className="hidden"
                                multiple={multiple}
                            />
                        </div>
                    </label>
                </div>
            ) : (
                <div className="flex flex-col bg-white mx-auto shadow-md rounded-lg gap-2 p-4 w-[90%]">
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between border-b py-2">
                            <div className="flex items-center gap-3">
                                <InboxOutlined style={{ fontSize: 20, color: '#374151' }} />
                                <div>
                                    <div className="text-sm text-gray-500">arquivo</div>
                                    <div className="font-medium text-gray-900 truncate underline">{file.name}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {fileUrls[index] && (
                                    <a href={fileUrls[index]} target="_blank" rel="noopener noreferrer" title="Visualizar">
                                        <InboxOutlined />
                                    </a>
                                )}
                                <button onClick={() => handleRemoveFile(index)} title="Remover arquivo">
                                    <DeleteOutlined />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Upload;
