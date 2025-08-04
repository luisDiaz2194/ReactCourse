import InputText from "./InputText"
import ButtonCreate from "./ButtonCreate"
import { useState } from "react"
import './formulario.css'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import ModalCuentaUsuario from "./ModalCuentaUsuario";

function FormularioCreate() {
    const correosRegistrados = ["lurdecan@gmail.com", "ejemplo@hotmail.com", "ejemplo2@gmail.org"]
    const [mensajeUsuario, setMensajeUsuario] = useState("");
    const [mensajePassword, setMensajePassword] = useState("");
    const [claseValidInputUsuario, setClaseValidInputUsuario] = useState("");
    const [claseValidInputPass, setClaseValidInputPass] = useState("");
    const [jsonValidacionEmail, setjsonValidacionEmail] = useState({
        mayuscula: false,
        numero: false,
        simbolo: false,
        longitud: false,
    });

    //Variables para obtener el result de cada input
    const [jsonDataInputsForm, setJsonDataInputsForm] = useState({
        usuarioValid: false,
        passValid: false,
        usuarioValue: "",
        passValue: ""
    });
    //Modal Variables
    const [modalCuentaUsuario, setModalCuentaUsuario] = useState(false);
    const [usuarioData, setUsuarioData] = useState(null);


    //Función para obtener un elemento del DOM enviado desde el hijo inputText , para cuando la validación del input sea correcta o incorrecta
    const setMessageValidationInput = (validationObj) => {
        const { validationInputName, validationResult, validationJsonPattenr, validationMessage, validationValueTarget } = validationObj;
        // Actualizar estado reactivo para saber si los campos están validados
        setJsonDataInputsForm(prev => ({
            ...prev,
            [`${validationObj.validationInputName}Valid`]: validationObj.validationResult,
            [`${validationObj.validationInputName}Value`]: validationObj.validationValueTarget
        }));


        if (validationInputName === "usuario") {
            if (validationValueTarget === "") {
                setClaseValidInputUsuario("is-invalid");
                setMensajeUsuario("El campo usuario no puede estar vacío");
                return;
            }
            if (correosRegistrados.includes(validationValueTarget)) {
                setClaseValidInputUsuario("is-invalid");
                setMensajeUsuario("Ya existe una cuenta con este correo electrónico");
                return;
            }
            setClaseValidInputUsuario(validationResult ? "is-valid" : "is-invalid");
            setMensajeUsuario(validationMessage);
        } else if (validationInputName === "pass") {
            setjsonValidacionEmail(validationJsonPattenr);
            setMensajePassword(validationMessage);
            setClaseValidInputPass(validationResult ? "is-valid" : "is-invalid");
        }
    }

    const handledClickButtonCreate = (event) => {
        event.preventDefault();
        //console.log("JsonDataForm: " + JSON.stringify(jsonDataInputsForm));
        const { usuarioValid, passValid, usuarioValue, passValue } = jsonDataInputsForm;

        if (usuarioValid && passValid) {
            const cuenta = {
                usuario: usuarioValue,
                pass: passValue
            }
            localStorage.setItem("Cuenta", JSON.stringify(cuenta));
            setUsuarioData(cuenta);
            setModalCuentaUsuario(true);
        }else{
            alert("Por favor, ingrese los datos correctamente");
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
                    <InputText className={claseValidInputPass} onValidation={setMessageValidationInput} idInput={"passwordInput"} type={"password"} name={"pass"} />
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
                    <ButtonCreate handledClickButtonCreate={handledClickButtonCreate} />
                </div>
            </div>
            {modalCuentaUsuario &&(
                <ModalCuentaUsuario usuarioData={usuarioData} onClose={() => setModalCuentaUsuario(false)} />
            )}
        </>
    )
}

export default FormularioCreate