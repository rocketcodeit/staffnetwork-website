import {IWebsiteConfiguration} from "./models/IWebsiteConfiguration";

const configuration : IWebsiteConfiguration = {
    headerConfiguration : {
        menuItems : [
            {name: "Home",              url: "/"},
            {name: "Aree",           url: "/aree",
                subMenuItems:[
                    { name:"Amministrazione", url:"/aree/amministrazione"},
                    { name:"Consulenza di direzione aziendale", url:"/aree/consulenza-di-direzione-aziendale"},
                    { name:"Innovazione", url:"/aree/innovazione"},
                    { name:"Finanza Ordinaria", url:"/aree/finanza-ordinaria"},
                    { name:"Finanza Agevolata", url:"/aree/finanza-agevolata"},
                    { name:"Green e Sostenibilità", url:"/aree/green-e-sostenibilita"},
                ]},
            {name: "Come lavoriamo",    url: "/come_lavoriamo"},
            {name:"Lo studio",          url: "/lo-studio",
                subMenuItems:[
                    { name:"La storia", url:"/lo-studio#storia"},
                    { name:"Team", url:"/lo-studio#team"},
                ]
            },
            {name: "Risorse",           url: "/blog"},
            {name: "Bandi",             url: "/bandi"}
        ],
        logo : "/logo-staff_network.svg"
    },
    footerConfiguration : {
        primaryMenu : [
            {name: "Home",              url: "/"},
            {name: "Come lavoriamo",    url: "/come-lavoriamo"},
            {name: "Risorse",           url: "/blog"},
            {name: "Servizi",           url: "/servizi"}
        ],
        secondaryMenu : [
            {name: "La storia",         url: "/storia"},
            {name: "Chi siamo",         url: "/chi-siamo"},
            {name: "Vision",            url: "/vision"},
            {name: "Contatti",          url: "/contatti"}
        ],
        privacyMenu : [
            {name: "Privacy Policy",    url: "/privacy-policy"},
            {name: "Cookie Policy",     url: "/cookie-policy"},
            {name: "Termini e Condizioni",  url: "/termini-e-condizioni"}
        ],
        logo: "/logo-staff_network-white.svg"

    },
    socialMenu : [
        {name: "/assets/drawable/facebook.svg",    url: "https://www.facebook.com"},
        {name: "/assets/drawable/instagram.svg",     url: "https://www.instagram.com"},
        {name: "/assets/drawable/twitter.svg",  url: "https://www.twitter.com"}
    ],
    positionOffice : "Via Genova,59\n 70022 Altamura BA",
    openingDaysHours : "Lunedi - Venerdi\n"+ "09:00-13:00, 15:00-17:00",
    emailContact : {name:"info@staffnetwork.it", url:"mailto:info@staffnetwork.it"},
    phoneContact : {name:"0803146422", url:"tel:+390803146422"},
    shareSocial : [
        {name: "/assets/drawable/facebook.svg",    url: "https://www.facebook.com"},
        {name: "/assets/drawable/instagram.svg",     url: "https://www.instagram.com"},
        {name: "/assets/drawable/twitter.svg",  url: "https://www.twitter.com"}
    ],
}

export default configuration;