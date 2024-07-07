
import { Category } from "./Categories";
import { IImage } from "./Images";
import { Service } from "./Services";
import { ITechnology } from "./Technology";


export type Project = {
    id: number;
    name: string;
    link_to_project: string;
    link_to_site: string;    
    description: string;
    short_description: string;  
    preview_path: string;
    price: number;
    category: Category;
    service: Service;
    visibility: number;
    completed_at: string;
    images: IImage[];
    technologies: ITechnology[];
}