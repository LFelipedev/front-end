import { useEffect, useRef, useState } from "react";
import relatorio from "../../assets/relatorio.jpeg";

function ViewFields({
  imageUrl,
  template,
  selectedFields = [],
  setHoveredFieldId
}) {
  const imgRef = useRef(null);
  const wrapperRef = useRef(null);

  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });
  const [displaySize, setDisplaySize] = useState({ w: 0, h: 0 });

  const scale = {
    scaleX: naturalSize.w ? displaySize.w / naturalSize.w : 1,
    scaleY: naturalSize.h ? displaySize.h / naturalSize.h : 1,
  };

  const src = imageUrl || relatorio;

  const updateImageSizes = () => {
    const img = imgRef.current;
    const wrapper = wrapperRef.current;
    if (!img || !wrapper) return;

    const naturalW = img.naturalWidth || 0;
    const naturalH = img.naturalHeight || 0;
    const rect = img.getBoundingClientRect();
    setNaturalSize({ w: naturalW, h: naturalH });
    setDisplaySize({ w: Math.round(rect.width), h: Math.round(rect.height) });
  };

  useEffect(() => {
    window.addEventListener("resize", updateImageSizes);
    return () => window.removeEventListener("resize", updateImageSizes);
  }, []);

  useEffect(() => {
    const t = setTimeout(updateImageSizes, 50);
    return () => clearTimeout(t);
  }, [imageUrl]);

  const handleImageLoad = () => {
    updateImageSizes();
  };

  return (
    <div className="bg-white rounded-md shadow-lg p-4 flex flex-col gap-1 mb-2">
      <h2 className="text-xl font-bold">{template?.name || "Nome do Template"}</h2>

      <div
        ref={wrapperRef}
        className="w-full flex justify-center items-center overflow-hidden rounded-md h-[60vh] bg-gray-100 relative"
      >
        <div style={{ display: "inline-block" }} className="relative">
          <img
            ref={imgRef}
            src={src}
            alt={template?.name || "template"}
            onLoad={handleImageLoad}
            className="max-h-[60vh] max-w-full object-contain block"
            draggable={false}
          />

          {displaySize.w > 0 && displaySize.h > 0 && (
            <div
              className="absolute top-0 left-0"
              style={{
                width: displaySize.w,
                height: displaySize.h,
                pointerEvents: "none",
                overflow: "hidden",
              }}
            >
              {selectedFields.map((field) => {
                const top = Math.round(field.y * scale.scaleY);
                const left = Math.round(field.x * scale.scaleX);
                const width = Math.round(field.width * scale.scaleX);
                const height = Math.round(field.height * scale.scaleY);

                return (
                  <div
                    key={field.id}
                    className={`absolute border-2 border-red-500 bg-red-500/20`}
                    style={{
                      top: `${top}px`,
                      left: `${left}px`,
                      width: `${width}px`,
                      height: `${height}px`,
                      pointerEvents: "auto",
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={() => setHoveredFieldId && setHoveredFieldId(field.id)}
                    onMouseLeave={() => setHoveredFieldId && setHoveredFieldId(null)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewFields;
