import { useState } from 'react';
import './Dropdown.css';


export default function Dropdown({ onChange, value }) {
  const [ items ] = useState([
    { title: "Red🔴", value: "Red" },
    { title: "Blue🔵", value: "Blue" },
    { title: "Yellow🟡", value: "Yellow" }
  ])
  return (
    <div>
      <select className="dropdown" onChange={(e) => onChange(e.target.value)} value={value}>
        {items.map(item => (
          <option key={item.value} value={item.value}>{item.title}</option>
        ))}
      </select>
    </div>
  )
}