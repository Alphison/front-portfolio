"use client"

import Image from "next/image"
import ProjectBlock from "../ProjectBlock/ProjectBlock"
import Select from "./Select/Select"
import { Triangle } from "react-loader-spinner"
import { useQuery } from "@tanstack/react-query"
import { ProjectsServies } from "@/services/Projects.services"
import { Project } from "@/Types/Projects"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ITechnology } from "@/Types/Technology"
import { CategporiesServies } from "@/services/Categories.services"
import { TechnologiesServies } from "@/services/Technologies.services"
import { ServicesService } from "@/services/Services.services"
import { useEffect, useMemo, useState } from "react"
import { formatDate } from "@/utils/formatdate"

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

export default function CatalogProjects() {

    const router = useRouter()

    const [technoId, setTechnoId] = useState(0)
    const [catId, setCatId] = useState(0)
    const [serviceId, setServiceId] = useState(0)
    const [sortedPosts, setSortedPosts] = useState<Project[]>([])
    const [projects, setProjects] = useState<Project[]>([])

    const {isPending, error, data} = useQuery({ queryKey: ['projects'], queryFn: () => ProjectsServies.getAll(), select: ({data}) => data })   
    const {data:categories} = useQuery({ queryKey: ['categories'], queryFn: () => CategporiesServies.getAll(), select: ({data}) => data })   
    const {data:technologies} = useQuery({ queryKey: ['technologies'], queryFn: () => TechnologiesServies.getAll(), select: ({data}) => data })   
    const {data:services} = useQuery({ queryKey: ['services'], queryFn: () => ServicesService.getAll(), select: ({data}) => data })   

    const optionsTechno = technologies?.map(item => ({value: item.id, label: item.name}))
    const optionsServices = services?.map(item => ({value: item.id, label: item.name}))
    const optionsCategories = categories?.map(item => ({value: item.id, label: item.name}))
    
    useMemo(() => {

        if(technoId || catId || serviceId){            
            let newProjects = [...projects].filter(item => item.technologies.find(techno => techno.id === technoId) || item.category.id === catId || item.service.id === serviceId)
           
            setSortedPosts(newProjects)

            return false
        }
        
        setSortedPosts(projects)        

    }, [serviceId, technoId, catId, projects ])

    useEffect(() => {
        data && setProjects(data)
    }, [data])    

    const handleChangeTechno = (selectedOption: {value: number, label: string}) => {        
        setTechnoId(selectedOption.value)        
    }

    const handleChangeService = (selectedOption: {value: number, label: string}) => {
        setServiceId(selectedOption.value)
    }   

    const handleChangeCat = (selectedOption: {value: number, label: string}) => {
        setCatId(selectedOption.value)
    }   

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
        return 'Пиздец ошибка: ' + error.message
    }    

    console.log(sortedPosts);
    

    return (
        <div>
            <div className="flex flex-wrap mx-[20px] justify-center mt-[50px] gap-[30px]">
                {
                    optionsCategories && (
                        <Select placeholder="КАТЕГОРИИ" options={optionsCategories} handleChange={handleChangeCat}/>
                    )
                }
                {
                    optionsTechno && (
                        <Select placeholder="ТЕХНОЛОГИИ" options={optionsTechno} handleChange={handleChangeTechno}/>
                    )
                }
                {
                    optionsServices && (
                        <Select placeholder="УСЛУГИ" options={optionsServices} handleChange={handleChangeService}/>
                    )
                }
            </div>
            <div className="flex justify-center 3xl:justify-start w-[100%] 3xl:w-[1700px] px-[20px] 3xl:mx-[auto] mt-[70px] flex-wrap gap-[55px] mb-[50px]">
                {
                    sortedPosts.length ? 
                    sortedPosts.map((project: Project) => {
                            return (
                                <motion.div variants={animCard} custom={project.id} initial="hidden" animate="visible"  className="flex flex-col gap-[20px] w-[515px]" key={project.id}>
                                    <div className="cursor-pointer">
                                        <ProjectBlock project={project} height={355} />
                                    </div>
                                    <p className="font-mono">
                                        {project.short_description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[15px]">
                                            {
                                                project.technologies?.map((techno:ITechnology) => {
                                                    return (
                                                        <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50" key={techno.id}>
                                                            <Image loader={() => techno.image_path} unoptimized src={techno.image_path} width={25} height={25} alt=""/>
                                                        </div>
                                                    )                                                    
                                                })
                                            }
                                        </div>
                                        <p className="font-mono">
                                            {formatDate(project.completed_at)}
                                        </p>
                                    </div>
                                </motion.div>     
                            )
                        })
                    :
                    'Проектов нет...'
                }
                           
            </div>
        </div>
    )
}