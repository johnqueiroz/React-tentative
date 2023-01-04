import './App.css';
import acad from "./acad.png"


function cadastro(){

  return <form> 
  <img src={acad} alt="Logo da academia"></img>
  <input type="text" name="email" placeholder="Ex: acad@gmail.com"/>
  <input type="password" name="senha" placeholder="**********"/>
  <button type='submit'>Entrar</button>
  </form>
}

function App() {

  return (
    <div className="App">
      {cadastro()}
    </div>
  );
}

export default App;
