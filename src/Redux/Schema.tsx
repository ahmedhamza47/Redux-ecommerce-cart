import { ICardSchema } from "../Components/Carts/cart-schema";

export interface IActionSchema {
    type: string;
    payload?: any;
  }

  export interface IProductSchema {
    products: ICardSchema[];
    }