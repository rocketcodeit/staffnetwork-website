import React, {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {IService} from "../../models/IService";
import {json} from "stream/consumers";
import {store} from "next/dist/build/output/store";

export interface ICartProviderProps{
    services : IService[],
    setServices : Dispatch<SetStateAction<IService[]>>,
    addCartItem: (item:IService) => void,
    removeCartItem: (itemId: IService) => void,
    updateCartItem: (item:IService) => void,
    getCartItems: () => IService[],
    removeAllCartItem : () => void,
}

export const CartProviderContext=createContext<ICartProviderProps>({
    setServices: () => {},
    getCartItems: (): IService[] => [],
    services: [],
    addCartItem: (item: IService) => {},
    updateCartItem: (item: IService) => {},
    removeCartItem: (itemId: IService) => {},
    removeAllCartItem : () => {}
});
function parseService(json: any): IService {
    const service: IService = {
        title: json.title,
        slug: json.slug,
        area: json.area?.map((a: any) => ({
            id: a.id,
            slug: a.slug,
            title: a.title,
            default: a.default,
        })),
        img: json.img,
        details: {
            summary: json.details.summary,
            obj: json.details.obj?.map((o: any) => ({
                id: o.id,
                title: o.title,
                value: o.value,
            }))
        },
        description: json.description,
        recipients: json.recipients,
        link: json.link?.map((l: any) => ({
            text: l.text,
            href: l.href,
        })),
        obj: json.obj?.map((o: any) => ({
            id: o.id,
            title: o.title,
            value: o.value,
        })),
        buyable: json.buyable
            ? {
                field: json.buyable.field?.map((f: any) => ({
                    id: f.id,
                    type: f.type,
                    description: f.description,
                })),
                title: json.buyable.title,
                description: json.buyable.description,
                price: json.buyable.price,
                discountPrice: json.buyable.discountPrice,
            }
            : undefined,
        requestForm: json.requestForm
            ? {
                title: json.requestForm.title,
                text: json.requestForm.text,
                field: json.requestForm.field?.map((f: any) => ({
                    id: f.id,
                    type: f.type,
                    size: f.size,
                    placeholder: f.placeholder,
                    required: f.required,
                    pattern: f.pattern,
                    options: f.options?.option?.map((opt: any) => ({
                        id: opt.id,
                        title: opt.title,
                        value: opt.value,
                        selected: opt.selected,
                        disabled: opt.disabled,
                    })),
                })),
                button: json.requestForm.button?.map((btn: any) => ({
                    id: btn.id,
                    type: btn.type,
                    text: btn.text,
                    icon: btn.icon,
                })),
            }
            : undefined,
    };
    return service;
}

function getAllServices(jsonArray: any): IService[] {
    const services: IService[] = [];
    services.push(jsonArray.map((item : any) => {
        return parseService(item);
    }))
    return services;
}
export function CartContextProvider(props:any){
    const [services, setServices] = useState<IService[]>([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            const parsed = JSON.parse(storedCartItems);
            setServices(parsed);
        }
    }, []);


    const addCartItem = (item: IService) => {
        const index = services.findIndex((i) => i.slug === item.slug);
        if(index == -1){
            setServices([...services, item]);
            localStorage.setItem('cartItems', JSON.stringify([...services, item]));
        }
    };
    const updateCartItem = (item: IService) => {
        const index = services.findIndex((i) => i.slug === item.slug);
        if (index >= 0) {
            const updatedCartItems = [...services];
            updatedCartItems[index] = item;
            setServices(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        }
    };

    const removeCartItem = (item: IService) => {
        const updatedCartItems = services.filter((i) => i.slug !== item.slug);
        setServices(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    };

    const removeAllCartItem = () => {
        setServices([])
        localStorage.setItem('cartItems', JSON.stringify([]));
    }

    const getCartItems = (): IService[] => [...services];


    return(
        <CartProviderContext.Provider value={{ getCartItems, addCartItem, updateCartItem, removeCartItem, services, setServices, removeAllCartItem }}>
            {props.children}
        </CartProviderContext.Provider>
    );
}

