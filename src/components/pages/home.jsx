import {Paragraph} from "../ui/paragraph.jsx";
import {Title} from "../ui/title.jsx";
import {Parallax} from "../ui/parallax.jsx";
import LinkedIn from "../ui/linkedin.jsx";
import {motion} from 'motion/react'
import transition from "../ui/transition.jsx";

function Home() {
    return (
        <>
            <section className='flex flex-col md:flex-row justify-between'>
                <div className='space-y-10'>
                    <Title
                        value="Hi, I'm Nathan*"
                        className='text-8xl sm:text-[10rem] max-w-xl overflow-hidden font-primary leading-[0.9]'
                    />
                    <a href='https://www.linkedin.com/in/nathan-limahardja' className='px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-blue-600 hover:text-white relative z-10 bg-white'>
                        <img src='me.jpg' className='size-8 rounded-full'/>
                        LinkedIn
                        <span className='bg-green-500 size-3 relative'>
                      <span className='absolute bg-green-500 animate-ping size-3'/>
                  </span>
                    </a>
                </div>
                <Parallax className='relative h-fit'>
                    <LinkedIn />
                </Parallax>
            </section>
            <section className='flex flex-col md:flex-row gap-16'>
                <Paragraph className='text-5xl md:text-7xl flex flex-wrap leading-[1] font-medium' value="I develop a scalable and modern web app from your ideas." />
                <Parallax>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2, duration: 1}} className='font-mono uppercase text-sm'>Come from a background of Marketing, Creative, AI and Software Engineering.</motion.p>
                </Parallax>
            </section>
            <Parallax outputRange={['2rem', '2rem']} className='w-full md:w-1/2 float-right group relative aspect-video overflow-hidden'>
                <a href='/queenbee' >
                    <img src='/home/1.webp' className='duration-200 ease-in-out aspect-video object-cover object-top group-hover:brightness-50'/>
                    <img src='/cloud/logo.png' className='duration-200 ease-in-out opacity-0 group-hover:opacity-100 w-24 top-1/2 left-1/2 -translate-1/2 absolute'/>
                </a>
            </Parallax>
            <Parallax className='w-full md:w-1/2 group relative aspect-video overflow-hidden'>
                <a href='/chakra' >
                    <img src='/home/2.webp' className='duration-200 ease-in-out aspect-video object-cover object-top group-hover:brightness-50'/>
                </a>
                <img src='/chakra/brand.svg' className='duration-200 ease-in-out opacity-0 group-hover:opacity-100 w-42 top-1/2 left-1/2 -translate-1/2 absolute'/>
            </Parallax>
            <Parallax outputRange={['1rem', '1rem']}  className='float-right w-full md:w-1/2 group relative aspect-video overflow-hidden'>
                <a href='/ancake'>
                    <img src='/home/3.webp' className='duration-200 ease-in-out aspect-video object-cover object-top group-hover:brightness-50'/>
                    <img src='/ancake/logo.png' className='duration-200 ease-in-out opacity-0 group-hover:opacity-100 w-16 top-1/2 left-1/2 -translate-1/2 absolute'/>
                </a>
            </Parallax>
            <Parallax className='w-full md:w-1/2 group relative aspect-video overflow-hidden'>
                <a href='/fysite' className='space-y-5'>
                    <img src='/home/4.webp' className='duration-200 ease-in-out aspect-video object-cover object-top group-hover:brightness-50'/>
                    <img src='/fysite/brand.svg' className='duration-200 ease-in-out opacity-0 group-hover:opacity-100 w-28 top-1/2 left-1/2 -translate-1/2 absolute'/>
                </a>
            </Parallax>
            <section>
                <span className='font-mono uppercase text-sm'>Get in touch</span>
                <Paragraph className='my-6 text-6xl md:text-7xl flex flex-wrap leading-[1] font-medium' value="Let's work together!" offset={['start 0.9', 'start 0.5']} />
                <a href='https://wa.me/6587470061' className='px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-green-600 hover:text-white bg-white'>
                  <img src='me1.jpg' className='size-8 rounded-full'/>
                    WhatsApp
                  <span className='bg-green-500 size-3 relative'>
                      <span className='absolute bg-green-500 animate-ping size-3'/>
                  </span>
                </a>
            </section>
        </>
    )
}

export default transition(Home, "Hello World 🚀")
