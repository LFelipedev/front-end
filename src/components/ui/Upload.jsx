import React, { useState, useEffect } from 'react';
import { InboxOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { FiUploadCloud } from "react-icons/fi";
import { message, Input, Tooltip, Checkbox } from 'antd';

function Upload() {
    const [pdfList, setPdfList] = useState([]);
    const [mostrarSelecao, setMostrarSelecao] = useState(false);
    const [nomeSelecao, setNomeSelecao] = useState(() => {
        return localStorage.getItem('nomeSelecao') || '';
    });
    const [selecoesSalvas, setSelecoesSalvas] = useState(() => {
        const saved = localStorage.getItem('selecoesSalvas');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('nomeSelecao', nomeSelecao);
        localStorage.setItem('selecoesSalvas', JSON.stringify(selecoesSalvas));
    }, [nomeSelecao, selecoesSalvas]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);

        const newPDFs = files
            .filter((file) => file.type === 'application/pdf')
            .map((file) => ({
                url: URL.createObjectURL(file),
                name: file.name,
                size: (file.size / 1024).toFixed(2) + ' KB',
                templateName: '',
                description: '',
            }));

        if (newPDFs.length !== files.length) {
            message.warning('Apenas arquivos PDF foram adicionados.');
        }

        setPdfList((prev) => [...prev, ...newPDFs]);
    };

    return (
        <div className="flex flex-col gap-5 p-10 w-3/4 h-1/2 mx-auto shadow-2xl rounded-2xl">
            <div className="flex flex-col items-start gap-2.5">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Upload Arquivo</h2>
                <p>Lorem ipsum.... Descrição do que deve ser esse upload</p>
            </div>
            <label className="border-2 border-dashed border-gray-300 p-10 text-center block cursor-pointer rounded-xl mb-10">
                <div className="flex flex-col items-center">
                    <div>
                        <FiUploadCloud className="text-[32px] text-gray-700" />
                    </div>

                    <p className="mt-2">
                        <span className="text-indigo-800 font-bold">Clique em Upload</span> ou arraste e solte um arquivo
                    </p>
                    <p>PNG, PDF, JPG ou DOCX</p>
                    <input
                        id="pdf-upload"
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        multiple
                    />
                </div>
            </label>
        </div>
    );
}

export default Upload;
