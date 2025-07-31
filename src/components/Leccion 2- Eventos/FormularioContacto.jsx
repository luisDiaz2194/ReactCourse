
function FormularioContacto({name}) {

  const handleClick = (event) =>{
    event.preventDefault(); 
    alert(`Hola ${name}, Tu formulario ha sido enviado correctamente`); 
  }  

  return (
    <div>
        <form action="">
            <input type="text" />
            <button onClick={handleClick}>Clic on Me</button>
        </form>
    </div>
  )
}

export default FormularioContacto