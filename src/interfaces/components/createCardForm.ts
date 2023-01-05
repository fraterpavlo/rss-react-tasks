import { VoidCallbackType } from '../common';
import { Character } from 'rickmortyapi/dist/interfaces';

// export interface IFormValues {
//   name: string;
//   gender: string;
//   species: string;
//   status: string;
//   origin: string;
//   location: string;
//   created: string;
//   image: string;
// }

// export interface ICreatedCardData {
//   id: string;
//   name: string;
//   type: string;
//   gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
//   species: string;
//   status: 'Dead' | 'Alive' | 'unknown';
//   origin: string;
//   location: string;
//   created: string;
//   image: string;
// }

export interface CreateCardFormProps {
  create: VoidCallbackType<Character>;
}
