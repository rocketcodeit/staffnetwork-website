import {IService} from "../../../config/models/IService";

export const services : IService[] = [
    {   slug:"amministrazione",
        name: "Amministrazione",
        short_description: "Attività amministrative, contabili e di gestione delle risorse umane dell'impresa",
    },

    {   slug: "consulenza-aziendale",
        name: "Consulenza di direzione aziendale",
        short_description: "Consulenza e affiancamento nelle operazioni strategiche aziendali.",
    },

    {   slug: "finanza",
        name: "Finanza Ordinaria e Agevolata",
        short_description: "Valutazione, scelta e gestione di piani d’investimento più idonei.",
    },

    {   slug: "startup",
        name: "Start-up",
        short_description: "Consulenza e gestione di pratiche e servizi legati alle imprese di domani.",
    },

    {   slug:"green-sostenibilita",
        name: "Green & Sostenibilità",
        short_description: "Consulenza e gestione su strumenti finanziari  e fiscali in tema di energia, efficientamento energetico ed energie rinnovabili.",
    },


    {   slug:"innovazione",
        name: "Innovazione",
        short_description: "Consulenza e supporto alle imprese per piani personalizzati di digital transformation",
        },

    {   slug:"agrolimentare",
        name: "Agroalimentare",
        short_description: "Consulenza sugli strumenti finanziari e fiscali a disposizione delle aziende del settore agroalimentare.",
    },

    {   slug:"internazionalizzazione",
        name: "Internazionalizzazione",
        short_description: "Consulenza, pianificazione e ricerca di opportunità per espandersi sui mercati internazionali.",
    }
];