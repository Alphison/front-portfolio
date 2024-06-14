import { Category } from "@/Types/Categories"
import { Project } from "../Types/Projects"
import { axiosClassic } from "./interpretator"
import { ITechnology } from "@/Types/Technology"

export const TechnologiesServies = {
    async getAll(){
        return axiosClassic.get<ITechnology[]>('/technologies')
    }
} 