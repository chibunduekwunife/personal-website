import React from "react";
import NavBar from "../Components/Stateless/NavBar";
import Button from "../Components/Stateless/Button";
import { useNavigate } from "react-router";
import Footer from "../Components/Stateless/Footer";
import Projects from "./Projects";


export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="font-sans pt-30">
      {/* header */}

      <NavBar />

      {/* main page content */}
      <header className="container mx-auto px-10 space-y-4 my-10 text-center">

        <h1 className="text-4xl mt-5">Student & Full Stack Developer</h1>

        <p className="text-lg w-full max-w-2/3 text-center mx-auto">
          I am a full stack developer based in Ontario, Canada. I am passionate
          about building web applications and I am constantly learning new
          technologies to improve my skills.
        </p>

        <Button text="Let's Chat!" onClick={() => navigate("/contact")} />

      </header>

      <main className="space-y-4 w-full">

        <Projects />

      </main>

      {/* footer */}

      <Footer />
    </div>
  );
}
