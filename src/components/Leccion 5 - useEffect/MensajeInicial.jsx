import {  useEffect } from 'react'

function MensajeInicial() {

   useEffect(()=>{
    console.log("Esto es como un onLoad, se ejecuta una vez al montar el componente");
    alert("¡Hola! Bienvenido al curso de React. Aquí aprenderás a crear aplicaciones web interactivas y dinámicas utilizando esta poderosa biblioteca. ¡Comencemos!");
    // Aquí puedes realizar cualquier acción que necesites al montar el componente, como cargar datos o
   },[]) // Ejecuta el efecto solo una vez al montar el componente 


  return (
    <div>MensajeInicial</div>
  )
}

export default MensajeInicial