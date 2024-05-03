export type Service = {
    name: string;
    description: string;
    price: number;
    price_from: number;
    price_up_to: number;
    category: {
        name: string;
    };
}

export interface Services {
    data: Service[];
}
