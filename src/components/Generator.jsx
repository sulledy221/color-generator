import { useState } from "react";

export default function Generator() {
  const [ clicked, setClicked ] = useState(false);
  const [ colors ] = useState([
    { title: "Green🟢", value: "Green" },
    { title: "Orange🟠", value: "Orange" },
    { title: "Purple🟣", value: "Purple" },
  ]);
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`generator ${colors} ${clicked ? "colors" : ""}`}
    >
    </div>
      // {colors.map((color) => <Dropdown >)}
  );
}
