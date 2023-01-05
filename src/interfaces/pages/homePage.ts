// export interface ICarData {
//   id: string;
//   brand: string;
//   model: string;
//   country: string;
//   count: string;
//   year: number;
//   type: string;
//   color: string;
//   price: number;
//   electric: boolean;
// }

import { Character, Info } from 'rickmortyapi/dist/interfaces';

export interface ICardsDataState {
  isLoaded: boolean;
  data: null | Info<Character[]>;
  error: null | string;
}
