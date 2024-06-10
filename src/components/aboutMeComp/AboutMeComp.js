import React from 'react';
import FaceImg from './cara.jpg';
import styles from './aboutMe.module.css';
/**
 * 
 *<img src={FaceImg} alt="Daniel Sevane" className="w-32 md:w-48 lg:w-64 rounded-full shadow-lg mb-4 md:mb-6" />
 <a href="#contact" className="inline-block bg-blue-500 text-white px-4 py-2 md:px-6 md:py-2 rounded shadow hover:bg-blue-400 text-sm md:text-base">Contacta conmigo</a>
 */
function About() {
    return (
        <section className="relative pt-16 pb-10 min-h-screen w-full bg-transparent">
            <div className={`${styles.aboutMeCard} text-white bg-black bg-opacity-70 p-4 md:p-6 container mx-auto flex flex-col items-center space-y-4 md:space-y-6 rounded-lg max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[70rem] mx-auto`}>
                <div className='titleAboutMe'>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Hello World!!</h2>
                </div>
                <div className="flex flex-col space-y-2 md:space-y-3">
                    <p className="text-sm md:text-base lg:text-lg">
                        My name is Daniel, I was born in Ponferrada, Spain, and I'm a passionate software developer specialized in three main branches within the world 
                        of software engineering: Full Stack Web Development, Data Science, and Blockchain. I currently have over four years of experience in software 
                        engineering, having started as a junior developer, developing simple code solutions, and progressed to become a tech lead, implementing architectural 
                        solutions, supervising and managing teams, while mentoring other developers.
                    </p>                   
                </div>
            </div>    
        </section>  
    );
}

export default About;

