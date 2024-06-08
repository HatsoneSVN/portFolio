import React from "react";
import Style from "./bio.module.css"
export class experience{
    constructor(rol, name, backend, frontend, bd, repository, methodologies, description){
        this.rol = rol;
        this.name = name;
        this.backend = backend;
        this.frontend = frontend;
        this.bd = bd;
        this.repository = repository;
        this.methodologies = methodologies;
        this.description = description;
    }
    doTechList(listOfTechnologies){
        let listHtmlPortFolio = [];
        listOfTechnologies.forEach(element => {
            let newElement = <li className="itemTech">{element}</li>;
            listHtmlPortFolio.push(newElement);
        });
        return listHtmlPortFolio;
    }
    frontendHtmlList(){
        let list = this.doTechList(this.frontend);
        return list;
    }
    backendHtmlList(){
        let list = this.doTechList(this.backend);
        return list;
    }
    bdHtmlList(){
        let list = this.doTechList(this.bd);
        return list;
    }
    repositoryHtmlList(){
        let list = this.doTechList(this.repository);
        return list;
    }
    methodologiesHtmlList(){
        let list = this.doTechList(this.methodologies);
        return list;
    }
    allTechHtlm(){
        let listFront = this.frontendHtmlList();
        let listBack = this.backendHtmlList();
        let listBd = this.bdHtmlList();
        let listRepo = this.repositoryHtmlList();
        let listMethod = this.methodologiesHtmlList();
        let dataListComplete = [
        <div>
            <p className="titleCardTechnologies">Frontend</p>
            <ul>
                {listFront}
            </ul>
        </div>,
        <div>
            <p className="titleCardTechnologies">Backend</p>
            <ul>
                {listBack}
            </ul>
        </div>,
        <div>
            <p className="titleCardTechnologies">BD</p>
            <ul>
                {listBd}
            </ul>
        </div>,
        <div>
            <p className="titleCardTechnologies">Repositories</p>
            <ul>
                {listRepo}
            </ul>
        </div>,
        <div>
            <p className="titleCardTechnologies">Methodologies</p>
            <ul>
                {listMethod}
            </ul>
        </div>,
        <div className={Style.experienceDescriptionCard}>
            <p>Description</p>
            <p className="experienceDescriptionCard">
                {this.description}
            </p>
        </div>]
        return dataListComplete;
    }
    
}
