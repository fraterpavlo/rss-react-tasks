export interface ICarData {
  id: string;
  brand: string;
  model: string;
  country: string;
  count: string;
  year: number;
  type: string;
  color: string;
  price: number;
  electric: boolean;
  imageSrc?: string;
}

export interface CardProps {
  cardData: ICarData;
}
