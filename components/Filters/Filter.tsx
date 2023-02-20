import {AnnouncementTerritory} from "../../models/announcement-territory";
import Checkbox from "../Checkbox/Checkbox";
import React from "react";

export interface FilterProps{
    id?: number,
    title: string,
    categoriesFilter: FilterOption[],
}

interface FilterOption {
    title: string,
    type?: "string" | "checkbox",
    items: any[] | undefined,
    functionToFilter?: (() => {}) | any
    listItemFiltered : any
}


export default function Filter(props : FilterProps){

    return (
        <>
            {props.categoriesFilter?.map((filterGroup, index ) => {
                return (
                    <div key={index}>
                        <h5 className={"mb-2"}>{filterGroup.title}</h5>
                        <div>
                            {filterGroup.items?.map((item, i) =>{
                                return (
                                    <Checkbox
                                        key={i}
                                        title={item.description}
                                        name={item.description.toLowerCase()}
                                        checked={false}
                                        handleChange={filterGroup.functionToFilter}
                                    />
                                )
                            })}

                        </div>
                    </div>
                    )



                })
            }
        </>

    )
}

