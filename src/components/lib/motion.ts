const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
    opacity: 1,
    transition: {
        staggerChildren: 0.5,
        duration: 1,
        ease: "easeInOut",
    },
    },
}

const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
}

export {
    containerVariants,
    childVariants
}