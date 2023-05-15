import { FiSearch } from "react-icons/fi"
import "./style.css"

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o seu CEP"
        />
        <button className="buttonSearch">
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
