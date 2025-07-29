import React from "react";

function Button({ icon, text, variant = 'primary', onClick }) {
  let variantClass = "";

  if (variant === "primary") {
    variantClass = "bg-[var(--vinho-primario)] text-white border border-[var(--vinho-primario)]";
  } else {
    variantClass = "bg-white text-[var(--vinho-primario)] border border-[var(--vinho-primario)]";
  }

  return (
    <button
      className={`btn-true p-1.5 rounded-lg bg-gray-50 cursor-pointer ${variantClass}`}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
