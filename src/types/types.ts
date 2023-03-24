export interface IParams {
    tabIndex: number;
    search?: string;
    categories?: string;
    order?: string;
    numberResults: number;
}

export interface IData {
    id: string;
    volumeInfo: any[];

    title: string;
    authors: string[];
    categories: string[];
    imageLinks?: any;
    description?: string;
}

export interface ILocal {
    tabIndex: number;
    search?: string;
    categories?: string;
    order?: string;
    numberResults: number;
    resetflag: boolean;
}

export interface IBook {
    totalItems: number;
    items: IData;
}