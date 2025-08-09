import {BadgeCheck} from "lucide-react";

function LinkedIn(){
    return (
        <div
            className='max-w-xs bg-gradient-to-tr from-white to-transparent overflow-hidden h-fit sm:-skew-1'
        >
            <div className='relative'>
                <img src='/bg.jpeg' />
                <img src='/me.jpeg' className='absolute left-6 -bottom-12 w-24 aspect-square rounded-full border-4 border-white'/>
            </div>
            <div className='pt-14 px-6 pb-6 space-y-1'>
                <h1 className='text-xl font-semibold flex items-center gap-2'>
                    Nathan Limahardja <BadgeCheck className='w-4 h-4 fill-blue-500 text-white'/>
                </h1>
                <p className='leading-tight text-sm'>Founder @fysite.id | AI Instructor @dicoding @duniacoding</p>
                <span className='text-xs text-neutral-600'>Singapore &bull; <a href='/public' className='text-blue-700 font-medium'>CV Updated 2025</a></span>
            </div>
        </div>
    )
}

export default LinkedIn
