import { ESortCardsListBy, ICardsListState } from 'interfaces/pages/homePage';
import { IAction, IState, TCreateCardFormPayload } from 'interfaces/utils/reducer/reducer';
import { Character } from 'rickmortyapi/dist/interfaces';
import { EShowCardCount } from '../../interfaces/pages/homePage';

const defaultState: IState = {
  cardsListState: {
    isLoaded: false,
    data: {
      info: {
        count: 0,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [],
    },
    error: null,
  },
  searchInputValue: '',
  sortBySelectValue: null,
  showCardCountSelectValue: null,
  createCardFormValues: null,
};

import { createSlice } from '@reduxjs/toolkit';

const reducerSlice = createSlice({
  name: 'reducerSlice',
  initialState: defaultState,
  reducers: {
    setCardsListState(state: IState, action: IAction) {
      state.cardsListState = action.payload as ICardsListState;
    },
    addCardToCardsListState(state: IState, action: IAction) {
      state.cardsListState.data.results!.unshift(action.payload as Character);
    },
    sortCardsListState(state: IState, action: IAction) {
      state.sortBySelectValue = action.payload as ESortCardsListBy;
      state.cardsListState.data.results = state.cardsListState.data.results!.sort(
        (a: Character, b: Character) =>
          a[action.payload as ESortCardsListBy] > b[action.payload as ESortCardsListBy] ? 1 : -1
      );
    },
    setSearchInputValue(state: IState, action: IAction) {
      state.searchInputValue = action.payload as string;
    },
    setShowCardCount(state: IState, action: IAction) {
      state.showCardCountSelectValue = action.payload as EShowCardCount;
    },
    setCreateCardFormValues(state: IState, action: IAction) {
      state.createCardFormValues = {
        ...state.createCardFormValues,
        ...(action.payload as TCreateCardFormPayload),
      };
    },
    resetCreateCardFormValues(state: IState) {
      state.createCardFormValues = {};
    },
  },
});

export const {
  setCardsListState,
  addCardToCardsListState,
  sortCardsListState,
  setSearchInputValue,
  setShowCardCount,
  setCreateCardFormValues,
  resetCreateCardFormValues,
} = reducerSlice.actions;
export default reducerSlice.reducer;
