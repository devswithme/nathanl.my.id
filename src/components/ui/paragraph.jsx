import {motion, useScroll, useTransform} from 'motion/react'
import {useRef} from "react";

export const Paragraph = ({value, className, offset = ['start 0.6', 'start 0.2']}) => {
    const p = useRef(null)
    const {scrollYProgress} = useScroll({
        target: p,
        offset,
    })

    const words = value.split(' ')

    return (
        <motion.p ref={p} className={className}>
            {words.map((word, i) => {
                const start = i / words.length
                const end = start + (1 / words.length)
                console.log([start, end])
                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })}
        </motion.p>
    )
}

const Word = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1])

    return <motion.span className='mr-1.5' style={{opacity}}>{children}</motion.span>
}