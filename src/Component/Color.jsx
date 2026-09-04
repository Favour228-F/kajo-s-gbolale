import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("bg-red-800");
  function change() {
    setColor(color === "bg-red-800" ? "bg-yellow-500" : "bg-red-800");
  }
  return <div className={`h-40 w-40 ${color}`} onClick={change}></div>;
}
