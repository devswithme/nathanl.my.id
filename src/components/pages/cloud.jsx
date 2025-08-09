import {Title} from "../ui/title.jsx";
import {Parallax} from "../ui/parallax.jsx";
import {Paragraph} from "../ui/paragraph.jsx";
import {ArrowLeft} from "lucide-react";
import transition from "../ui/transition.jsx";

const Cloud = () => {
    return (
        <main className='space-y-64'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <a href='/' className='flex gap-2 font-mono'><ArrowLeft /> Back</a>
                <div className='space-y-10'>
                    <Title value='The Little Cloud' className='text-7xl md:text-9xl font-primary'/>
                    <a href='https://thelittlecloud.vercel.app' className='px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-orange-600 hover:text-white bg-white relative z-10'>
                        <img src='/cloud/logo.png' className='size-8 rounded-full'/>
                        View Site
                        <span className='bg-green-500 size-3 relative'>
                      <span className='absolute bg-green-500 animate-ping size-3'/>
                  </span>
                    </a>
                </div>
                <Parallax>
                    <img src='/cloud/D3.jpeg'/>
                </Parallax>
                <Parallax outputRange={['5rem', '5rem']}>
                    <img src='/cloud/M3.jpeg'/>
                </Parallax>
            </section>
            <Paragraph className='text-5xl md:text-7xl flex flex-wrap leading-[1] tracking-tighter' value="Glassmorphism. Minimalist. Responsive." offset={['start 0.9', 'start 0.5']}/>
        </main>
    )
}

export default transition(Cloud, "The Little Cloud ☁️")