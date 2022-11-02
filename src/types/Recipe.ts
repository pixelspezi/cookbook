export type Recipe = {
    id: number;
    title: string;
    ingredients: Ingridient[];
    steps: string[];
    rating: number;
    image?: string;
};

export type Ingridient = {
    title: string;
    amount: number;
    unit: string;
};