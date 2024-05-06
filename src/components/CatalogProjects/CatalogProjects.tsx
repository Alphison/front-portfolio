"use client"

import Image from "next/image"
import ProjectBlock from "../ProjectBlock/ProjectBlock"
import Select from "./Select/Select"
import { Triangle } from "react-loader-spinner"
import { useQuery } from "@tanstack/react-query"
import { ProjectsServies } from "@/services/Projects.services"
import { Project } from "@/Types/Projects"

export default function CatalogProjects() {

    const {isPending, error, data} = useQuery({ queryKey: ['projects'], queryFn: () => ProjectsServies.getAll(), select: ({data}) => data.data })   

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

    const formatDate = (inputDate:string) => {
        const date = new Date(inputDate);

        return date.toLocaleDateString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
    }

    return (
        <div>
            <div className="flex justify-center mt-[50px] gap-[30px]">
                {/* <select name="catgory" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                    <option value="" selected>КАТЕГОРИЯ</option>
                </select>
                <select name="" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                    <option value="" selected>ТЕХНОЛОГИИ</option>
                </select>
                <select name="" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                    <option value="" selected>УСЛУГИ</option>
                </select> */}
                {/* <Select />
                <Select />
                <Select /> */}
            </div>
            <div className="flex justify-center 3xl:justify-start w-[100%] 3xl:w-[1700px] px-[20px] 3xl:mx-[auto] mt-[70px] flex-wrap gap-[55px] mb-[50px]">
                {
                    data ? 
                        data.map((project: Project) => {
                            return (
                                <div className="flex flex-col gap-[20px] w-[515px]" key={project.id}>
                                    <ProjectBlock project={project} height={355}/>
                                    <p className="font-mono">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[15px]">
                                            <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                                <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                            </div>
                                            <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                                <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                            </div>
                                            <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                                <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                            </div>
                                        </div>
                                        <p className="font-mono">
                                            {formatDate(project.completed_at)}
                                        </p>
                                    </div>
                                </div>     
                            )
                        })
                    :
                    'Проектов нет...'
                }
                           
            </div>
        </div>
    )
}