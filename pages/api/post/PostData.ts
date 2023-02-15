import {Post} from "../../../models/post";

export const posts: Post[] = [
    {
        slug: "articolo_1",
        name: "Articolo1",
        date: new Date(2022, 10, 31).toDateString(),
        img: "/assets/img/post_image.png",
        categories: [
            {
                id: 1,
                name: "Finanza",
                slug : "finanza",
                description : "Articoli di materia finanziaria"
            },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros neque, ultricies sit amet lectus nec, viverra facilisis eros. Nam facilisis mi sit amet odio luctus, ac sagittis neque tincidunt. Aenean sodales vel turpis quis pellentesque. Duis pharetra placerat ex vitae rutrum. Maecenas eleifend congue tristique. In sit amet diam a mauris tristique aliquam. Integer in pharetra tortor. Vivamus sapien arcu, mattis sed massa eu, malesuada accumsan mi. Nulla molestie ullamcorper tortor, eu mollis ligula volutpat ut.",
        featured: true
    },
    {
        slug: "articolo_2",
        name: "Articolo2",
        date: new Date(2022, 10, 30).toDateString(),
        img: "/assets/img/post_image.png",
        categories: [
            {
                id: 2,
                name: "Marketing",
                slug : "marketing",
                description : "Articoli di marketing"
            },
            {
                id: 24,
                name: "Marketing2",
                slug : "marketing2",
                description : "Articoli di marketing"
            },
        ],
        description: "Articolo2 ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros neque, ultricies sit amet lectus nec, viverra facilisis eros. Nam facilisis mi sit amet odio luctus, ac sagittis neque tincidunt. Aenean sodales vel turpis quis pellentesque. Duis pharetra placerat ex vitae rutrum. Maecenas eleifend congue tristique. In sit amet diam a mauris tristique aliquam. Integer in pharetra tortor. Vivamus sapien arcu, mattis sed massa eu, malesuada accumsan mi. Nulla molestie ullamcorper tortor, eu mollis ligula volutpat ut.",
        featured: true
    },
    {
        slug: "articolo_3",
        name: "Articolo3",
        date: new Date(2021, 5, 12).toDateString(),
        img: "/assets/img/post_image.png",
        categories: [
            {
                id: 2,
                name: "Marketing",
                slug : "marketing",
                description : "Articoli di marketing"
            },
        ],
        description: "Articolo2 ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros neque, ultricies sit amet lectus nec, viverra facilisis eros. Nam facilisis mi sit amet odio luctus, ac sagittis neque tincidunt. Aenean sodales vel turpis quis pellentesque. Duis pharetra placerat ex vitae rutrum. Maecenas eleifend congue tristique. In sit amet diam a mauris tristique aliquam. Integer in pharetra tortor. Vivamus sapien arcu, mattis sed massa eu, malesuada accumsan mi. Nulla molestie ullamcorper tortor, eu mollis ligula volutpat ut.",
        featured: true
    },
    {
        slug: "articolo_4",
        name: "Articolo4",
        date: new Date(2021, 5, 12).toDateString(),
        img: "/assets/img/post_image.png",
        categories: [
            {
                id: 2,
                name: "Marketing",
                slug : "marketing",
                description : "Articoli di marketing"
            },
        ],
        description: "Articolo4 ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros neque, ultricies sit amet lectus nec, viverra facilisis eros. Nam facilisis mi sit amet odio luctus, ac sagittis neque tincidunt. Aenean sodales vel turpis quis pellentesque. Duis pharetra placerat ex vitae rutrum. Maecenas eleifend congue tristique. In sit amet diam a mauris tristique aliquam. Integer in pharetra tortor. Vivamus sapien arcu, mattis sed massa eu, malesuada accumsan mi. Nulla molestie ullamcorper tortor, eu mollis ligula volutpat ut.",
        featured: true
    }
];
