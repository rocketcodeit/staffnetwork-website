import React, {useEffect, useState} from 'react';
import {IHeaderConfiguration} from "../../config/models/IHeaderConfiguration";
import {useRouter} from "next/router";
import styles from "../../styles/Header.module.css"
import { Cross as Hamburger } from 'hamburger-react'
import Link from "next/link";
import {ConfigurationData, ConfigurationDataFull} from "../../models/configuration-data";

interface HeaderProps {
    data : ConfigurationDataFull
}
export function Header( props : HeaderProps){
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setOpen] = useState(true);

    const router = useRouter();


    useEffect( () => {
        handleWindowCheck();

        window.addEventListener('resize', handleWindowCheck);

        return () => {
            window.removeEventListener('resize', handleWindowCheck);
        }
    }, []);

    function handleWindowCheck(){
        if(window.innerWidth >= 1024){
            setIsMobile(false);
            setOpen(true);
        }
        else{
            setOpen(false);
            setIsMobile(true);
        }

    }

    const handleButtonClick  = () => {
        setIsActive(current => !current);
        //setMenuClass(current => !current      oppure direttamente active)
    }

    return (
        <div className={"bg-white sticky top-0 bg-white z-[99999]"}>
            <nav className="container">
                <div className="flex flex-row justify-between">
                    <div className="lg:basis-2/12 basis-7/12">
                        <Link href={'/'} className={styles.imgLink}>
                            <img src={props.data.headerLogo} />
                        </Link>
                    </div>
                    <div className="basis-4/12 lg:basis-10/12  flex justify-end items-center">

                        <ul className={`${styles.menu} ${(isOpen && isMobile) ? styles.menuMobileOpen : ""}`}>
                            { props.data.headerLinks?.map((item, index : number) => {
                                return <li key={index}  className={`${item.button ? 'ml-4 btn' : 'linkItem' }  ${router.asPath == item.href ? 'active' : ''}`} >
                                    <Link href={item.href} >{item.title}</Link>
                                </li>
                            })}
                        </ul>

                        { isMobile &&
                            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={26} rounded onToggle={toggled => {
                                if(toggled){

                                    console.log("menu aperto");
                                    //open a menu
                                }
                                else{
                                    //close a menu
                                    console.log("menu chiuso");
                                }
                            }} />
                        }
                    </div>

                </div>




            </nav>
        </div>




    );
}

function HeaderButtonCta(props : {name: string, link : string }){
    const router = useRouter();

    return(
        <button className={styles.btn +` btn`} onClick={() => router.push(`/${props.link}`)}>
            {props.name}
        </button>
    )
}
