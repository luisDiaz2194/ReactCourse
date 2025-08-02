
function InputText({ idInput, name, type, onValidation, className }) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const muestraTextoEscrito = (event) => {

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
            }

        }
    }


    return (
            <input id={idInput} name={name} type={type} className={className} onBlur={muestraTextoEscrito} />
    )
}

export default InputText