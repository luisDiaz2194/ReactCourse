import { useState } from "react"

function Contador() {

  const [contador, setContador] = useState(0) 
  const [clics, setClics] = useState(0)

  const aumentar = () => {
    setContador(contador + 1)
    setClics(clics + 1)
  }  

  const disminuir = () => {
   if(contador > 0) {
      setContador(contador - 1)
      setClics(clics + 1)

    }else{
        alert("El contador no puede ser menor a 0")
    }
  }

  const reiniciar = () =>{
    setContador(0)
    setClics(0)
  }
  return (
    <div>
        <p>Contador: <span>{contador}</span></p>
        <button onClick={aumentar}>+</button>
        <button onClick={disminuir}>-</button>
        <button onClick={reiniciar}>Reiniciar contador</button>
        <p>Haz hecho clic {clics} veces! </p>
    </div>
  )
}

export default Contador

