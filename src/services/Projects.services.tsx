import { Project } from "../Types/Projects"
import { axiosClassic } from "./interpretator"

export const ProjectsServies = {
    async getAll(){
        return axiosClassic.get<Project[]>('/projects')
    },
    async getOne(id: number){
        return axiosClassic.get<Project>(`/projects/${id}`)
    }
} 