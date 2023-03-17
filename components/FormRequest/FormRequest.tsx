import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, itemFade} from "../../animations";
import React, {useEffect, useState} from "react";
import {IDataForm} from "../../models/dataForm";
import {CartService} from "../../services/cart.service";
import {AxiosResponse} from "axios/index";
import {RequestsService} from "../../services/requests.service";
import {RiMailCloseLine, RiMailSendLine} from "react-icons/ri";

interface FormProps {
    title?: string,
    description?: string,
    page: string,

    typePage?: TypeCategory
}
export enum TypeCategory{
    item = "item",
    purchasableItem = "purchasableItem",
    frontPage = "frontPage"
}
export default function Form(props: FormProps) {

    let emptyFields : IDataForm = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        category: '',
        message : '',
        pageFrom: props.page
    }

    const [status,setStatus] = useState<number>(-1);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [dataForm, setDataForm] = useState<IDataForm>(
        {
            email: '',
            phone: '',
            pageFrom: props.page
        }
    );

    const handleInputChange = (event : any) => {
        const { name, value } = event.target;
        console.log(name + ": " + value);
        setDataForm({ ...dataForm, [name]: value });
    }

    const handleSubmit = async (e : any) => {
        setIsVisible(false);
        e.preventDefault();
        /**
         * @warning Va eliminata la gestione del baseUrl dal component
         */
        const dataRequest =  new RequestsService("http://localhost:1337");
        const dataInfoSended = dataRequest.bindData(dataForm);
        const responsePost = await dataRequest.postData(dataInfoSended);
        console.log(responsePost);
        setStatus((responsePost as AxiosResponse).status);

    }

    useEffect(() => {
        setDataForm(emptyFields)
        const timer = setTimeout(() => {
            setStatus(0);
            setIsVisible(true);
        }, 4000);
        return () => clearTimeout(timer);

    },[status])


    return (
        <motion.div>
            <div className={`${(props.typePage == TypeCategory.frontPage || props.typePage == undefined) ? 'lg:w-5/12 md:w-8/12  w-11/12 mx-auto' : '' }`}>
                {props.title && <div className={`w-fit relative ${(props.typePage != TypeCategory.purchasableItem) ? 'mx-auto' :''}`}>
                    <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                className={`blockOverText bg-gray-200`}></motion.div>
                    <motion.h3 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{once: true}}
                               className={`${(props.typePage == TypeCategory.purchasableItem) ? 'text-left' :'text-center'} mb-4`}>{props.title}</motion.h3>
                </div>}
                {props.description &&<div className={"w-fit relative mx-auto"}>
                    <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                className="blockOverText bg-gray-200"></motion.div>
                    <motion.div dangerouslySetInnerHTML={{__html: props.description}} variants={blockTextReveal}
                                className={`${(props.typePage == TypeCategory.purchasableItem) ? 'text-left' :'text-center'} mb-4`} initial="initial" whileInView="final" viewport={{once: true}}/>
                </div>}
            </div>
            <div className={"relative"}>
                <motion.form variants={itemFade}
                             initial={isVisible ? "show" : "hidden"}
                             animate={isVisible ? "show" : "hidden"}
                             onSubmit={handleSubmit} className={"w-fit relative mx-auto"}>
                    <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                className="blockOverText bg-gray-200"></motion.div>
                    <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{once: true}}
                                className={`${(props.typePage != TypeCategory.purchasableItem && props.typePage != TypeCategory.item) ? 'xl:w-7/12 lg:w-8/12 w-11/12' :'w-full'} bg-gray-200 lg:p-12 md:p-8 px-6 py-4 mx-auto flex gap-x-9 gap-y-6 flex-2-1.5 flex-wrap mt-8 mb-20`}>

                        <input type="hidden"  id="pageFrom" name="pageFrom" value={dataForm.pageFrom} />
                        <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                            <input type="text" id="floating_standard" className="peer" name="name" value={dataForm.name} onChange={handleInputChange} placeholder=" "/>
                            <label htmlFor="floating_standard"
                                   className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                        </div>
                        <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                            <input type="text" id="floating_standard" className="peer" name="surname" value={dataForm.surname} onChange={handleInputChange} placeholder=" "/>
                            <label htmlFor="floating_standard"
                                   className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cognome</label>
                        </div>
                        <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                            <input type="tel" id="floating_standard" className="peer" name="phone" value={dataForm.phone} onChange={handleInputChange} placeholder=" "/>
                            <label htmlFor="floating_standard"
                                   className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono*</label>
                        </div>
                        <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                            <input type="email" id="floating_standard" className="peer" name="email"  value={dataForm.email} onChange={handleInputChange} placeholder=" "/>
                            <label htmlFor="floating_standard"
                                   className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
                        </div>
                        <div className="relative w-full z-0 floatingInput">
                            <select id="underline_select" className="peer" name="category" value={dataForm.category} onChange={handleInputChange}>
                                <option value="" disabled selected>In quale categoria ti riconosci?</option>
                                <option value="Società">Società</option>
                                <option value="Libero professionista">Libero professionista</option>
                                <option value="Persona fisica">Persona fisica</option>
                            </select>
                        </div>
                        <div className="relative w-full z-0 floatingInput">
                            <textarea id="floating_standard" className={"w-full"} name="message" value={dataForm.message} onChange={handleInputChange} placeholder="Richiesta"></textarea>
                        </div>
                        <div className={"w-fit mx-auto mt-2"}>
                            <button type={"submit"} className={"btn"}>Invia</button>
                        </div>
                    </motion.div>
                </motion.form>

                {
                    (status >= 200 && status <= 299) &&
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className={"absolute w-full h-full bg-white flex items-center flex-col flex-wrap justify-start z-10 top-0 gap-5"}>
                        <RiMailSendLine className={"w-12 h-12 text-green-800"} />
                        <h4>Operazione effettuata con successo</h4>
                    </motion.div>
                }


                {
                    (status >= 400 && status <= 599) &&
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className={"absolute w-full h-full bg-white flex items-center flex-col flex-wrap justify-start z-10 top-0 gap-5"}>
                        <RiMailCloseLine className={"w-12 h-12 text-red-800"} />
                        <h4>Operazione fallita </h4>
                    </motion.div>
                }
            </div>





        </motion.div>

    )
}