import { useState } from "react";
import TitlePage from "../components/layout/TitlePage";
import Template from "../components/ui/Template";
import CreateTemplate from "../components/ui/CreateTemplate";
import DeleteModal from "../components/modal/DeleteModal";
import SucessDeleteModal from "../components/modal/SucessDeleteModal";
import ErrorDeleteModal from "../components/modal/ErrorDeleteModal";
import { deleteTemplate } from "../services/api";

function ViewTemplates() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleOpenModal = (template) => {
        setSelectedTemplate(template);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedTemplate) return;

        try {
            await deleteTemplate(selectedTemplate.id);

            window.dispatchEvent(new CustomEvent("templateDeleted", { detail: selectedTemplate.id }));
            
            setIsModalOpen(false);
            setSelectedTemplate(null);
            setModalType("success");
        } catch (error) {
            console.error("Erro ao deletar template:", error);

            setModalType("error");
            setIsModalOpen(false);
        }
    };
    return (
        <div className="w-full overflow-x-hidden">
            <TitlePage Title="Visualizar templates" />

            <div className="py-10">
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-items-center">
                        <CreateTemplate />
                        <Template cardsOnly onOpenDeleteModal={handleOpenModal} />
                    </div>
                </div>
            </div>
            <DeleteModal
                isOpen={isModalOpen}
                isClose={() => setIsModalOpen(false)}
                template={selectedTemplate}
                onConfirm={handleConfirmDelete}
            />
            {modalType === "success" && (
                <SucessDeleteModal
                    isOpen={true}
                    isClose={() => setModalType(null)}
                />
            )}
            {modalType === "error" && (
                <ErrorDeleteModal
                    isOpen={true}
                    isClose={() => setModalType(null)}
                />
            )}
        </div>
    );
}

export default ViewTemplates;
