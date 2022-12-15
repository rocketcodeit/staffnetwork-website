import React from "react";
import {IPost} from "../../models/IPost";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import styles from "../../styles/Home.module.css";
import moment from "moment";
import Link from "next/link";

function PostItem(props : IPost){
    return(
        <div className="postItem">
            <img className="w-full pr-8" src={props.img}/>

            <div className="postItem__text">
                <span>{moment(props.date).format('DD.MM.yyyy')}</span>
                <h4 className="text-2xl font-medium">{props.name}</h4>
                <p className="line-clamp-3 mt-3">{props.description}</p>

                <Link className="postItem__link" href={`/post/${props.slug}`}><p>Continua a leggere </p>
                    <ArrowRightIcon className="ml-1 w-4 stroke-[2.5px] mb-[3px]"/></Link>
            </div>


        </div>
    );
}

export default PostItem;