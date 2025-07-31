
function NombreUsuario() {
 
  const handleClick = () => {
    alert('Bienvenido al sistema');
  }  

  return (
    <div>
        <input type="text" placeholder="Ingresa tu usuario"/>
        <button onClick={handleClick}>Ingresar</button>

    </div>
  )
}

export default NombreUsuario