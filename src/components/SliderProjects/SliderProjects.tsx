"use client"

import { ProjectsServies } from "@/services/Projects.services"
import { useQuery } from "@tanstack/react-query"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import './style.css';

import ProjectBlock from "../ProjectBlock/ProjectBlock";
import { Project } from "@/Types/Projects";
import { Triangle } from "react-loader-spinner";

export default function SliderProjects() {

    const {isPending, error, data} = useQuery({ queryKey: ['projects'], queryFn: () => ProjectsServies.getAll(), select: ({data}) => data })   

    if(isPending){
        return <Triangle
        visible={true}
        height="80"
        width="80"
        color="#FF2A5F"
        ariaLabel="triangle-loading"
        wrapperClass='m-auto my-[50px]'
        />
    }

    if(error){
        return 'Пиздец такая ошибка: ' + error.message
    }

    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={42}
                freeMode={false}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    750: {
                        slidesPerView: 2
                    },
                    1050: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 4
                    }
                }}
            >
                {
                    data ? 
                        data.map((project: Project) => {
                            return (
                                <SwiperSlide>
                                    <ProjectBlock project={project} height={284} key={project.id}/>
                                </SwiperSlide>
                            )
                        })
                    :
                    'Проектов нет...'
                }

            </Swiper>
        </div>
    )
}