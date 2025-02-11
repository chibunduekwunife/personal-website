import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function NavBar() {

  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white fixed top-0 left 0 w-full z-10 shadow-md">

      <nav className="flex items-center justify-between px-10 py-5">

        {/* logo */}

        <a href="/">
            <h1 className="text-xl">Chibundu Ekwunife | Full Stack Developer</h1>
        </a>

        {/* nav links */}

        <ul className="flex space-x-6 left-0">

          <a href="/" className="hover:text-red-400 transition ease-in-out duration-250">
            <li>Home</li>
          </a>

          <a href="/projects" className="hover:text-red-400 transition ease-in-out duration-250">
            <li>Projects</li>
          </a>

          <a href="/contact" className="hover:text-red-400 transition ease-in-out duration-250">
            <li>Contact</li>
          </a>

        </ul>
        
      </nav>

    </header>
  );
}
