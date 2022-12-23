export const container = {
    hidden: {opacity: 0},
    show : {
        opacity: 1,
        transition:{
            duration:0.3,
            delay: 0.4,
            delayChildren: 0.9,
            staggerChildren:0.4,
        }
    }
}

export const item = {
    hidden:{y:'100%', opacity:0},
    show: {y: '0%',opacity: 1, transition: {duration:0.5}}
}

export const containerSlideUp = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
    }
}
export const itemSlideUp = {
    hidden:{
        y:"10%",
        opacity:0
    },
    show: {
        y:"0%",
        opacity: 1,
        transition:{
            duration:0.2,
            ease: [1,0,.71,1.02]
        }
    }
}

export const itemFade = {
    hidden:{
        opacity:0
    },
    show: {
        opacity: 1,
        transition:{
            duration:0.3,
            ease: [1,0,.71,1.02]
        }
    }
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


export const blockReveal = {
    final:{
        left:["0%","0%","100%"],
        width:["0%","100%","0%"],
        transition:{
            duration:1,
            ease: [0.19, 1, 0.22, 1]
        },
        viewport:{
            once:true
        }
    }
}

export const blockTextReveal = {
    initial:{
        opacity:0
    },
    final: {
        opacity:1,
        transition:{
            duration:0.1,
            delay:0.4
        },
        viewport:{
            once:true
        }
    }
}