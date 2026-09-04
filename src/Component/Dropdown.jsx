import { useState } from "react";
export default function Dropdown() {
    const [menu, setMenu] = useState(false);
    function update() {
        setMenu(!menu);
    }
  return (
    <div>
      <div className="flex bg-amber-500 w-[20%]">
        <h1 className="font-bold text-white text-center px-2">Foods</h1>
        <p onClick={update}>{menu ? <p>❌</p> : <p>😜</p>}</p>
      </div>
      {menu && (
        <div className="text-white font-semibold bg-amber-700 text-center w-[20%] text-sm">
          <p>Rice</p>
          <p>Beans</p>
          <p>Potatoes</p>
          <p>Bread</p>
        </div>
      )}
    </div>
  );
}
