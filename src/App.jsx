import './App.css'
import Greeting from './components/Leccion 1/Greeting.jsx'
import SaludoButton from './components/Leccion 2- Eventos/SaludoButton.jsx';
function App() {
 
  const nombres = ['Luis Ernesto', 'Ana', 'Pedro', 'Sofía', 'Jorge'];

  return (
    <>
     <ul>
     {  
        nombres.map((nombre, key) => (
            <SaludoButton key={key} name={nombre} />
        ))
     }
     
     </ul>
    </>
  )
}

export default App
