import './App.css'
import Greeting from './components/Leccion 1/Greeting.jsx'

function App() {
 
  const nombres = ['Luis Ernesto', 'Ana', 'Pedro', 'Sofía', 'Jorge'];

  return (
    <>
     <ul>
     {  
        nombres.map((nombre, index) => (
            <Greeting key={index} name={nombre} />
        ))
     }
     
     </ul>
    </>
  )
}

export default App
