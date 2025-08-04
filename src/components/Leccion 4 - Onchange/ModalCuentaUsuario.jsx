import React from 'react'

function ModalCuentaUsuario({ usuarioData, onClose }) {
    if (!usuarioData) {
        return null; // Si no hay datos del usuario, no renderizar nada 
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Cuenta creada</h2>
                <p><strong>Usuario:</strong> {usuarioData.usuario}</p>
                <p><strong>Contraseña:</strong> {usuarioData.pass}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default ModalCuentaUsuario