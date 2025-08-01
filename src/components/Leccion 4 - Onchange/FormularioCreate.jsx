import InputText from "./InputText"
import ButtonCreate from "./ButtonCreate"
import { useState } from "react"
import './formulario.css'

function FormularioCreate() {

    const correosRegistrados = ["lurdecan@gmail.com", "ejemplo@hotmail.com", "ejemplo2@gmail.org"]
    //Función para obtener un elemento del DOM enviado desde el hijo inputText , para cuando la validación del input sea correcta o incorrecta
    const [mensajeUsuario, setMensajeUsuario] = useState("");
    const [mensajePassword, setMensajePassword] = useState("");
    const [claseValidInputUsuario, setClaseValidInputUsuario] = useState("");
    const [claseValidInputEmail, setClaseValidInputEmail] = useState("");

    const mostrarMensajeValidacionInputUsuario = (validationObj) => {
        if (correosRegistrados.includes(validationObj.validationValueTarget)) {
            setClaseValidInputUsuario("is-invalid");

            setMensajeUsuario("Ya existe una cuenta con este correo electrónico");
            console.log(claseValidInputUsuario);
        } else {
            if (validationObj.validationResult) {
                setMensajeUsuario(validationObj.validationMessage);
                setClaseValidInputUsuario("is-valid");
            } else {
                setClaseValidInputUsuario("is-invalid");

            }

        }
    }



    const setMessageValidationInput = (validationObj) => {
        if (validationObj.validationInputName === "usuario") {
            mostrarMensajeValidacionInputUsuario(validationObj);

        }

    }


    return (
        <>
            <h1>Formulario de Registro</h1>
            <div className="form-group">
                <label>Usuario</label>
                <InputText className={claseValidInputUsuario} onValidation={setMessageValidationInput} idInput={"usuarioInput"} type={"text"} name={"usuario"} />
                <span>{mensajeUsuario} </span>
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <InputText className={claseValidInputEmail} onValidation={setMessageValidationInput} idInput={"passwordInput"} type={"password"} name={"pass"} />
                <br />
                <div>
                    <span>Contiene al menos una Mayúscula </span> <br />
                    <span>Contiene al menos un Número </span><br />
                    <span>Contiene al menos un Símbolo </span><br />
                    <span>Contiene al menos 8 caracteres </span><br />
                    <br />
                    <span>{mensajePassword} </span>

                </div>
            </div>
            <div className="form-group">
                <ButtonCreate />
            </div>
        </>
    )
}

export default FormularioCreate