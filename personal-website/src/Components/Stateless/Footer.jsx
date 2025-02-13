import React from 'react';

export default function Footer() {

    return (
        <footer className="bottom-0 w-full text-center mt-10 mx-auto px-10 py-10 bg-gradient-to-r from-gray-900 to-gray-600 text-white">

            <h1 className='text-2xl font-bold my-10'>Chaning the World with Code!</h1>

            <p className='text-gray-400 '>Let's connect on social media</p>

            <ul className="flex justify-center space-x-4 my-4 mb-10">
                <li>
                    <a href="https://twitter.com/ChibuEk">
                        <img src="https://img.icons8.com/?size=50&id=6Fsj3rv2DCmG&format=png&color=FFFFFF" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="
                    https://www.linkedin.com/in/chibundu-ekwunife-1205b4346/">
                        <img src="https://img.icons8.com/?size=50&id=60443&format=png&color=FFFFFF" alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="
                    mailto:ekwunifechibundu@gmail.com">
                        <img src="https://img.icons8.com/?size=50&id=124377&format=png&color=FFFFFF" alt="mailto:ekwunifechibundu@gmail.com" />
                    </a>
                </li>
            </ul>
            <p className='text-gray-400'>&copy; 2021 Chibundu Ekwunife</p>
            <p className='text-gray-400 text-sm mb-7'>Built with <a href="https://tailwindcss.com/" className='text-blue-400 inline-flex'> TailwindCSS </a>
            </p>
        </footer>
    )
}