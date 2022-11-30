import React from "react";
import {IService} from "../../config/models/IService";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

function Service(props : IService){
    return(
        <div className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
            <h4 className="text-2xl font-medium pr-4">{props.name}</h4>
            <p className="pr-4">{props.description}</p>
            <a  href={props.url} className="btn-arrow self-end">
                <p className="mr-2">Scopri di più</p>
                <ArrowRightIcon className="w-6 stroke-primary-dark"/>
            </a>
        </div>
    );
}

export default Service;