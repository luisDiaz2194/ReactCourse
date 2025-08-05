
function InputRef({idInput, name, type, inputRef, className, validarInputVacio}) {
  return (
   <input type={type} name={name} ref={inputRef} className={className} id={idInput} onBlur={validarInputVacio} />
  )
}

export default InputRef