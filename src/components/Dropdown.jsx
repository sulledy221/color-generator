import { useState } from 'react';
import './Dropdown.css';
import Generator from './Generator'

export default function Dropdown({ color }) {
  const [ items ] = useState([
    { title: "Red🔴", value: "Red" },
    { title: "Blue🔵", value: "Blue" },
    { title: "Yellow🟡", value: "Yellow" }
  ])
  return (
    <div>
      <select className="dropdown">
        {items.map(item => (
          <option key={item.value} value={item.value}>{item.title}</option>
        ))}
      </select>
      <select className="dropdown">
      {items.map(item => (
          <option key={item.value} value={item.value}>{item.title}</option>
        ))}
      </select> 
      <div></div>
    </div>
  )
}