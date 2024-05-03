import { Category } from "./Categories";

export type Service = {
    id: number;
    name: string;
    description: string;
    price: number;
    price_from: number;
    price_up_to: number;
    category: Category
}

export interface Services {
    data: Service[];
}
