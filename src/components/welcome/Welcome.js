import React from 'react';


function Welcome() {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-white font-bold mb-4 text-4xl md:text-6xl lg:text-9xl">DANIEL SEVANE</div>                   
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
                        <p className="text-white text-sm md:text-lg lg:text-xl">SOFTWARE ENGINEER |</p>
                        <p className="text-white text-sm md:text-lg lg:text-xl">DATA ENGINEER | </p>
                        <p className="text-white text-sm md:text-lg lg:text-xl">FULL STACK & BLOCKCHAIN DEVELOPER</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
