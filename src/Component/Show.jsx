import { useState } from "react";
export default function Show() {
  const [messages, setMessages] = useState("show count");
  return (
    <div>
      <h1
        className={`text-green-950 font-bold text-4x1 flex ${messages === "show count" ? "flex" : "hidden"}`}
      >
        0
      </h1>
      <button
        className="bg-pink-500 py-2 px-2 text-sm font-semibold text-white rounded
    "
        onClick={() =>
          setMessages(messages === "show count" ? "hide count" : "show count")
        }
      >
        {messages}
      </button>
    </div>
  );
}
