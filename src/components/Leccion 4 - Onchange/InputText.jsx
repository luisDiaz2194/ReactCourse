
function InputText({ idInput, name, type, onValidation, className }) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const enviarDatosAlFormulario = (event) => {

        //validar que sea un correo electrónico
        if (name === "usuario") {
            if (event.target.value !== "") {
                if (emailPattern.test(event.target.value)) {
                    onValidation({
                        validationInputTarget: event.target,
                        validationResult: true,
                        validationValueTarget: event.target.value,
                        validationMessage: "El correo es válido",
                        validationInputName: name
                    })
                } else {
                    onValidation({
                        validationInputTarget: event.target,
                        validationResult: false,
                        validationValueTarget: event.target.value,
                        validationMessage: "El correo no es válido",
                        validationInputName: name
                    })
                }
            }else{
                onValidation({
                    validationInputTarget: event.target,
                    validationResult: false,
                    validationValueTarget: event.target.value,
                    validationMessage: "El campo usuario no puede estar vacío",
                    validationInputName: name
                })
            }

        } else if (name === "pass") {
            if (event.target.value !== "") {
                //validar que tenga al menos 8 caracteres, una mayúscula, un número y un símbolo

                if (passwordPattern.test(event.target.value)) {
                    onValidation({
                        validationInputTarget: event.target,
                        validationResult: true,
                        validationValueTarget: event.target.value,
                        validationMessage: "La contraseña es válida",
                        validationInputName: name,
                        validationJsonPattenr: {
                            mayuscula: /[A-Z]/.test(event.target.value),
                            numero: /\d/.test(event.target.value),
                            simbolo: /[@$!%*?&]/.test(event.target.value),
                            longitud: event.target.value.length >= 8
                        }
                    })
                } else {
                    onValidation({
                        validationInputTarget: event.target,
                        validationResult: false,
                        validationValueTarget: event.target.value,
                        validationMessage: "La contraseña no es válida",
                        validationInputName: name,
                        validationJsonPattenr: {
                            mayuscula: /[A-Z]/.test(event.target.value),
                            numero: /\d/.test(event.target.value),
                            simbolo: /[@$!%*?&]/.test(event.target.value),
                            longitud: event.target.value.length >= 8
                        }
                    })
                }
            }else{
                onValidation({
                    validationInputTarget: event.target,
                    validationResult: false,
                    validationValueTarget: event.target.value,
                    validationMessage: "El campo contraseña no puede estar vacío",
                    validationInputName: name,
                    validationJsonPattenr: {
                        mayuscula: false,
                        numero: false,
                        simbolo: false,
                        longitud: false
                    }
                })
            }
        }
    }


    return (
        <input id={idInput} name={name} type={type} className={className}  
         onBlur={name === "usuario" ? enviarDatosAlFormulario : undefined}
         onChange={name === "pass" ? enviarDatosAlFormulario : undefined} />
    )
}

export default InputText