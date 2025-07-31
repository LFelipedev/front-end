import { useState } from "react";

export default function InputFile({onFileChange}) {
  const [previewUrl, setPreviewUrl] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      if(onFileChange){
        onFileChange(file);
      }
    }
  }

  return (
    <div className="inputfile-container">
      <label className="inputfile-label">
        Escolha uma imagem
        <input type="file" accept="image/*" onChange={handleFileChange}  required/>
      </label>
      {previewUrl && (
        <div className="preview-container">
          <img src={previewUrl} alt="Preview" className="preview-image" />
        </div>
      )}
      
    </div>
  );
}