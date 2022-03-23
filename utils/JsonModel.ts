import "reflect-metadata";

export default class JsonModel {
    public carrousel?: Carrousel[];
    public articles?: Articles[];
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