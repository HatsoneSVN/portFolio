import React from "react";
import Style from "./bio.module.css"
export class Experience{
    constructor(rol, name, backend, frontend, bd, repository, methodologies, description, taskManagment, container, time, isFreelance){
        this.rol = rol;
        this.name = name;
        this.backend = backend;
        this.frontend = frontend;
        this.bd = bd;
        this.repository = repository;
        this.methodologies = methodologies;
        this.description = description;
        this.taskManagment = taskManagment;
        this.container = container;
        this.time = time;
        this.isFreelance = isFreelance;
    }
    doTechList(listOfTechnologies){
        let listHtmlPortFolio = [];
        listOfTechnologies.forEach(element => {
            let newElement = <li className="itemTech">{element}</li>;
            listHtmlPortFolio.push(newElement);
        });
        return listHtmlPortFolio;
    }
    HtmlList(listDataTech){
        let list = null;
        if (listDataTech != null)
        {
            let list = this.doTechList(listDataTech);
            return list;
        }
        return list;
    }
    allTechHtlm(){
        let dataListComplete = [];
        let listFront = this.HtmlList(this.frontend);
        if (listFront !== null){
            let frontHtml = <div>
                <p className="titleCardTechnologies">Frontend</p>
                <ul>
                    {listFront}
                </ul>
            </div>
            dataListComplete.push(frontHtml)
        }
        let listBack = this.HtmlList(this.backend);
        if (listBack !== null){
            let backHtml = <div>
                <p className="titleCardTechnologies">Backend</p>
                <ul>
                    {listBack}
                </ul>
            </div>
            dataListComplete.push(backHtml)
        }
        let listBd = this.HtmlList(this.bd);
        if (listBd !== null){
            let bfHtml = <div>
                <p className="titleCardTechnologies">BD</p>
                <ul>
                    {listBd}
                </ul>
            </div>
            dataListComplete.push(bfHtml)
        }
        let listRepo = this.HtmlList(this.repository);
        if (listRepo !== null){
            let repoHtml = <div>
                <p className="titleCardTechnologies">Repositories</p>
                <ul>
                    {listRepo}
                </ul>
            </div>
            dataListComplete.push(repoHtml)
        }
        let listMethod = this.HtmlList(this.methodologies);
        if (listMethod !== null){
            let methHtml = <div>
                <p className="titleCardTechnologies">Methodologies</p>
                <ul>
                    {listMethod}
                </ul>
            </div>
            dataListComplete.push(methHtml)
        }
        let taskManagment = <div>
            <p className="titleCardTechnologies">Task Managment</p>
            <p>
                {this.taskManagment}
            </p>
        </div>
        dataListComplete.push(taskManagment)
        let container = <div>
            <p className="titleCardTechnologies">Container</p>
            <p>
                {this.container}
            </p>
        </div>
        dataListComplete.push(container)
        let description = <div className={Style.experienceDescriptionCard}>
            <p>Description</p>
            <p className="experienceDescriptionCard">
                {this.description}
            </p>
        </div>
        dataListComplete.push(description)
        return dataListComplete;
    }
}
export class ExperienceFullStack extends Experience{
    constructor(rol, name, backend, frontend, bd, repository, methodologies, description, taskManagment, container, time, isFreelance) {
        super(rol, name, backend, frontend, bd, repository, methodologies, description, taskManagment, container, time, isFreelance);
    }
}
export class ExperienceDataEngineer extends Experience{
    constructor(rol, name, backend, bd, frontend, repository, methodologies, description, taskManagment, container, managmentAPI, time, isFreelance) {
        super(rol, name, backend, null, bd, repository, methodologies, description, taskManagment, container, time, isFreelance);
        this.managmentAPI = managmentAPI;
    }
    allTechHtlm(){
        let htmlResult = super.allTechHtlm();
        let ListManagmentAPI = super.HtmlList(this.managmentAPI);
        if (ListManagmentAPI !== null){
            let APIHtml = <div>
                <p className="titleCardTechnologies">Managment API</p>
                <ul>
                    {ListManagmentAPI}
                </ul>
            </div>
            htmlResult.unshift(APIHtml)
        }
        return htmlResult;
    }
}
export class ExperienceBlockchain extends Experience{
    constructor(rol, name, backend, bd, frontend, repository, methodologies, description, taskManagment, container, smartContract, exchangeManager, wallet, time, isFreelance) {
        super(rol, name, backend, frontend, bd, repository, methodologies, description, taskManagment, container, time, isFreelance);
        this.smartContract = smartContract;
        this.exchangeManager = exchangeManager;
        this.wallet = wallet;
    }
    allTechHtlm(){
        let htmlResult = super.allTechHtlm();
        let ListSmartContract = super.HtmlList(this.smartContract);
        if (ListSmartContract !== null){
            let SmartHtml = <div>
                <p className="titleCardTechnologies">Smart Contract</p>
                <ul>
                    {ListSmartContract}
                </ul>
            </div>
            htmlResult.unshift(SmartHtml)
        }
        let ListExchange = super.HtmlList(this.exchangeManager);
        if (ListExchange !== null){
            let ExchangeHtml = <div>
                <p className="titleCardTechnologies">Exchange Managment</p>
                <ul>
                    {ListExchange}
                </ul>
            </div>
            htmlResult.unshift(ExchangeHtml)
        }
        let ListWallet = super.HtmlList(this.wallet);
        if (ListWallet !== null){
            let WalletHtml = <div>
                <p className="titleCardTechnologies">Wallet</p>
                <ul>
                    {ListWallet}
                </ul>
            </div>
            htmlResult.unshift(WalletHtml)
        }
        return htmlResult;
    }
}
