import { EShowCardCount, ESortCardsListBy, ICardsListState } from 'interfaces/pages/homePage';
import { Character } from 'rickmortyapi/dist/interfaces';

export enum EActionKind {
  setCardsListState = 'setCardsListState',
  addCardToCardsListState = 'addCardToCardsListState',
  sortCardsListState = 'sortCardsListState',
  setSearchInputValue = 'setSearchInputValue',
  setShowCardCount = 'setShowCardCount',
  setCreateCardFormValues = 'setCreateCardFormValues',
  resetCreateCardFormValues = 'resetCreateCardFormValues',
}

export interface IAction {
  type: EActionKind;
  payload?: ICardsListState | Character | ESortCardsListBy | TCreateCardFormPayload | string;
}

export interface IState {
  cardsListState: ICardsListState;
  searchInputValue: string;
  sortBySelectValue: ESortCardsListBy | null;
  showCardCountSelectValue: EShowCardCount | null;
  createCardFormValues: TCreateCardFormPayload | null;
}

export type TCreateCardFormPayload = {
  [prop: string]: {
    value: string | FileList;
    error: string;
  };
};
