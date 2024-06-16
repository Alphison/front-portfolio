"use client"

import { Project } from "@/Types/Projects";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectBlock({project, height}: {project: Project, height: number}){   
    const router = useRouter()

    return (
        <div>
            <div className="w-[100%] overflow-hidden rounded-[7px] cursor-pointer" style={{height}} onClick={() => router.push(`/projects/${project.id}`)}>
                <Image loader={() => project.preview_path} unoptimized src={project.preview_path} className="rounded-[7px] w-[100%] h-[100%] object-cover transition-all duration-500 hover:scale-110" alt="" width={500} height={height}/>
            </div>
            <div className="mt-[30px] w-[100%] flex flex-col mi:flex-row gap-3 items-start mi:items-center justify-between">
                <h1 className="text-[24px] font-bold font-mono">{project.name}</h1>
                <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                    <p className="text-[18px] font-bold font-mono">{project.service.category.name}</p>
                </div>
            </div>
            <hr className="mt-[30px]"/>
        </div>
    )
}