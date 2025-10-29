import React from "react";
import { IoClose } from "react-icons/io5";

function GenericModal({ icon, title, description, actions, onClose }) {

    return (
        <>
            <div className="fixed inset-0 m-auto flex flex-col bg-[#F8F9FA] w-[90vw] max-w-[715px] h-[80vh] max-h-[355px] overflow-hidden gap-3 px-4 pt-4 pb-8 rounded-3xl shadow-md">
                <div className="flex mx-20 flex-col items-center gap-5 pt-8">
                    <div className="flex flex-col items-center">
                        {icon && <div className="text-[150px] text-[var(--vinho-primario)]">{icon}</div>}
                        <h2 className="text-[24px] text-[#344054] font-bold">{title}</h2>
                        <p className="text-[#344054]">{description}</p>
                    </div>
                    <div className="flex gap-x-[8px]">
                        {actions && actions.map((action, index) => (
                            <React.Fragment key={index}>{action}</React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GenericModal;