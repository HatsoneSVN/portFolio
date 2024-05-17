import React from "react";
import { Chrono } from 'react-chrono';
import Style from './bio.module.css'

function Bio() {
    const customContent = [
        <div>
          <h3 className={Style.titleCardEsperience}>User Manager App / Full Stack Developer</h3>
          <p>This is the first custom card</p>
        </div>,
        <div>
          <h3 className={Style.titleCardEsperience}>Custom Card 2</h3>
          <p>This is the second custom card</p>
        </div>,
      ];
    const items = [{
        title: "2020",
    }, {
        title: "2021",   
    }];
    const customTheme = {
        primary: "gray",
        secondary: "black",
        cardBgColor: "black",
        cardForeColor: "white",
        titleColor: "white"
    };
    return (
        <section className="relative pt-16 pb-10 min-h-screen w-full bg-transparent">
            <div className="text-white p-4 md:p-6 container mx-auto flex flex-col items-center space-y-4 
            md:space-y-6 rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[46rem] mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Bio</h2>
                <Chrono items={items} theme={customTheme} mode="VERTICAL" slideShow slideItemDuration={4500}> 
                    {customContent}
                </Chrono>
            </div>
        </section>
    );
}
export default Bio;