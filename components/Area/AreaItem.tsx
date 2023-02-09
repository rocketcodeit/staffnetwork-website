import React from "react";
import {IArea} from "../../config/models/IArea";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {blockTextReveal, itemSlideUp} from "../../animations";
import {motion} from "framer-motion";

function AreaItem(props : IArea){
    return(

            <motion.div variants={itemSlideUp} className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
                <h4 className="text-2xl font-medium pr-4 mb-1">{props.name}</h4>
                <motion.div className="pr-4 mb-3" dangerouslySetInnerHTML={{__html:props.short_description}}/>
                <Link href={`/area/${props.slug}`} className="btn-arrow self-end cursor-pointer">
                    <p className="mr-2">Scopri di più</p>
                    <ArrowRightIcon className="w-6 stroke-primary-600"/>
                </Link>
            </motion.div>


    );
}

export default AreaItem;