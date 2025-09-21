import { useEffect, useRef, useState } from "react";
import croppsJson from "../../data/Cropps.json";
import l1Img from "../../assets/l1.jpg";
import InputFile from "../ui/InputFile";
import Button from "../ui/Button";
import Upload from "../ui/Upload";

function ShowCropp() {
  const [croppsData, setCroppsData] = useState([]);
  const [hiddenCropps, setHiddenCropps] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const[open, setOpen] = useState(true);

  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    const onLoad = () => {
      if (!img) return;

      setTimeout(()=>{
        const scaleX = img.clientWidth / img.naturalWidth;
        const scaleY = img.clientHeight / img.naturalHeight;

        const cropps = [];
        const hiddenInit = {};

        croppsJson.template.forEach((item, templateIndex) => {
          if (item.TemplateName !== "temp1") return;

          item.cropps.forEach((crop, cropIndex) => {
            const index = `${templateIndex}-${cropIndex}`;
            cropps.push({
              index,
              ...crop,
              scaleX,
              scaleY,
              templateName: item.TemplateName,
            });
            hiddenInit[index] = true;
          });
        });

        setCroppsData(cropps);
        setHiddenCropps(hiddenInit);
      }, 50);
    };

    if (img && img.complete) {
      onLoad();
    } else if (img) {
      img.addEventListener("load", onLoad);
      return () => img.removeEventListener("load", onLoad);
    }
  }, [previewUrl]);

  const toggleVisibility = (index) => {
    setHiddenCropps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
  <div className="flex flex-col md:flex-row gap-5 min-w-screen min-h-screen box-border">
    {open &&(
      <>
        <div className="bg-white shadow-md rounded-[10px]">
          <div className="flex justify-center mb-4">
            <InputFile text="Escolha uma imagem" onFileChange={setPreviewUrl}/>
          </div>
          <div className="relative flex-shrink-0 w-full md:w-[600px]">
            <div className="relative w-fit ml-2 mr-2 h-auto">
              <img
                src={previewUrl || l1Img}
                alt="gabarito"
                ref={imgRef}
                className="w-full h-auto rounded-md"
              />

              {croppsData.map((crop) => (
                <div
                  key={crop.index}
                  className="absolute border-2 border-dashed border-white bg-cyan-300/10"
                  onMouseEnter={() => setHoveredIndex(crop.index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    left: crop.x * crop.scaleX + "px",
                    top: crop.y * crop.scaleY + "px",
                    width: crop.width * crop.scaleX + "px",
                    height: crop.height * crop.scaleY + "px",
                    display: hiddenCropps[crop.index] ? "none" : "block",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white pt-15 shadow-md rounded-[10px]">
          <div className="flex-1 overflow-auto h-full">
            {croppsData.map((crop) => (
              <div
                className={`mb-2 p-3 rounded-md flex w-full items-center gap-3 transition-all duration-200 ${
                  hoveredIndex === crop.index
                    ? "bg-white text-cyan-700 font-bold text-sm"
                    : "bg-transparent"
                }`}
                key={`label-${crop.index}`}
                id={`label-${crop.index}`}
              >
                <input
                  type="checkbox"
                  id={`checkbox-${crop.index}`}
                  checked={!hiddenCropps[crop.index]}
                  onChange={() => toggleVisibility(crop.index)}
                  className="transform scale-110 cursor-pointer"
                />
                <label htmlFor={`checkbox-${crop.index}`} className="text-sm w-full break-words cursor-pointer">
                  TEMPLATE: {crop.templateName} | NAME: {crop.name} | X: {crop.x} | Y: {crop.y} | W: {crop.width} | H: {crop.height}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Button text="Processar dados" onClick={()=> setOpen(!open)}/>
          </div>
        </div>
      </>
    )}
    {!open &&(
      <>
        <div className="flex w-screen h-screen bg-gray-100">
            <div className="w-screen">
                <div className="mt-20 flex flex-col gap-y-5">
                    {/*O Upload e um exemplo de tela para o fluxo, deve ser substituida pela tela para
                    baixar os templates */}
                    <Upload />
                    <div className="flex justify-center fp-4 gap-4">
                      <Button text="Voltar" variant="" onClick={()=> setOpen(!open)}/>
                      <Button text="Baixar" variant="primary"/>
                    </div>
                </div>
            </div>
        </div>
    
      </>
    )}
  </div>
);

}

export default ShowCropp;