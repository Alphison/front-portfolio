"use client"

import { IImage } from "@/Types/Images";
import { ITechnology } from "@/Types/Technology";
import ElFon from "@/components/ElFon/ElFon";
import { ProjectsServies } from "@/services/Projects.services";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Triangle } from "react-loader-spinner";

export default function Page({params}: {params: {id: number}}) {

    const {data, isLoading, error} = useQuery({queryKey: ['project'], queryFn: () => ProjectsServies.getOne(params.id), select: (data) => data.data})

    if(isLoading){
        return (<div className="w-full h-screen flex items-center justify-center">
                    <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="#FF2A5F"
                    ariaLabel="triangle-loading"
                    wrapperClass='m-auto my-[50px]'
                    />
                </div>)
    }

    if(error){
        return 'Пиздец такая ошибка: ' + error.message
    }

    return (
        <div id="page-wrap">
            <ElFon />
            <main className="sticky z-1">
                <h1 className='pt-[200px] text-[40px] sm:text-[60px] lx:text-[113px] font-bold text-center font-mono '>НАШИ ПРОЕКТЫ</h1>
                <hr className='w-[100px] h-[5px] bg-white mt-[30px] rounded-full m-[auto]'/>
                <p className='text-center m-auto mt-[30px] w-[85%] mi:w-[65%] sm:w-[45%] lx:w-[25%] font-mono'>Доверьте нам разработку вашего следующего проекта и убедитесь сами в качестве нашей работы.</p>
                <div className="my-[70px] flex w-[1700px] mx-[auto] gap-[40px] items-start relative">
                    <div className="border w-[60%] sticky top-[120px]">
                        <div className="py-[50px] px-[30px] border-b">
                            <div className="flex justify-between items-center">
                                <h1 className="text-[24px] font-bold font-mono">{data?.name}</h1>
                                <p className="text-[16px] font-mono">{data?.completed_at}</p>
                            </div>
                            <p className="mt-[20px] font-mono">{data?.name}</p>
                            <div className="flex items-center justify-between mt-[46px]">
                                <div className="flex items-center gap-[15px]">                                                                      
                                    {
                                        data?.technologies.map((item:ITechnology, i:number) => {
                                            return (
                                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50" key={i}>
                                                    <Image loader={() => item.image_path} unoptimized src={item.image_path} width={25} height={25} alt=""/>
                                                </div>
                                            )
                                        })
                                    }                                    
                                </div>
                                <p className="font-mono border px-[20px] py-[10px] font-bold uppercase text-[18px]">
                                    {data?.category.name}
                                </p>
                            </div>
                        </div>
                        <p className="p-[30px] font-mono text-[16px]">
                            {data?.description}
                        </p>
                    </div>
                    <div className="w-[50%] flex flex-col gap-[20px]">
                        {
                            data && (
                                <Image className="w-[100%]" loader={() => data.preview_path} unoptimized src={data.preview_path} width={900} height={500} alt=""/>
                            )
                        }  
                        {
                            data?.images.map((image:IImage, i:number) => {
                                return <Image className="w-[100%]" loader={() => image.image_path} unoptimized src={image.image_path} width={900} height={500} alt="" key={i}/>
                            })
                        }
                        
                    </div>
                </div>
            </main>
        </div>
    )
}