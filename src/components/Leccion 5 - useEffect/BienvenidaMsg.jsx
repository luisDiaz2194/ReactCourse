import { useEffect } from "react"

function BienvenidaMsg({usuarioProp}) {

  //Montar en el localStorage unas variables de usuario para pruebas
  useEffect(()=>{
    localStorage.setItem("usuario", "Luis Diaz");
    //obtener el usuario del localStorage
    const usuario = localStorage.getItem("usuario");
    alert(`Hola ${usuario}, bienvenido al curso de React!`)
    alert(`Hola, ${usuarioProp}, bienvenido al curso de React!`)
  },[])



  return (
    <div>BienvenidaMsg</div>
  )
}

export default BienvenidaMsg