export const container = {
    hidden: {opacity: 0},
    show : {
        opacity: 1,
        transition:{
            duration:0.3,
            delay: 0.9,
            delayChildren: 0.9,
            staggerChildren:0.4,
        }
    }
}

export const item = {
    hidden:{y:'100%', opacity:0},
    show: {y: '0%',opacity: 1, transition: {duration:0.5}}
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


export const textReveal = {
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