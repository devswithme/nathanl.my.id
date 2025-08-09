import {Title} from "../ui/title.jsx";
import {Parallax} from "../ui/parallax.jsx";
import {Paragraph} from "../ui/paragraph.jsx";
import {ArrowLeft} from "lucide-react";
import transition from "../ui/transition.jsx";

const Chakra = () => {
    return (
        <main className='space-y-64'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <a href='/' className='flex gap-2 font-mono'><ArrowLeft /> Back</a>
                <div className='space-y-10'>
                    <Title value="Chakra Creative" className='text-7xl md:text-9xl font-primary'/>
                    <a href='https://chakra-preview.vercel.app' className='px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-purple-900 hover:text-white bg-white relative z-10'>
                        <img src='/chakra/logo.png' className='w-9 object-cover'/>
                        View Site
                        <span className='bg-green-500 size-3 relative'>
                      <span className='absolute bg-green-500 animate-ping size-3'/>
                  </span>
                    </a>
                </div>
                <Parallax>
                    <img src='/chakra/1.png' className='bg-yellow-500'/>
                </Parallax>
                <Parallax outputRange={['5rem', '5rem']}>
                    <img src='/chakra/2.png' className='bg-purple-800'/>
                </Parallax>
            </section>
            <Paragraph className='text-5xl md:text-7xl flex flex-wrap leading-[1] tracking-tighter' value="Elegant. Animated. Dynamic. Agency-styled." offset={['start 0.9', 'start 0.5']}/>
        </main>
    )
}

export default transition(Chakra, "Chakra 💼")