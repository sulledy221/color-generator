import './App.css';
import { useState } from 'react'
import Dropdown from './components/Dropdown'

function App() {
  const [ color1, setColor1 ] = useState("Red")
  const [ color2, setColor2 ] = useState("Red")
  const colorResult = () => {
    if(color1 === color2) {
      return "Select different colors";
    }
    if((color1 === "Red" || color2 === "Red") && (color2 === "Blue" || color1 === "Blue")) {
      return "Purple 🟣"
    }
    if((color1 === "Red" || color2 === "Red") && (color2 === "Yellow" || color1 === "Yellow")) {
      return "Orange 🟠" 
    }
    if((color1 === "Blue" || color2 === "Blue") && (color2 === "Yellow" || color1 === "Yellow")) {
      return "Green 🟢"
    }
  }
  return (
    <div className="App">
      <Dropdown onChange={setColor1} value={color1}/>
      <Dropdown onChange={setColor2} value={color2}/>
      {colorResult()}
    </div>
  );
}

export default App;
