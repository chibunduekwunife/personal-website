import React from "react";

export default function Button({
  text,
  onClick,
  type,
  className = "bg-red-500 hover:bg-red-600 px-5 py-3 text-white font-bold rounded-sm transition ease-in-out duration-250",
}) {
  
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
