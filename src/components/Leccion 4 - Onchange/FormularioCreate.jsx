import InputText from "./InputText"
import ButtonCreate from "./ButtonCreate"
import { use, useState } from "react"
import './formulario.css'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";


function FormularioCreate() {
    const correosRegistrados = ["lurdecan@gmail.com", "ejemplo@hotmail.com", "ejemplo2@gmail.org"]
    //Función para obtener un elemento del DOM enviado desde el hijo inputText , para cuando la validación del input sea correcta o incorrecta
    const [mensajeUsuario, setMensajeUsuario] = useState("");
    const [mensajePassword, setMensajePassword] = useState("");
    const [claseValidInputUsuario, setClaseValidInputUsuario] = useState("");
    const [claseValidInputEmail, setClaseValidInputEmail] = useState("");
    const [jsonValidacionEmail, setjsonValidacionEmail] = useState({
        mayuscula: false,
        numero: false,
        simbolo: false,
        longitud: false,
    });

    const mostrarMensajeValidacionInputUsuario = (validationObj) => {
        if (validationObj.validationInputTarget.value === "") {
            setClaseValidInputUsuario("is-invalid");
            setMensajeUsuario("El campo usuario no puede estar vacío");
            console.log("adsasd")
            return;
        }
        if (correosRegistrados.includes(validationObj.validationValueTarget)) {
            setClaseValidInputUsuario("is-invalid");
            setMensajeUsuario("Ya existe una cuenta con este correo electrónico");
        } else {
            if (validationObj.validationResult) {
                setMensajeUsuario(validationObj.validationMessage);
                setClaseValidInputUsuario("is-valid");
            } else {
                setClaseValidInputUsuario("is-invalid");
                setMensajeUsuario(validationObj.validationMessage);
            }
        }
    }
    const setMessageValidationInput = (validationObj) => {
        if (validationObj.validationInputName === "usuario") {
            mostrarMensajeValidacionInputUsuario(validationObj);
        } else if (validationObj.validationInputName === "pass") {
            setjsonValidacionEmail(validationObj.validationJsonPattenr);
            if (validationObj.validationResult) {
                setMensajePassword(validationObj.validationMessage);
                setClaseValidInputEmail("is-valid");
            } else {
                setMensajePassword(validationObj.validationMessage);
                setClaseValidInputEmail("is-invalid");
            }
        }
    }
    return (
        <>
            <div className="formulario">
                <h1>Formulario de Registro</h1>
                <div className="form-group">
                    <label>Usuario</label>
                    <InputText className={claseValidInputUsuario} onValidation={setMessageValidationInput} idInput={"usuarioInput"} type={"text"} name={"usuario"} />
                    <span className={`message-input ${claseValidInputUsuario}`}>{mensajeUsuario} </span>
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <InputText className={claseValidInputEmail} onValidation={setMessageValidationInput} idInput={"passwordInput"} type={"password"} name={"pass"} />
                    <div className="lista-validacion">
                        <span className="list-pass">
                            {   
                            jsonValidacionEmail.mayuscula ? <AiOutlineCheckCircle className="icono-validacion-pass validacion-ok" /> : <AiOutlineCloseCircle className="icono-validacion-pass validacion-noOk" />
                            }  Contiene al menos una Mayúscula</span>
                        <span className="list-pass">{
                            jsonValidacionEmail.numero ? <AiOutlineCheckCircle className="icono-validacion-pass validacion-ok" /> : <AiOutlineCloseCircle className="icono-validacion-pass validacion-noOk" />} Contiene al menos un Número </span>
                        <span className="list-pass">{
                            jsonValidacionEmail.simbolo ? <AiOutlineCheckCircle className="icono-validacion-pass validacion-ok" /> : <AiOutlineCloseCircle className="icono-validacion-pass validacion-noOk" />} Contiene al menos un Símbolo </span>
                        <span className="list-pass">{
                            jsonValidacionEmail.longitud ? <AiOutlineCheckCircle className="icono-validacion-pass validacion-ok" /> : <AiOutlineCloseCircle className="icono-validacion-pass validacion-noOk" />} Contiene al menos 8 caracteres </span>
                    </div>

                </div>
                <div className="form-group">
                    <ButtonCreate />
                </div>
            </div>
        </>
    )
}

export default FormularioCreate