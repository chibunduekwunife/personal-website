import React from "react";
import { useNavigate } from "react-router";

export default function ProjectCard({ projectName, projectDesc, projectLink, projectImg}) {

    const navigate = useNavigate();

    const handleProjectClick = () => {
        navigate(projectLink);
    }

    return (
        <div onClick={handleProjectClick} on className="bg-white w-96 h-96 p-6 m-4 shadow-lg rounded-lg cursor-pointer">
            <img className="shadow-2xl" src={projectImg} alt={projectName} />
            <h1 className="text-xl font-bold">{projectName}</h1>
            <p className="text-gray-700">{projectDesc}</p>
        </div>
    );
}
