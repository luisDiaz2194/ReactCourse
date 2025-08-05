import { useRef, useState } from 'react'
import InputRef from './InputRef'
import './Focus.css'
function FocusInput() {

    const inputRefName = useRef(null);
    const inputRefEmail = useRef(null);
    const inputRefPhone = useRef(null);
    const [inputValid, setInputValid] = useState("");
    const [arrayInputsValid, setArrayInputsValid] = useState([]);


    const validarInputVacio = (event) =>{
        const { name, value } = event.target;
        if (value === '') {
            setInputValid(`El campo ${name} no puede estar vacío`);
            setArrayInputsValid(prev => [...prev, name]);
            event.target.classList.add('input-error');
        } else {
            setInputValid("");
            setArrayInputsValid(prev => prev.filter(item => item !== name));
            event.target.classList.remove('input-error');
        }
    }

    const handleButton = () => {
        //si el input no es válido y esta en el array de inputs invalidados, enfocar el input
        if(arrayInputsValid.includes("InputTextEmail")){
            inputRefEmail.current.focus();
        }
        if(arrayInputsValid.includes("InputTextPhone")){        
            inputRefPhone.current.focus();
        }
        if(arrayInputsValid.includes("InputTextName")){
            inputRefName.current.focus();
        }

    }
 
    return (
        <div>
            <InputRef idInput="idInputTextName"  validarInputVacio={validarInputVacio} name="InputTextName" type="text" inputRef={inputRefName} className="inputRefForm" />
            <InputRef idInput="idInputTextEmail" validarInputVacio={validarInputVacio}  name="InputTextEmail" type="email" inputRef={inputRefEmail} className="inputRefForm" />
            <InputRef idInput="idInputTextPhone" validarInputVacio={validarInputVacio}  name="InputTextPhone" type="number" inputRef={inputRefPhone} className="inputRefForm" />
            <button onClick={handleButton} >Enfocar input</button>
           <div className='inputsInvalidos'>
           {
            arrayInputsValid.length > 0 ?
            <p>Llene los siguientes campos: {arrayInputsValid.join(', ')}</p>
            : <p>Todos los inputs son válidos</p>
           }
           </div>
        </div>
    )
}

export default FocusInput