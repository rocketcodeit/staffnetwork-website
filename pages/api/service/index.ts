import type { NextApiRequest, NextApiResponse } from 'next'
import {ITeamMember} from "../../../models/ITeamMember";
import {IServices} from "../../index";

const services : IServices[] = [
    {   name: "Amministrazione",
        description: "Attività amministrative, contabili e di gestione delle risorse umane dell'impresa",
        url: "/servizi/amministrazione"},

    {   name: "Consulenza di direzione aziendale",
        description: "Consulenza e affiancamento nelle operazioni strategiche aziendali.",
        url: "/servizi/consulenza-aziendale"},

    {   name: "Finanza Ordinaria e Agevolata",
        description: "Valutazione, scelta e gestione di piani d’investimento più idonei.",
        url: "/servizi/finanza"},

    {   name: "Start-up",
        description: "Consulenza e gestione di pratiche e servizi legati alle imprese di domani.",
        url: "/servizi/startup"},

    {   name: "Green & Sostenibilità",
        description: "Consulenza e gestione su strumenti finanziari  e fiscali in tema di energia, efficientamento energetico ed energie rinnovabili.",
        url: "/servizi/sostenibilita"},


    {   name: "Innovazione",
        description: "Consulenza e supporto alle imprese per piani personalizzati di digital transformation",
        url: "/servizi/sostenibilita"},

    {   name: "Agroalimentare",
        description: "Consulenza sugli strumenti finanziari e fiscali a disposizione delle aziende del settore agroalimentare.",
        url: "/servizi/agroalimentare"},

    {   name: "Internazionalizzazione",
        description: "Consulenza, pianificazione e ricerca di opportunità per espandersi sui mercati internazionali.",
        url: "/servizi/internazionalizzazione"}
];


export default (req: NextApiRequest, res: NextApiResponse) => {
    const {limit} = req.query;

    res.status(200).json(Array.isArray(limit) || !limit ? services : services.slice(0,+limit) );
}