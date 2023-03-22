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
export const pageAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration:0.3,
        }
    },
    exit:{
        opacity:0,
        transition: {
            duration:0.3,
        }
    }

}
export const containerSlideUp = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.3, //0.3 0.1
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
            ease: [1,0,.71,1.02],
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
        top:80,
        opacity: 0
    },
    final: {
        top:0,
        opacity: 1,
        transition:{
            delay:0.2,
            duration: 1,
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

export const lineLeftToRight = {
    initial:{
        width:'0%'
    },
    final: {
        width:'120%',
        transition:{
            duration:3,
            delay:0.4,
            ease: [0.19, 1, 0.22, 1]
        },

    }
}

export const numberStepOpacity = {
    initial:{
        opacity:1
    },
    final:{
        opacity: 0,

        transition:{
            duration: 0.4,
            ease: [.6,-.05,.01,.99],
            delayChildren: 0.5,
            staggerChildren:0.2,
        }
    }
}

export const scaleDownAnimation = {
    initial :{
         scaleY:0
    },
    final:{
        scaleY:1,
        transition:{
            duration:0.3,
            ease: [.6,-.05,.01,.99],
            delay:0.8
        }
    }
}

export const filterAnimation = {
    initial: {
        left: -800,
        opacity:0.4,
    },
    visible:{
        left:0,
        opacity: 1,
        transition:{
            duration:0.5,
            ease: 'easeInOut',
            delay:0.2
        }
    }
}


export const sliderShowAnimation = {
    initial: {
        y: 70,
        opacity:0,
    },
    visible:{
        y: 0,
        opacity:1,
        transition:{
            duration:0.5,
            ease: 'easeInOut',
            delay:0.2
        }
    },
    hidden:{
        y:-10,
        opacity:0,
        transition:{
            duration:0.3,
            ease: 'easeInOut',
            delay: 0
        }
    }
}