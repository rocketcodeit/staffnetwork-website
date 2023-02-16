import React from "react";
import styles from "../../styles/Home.module.css";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import AreaList from "../../components/Area/AreaList";
import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, opacityAnimation} from "../../animations";
import {GetServerSideProps} from "next";
import {IArea} from "../../config/models/IArea";
import {AreaService} from "../../services/area.service";
import {NextjsUtils} from "../../services/nextjs-utils";



interface AreasProps {
    areas: IArea[],
}



export default function AreasPage({areas} : AreasProps){
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}} className={styles.container}>

            <main className={"mb-16"}>

                <section className={"mt-8"}>
                    <div className="container">
                        <BreadCrumbs mappedPaths={config} showHome={true}  />
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-6">Aree</motion.h1>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <AreaList areas={areas} />
                </div>

            </main>

        </motion.div>
    )
}




// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{

    const {page} = context.query;

    const currentPage = +(page ?? 1);

    const areaService = new AreaService();

    const areas =  await areaService.find({ sort: ['id']});

    if(currentPage > (areas?.paginationInfo.pageCount ?? 1) || !areas)
        return NextjsUtils.returnNotFoundObject();

    if(currentPage === 1 && page)
        return NextjsUtils.returnRedirectObject('/aree');


    return NextjsUtils.returnServerSidePropsObject({
       areas: areas.data,
       currentPage: currentPage
    });

}
