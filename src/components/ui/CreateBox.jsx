import Button from "./Button";
import { GoPlus } from "react-icons/go";
import l1img from "../../assets/l1.jpg";

//import modal
import NewField from "../../components/modal/NewField";

//cropper function
import React, { useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";

function CreateBox({ onCropChange }) {
    const cropperRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;

        if (cropper) {
            const data = cropper.getData();
            const coordCropp = {
                x: Math.round(data.x),
                y: Math.round(data.y),
                width: Math.round(data.width),
                height: Math.round(data.height),

            };
            onCropChange(coordCropp);

        }
    };

    return (
        <>
            <div className=" bg-white h-[70vh] rounded-md shadow-lg p-4 flex flex-col gap-1 justify-between">
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold">Nome do Template</h2>
                    <p>Selecione o campo que deseja adicionar no template:</p>
                </div>
                <div className="bg-cover bg-center w-full h-50">
                    <Cropper
                        src={l1img}
                        className="bg-cover bg-center h-50 w-full"
                        aspectRatio={NaN}
                        guides={true}
                        zoomOnWheel={false}
                        ref={cropperRef}
                        viewMode={3}
                        crop={onCrop}
                    />
                </div>
                <div className="flex justify-end">
                    <Button icon={<GoPlus size={20} />} text="Adicionar Campo" onClick={()=>setShowModal(!showModal)}/>
                </div>
                <NewField isOpen={showModal} isClose={() => setShowModal(false)}/>
            </div>  
        </>
    )
}
export default CreateBox;