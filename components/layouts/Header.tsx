
import React, {useEffect, useState} from 'react';
import {IHeaderConfiguration} from "../../config/models/IHeaderConfiguration";
import {useRouter} from "next/router";
import styles from "../../styles/Header.module.css"
import {Bars2Icon} from "@heroicons/react/24/outline";
import { Cross as Hamburger } from 'hamburger-react'
import Link from "next/link";

function Header(props : IHeaderConfiguration){
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
        console.log(window.outerWidth);
        if(window.outerWidth >= 1024){
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
        <nav className="container sticky top-0 bg-white z-[99999]">
            <div className="flex flex-row justify-between">
                <div className="lg:basis-2/12 basis-7/12">
                    <Link href={'/'} className={styles.imgLink}>
                        <img src={props.logo} />
                    </Link>
                </div>
                <div className="lg:basis-9/12 basis-4/12 flex justify-end items-center">

                    { isOpen && <ul className={styles.menu}>
                        { props.menuItems.map((item) => {
                            return <li key={item.name}  className={`linkItem ${router.asPath == item.url ? "active" : ""}`} >
                                <Link href={item.url}>{item.name}</Link>
                            </li>
                        })}
                    </ul>
                    }
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
                    <HeaderButtonCta  name={"Bello"} link={"pippo"} />
                </div>

            </div>




        </nav>



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
export default Header;