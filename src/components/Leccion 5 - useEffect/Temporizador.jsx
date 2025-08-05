import { useEffect, useState } from 'react'

function Temporizador() {

    const [segundos, setSegundos] = useState(0);
    const [intervaloId, setIntervaloId] = useState(null);

    // 1. Leer localStorage al cargar el componente
    useEffect(() => {
        const intervarlGuardado = localStorage.getItem('temporizadorContador');
        if (intervarlGuardado) {
            setSegundos(parseInt(intervarlGuardado))
        }
        const id = setInterval(() => {
            setSegundos(segundos => segundos + 1);
        }, 1000);
        setIntervaloId(id); // guardamos el ID del intervalo

        return () => clearInterval(id); // limpiamos si el componente se desmonta
    }, []) // se ejecuta solo al montar el componente

    //2. Guardar en localStorage cada vez que cambia el estado de segundos
    useEffect(() => {
        localStorage.setItem('temporizadorContador', segundos);
    }, [segundos]); // se ejecuta cada vez que cambia 'segundos'

    //Pausar temporizador
    const toogleTemporizador = () => {
        //Si está pausado, renaudamos en el contador que iba, si no , lo pausamos
        if (intervaloId) {
            clearInterval(intervaloId); // Detener el intervalo
            setIntervaloId(null); // Limpiar el ID del intervalo
            console.log("Temporizador pausado en ", segundos, "segundos");
        } else {
            const nuevoIntervalo = setInterval(() => {
                setSegundos(prevSegundos => prevSegundos + 1);
            }, 1000);
            setIntervaloId(nuevoIntervalo); // Guardar el nuevo ID del intervalo
        }
    }

    //Reiniciar temporizador
    const handledButtonReset = () => {
        // Detener el intervalo si existe
        if (intervaloId) {
            clearInterval(intervaloId);
            setIntervaloId(null);
        }

        // Reiniciar el contador
        setSegundos(0);
        localStorage.setItem('temporizadorContador', 0); // Actualiza el LS manualmente

        // Esperar un poco para que React actualice a 0 antes de arrancar otro intervalo
        setTimeout(() => {
            const nuevoId = setInterval(() => {
                setSegundos(prev => prev + 1);
            }, 1000);
            setIntervaloId(nuevoId);
        }, 10); // Espera mínima
    };


    return (
        <div>Temporizador: {segundos}
            <br />
            <button onClick={toogleTemporizador}>{intervaloId ? "Pausar" : "Renaudar"} </button>
            <button onClick={handledButtonReset}>Reiniciar</button>
        </div>
    )
}

export default Temporizador