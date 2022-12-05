import {IService} from "../../../config/models/IService";
import {number} from "prop-types";

export const services: IService[] = [
    {
        slug: "amministrazione",
        name: "Amministrazione",
        img: "/assets/img/post_image.png",
        short_description: "Attività amministrative, contabili e di gestione delle risorse umane dell'impresa",
        description: "" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida enim et pharetra hendrerit. Vivamus eget lectus sit amet augue pulvinar ultricies non aliquam nisl. Morbi tempus, metus vel sodales venenatis, lectus elit mattis nisl, eget ornare nulla turpis vel ipsum. Mauris mollis aliquet rhoncus. Curabitur eu nibh quis tellus varius interdum. Fusce ornare felis magna, nec gravida justo bibendum eu. Pellentesque sollicitudin rhoncus ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris porttitor ultrices nisi, sed elementum mauris. Cras convallis mauris et nulla laoreet dignissim. Pellentesque lacinia ante a turpis tincidunt, sed posuere justo vehicula. Aliquam finibus risus turpis, sed vehicula sem consectetur vel. Pellentesque interdum turpis id blandit porttitor.\n" +
            "\n" +
            "Curabitur eget leo et lacus luctus sollicitudin at a nibh. Vivamus euismod finibus venenatis. Curabitur sit amet elementum orci, id facilisis leo. Donec consequat purus vel justo maximus, et tincidunt sapien ullamcorper. Nunc aliquet lorem quis hendrerit maximus. Vestibulum et ullamcorper nisi, sed consequat mauris. Suspendisse potenti. Sed at erat interdum, porta nulla nec, pharetra dolor. Nullam id gravida sem, ac euismod lorem.\n" +
            "\n" +
            "In sodales lacus mauris, in congue velit faucibus in. Sed feugiat vitae lorem a semper. Aenean at venenatis dui. Integer in facilisis nulla. Sed luctus dictum consectetur. Donec sed velit tempor, vehicula erat sed, finibus ex. Etiam sollicitudin, odio quis tristique tincidunt, lectus ex sagittis tortor, consectetur aliquet nibh libero nec ante. Curabitur non accumsan felis. Donec facilisis quis nisl a commodo. Duis tempus mi non quam aliquet bibendum. Donec vehicula diam augue, sit amet pretium arcu fermentum eget. Donec pellentesque, dui vitae ultrices feugiat, dui dolor ullamcorper eros, eu tristique neque nibh eget enim. In viverra erat varius, pharetra libero at, dictum lectus.\n" ,
        activities: [
            {
                title: "Contabilità",
                description: "Organizzazione amministrativa a procedure interne. Assistenza e consulenza tributaria ordinaria."
            },
            {
                title: "Fiscale",
                description: "Pianificazione fiscale, contenzioso tributario e rapporti con amministrazione finanziaria."
            },
            {
                title: "Revisione",
                description: "Revisioni contabili ordinarie e straordinarie"
            },
            {
                title: "Risorse umane",
                description: "Elaborazione paghe e contributi, gestione risorse umane, strumenti di incentivazione"
            }
        ],
        methods: [
            {
                title: "Titolo 1",
                description : "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es."
            },
            {
                title: "Titolo 2",
                description : "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es."
            },
            {
                title: "Titolo 3",
                description : "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es."
            }],
        results: [
            {
                number: 23,
                term : "%",
                title: " incremento del fatturato rispetto l'anno precedente"
            },
            {
                number: 23,
                term : "%",
                title: " incremento del fatturato rispetto l'anno precedente"
            },
            {
                number: 23,
                term : "%",
                title: " incremento del fatturato rispetto l'anno precedente"
            },
        ]
    },

    {
        slug: "consulenza-aziendale",
        name: "Consulenza di direzione aziendale",
        short_description: "Consulenza e affiancamento nelle operazioni strategiche aziendali.",
    },

    {
        slug: "finanza",
        name: "Finanza Ordinaria e Agevolata",
        short_description: "Valutazione, scelta e gestione di piani d’investimento più idonei.",
    },

    {
        slug: "startup",
        name: "Start-up",
        short_description: "Consulenza e gestione di pratiche e servizi legati alle imprese di domani.",
    },

    {
        slug: "green-sostenibilita",
        name: "Green & Sostenibilità",
        short_description: "Consulenza e gestione su strumenti finanziari  e fiscali in tema di energia, efficientamento energetico ed energie rinnovabili.",
    },


    {
        slug: "innovazione",
        name: "Innovazione",
        short_description: "Consulenza e supporto alle imprese per piani personalizzati di digital transformation",
    },

    {
        slug: "agrolimentare",
        name: "Agroalimentare",
        short_description: "Consulenza sugli strumenti finanziari e fiscali a disposizione delle aziende del settore agroalimentare.",
    },

    {
        slug: "internazionalizzazione",
        name: "Internazionalizzazione",
        short_description: "Consulenza, pianificazione e ricerca di opportunità per espandersi sui mercati internazionali.",
    }
];