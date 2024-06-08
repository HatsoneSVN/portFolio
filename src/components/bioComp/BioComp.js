import React from "react";
import { Chrono } from 'react-chrono';
import Style from './bio.module.css';
import {experience} from './classes';
import {proconsiExperience} from './experienceSnipet';

function getDataExperties(experienceData) {
    let allExpertiesContent = [];
    experienceData.forEach(snipetExpData =>{
            let rol = snipetExpData["rol"];
            let name = snipetExpData["name"];
            let backend = snipetExpData["backend"];
            let frontend = snipetExpData["frontend"];
            let dataBase = snipetExpData["dataBase"];
            let repository = snipetExpData["repository"];
            let methodology = snipetExpData["methodology"];
            let description = snipetExpData["description"];
            let dataProjectObj = new experience(rol, name, backend,frontend ,dataBase, repository, methodology, description)
            allExpertiesContent.push(dataProjectObj);
    });
    return allExpertiesContent;
}
function Bio() {
    const projectsProconsi = getDataExperties(proconsiExperience);
    console.log(projectsProconsi)
    let customContent = [];
    projectsProconsi.forEach(element => {
        let contentHTML = element.allTechHtlm();
        let name = element.name;
        let allContentPerProject = [
        <div>
            <h3 className={Style.titleCardEsperience}>{name}</h3>
            <div className={Style.containerDataExperience}>
                {contentHTML}
            </div>
        </div>
        ]
        customContent.push(allContentPerProject)
    });
    const items = 
    [
        {
            title: "2021"
        },
        {
            title: "2022"
        }
    ];
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
            md:space-y-6 rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[50rem] mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Bio</h2>
                <Chrono items={items} theme={customTheme} mode="VERTICAL" slideShow slideItemDuration={4500}> 
                    {customContent}
                </Chrono>
            </div>
        </section>
    );
}
export default Bio;