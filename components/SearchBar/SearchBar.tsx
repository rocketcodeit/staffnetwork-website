import React, {useState} from "react";
import {RiSearchLine} from "react-icons/ri";
import styles from "../../styles/SearchBox.module.css"
export interface SearchBarProps{
    id?: number,
    placeholder: string,
    setDataFilter? : any

    dataFilter : any
    setPage : ((page: number) => {}) | any
}

export default function SearchBar(props : SearchBarProps){
    const [inputValue, setInputValue] = useState(props.dataFilter);

    const inputHandler = ((e : any, setFilters: React.Dispatch<React.SetStateAction<any>>,setPage: ((page: number) => {}) ) => {
        setInputValue(e.target.value);
        if(e.target.value.length > 2){
            setPage(1);
            var lowerCase = e.target.value.toLowerCase();
            setFilters(lowerCase);
        }
        else{
            setFilters("");
        }
    });

    return (
        <div className={`${styles.container} floatingInputOutLineBox relative flex items-center`} >
            <input type={"text"}
                   value={inputValue}
                   placeholder={props.placeholder}
                   onChange={(e : any) => inputHandler(e, props.setDataFilter, props.setPage)}
            />

        </div>

    )
}
