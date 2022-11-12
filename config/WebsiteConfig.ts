import {IWebsiteConfiguration} from "./models/IWebsiteConfiguration";

const configuration : IWebsiteConfiguration = {
    headerConfiguration : {
        menuItems : [
            { name : "Home",    url: "/" },
            { name:"About",     url: "/about" }
        ],
        logo : "/vercel.svg"
    },
    footerConfiguration : {
        primaryMenu : [
            {name: "Home",              url: "/"},
            {name: "Come lavoriamo",    url: "/come-lavoriamo"},
            {name: "Clienti",           url: "/clienti"},
            {name: "Risorse",           url: "/risorse"},
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
        logo: "/vercel-white.svg"
    }
}

export default  configuration;