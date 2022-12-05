import React from "react";
import {IService} from "../../config/models/IService";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {GetServerSideProps} from "next";
import {services} from "../api/service/ServiceData";


export default function ServicePage(props:{service : IService}){

    return(
        <section>
            <div className="container">
                <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                    if(path === "[slug]"){
                        return props.service.name
                    }
                    return path;
                }} />
                <h1>{props.service.name}</h1>
                <p>{props.service.description}</p>
            </div>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {slug} = context.query

    const serviceFound = services.find( (service) => service.slug === slug);

    if(serviceFound){
        return{
            props : {
                service : serviceFound
            }
        }
    }

    return {
        notFound : true
    };
}