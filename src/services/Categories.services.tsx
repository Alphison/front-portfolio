import { Category } from "@/Types/Categories"
import { Project } from "../Types/Projects"
import { axiosClassic } from "./interpretator"

export const CategporiesServies = {
    async getAll(){
        return axiosClassic.get<Category[]>('/categories')
    }
} 