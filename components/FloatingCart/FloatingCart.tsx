import {useContext, useState} from "react";
import {CartProviderContext} from "../Provider/CartProvider";
import {IService} from "../../models/IService";
import {motion} from "framer-motion";
import {RiStackLine} from "react-icons/ri";

export interface FloatingCartProps{
    products : any[],
    productsCount : number,
}

export default function FloatingCart(props: FloatingCartProps){
    const cartProvider = useContext(CartProviderContext);
    const [products,setProducts] = useState<IService[]>(cartProvider.getCartItems);


    return(
        <motion.div initial={{x: 70, opacity: 0}}
                    animate={ cartProvider.getCartItems.length > 0 ? {x: 0, opacity: 1} : {x: 70, opacity: 0}} >
            <RiStackLine></RiStackLine>
        </motion.div>
    )
}