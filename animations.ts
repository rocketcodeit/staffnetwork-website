export const container = {
    hidden: {opacity: 0},
    show : {
        opacity: 1,
        transition:{
            delayChildren: 0.5,
            staggerChildren:0.2,
        }
    }
}

export const item = {
    hidden:{y:'100%'},
    show: {y: '0%', transition: {duration:0.5}}
}


export const stagger = {
    final:{
        transition: {
            staggerChildren: 0.2
        }
    }
}

export const opacityAnimation = {
    initial:{
       opacity:0
    },
    final:{
        opacity:1,
        transition:{
            duration: 0.4,
            ease: [.6,-.05,.01,.99],
            delayChildren: 0.5,
            staggerChildren:0.2,
        }
    }

}
export const fadeInUp = {
    initial: {
        y:80,
        opacity: 0
    },
    final: {
        y:0,
        opacity: 1,
        transition:{
            delay:0.2,
            duration: 0.4,
            ease: [.6,-.05,.01,.99]
        }
    }
}