// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

//component to avoid repetition
function Square({ value }) {
  const [name, setName] = useState(null);

  function handleButtonClick() {
    setName("X")
    console.log("Click action", name);
  }

  return (
    <button onClick={handleButtonClick} className="square">{name}</button>
  );

}
function App() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />

      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />

      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />

      </div>

    </>

  );
}

export default App;
