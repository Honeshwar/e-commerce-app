export interface Products {
  id: number;
  quantity: number;
  price: number;
  title: string;
  desc: string;
  img: string;
}
export interface CartStateType {
  products: Products[];
}
