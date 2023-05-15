import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import api from "./services/api"
import "./style.css"

function App() {

  /*
    input - NOME DO ESTADO
    setInput - FUNÇÃO QUE TROCA O VALOR DO ESTADO
  */
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    //01310930/json/
    if(input === ''){
      alert("Preencha algum CEP!");
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("[ERRO!]");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o seu CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)} //toda vez que algo é digitado o set input é chamado e o valor digitado é passado para a função
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size="25" color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 41830532</h2>

        <span>Rua teste</span>
        <span>Complemento: alguma coisa</span>
        <span>Pituba</span>
        <span>Campo grande -MS</span>
      </main>
    </div>
  );
}

export default App;
