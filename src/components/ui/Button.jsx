function Button ({text, variant = 'primary', onClick}){
  return(
    <button className={`btn-true p-1.5 rounded-lg bg-gray-50 cursor-pointer  
      ${variant === 'primary'
        ? 'bg-rose-950 text-white border border-rose-950' : 'bg-white text-rose-950 border border-rose-950'
       }`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
