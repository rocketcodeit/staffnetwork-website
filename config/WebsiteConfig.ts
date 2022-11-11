import {IWebsiteConfiguration} from "./models/IWebsiteConfiguration";

const configuration : IWebsiteConfiguration = {
    headerConfiguration : {
        menuItems : [
            { name : "Home",    url: "/" },
            { name:"About",     url: "/about" }
        ],
        logo : "/vercel.svg"
    }
}

export default  configuration;