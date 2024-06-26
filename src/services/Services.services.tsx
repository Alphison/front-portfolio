import { Service } from "@/Types/Services"
import { axiosClassic } from "./interpretator"

export const ServicesService = {
    getAll: async () => {
        return axiosClassic.get<Service[]>('/services')
    }
} 