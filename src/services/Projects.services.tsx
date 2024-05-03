import { IProjects} from "../Types/Projects"
import { axiosClassic } from "./interpretator"

export const ProjectsServies = {
    async getAll(){
        return axiosClassic.get<IProjects>('/projects')
    }
} 