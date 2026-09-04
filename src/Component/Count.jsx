import { useState } from "react";
export default function count() {
  const [count, setcount] = useState(0);
  function add() {
    setcount(count + 1);
  }
  function remove() {
    setcount(count > 0 ? count - 1 : 0);
  }

  return (
    <div className="bg-yellow-500 rounded-2x1 h-[70vh] w-[30%] text-white flex flex-col jusitify-center item-center">
      <h1 className="text-2x1 font-bold mb-3">{count}</h1>
      <div className="flex gap-5">
        <button
          className="font-semibold bg-pink-400 rounded-2x1 px-3 py-1.5"
          onClick={add}
        >
          +
        </button>
        <button
          className="font-semibold bg-pink-400 rounded-2x1 px-3 py-1.5"
          onClick={() => setcount(0)}
        >
          Reset
        </button>
        <button
          className="font-semibold bg-pink-400 rounded-2x1 px-3 py-1.5"
          onClick={remove}
        >
          -
        </button>
      </div>
    </div>
  );
}
