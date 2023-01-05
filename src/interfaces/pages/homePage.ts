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

export interface ICardsListState {
  isLoaded: boolean;
  data: Info<Character[]>;
  error: null | string;
}

export enum ESortCardsListBy {
  name = 'name',
  gender = 'gender',
  status = 'status',
}

export enum EShowCardCount {
  twenty = '20',
  ten = '10',
  five = '5',
}
