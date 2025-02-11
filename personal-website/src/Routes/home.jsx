import React from "react";
import NavBar from "../Components/Stateless/NavBar";
import Button from "../Components/Stateless/Button";
import { useNavigate } from "react-router";


export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="font-sans">

            {/* header */}
            
            <NavBar />

            {/* main page content */}

            <main className="container mx-auto px-10 pt-3 space-y-4">

                <h1 className="text-4xl mt-5">Student & Full Stack Developer</h1>

                <Button text="Let's Chat!" handleClick={() => navigate("/contact")} />  

                <p className="text-lg w-full max-w-1/3">
                    I am a full stack developer based in Lagos, Nigeria. 
                    I am passionate about building web applications and 
                    I am constantly learning new technologies to improve my skills.
                </p>

            </main>


            {/* footer */}

            <footer className="container mx-auto px-10 pt-3">
                <p>&copy; 2021 Chibundu Ekwunife</p>
            </footer>

        </div>

    );
}