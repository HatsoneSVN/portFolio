import React from 'react';
import ImgLog from './logo.jpg';

function Header() {
    return (
        <header className="bg-black fixed top-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 py-2 z-10">
            <div className="text-white font-bold text-lg">
                <img src={ImgLog} className="w-16 h-16 rounded-lg" alt="Profile"/>
            </div>
            <nav className="flex-grow">
                <ul className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-10">
                    <li><a href="#home" className="text-white text-base sm:text-lg lg:text-xl hover:text-gray-400 font-mono font-bold">// Inicio</a></li>
                    <li><a href="#about" className="text-white text-base sm:text-lg lg:text-xl hover:text-gray-400 font-mono font-bold">// Sobre Mí</a></li>
                    <li><a href="#projects" className="text-white text-base sm:text-lg lg:text-xl hover:text-gray-400 font-mono font-bold">// Proyectos</a></li>
                    <li><a href="#contact" className="text-white text-base sm:text-lg lg:text-xl hover:text-gray-400 font-mono font-bold ">// Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
