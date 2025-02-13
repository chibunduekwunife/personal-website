import React from "react";
import NavBar from "../Components/Stateless/NavBar";
import ProjectCard from "../Components/Stateless/ProjectCard";
import BlackJackProject from "../Assets/Images/BlackJackProject.png";

export default function Projects() {
  return (
    <div>

      <NavBar />

      <section className="bg-gradient-to-r from-gray-900 to-black h-96 space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

          <h1 className="text-4xl text-white">Projects</h1>

          <p>Here are some of the projects I have worked on:</p>

          <ul>
            <li>
              <ProjectCard projectName="BlackJack Game" projectDesc="Made a cool fun black jack game that closely matches the real thing!" projectImg={BlackJackProject}/>
            </li>
            <li>
              <ProjectCard projectName="BlackJack Game" projectDesc="Made a cool fun black jack game that closely matches the real thing!" projectImg={BlackJackProject}/>
            </li>
            <li>
              <ProjectCard projectName="BlackJack Game" projectDesc="Made a cool fun black jack game that closely matches the real thing!" projectImg={BlackJackProject}/>
            </li>
          </ul>
          
        </section>
    </div>
  );
}