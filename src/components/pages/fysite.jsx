import {Title} from "../ui/title.jsx";
import {Parallax} from "../ui/parallax.jsx";
import {Paragraph} from "../ui/paragraph.jsx";
import {ArrowLeft} from "lucide-react";
import transition from "../ui/transition.jsx";

const Fysite = () => {
    return (
        <main className='space-y-64'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <a href='/' className='flex gap-2 font-mono'><ArrowLeft /> Back</a>
                <div className='space-y-10'>
                    <Title value='Fysite' className='text-7xl md:text-9xl font-primary'/>
                    <a href='https://fysite.id' className='px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-blue-600 hover:text-white bg-white relative z-10'>
                        <img src='/fysite/logo.svg' className='size-8'/>
                        View Site
                        <span className='bg-green-500 size-3 relative'>
                      <span className='absolute bg-green-500 animate-ping size-3'/>
                  </span>
                    </a>
                </div>
                <Parallax>
                    <img src='/fysite/2.png' className='bg-blue-700'/>
                </Parallax>
                <Parallax outputRange={['5rem', '5rem']}>
                    <img src='/fysite/1.png' className='bg-neutral-800'/>
                </Parallax>
            </section>
            <Paragraph className='text-5xl md:text-7xl flex flex-wrap leading-[1] tracking-tighter' value="Multi Tenant LMS Platform. Minimalist." offset={['start 0.9', 'start 0.5']}/>
        </main>
    )
}

export default transition(Fysite, "Fysite 🗃️")