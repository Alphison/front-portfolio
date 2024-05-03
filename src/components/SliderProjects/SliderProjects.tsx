"use client"

import { ProjectsServies } from "@/services/Projects.services"
import { useQuery } from "@tanstack/react-query"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import './style.css';

import Image from "next/image";

import src from "../../../public/assets/images/ванпис.jpeg"

export default function SliderProjects() {

    const {isPending, error, data} = useQuery({ queryKey: ['projects'], queryFn: () => ProjectsServies.getAll(), select: ({data}) => data.data })
   

    // if(isPending){
    //     return 'Loading...'
    // }

    // if(error){
    //     return 'Пиздец такая ошибка: ' + error.message
    // }

    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={42}
                freeMode={true}
                loop={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={'/assets/images/ванпис.jpeg'} className="rounded-[7px]" alt="" width={500} height={284}/>
                    <div className="mt-[30px] w-[100%] flex justify-between items-center">
                        <h1 className="text-[24px] font-bold font-mono">VIDEO HOSTING</h1>
                        <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                            <p className="text-[18px] font-bold font-mono">Web design</p>
                        </div>
                    </div>
                    <hr className="mt-[30px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/assets/images/ванпис.jpeg'} className="rounded-[7px]" alt="" width={500} height={284}/>
                    <div className="mt-[30px] w-[100%] flex justify-between items-center">
                        <h1 className="text-[24px] font-bold font-mono">VIDEO HOSTING</h1>
                        <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                            <p className="text-[18px] font-bold font-mono">Web design</p>
                        </div>
                    </div>
                    <hr className="mt-[30px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/assets/images/ванпис.jpeg'} className="rounded-[7px]" alt="" width={500} height={284}/>
                    <div className="mt-[30px] w-[100%] flex justify-between items-center">
                        <h1 className="text-[24px] font-bold font-mono">VIDEO HOSTING</h1>
                        <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                            <p className="text-[18px] font-bold font-mono">Web design</p>
                        </div>
                    </div>
                    <hr className="mt-[30px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/assets/images/ванпис.jpeg'} className="rounded-[7px]" alt="" width={500} height={284}/>
                    <div className="mt-[30px] w-[100%] flex justify-between items-center">
                        <h1 className="text-[24px] font-bold font-mono">VIDEO HOSTING</h1>
                        <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                            <p className="text-[18px] font-bold font-mono">Web design</p>
                        </div>
                    </div>
                    <hr className="mt-[30px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/assets/images/ванпис.jpeg'} className="rounded-[7px]" alt="" width={500} height={284}/>
                    <div className="mt-[30px] w-[100%] flex justify-between items-center">
                        <h1 className="text-[24px] font-bold font-mono">VIDEO HOSTING</h1>
                        <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                            <p className="text-[18px] font-bold font-mono">Web design</p>
                        </div>
                    </div>
                    <hr className="mt-[30px]"/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}