import React from "react";

export default function Button({ text, handleClick }) {
  return (
    <button
      className="bg-red-500 hover:bg-red-600 px-5 py-3 text-white font-bold rounded-lg"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
