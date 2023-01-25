import {IAnnouncement} from "../../../models/IAnnouncement";



export const announcements : IAnnouncement[] = [
    {
        title: "Bando Nuove Iniziative D’Impresa 2022",
        slug: "bando-nidi",
        area: [{
            id:1,
            slug:"amministrazione",
            title:"Amministrazione"
        }],
        img: "/assets/img/post_image.png",
        details:{
            summary:"Con il Bando NIDI puoi ottenere un finanziamento a fondo perduto regionale da € 10.000 a € 150.000 per sostenere i costi di avviamento del tuo progetto.",
            expirationDate: new Date(2022, 8, 12).toDateString(),
            obj:[{
                id:"territory",
                title:"Territorio",
                value: "Puglia"
            }]
        },
        description: "Il bando NIDI consiste in un finanziamento  fondo perduto erogato dalla regione Puglia.\nIl finanziamento copre fino al 100% dei fondi che ti servono per aprire la tua impresa, IVA esclusa.\n",
        recipients: "Aziende",
        obj:[{
            id:"description", title: "Descrizione bando", value:"Il bando NIDI consiste in un finanziamento  fondo perduto erogato dalla regione Puglia.\n" +
                "Il finanziamento copre fino al 100% dei fondi che ti servono per aprire la tua impresa, IVA esclusa.\n" +
                "\n" +
                "Sono esclusi i settori Agricoltura e Commercio (non elettronico), oltre a specifiche configurazioni d’impresa, riportate in modo dettagliato all’interno dell’avviso pubblico “Nuove Iniziative d’Impresa” di PugliaSviluppo.\n"
        },
            {
                id:"description", title: "Descrizione bando", value:"Il bando NIDI consiste in un finanziamento  fondo perduto erogato dalla regione Puglia.\n" +
                    "Il finanziamento copre fino al 100% dei fondi che ti servono per aprire la tua impresa, IVA esclusa.\n" +
                    "\n" +
                    "Sono esclusi i settori Agricoltura e Commercio (non elettronico), oltre a specifiche configurazioni d’impresa, riportate in modo dettagliato all’interno dell’avviso pubblico “Nuove Iniziative d’Impresa” di PugliaSviluppo.\n"
            }
        ],
        buyable:{
            price: 340.34,
            discountPrice: 200.4
        },
        requestForm:{
            title:"Verifica gratuitamente se possiedi i requisiti",
            text:"Vuoi beneficiare di questa misura?\n Compila il modulo e ci metteremo con te per verificare la presenza dei requisiti per la pratica.",
            field:[
                {
                  id:"nome",
                  size: 50,
                  type:"text",
                  placeholder:"Nome",
                  required: false,
                },
                {
                    id:"cognome",
                    size: 50,
                    type:"text",
                    placeholder:"Cognome",
                    required: false,
                },
                {
                    id:"telefono",
                    size: 50,
                    type:"tel",
                    placeholder:"Telefono",
                    required: false,
                },
                {
                    id:"email",
                    size: 50,
                    type:"email",
                    placeholder:"Email",
                    required: true,
                },
                {
                    id:"professional-category",
                    size: 100,
                    type:"select",
                    options :{
                        option:[
                            {
                                title:"In quale categoria ti riconosci?",
                                value:"",
                                selected:true,
                                disabled:true
                            },
                            {
                                title:"1 categoria",
                                value:"1",
                                selected:false
                            },
                            {
                                title:"2 categoria",
                                value:"2",
                                selected:false
                            }
                        ],
                    } ,
                    required: true,
                },
                {
                    id:"message",
                    type:"textarea",
                    size: 100,
                    placeholder: "Scrivi la tua richiesta",
                    required: false
                }
            ],
            button:[{
                id:"submit_button",
                type:"submit",
                text:"Invia"
            }]
        }
    },

    {
        title: "Bando Nuove Iniziative D’Impresa 2023",
        slug: "bando-nidi2",
        area: [{
            id:2,
            slug:"amministrazione",
            title:"Amministrazione"
        }],
        img: "/assets/img/post_image.png",
        details:{
            territory:"Puglia",
            summary:"Con il Bando NIDI puoi ottenere un finanziamento a fondo perduto regionale da € 10.000 a € 150.000 per sostenere i costi di avviamento del tuo progetto.",
            expirationDate: new Date(2022, 8, 12).toDateString(),
        },
        description: "Il bando NIDI consiste in un finanziamento  fondo perduto erogato dalla regione Puglia.\nIl finanziamento copre fino al 100% dei fondi che ti servono per aprire la tua impresa, IVA esclusa.\n",
        recipients: "Aziende"
    },
]