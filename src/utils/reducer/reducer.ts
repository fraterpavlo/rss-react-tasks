import { ESortCardsListBy, ICardsListState } from 'interfaces/pages/homePage';
import {
  EActionKind,
  IAction,
  IState,
  TCreateCardFormPayload,
} from 'interfaces/utils/reducer/reducer';
import { Character } from 'rickmortyapi/dist/interfaces';
import { EShowCardCount } from '../../interfaces/pages/homePage';

export default function (state: IState, action: IAction): IState {
  switch (action.type) {
    case EActionKind.setCardsListState:
      return {
        ...state,
        cardsListState: action.payload as ICardsListState,
      };
    case EActionKind.addCardToCardsListState:
      return {
        ...state,
        cardsListState: {
          ...state.cardsListState,
          isLoaded: true,
          data: {
            ...state.cardsListState.data,
            results: [action.payload as Character, ...state.cardsListState.data.results!],
          },
        },
      };
    case EActionKind.sortCardsListState:
      return {
        ...state,
        sortBySelectValue: action.payload as ESortCardsListBy,
        cardsListState: {
          ...state.cardsListState,
          data: {
            ...state.cardsListState.data,
            results: state.cardsListState.data.results!.sort((a: Character, b: Character) =>
              a[action.payload as ESortCardsListBy] > b[action.payload as ESortCardsListBy] ? 1 : -1
            ),
          },
        },
      };
    case EActionKind.setSearchInputValue:
      return {
        ...state,
        searchInputValue: action.payload as string,
      };
    case EActionKind.setShowCardCount:
      return {
        ...state,
        showCardCountSelectValue: action.payload as EShowCardCount,
      };
    case EActionKind.setCreateCardFormValues:
      console.log(state.createCardFormValues);
      return {
        ...state,
        createCardFormValues: {
          ...state.createCardFormValues,
          ...(action.payload as TCreateCardFormPayload),
        },
      };
    case EActionKind.resetCreateCardFormValues:
      return {
        ...state,
        createCardFormValues: {},
      };

    default:
      return state;
  }
}
