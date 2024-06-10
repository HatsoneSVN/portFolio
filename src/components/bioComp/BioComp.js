import React from "react";
import { Chrono } from 'react-chrono';
import Style from './bio.module.css';
import {ExperienceFullStack, ExperienceDataEngineer, ExperienceBlockchain} from './classes';
import {experiences} from './experienceSnipet';

function getDataExperties(experienceData) {
    let allExpertiesContent = [];
    experienceData.forEach(snipetExpData =>{
        let dataProjectObj = null;
        let key = snipetExpData["category"];
        console.log(key)
        let rol = snipetExpData["rol"];
        let name = snipetExpData["name"];
        let backend = snipetExpData["backend"];
        let dataBase = snipetExpData["dataBase"];
        let repository = snipetExpData["repository"];
        let methodology = snipetExpData["methodology"];
        let description = snipetExpData["description"];
        let taskManagment = snipetExpData["taskManagment"];
        let container = snipetExpData["container"];
        let isFreelance = snipetExpData["isFreelance"];
        let time = snipetExpData["time"];
        let frontend = null;
        switch (key) {
            case "FULLSTACK":
                frontend = snipetExpData["frontend"];
                dataProjectObj = new ExperienceFullStack(rol, name, backend, frontend, dataBase, repository, methodology, description, taskManagment, container, time, isFreelance)
                console.log(rol)
                allExpertiesContent.push(dataProjectObj);
                break;
            case "DATAENGINEER":
                let managmentAPI = snipetExpData["managmentAPI"];
                dataProjectObj = new ExperienceDataEngineer(rol, name, backend, null, dataBase, repository, methodology, description, taskManagment, container, managmentAPI, time, isFreelance)
                allExpertiesContent.push(dataProjectObj);
                break;
            case "BLOCKCHAIN":
                frontend = snipetExpData["frontend"];
                let smartContract = snipetExpData["smartContract"];
                let exchangeManager = snipetExpData["exchangeManager"];
                let wallet = snipetExpData["wallet"];
                dataProjectObj = new ExperienceBlockchain(rol, name, backend, null, dataBase, repository, methodology, description, taskManagment, container, smartContract,exchangeManager, wallet, time, isFreelance)
                allExpertiesContent.push(dataProjectObj);
                break;
            default:
                break;
        }        
    });
    return allExpertiesContent;
}
function Bio() {
    let customContent = [];
    const items = [];
    const projects = getDataExperties(experiences);
    projects.forEach(espElement => {
        let contentHTML = espElement.allTechHtlm();
        let name = espElement.name;
        let time = espElement.time;
        let title = {title: time};
        let allContentPerProject = [
        <div className="cardExperience">
            <h3 className={Style.titleCardEsperience}>{name}</h3>
            <div className={Style.containerDataExperience}>
                {contentHTML}
            </div>
        </div>
        ]
        customContent.push(allContentPerProject)
        items.push(title)
    });
    const customTheme = {
        primary: "gray",
        secondary: "100px",
        cardBgColor: "none",
        cardForeColor: "white",
        titleColor: "white",
        titleColorActive: "black",
    };
    return (
        <section className="relative pt-16 pb-10 min-h-screen w-full bg-transparent">
            <div className="text-white p-4 md:p-6 container mx-auto flex flex-col items-center space-y-5 md:space-y-6 rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-[60rem] mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Bio</h2>
                <Chrono items={items} theme={customTheme} mode="VERTICAL" slideShow slideItemDuration={4500}> 
                    {customContent}
                </Chrono>
            </div>
        </section>
    );
}
export default Bio;