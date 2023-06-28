import {useEffect, useRef, useState} from "react";
import styles from '../../styles/Carousel.module.css'
import {motion} from "framer-motion";
import {cardAnimation, sliderShowAnimation} from "../../animations";
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";

interface CarouselProps{
    carouselItem: {
        preTitle:string,
        title: string,
        description:string,
        image: string
    }[];
}
export default function Carousel(props: CarouselProps){

    const [cards, setCards] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(undefined);
    const intervalIdRef = useRef<NodeJS.Timeout | undefined>(undefined);


    useEffect(() => {

        let idTimeSlider: any = setChangeSlider(8000)

        return () => clearInterval(idTimeSlider);
    }, [])

    function setChangeSlider(ms: number): any {
        const interval = setInterval(() => {
                let maxSize = props.carouselItem.length;
                setCards(sliderShowed => (sliderShowed + 1) % maxSize);
        }, ms);
        intervalIdRef.current = interval;
        setIntervalId(interval);

        return interval;
    }

    function handleResetInterval() {
        let idTimeSlider: any = setChangeSlider(8000)
        clearInterval(intervalId);




    }
    const handleNext = () => {
        handleResetInterval();
        setCards((prevIndex) =>
            prevIndex === (props.carouselItem.length - 1) ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        handleResetInterval();
        setCards((prevIndex) =>
            prevIndex === 0 ? props.carouselItem.length - 1 : prevIndex - 1
        );
    };

    return(
        <div className={styles.outerContainer}>
            <button className={`${styles.button} ${styles.left}`} onClick={handlePrev}><RiArrowLeftSLine /></button>

            <div className={styles.innerContainer}>
                {props.carouselItem.map((item, index) => {
                       return (
                           <motion.div variants={cardAnimation} initial="initial" animate={cards === index ? "visible" : "hidden"} exit="hidden"
                                       key={index}  style={{backgroundImage: `url("${item.image}")`}}
                                       className={`${styles.item} ${cards === index ? styles.visible : styles.hidden}`}>

                               <div className={styles.itemContent}>
                                   <span>{item.preTitle}</span>
                                   <h2>{item.title}</h2>
                                   <div className={styles.description} dangerouslySetInnerHTML={{__html: item.description}} />
                                   </div>
                           </motion.div>
                           )

                })}
            </div>
            <button className={`${styles.button} ${styles.right}`} onClick={handleNext}><RiArrowRightSLine /></button>

        </div>
    )
}