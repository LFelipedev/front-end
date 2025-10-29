import React, { useState, useEffect } from 'react';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import { FiUploadCloud } from "react-icons/fi";
import { message } from 'antd';

function Upload({ onFileChange }) {
    const [UploadBig, setUploadBig] = useState(true);
    const [fileName, setFileName] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);

    useEffect(() => {
        return () => {
            if (fileUrl) URL.revokeObjectURL(fileUrl);
        };
    }, [fileUrl]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const validTypes = ['image/png', 'image/jpeg'];
        const validFiles = files.filter(file => validTypes.includes(file.type));

        if (validFiles.length !== files.length) {
            message.warning('Apenas PNG e JPG são permitidos.');
        }

        const file = validFiles[0];
        if (file) {

            if (fileUrl) URL.revokeObjectURL(fileUrl);

            const url = URL.createObjectURL(file);
            setFileName(file.name);
            setFileUrl(url);
            setUploadBig(false);

            if (onFileChange) onFileChange(file);
        }
    };

    const handleRemoveFile = () => {
        if (fileUrl) URL.revokeObjectURL(fileUrl);
        setFileName(null);
        setFileUrl(null);
        setUploadBig(true);

        if (onFileChange) onFileChange(null);
    };

    return (
        <>
            {UploadBig && (
                <div className="flex flex-col bg-white mx-auto shadow-md rounded-lg gap-5 p-10 w-[90%] h-full pb-[15%]">
                    <div className="flex flex-col items-start gap-2.5">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center">Upload Arquivo</h2>
                        <p className="text-sm text-gray-600">Lorem ipsum.... Descrição do que deve ser esse upload</p>
                    </div>

                    <label
                        htmlFor="pdf-upload"
                        className="border-2 border-dashed border-gray-300 p-10 text-center block cursor-pointer rounded-xl mb-10"
                    >
                        <div className="flex flex-col items-center">
                            <div>
                                <FiUploadCloud className="text-[32px] text-gray-700" />
                            </div>

                            <p className="mt-2">
                                <span className="text-indigo-800 font-bold">Clique em Upload</span> ou arraste e solte um arquivo
                            </p>
                            <p className="text-sm text-gray-500">PNG ou JPG</p>

                            <input
                                id="pdf-upload"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleFileChange}
                                className="hidden"
                                multiple
                            />
                        </div>
                    </label>
                </div>
            )}

            {!UploadBig && (
                <div className="flex items-center bg-white mx-auto shadow-md rounded-lg gap-4 p-4 w-[90%]">
                    <div>
                        <InboxOutlined style={{ fontSize: 20, color: '#374151' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-500">relatório</div>
                        <div className="font-medium text-gray-900 truncate underline">
                            {fileName}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {fileUrl && (
                            <a
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Visualizar / Baixar"
                            >
                                <InboxOutlined />
                            </a>
                        )}

                        <button onClick={handleRemoveFile} title="Remover arquivo">
                            <DeleteOutlined />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Upload;
