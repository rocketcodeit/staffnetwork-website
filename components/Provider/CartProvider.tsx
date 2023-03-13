import React, {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import {IService} from "../../models/IService";

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

export function CartContextProvider(props:any){
    const [services, setServices] = useState<IService[]>([]);
    const [cartItemsCount, setCartItemsCount] = useState<number>(0);


    const addCartItem = (item: IService) => {
        const index = services.findIndex((i) => i.slug === item.slug);
        if(index == -1){
            setServices([...services, item]);
        }
    };
    const updateCartItem = (item: IService) => {
        const index = services.findIndex((i) => i.slug === item.slug);
        if (index >= 0) {
            const updatedCartItems = [...services];
            updatedCartItems[index] = item;
            setServices(updatedCartItems);
        }
    };

    const removeCartItem = (item: IService) => {
        const updatedCartItems = services.filter((i) => i.slug !== item.slug);
        setServices(updatedCartItems);
    };

    const removeAllCartItem = () => {
        setServices([])
    }

    const getCartItems = (): IService[] => [...services];


    return(
        <CartProviderContext.Provider value={{ getCartItems, addCartItem, updateCartItem, removeCartItem, services, setServices, removeAllCartItem }}>
            {props.children}
        </CartProviderContext.Provider>
    );
}