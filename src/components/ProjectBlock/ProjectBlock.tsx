import { Project } from "@/Types/Projects";
import Image from "next/image";


export default function ProjectBlock({project}: {project: Project}){   

    return (
        <div>
            <div className="h-[284px] w-[100%]">
                <Image loader={() => project.preview_path} src={project.preview_path} className="rounded-[7px] w-[100%] h-[100%]" alt="" width={500} height={284}/>
            </div>
            <div className="mt-[30px] w-[100%] flex justify-between items-center">
                <h1 className="text-[24px] font-bold font-mono">{project.name}</h1>
                <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                    <p className="text-[18px] font-bold font-mono">{project.category.name}</p>
                </div>
            </div>
            <hr className="mt-[30px]"/>
        </div>
    )
}