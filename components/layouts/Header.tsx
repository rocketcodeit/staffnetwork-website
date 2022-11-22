
import React from 'react';
import {IHeaderConfiguration} from "../../config/models/IHeaderConfiguration";
import {useRouter} from "next/router";
import styles from "../../styles/Header.module.css"


function Header(props : IHeaderConfiguration){
    return (
        <nav className="container">
            <div className="flex flex-row justify-between">
                <div className="basis-2/12">
                    <a href="/">
                        <img src={props.logo} />
                    </a>
                </div>
                <div className="basis-9/12 flex justify-end items-center">
                    <ul className={styles.menu}>
                        { props.menuItems.map((item) => {
                            return <li key={item.name} > <a href={item.url}>{item.name}</a> </li>
                        })}
                    </ul>
                    <HeaderButtonCta  name={"Bello"} link={"pippo"}/>
                </div>

            </div>




        </nav>

    );
}

function HeaderButtonCta(props : {name: string, link : string }){
    const router = useRouter();

    return(
        <button className="btn" onClick={() => router.push(`/${props.link}`)}>
            {props.name}
        </button>
    )
}
export default Header;