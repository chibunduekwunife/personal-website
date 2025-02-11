import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function NavBar() {

  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white">

      <nav className="flex justify-between container mx-auto px-10 py-5">

        {/* logo */}

        <a href="/">
            <h1 className="text-xl">Chibundu Ekwunife | Full Stack Developer</h1>
        </a>

        {/* nav links */}

        <ul className="inline-flex space-x-5 left-0">

          <a href="/" className="hover:text-red-400 transition ease-in-out duration-250">
            <li>Home</li>
          </a>

          <a href="/projects" className="hover:text-red-400 transition ease-in-out duration-250">
            <li>Projects</li>
          </a>

          <Button text="Contact" handleClick={() => navigate("/contact")}/>

        </ul>
      </nav>
    </header>
  );
}
