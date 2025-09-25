import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

function ImgCropper(){
    const cropperRef = useRef(null);
    const [Img, setImg] = useState("");
    const [croppImg, setCroppImg] = useState("");

    const onImageChange = (e) => {
        if(e.target.files && e.target.files > 0){
            const file = e.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImg(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    return(
        <>
        <div className="p-5">
           <h2>React Cropper</h2>
           <input 
            type='file'
            accept='image/*'
            onChange={onImageChange}
            className="mb-5"
           />

           {Img &&(
            <>
                <Cropper
                    src={Img}
                    className="h-96 w-full"
                    aspectRatio={16/9}
                    guides={true}
                    ref={cropperRef}
                    viewMode={1}
                />
            </>
           )}
        </div>
        </>
    );

}
export default ImgCropper;