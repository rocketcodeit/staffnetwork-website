import {motion} from "framer-motion";
import {blockTextReveal, itemFade} from "../../animations";
import {RiBuildingLine, RiMailCloseLine, RiMailSendLine, RiUser3Line} from "react-icons/ri";
import React, {Dispatch, useEffect, useState} from "react";
import {IService} from "../../models/IService";
import axios, {AxiosResponse} from "axios";
import {processEnv} from "@next/env";
import {IDataForm, IDataQuote} from "../../models/dataForm";
import {CartService} from "../../services/cart.service";
import {useRouter} from "next/router";

export interface FieldCheckoutProps{
    services : IService[],
    confirmAction : React.Dispatch<boolean>
}


export default function Checkout(props : FieldCheckoutProps){
    const router = useRouter();
    const confirmSendSuccess = (status: number) => {
        if(status >= 200 && status <= 299){
            props.confirmAction(true);
            router.push("/");
        }
        else{
            props.confirmAction(false);
        }

    }

    let emptyFields : IDataForm = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        vatNumber: '',
        fiscalCode : '',
        companyName: '',
    }

    const [selectedOption, setSelectedOption] = useState("bonifico");
    const [categorySelectedOption, setCategorySelectedOption] = useState("personaFisica");
    const [status,setStatus] = useState<number>(-1);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const [dataForm, setDataForm] = useState<IDataForm>(
        {
            email: '',
            phone: '',
        }
    );


    const handleSubmit = async (e : any) => {
        setIsVisible(false);
        e.preventDefault();
        /**
         * @warning Va eliminata la gestione del baseUrl dal component
         */
        const dataCart =  new CartService();
        const dataInfo = dataCart.bindData(dataForm, props.services);
        const responsePost = await dataCart.postData(dataInfo);

        setStatus((responsePost as AxiosResponse).status);

    }

    const handleInputChange = (event : any) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const handleCategoryChange = (event : any) => {
        setCategorySelectedOption(event.target.value);
        setDataForm({...dataForm,name:'',surname:'', companyName:''});
    }

    useEffect(() => {
        setDataForm(emptyFields)
        const timer = setTimeout(() => {
            confirmSendSuccess(status);
            setStatus(0);
            setIsVisible(true);

        }, 4000);
        return () => clearTimeout(timer);

    },[status])


     return (
        <div className={"relative"}>
            <motion.div variants={itemFade}
                        initial={isVisible ? "show" : "hidden"}
                        animate={isVisible ? "show" : "hidden"}>
                <h3 className={"mb-4"}>Dettagli di fatturazione</h3>
                <motion.form onSubmit={handleSubmit} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"mx-auto flex gap-6 flex-wrap mt-8 justify-between"}>
                    <div className="relative md:flex-2-1.5 flex-auto z-0">
                        <div className={"radioButton"}>
                            <input type={"radio"} id="personaFisica" name="categoriaUtente" value="personaFisica" defaultChecked={categorySelectedOption === "personaFisica" ?? false } onChange={handleCategoryChange} />
                            <div className={`boxRadioButton`}>
                                <RiUser3Line className={"w-6 h-6 text-primary"}/>
                                <label htmlFor="personaFisica" className={"ml-2"}>Persona Fisica</label>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:flex-2-1.5 flex-auto z-0">
                        <div className={"radioButton"}>
                            <input type={"radio"} id="societa" name="categoriaUtente" value="societa" defaultChecked={categorySelectedOption === "societa" ?? false } onChange={handleCategoryChange} />
                            <div className={`boxRadioButton`}>
                                <RiBuildingLine className={"w-6 h-6 text-primary"}/>
                                <label htmlFor="societa" className={"ml-2"}>Società</label>
                            </div>
                        </div>
                    </div>
                    {categorySelectedOption === "personaFisica" &&
                        <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                            <input type="text" id="floating_standard" className="peer" name="name" value={dataForm.name} placeholder=" " onChange={handleInputChange}/>
                            <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                        </div>
                    }
                    {categorySelectedOption === "personaFisica" &&
                        <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                            <input type="text" id="floating_standard" className="peer" name="surname" value={dataForm.surname} placeholder=" " onChange={handleInputChange}/>
                            <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cognome</label>
                        </div>
                    }

                    {categorySelectedOption === "societa" &&
                        <div className="relative w-full flex-auto z-0 floatingInput">
                            <input type="text" id="floating_standard" className="peer" placeholder=" " name="companyName" value={dataForm.companyName}  onChange={handleInputChange} />
                            <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ragione Sociale</label>
                        </div>
                    }
                    <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                        <input type="tel" id="floating_standard" className="peer" placeholder=" " name="vatNumber" value={dataForm.vatNumber} onChange={handleInputChange}/>
                        <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Partita IVA</label>
                    </div>
                    <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput" >
                        <input type="tel" id="floating_standard" className="peer" placeholder=" " name="fiscalCode" value={dataForm.fiscalCode} onChange={handleInputChange}/>
                        <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Codice Fiscale</label>
                    </div>
                    <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                        <input type="tel" id="floating_standard" className="peer" placeholder=" "  name="phone" value={dataForm.phone} onChange={handleInputChange}/>
                        <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono*</label>
                    </div>
                    <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                        <input type="email" id="floating_standard" className="peer" placeholder=" " name="email"  value={dataForm.email} required onChange={handleInputChange}/>
                        <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
                    </div>

                    <div className={"flex-auto w-full"}>
                        <h4 className={"mb-3"}>Modalità di pagamento</h4>
                        <fieldset className={"radioGroup"}>
                            <div className={"radioItem"}>
                                <input type={"radio"} id="bonificoBancario" name="paymentMethod" value="bonifico" checked onChange={(e) => setSelectedOption(e.target.value)} />
                                <label htmlFor="bonificoBancario" className={"ml-2"}>Bonifico bancario</label>
                            </div>
                        </fieldset>
                        <div className={"infoPaymentMethod overflow-hidden mt-5"}>
                            {selectedOption === "bonifico" &&
                                <motion.div initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}}>
                                    <div>
                                        Intestatario: Elaborazione Dati Staff S.r.l <br/>
                                        IBAN: IT66 L070 5641 3300 0001 0108 078 <br/>
                                        BANCA: BANCA DELL&apos;ALTA MURGIA CREDITO COOPERATIVO <br/>
                                        BIC: CCRTIT2TMUR <br/>
                                        CAUSALE: N° Ordine
                                    </div>
                                </motion.div>}
                        </div>

                    </div>

                    <div className={"w-full ml-auto mr-0 mt-2"}>
                        <button type={"submit"} className={"btn w-full"}>Acquista</button>
                    </div>

                </motion.form>
            </motion.div>

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
    )
}
