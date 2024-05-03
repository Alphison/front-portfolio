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
import ProjectBlock from "../ProjectBlock/ProjectBlock";

export default function SliderProjects() {

    const {isPending, error, data} = useQuery({ queryKey: ['projects'], queryFn: () => ProjectsServies.getAll(), select: ({data}) => data.data })   

    if(isPending){
        return 'Loading...'
    }

    if(error){
        return 'Пиздец такая ошибка: ' + error.message
    }

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
                    <ProjectBlock />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectBlock />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectBlock />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectBlock />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectBlock />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}