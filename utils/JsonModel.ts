import "reflect-metadata";

export default interface JsonModel {
    carrousel?: Carrousel[];
    articles?: Articles[];
}

export interface Carrousel {
    id?: number;
    name?: string;
    title?: string;
}

export interface Articles {
    id?: number;
    img?: string;
    name?: string;
    excerpt?: string;
    slug?: string;
    content?: string;
}