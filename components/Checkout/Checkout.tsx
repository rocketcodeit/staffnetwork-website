import {motion} from "framer-motion";
import {blockTextReveal} from "../../animations";
import {RiBuildingLine, RiUser3Line} from "react-icons/ri";
import React, {useEffect, useState} from "react";
import {IService} from "../../models/IService";
import axios from "axios";
import {processEnv} from "@next/env";

export interface FieldCheckoutProps{
    services : IService[],
    categorySelected : string
}

export interface IDataForm{
    name?: string,
    surname?: string,
    email: string,
    phone: string,
    vatNumber?: string,
    fiscalCode?:string,
    companyName?:string

}
export default function Checkout(props : any){


    let emptyFields : IDataForm = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        vatNumber: '',
        fiscalCode : '',
        companyName: ''
    }

    const [selectedOption, setSelectedOption] = useState("");
    const [categorySelectedOption, setCategorySelectedOption] = useState("");
    const [status,setStatus] = useState();
    const [dataForm, setDataForm] = useState<IDataForm>(
        {
            email: '',
            phone: ''
        }
    );


    const handleSubmit = async (e : any) => {
        e.preventDefault();

        const DataInfo = {
            name: dataForm.name,
            surname: dataForm.surname,
            email: dataForm.email,
            phone: dataForm.phone,
            CodiceFiscale: dataForm.fiscalCode,
            PartitaIva: dataForm.vatNumber,
            RagioneSociale: dataForm.companyName
        }

        await axios
            .post("http://localhost:1337/api/preventivis", { data: DataInfo })
            .then((response) => {
                setStatus(response.status);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
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
        if(status == 200)
            setDataForm(emptyFields)
    },[status])


     return (
        <div>
            <div>
                <h3 className={"mb-4"}>Dettagli di fatturazione</h3>
                <motion.form onSubmit={handleSubmit} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"mx-auto flex gap-6 flex-wrap mt-8 justify-between"}>
                    <div className="relative md:flex-2-1.5 flex-auto z-0">
                        <div className={"radioButton"}>
                            <input type={"radio"} id="personaFisica" name="categoriaUtente" value="personaFisica" onChange={handleCategoryChange} />
                            <div className={`boxRadioButton`}>
                                <RiUser3Line className={"w-6 h-6 text-primary"}/>
                                <label htmlFor="personaFisica" className={"ml-2"}>Persona Fisica</label>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:flex-2-1.5 flex-auto z-0">
                        <div className={"radioButton"}>
                            <input type={"radio"} id="societa" name="categoriaUtente" value="societa" onChange={handleCategoryChange} />
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
                        <input type="email" id="floating_standard" className="peer" placeholder=" " name="email"  value={dataForm.email} onChange={handleInputChange}/>
                        <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
                    </div>

                    <div className={"flex-auto w-full"}>
                        <h4 className={"mb-3"}>Modalità di pagamento</h4>
                        <fieldset className={"radioGroup"}>
                            <div className={"radioItem"}>
                                <input type={"radio"} id="bonificoBancario" name="paymentMethod" value="bonifico" onChange={(e) => setSelectedOption(e.target.value)} />
                                <label htmlFor="bonificoBancario" className={"ml-2"}>Bonifico bancario</label>
                            </div>
                            <div className={"radioItem"}>
                                <input type={"radio"} id="paypal" name="paymentMethod" value="paypal" onChange={(e) => setSelectedOption(e.target.value)} />
                                <label htmlFor="paypal" className={"ml-2"}>Paypal</label>
                            </div>
                        </fieldset>
                        <div className={"infoPaymentMethod overflow-hidden mt-5"}>
                            {selectedOption === "bonifico" &&
                                <motion.div initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}}>
                                    <div>Intestatario: Nicola Ciano <br/> IBAN: IT25B0306916103100000010927 </div>
                                </motion.div>}
                        </div>

                    </div>

                    <div className={"w-full ml-auto mr-0 mt-2"}>
                        <button type={"submit"} className={"btn w-full"}>Acquista</button>
                    </div>

                </motion.form>
            </div>

            {status== 200 &&
                <div>
                    Operazione effettuata con successo
                </div>
            }


        </div>
    )
}