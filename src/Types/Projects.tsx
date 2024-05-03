
import { Category } from "./Categories";
import { Image } from "./Images";
import { Service } from "./Services";


export type Project = {
    id: number;
    name: string;
    description: string;
    preview_path: string;
    price: number;
    category: Category;
    service: Service;
    visibility: number;
    completed_at: string;
    images: Image[];
}

export interface IProjects {
    data: Project[];
}