import {AnnouncementTerritory} from "../../models/announcement-territory";
import Checkbox from "../Checkbox/Checkbox";
import React, {useEffect, useState} from "react";

export interface FilterProps{
    id?: number,
    setPage : ((page: number) => {}) | any
    categoriesFilter: FilterOption[],
}

interface FilterOption {
    title: string,
    type?: "string" | "checkbox",
    items: {
        title : string,
        value?: string
    }[] | undefined
    setDataFilter? : any

    dataFilter : any[]
    listItemFiltered : any
}

const filterItems = (event: any, setFilters: React.Dispatch<React.SetStateAction<any[]>>,setPage: ((page: number) => {})) => {
    const filterValue = event.target.name;
    setPage(1);
    setFilters((filters) => {
        if (event.target.checked) {
            return [...filters, filterValue];
        } else {
            return filters.filter((filter) => filter !== filterValue);
        }
    });
};

export default function Filter(props : FilterProps){
        return (
        <div className={"filtersClass"} >
            {props.categoriesFilter?.map((filterGroup, index ) => {
                return (
                    <div key={index} className={"mb-4"}>
                        <h5 className={"mb-2"}>{filterGroup.title}</h5>
                        <div>
                            {filterGroup.items?.map((item, i) =>{
                                return (
                                    <Checkbox
                                        key={i}
                                        title={item.title}
                                        name={ item.value ? item.value.toLowerCase() : item.title.toLowerCase()}
                                        checked={filterGroup.dataFilter.includes(item.value ? item.value.toLowerCase() : item.title.toLowerCase())}
                                        handleChange={(e : any) => filterItems(e, filterGroup.setDataFilter, props.setPage)}
                                    />
                                )
                            })}

                        </div>
                    </div>
                    )



                })
            }
        </div>

    )
}

