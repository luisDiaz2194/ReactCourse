function SaludoButton({name}){
    
    const handleClick = () =>{
        alert(`Hola ${name}, bienvenido a React!`);
    }

    return(
        <button onClick={handleClick}>Click on Me</button>
    )
}

export default SaludoButton;