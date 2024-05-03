"use client"

import SliderProjects from '@/components/SliderProjects/SliderProjects'
import ElFon from '../../components/ElFon/ElFon'
import Link from 'next/link'

export default function Page() {

    return (
        <>
            <ElFon />
            <main className='flex flex-col m-[auto] sticky z-1'>
                <h1 className='mt-[200px] text-[113px] font-bold text-center font-mono'>НАШИ ПРОЕКТЫ</h1>
                <hr className='w-[100px] h-[5px] bg-white mt-[30px] rounded-full m-[auto]'/>
                <p className='text-center m-auto mt-[30px] w-[25%] font-mono'>Доверьте нам разработку вашего следующего проекта и убедитесь сами в качестве нашей работы.</p>

                <SliderProjects />

                <Link href={'/catalog'} className='pt-[28px] pb-[28px] pl-[50px] pr-[50px] cursor-none rounded-[4px] md:pt-7 md:pb-7 md:pr-[50px] md:pl-[50px] relative overflow-hidden border shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF2A5F] before:duration-300 before:ease-out hover:text-white hover:shadow-[#FF2A5F] hover:before:h-40 hover:before:w-[100%] hover:before:opacity-80 m-auto mt-[50px] mb-[50px]'>
                    <span className="text-[20px] relative z-10 font-mono">ПОДРОБНЕЕ</span>
                </Link>
            </main>
        </>
    )
}

