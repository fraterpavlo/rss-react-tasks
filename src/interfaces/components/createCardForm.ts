import { VoidCallbackType } from '../common';

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
}

export interface CreateCardFormProps {
  create: VoidCallbackType<ICarData>;
}
