
import { Image } from "./Images";
import { Service } from "./Services";


export type Project = {
    name: string;
    description: string;
    preview_path: string;
    price: number;
    category: string;
    service: Service;
    visibility: number;
    completed_at: string;
    images: Image[];
}

export interface IProjects {
    data: Project[];
}