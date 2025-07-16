function button ({text, onClick}){
  return(
    <button className="btn-true" onClick={onClick}>
      {text}
    </button>
  )
}

export default button;
