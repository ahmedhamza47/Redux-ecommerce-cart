export interface ICartSchema  extends ICardSchema{
    card: ICardSchema;
    id: string;
    name: string;
    price: number;
    qty: number;
    src: string;
}
export interface ICardSchema {
            name: string;
            price: number;
            id: string;
            src: string;
            qty : number;
    
}




