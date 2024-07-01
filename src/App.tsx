import { useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState("Bem vindo ao projeto!");

  return (
    <div>
      <h1 className='titulo'>Alex Developer</h1>
      <p>{message}</p>

      <button onClick={ () => setMessage("Estudando testes com ReactJS") }>
        Alterar Mensagem
      </button>
    </div>
  )
}

export default App
