import './App.css';
import { useState } from 'react'
import Dropdown from './components/Dropdown'
import Generator from './components/Generator';

function App() {
  const [ color1, setColor1 ] = useState("")
  const [ color2, setColor2 ] = useState("")
  const colorResult = () => {
    if(color1 === color2) {
      return "Select different colors";
    }
    if(color1 === "Red" && color2 === "Blue") {
      return "Purple 🟣"
    }
    if(color1 === "Red" && color2 === "Yellow") {
      return "Orange 🟠" 
    }
    if(color1 === "Blue" && color2 === "Yellow") {
      return "Green 🟢"
    }
  }
  return (
    <div className="App">
      <Dropdown onChange={setColor1} value={color1}/>
      <Dropdown onChange={setColor2} value={color2}/>
      <Generator />
    </div>
  );
}

export default App;
