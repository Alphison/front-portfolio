import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'
import parse from 'html-react-parser';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { ServicesService } from '@/services/Services.services';
import { Service } from '@/Types/Services'

export default function SliderServices(){

    const {isPending, error, data} = useQuery({queryKey: ['services'], queryFn: () => ServicesService.getAll(), select: ({data}) => data.data})

    if(isPending){
        return 'Loading...'
    }

    if(error){
        return 'Пиздец такая ошибка: ' + error.message
    }

    const animCard = {
        hidden: {
           opacity: 0,
           scale: 0 
        },
        visible: (i:number) => ({
          opacity: 1,
          transition: {
            delay: i * 0.4,
          },
          scale: 1
        }),
      }

    return (
        <div>
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    872: {
                        slidesPerView: 2
                    },
                    1400: {
                        slidesPerView: 3
                    },                                       
                }}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    data ? 
                    data.map((service: Service, i: number) => {
                        return (
                            <SwiperSlide key={i}>
                                <motion.div variants={animCard} whileInView="visible" initial='hidden' custom={i} className="bg-[#D9D9D9] h-[100%] bg-opacity-5 backdrop-filter backdrop-blur-[100px] border rounded-[14px] pl-[30px] pr-[30px] text-center w-[100%] flex flex-col items-center justify-between">
                                    <div>
                                        <p className="text-[16px] mt-[70px] font-mono">Base / Standart / Pro</p>
                                        <h1 className="text-[20px] font-bold mt-[40px]">{service.name}</h1>
                                        <h2 className="text-[20px] font-bold mt-[15px] text-[#FF2A5F]">development</h2>
                                        <p className="text-[12px] mt-[20px] w-[100%] mi:w-[347px] mi:text-[14px] font-mono">{parse(service.description)}</p>
                                    </div>
                                    
                                    <button className="cursor-none rounded-[4px] mt-[40px] mb-[70px] pt-[20px] pb-[20px] pr-[30px] pl-[30px] text-[18px] relative overflow-hidden border shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF2A5F] before:duration-300 before:ease-out hover:text-white hover:shadow-[#FF2A5F] hover:before:h-40 hover:before:w-[100%] hover:before:opacity-80">
                                        <span className="text-[20px] relative z-10">SHOW MORE</span>
                                    </button>
                                </motion.div>
                            </SwiperSlide>
                        )
                    })                        
                    :
                    'нихуя нет'
                }

            </Swiper>
        </div>
    )
}