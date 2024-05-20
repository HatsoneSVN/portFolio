import React from "react";
import { Chrono } from 'react-chrono';
import Style from './bio.module.css';
import {experience} from './classes';
import {AllExperties} from './experienceSnipet';

function getDataExperties() {
    let allExpertiesContent = [];
    Object.keys(AllExperties).forEach(key =>{
        let snipetExpData = AllExperties[key];
        Object.keys(snipetExpData).forEach(key =>{
            let expericeData = {};
            let backend = snipetExpData[key].backend.technologies;
            let frontend = snipetExpData[key].frontend.technologies;
            let dataBase = snipetExpData[key].dataBase.technologies;
            let repository = snipetExpData[key].repository.technologies;
            let methodology = snipetExpData[key].methodology.technologies;
            let description = snipetExpData[key].description;
            let dataProjectObj = new experience(backend,frontend ,dataBase, repository, methodology, description)
            expericeData.nameProject = snipetExpData[key].name;
            expericeData.dataProject = dataProjectObj;
            allExpertiesContent.push(expericeData);
        });
    });
    return allExpertiesContent;
}
function Bio() {
    const projects = getDataExperties();
    const customContent = [];
    /*
    const proconsiUserManagmentApp = new experience(
        proconsiExperience.appUsersManagment.backend.technologies,
        proconsiExperience.appUsersManagment.frontend.technologies,
        proconsiExperience.appUsersManagment.dataBase.technologies,
        proconsiExperience.appUsersManagment.repository.technologies,
        proconsiExperience.appUsersManagment.methodology.technologies,
        proconsiExperience.appUsersManagment.description
    )
    const proconsiGpsMapping = new experience(
        proconsiExperience.appGpsMapping.backend.technologies,
        proconsiExperience.appGpsMapping.frontend.technologies,
        proconsiExperience.appGpsMapping.dataBase.technologies,
        proconsiExperience.appGpsMapping.repository.technologies,
        proconsiExperience.appGpsMapping.methodology.technologies,
        proconsiExperience.appGpsMapping.description
    )
    let prUsManHtml = proconsiUserManagmentApp.allTechHtlm();
    let prGpsMappHtml = proconsiGpsMapping.allTechHtlm();
    */
    projects.forEach(element => {
        let name = element.nameProject
        let contentHTML = element.dataProject.allTechHtlm();
        let content = <div>
            <h3 className={Style.titleCardEsperience}>{name}</h3>
            <p className="font-bold">Technologies:</p>
            <div className={Style.containerDataExperience}>
                {contentHTML}
            </div>
        </div>;
        customContent.push(content);
    });
    const items = [{
        title: "2021",
        title: "2022",
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