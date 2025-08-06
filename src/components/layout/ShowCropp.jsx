import { useEffect, useRef, useState } from "react";
import croppsJson from "../../data/Cropps.json";
import l1Img from "../../assets/l1.jpg";
import InputFile from "../ui/InputFile";

function ShowCropp() {
  const [croppsData, setCroppsData] = useState([]);
  const [hiddenCropps, setHiddenCropps] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    const onLoad = () => {
        const scale = img.width / img.naturalWidth;
        const cropps = [];
        const hiddenInit = {};

        croppsJson.template.forEach((item, templateIndex) => {
            if (item.TemplateName !== "temp1") return;

            item.cropps.forEach((crop, cropIndex) => {
                const index = `${templateIndex}-${cropIndex}`;
                cropps.push({
                    index,
                    ...crop,
                    scale,
                    templateName: item.TemplateName,
                });
            hiddenInit[index] = true;
            });
  });

  setCroppsData(cropps);
  setHiddenCropps(hiddenInit);
};

    if (img.complete) {
      onLoad();
    } else {
      img.addEventListener("load", onLoad);
      return () => img.removeEventListener("load", onLoad);
    }
  }, []);

  const toggleVisibility = (index) => {
    setHiddenCropps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
  <div className="flex flex-col md:flex-row gap-5 p-10 bg-white rounded-[60px] shadow-md w-full h-full overflow-auto">
    <div>
      <div className=" rounded-md shadow-lg w-full h-10 mb-5"><InputFile text="Escolha uma imagem"/></div>
      <div className="relative flex-shrink-0 w-full md:w-[600px]">
        <div className="relative w-full h-auto">
          <img
            src={l1Img}
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
                left: crop.x * crop.scale + "px",
                top: crop.y * crop.scale + "px",
                width: crop.width * crop.scale + "px",
                height: crop.height * crop.scale + "px",
                display: hiddenCropps[crop.index] ? "none" : "block",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
    

    <div className="flex-1 overflow-auto max-h-[80vh]">
      {croppsData.map((crop) => (
        <div
          className={`mb-2 p-3 border-l-4 rounded-md flex items-center gap-3 transition-all duration-200 ${
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
          <label htmlFor={`checkbox-${crop.index}`} className="text-sm cursor-pointer">
            TEMPLATE: {crop.templateName} | NAME: {crop.name} | X: {crop.x} | Y: {crop.y} | W: {crop.width} | H: {crop.height}
          </label>
        </div>
      ))}
    </div>
  </div>
);

}

export default ShowCropp;