import { useEffect, useState } from 'react'

function Temporizador() {

    const [segundos, setSegundos] = useState(0);
    const [intervaloId, setIntervaloId] = useState(null);

    //Pausar temporizador
    const handleButtonPause = () => {
        if (intervaloId) {
            clearInterval(intervaloId); // Detener el intervalo
            setIntervaloId(null); // Limpiar el ID del intervalo
            console.log("Temporizador pausado en ", segundos, "segundos");
        }
    }
    //Reanudar temporizador
    const handledButtonRenaudar = () => {
        if (!intervaloId) {
            const intervalo = setInterval(() => {
                setSegundos(prevSegundos => prevSegundos + 1);
            }, 1000);
            setIntervaloId(intervalo); // Guardar el ID del intervalo
            console.log("Temporizador reanudado");
        }
    }
    //Reiniciar temporizador
    const handledButtonReset = () => {
        setSegundos(0);
        console.log("Temporizador reiniciado");
    }

    useEffect(() => {
        const id = setInterval(() => {
            setSegundos(segundos => segundos + 1);
        }, 1000);
        setIntervaloId(id); // guardamos el ID del intervalo

        return () => clearInterval(id); // limpiamos si el componente se desmonta
    }, []); // solo al montar

    return (
        <div>Temporizador: {segundos}
            <br />
            <button onClick={handleButtonPause}>Pausar</button>
            <button onClick={handledButtonRenaudar} >Renaudar</button>
            <button onClick={handledButtonReset}>Reiniciar</button>
        </div>
    )
}

export default Temporizador