import React, { useEffect, useState } from 'react';
import CreateCardForm from 'components/createCardForm';
import CardsList from 'components/cards-list';
import '../styles/pages/home-page.css';
import { EShowCardCount, ESortCardsListBy } from 'interfaces/pages/homePage';
import MyLazyTextInput from 'components/UI/myLazyTextInput';
import { getCharacters } from 'rickmortyapi';
import { CharacterFilter } from 'rickmortyapi/dist/interfaces';
import { Character } from 'rickmortyapi/dist/interfaces';
import MyModal from 'components/UI/myModal';
import MyButton from 'components/UI/myButton';
import MySelect from '../components/UI/mySelect';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'utils/reducer/reduxToolKit';
import {
  setCardsListState,
  addCardToCardsListState,
  sortCardsListState,
  setSearchInputValue,
  setShowCardCount,
} from 'utils/reducer/reducer';

export const HomePage = () => {
  const [isVisibleCreateFormModal, setIsVisibleCreateFormModal] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState): RootState => state);

  async function fetchCharactersData(filters?: CharacterFilter) {
    const characters = await getCharacters(filters);

    characters.status === 200
      ? dispatch(
          setCardsListState({
            isLoaded: true,
            data: characters.data,
            error: null,
          })
        )
      : dispatch(
          setCardsListState({
            isLoaded: true,
            data: state.main.cardsListState.data,
            error: `ERROR! status:${characters.status}, message:${characters.statusMessage}`,
          })
        );
  }

  async function onNameSearchInput(value: string) {
    dispatch(setSearchInputValue(value));
    await fetchCharactersData({ name: value });
  }

  useEffect(() => {
    if (!state.main.cardsListState.isLoaded) fetchCharactersData();
  }, []);

  function createCard(newCardData: Character) {
    dispatch(addCardToCardsListState(newCardData));
    setIsVisibleCreateFormModal(false);
  }

  function sortCardsList(sortBy: string) {
    if (
      !state.main.cardsListState.data.results ||
      state.main.cardsListState.data.results?.length < 2
    )
      return;

    switch (sortBy) {
      case ESortCardsListBy.name:
      case ESortCardsListBy.gender:
      case ESortCardsListBy.status:
        dispatch(sortCardsListState(sortBy));
        break;
      default:
        return;
    }
  }

  function changeShowCardCount(count: string) {
    switch (count) {
      case EShowCardCount.twenty:
      case EShowCardCount.ten:
      case EShowCardCount.five:
        dispatch(setShowCardCount(count));
        break;
      default:
        return;
    }
  }

  async function changePageOfShowedCards(isNextPageBtn: boolean) {
    const newPageDataURL = isNextPageBtn
      ? state.main.cardsListState.data.info?.next
      : state.main.cardsListState.data.info?.prev;

    if (!newPageDataURL) return;

    const newPageDataResponse = await fetch(newPageDataURL);
    // const json = await newPageDataResponse.json();

    newPageDataResponse.status === 200
      ? dispatch(
          setCardsListState({
            isLoaded: true,
            data: await newPageDataResponse.json(),
            error: null,
          })
        )
      : dispatch(
          setCardsListState({
            isLoaded: true,
            data: state.main.cardsListState.data,
            error: `ERROR! status:${newPageDataResponse.status}, message:${
              newPageDataResponse.statusText
            } + ${newPageDataResponse.text()}`,
          })
        );

    if (state.main.sortBySelectValue) sortCardsList(state.main.sortBySelectValue);
  }

  return (
    <div className="home-page__container" data-testid="home-page">
      <MyButton onClick={() => setIsVisibleCreateFormModal(true)}>Create card</MyButton>
      <MyModal visible={isVisibleCreateFormModal} setVisible={setIsVisibleCreateFormModal}>
        <CreateCardForm create={createCard} />
      </MyModal>
      <hr />
      <MyLazyTextInput
        onInputCallBack={onNameSearchInput}
        className={'home-page__search-input'}
        placeholder={'Search by name'}
        defaultValue={state.main.searchInputValue ?? ''}
      />
      <MySelect
        defaultValue={'sort by'}
        options={[
          { value: ESortCardsListBy.name, name: ESortCardsListBy.name },
          { value: ESortCardsListBy.gender, name: ESortCardsListBy.gender },
          { value: ESortCardsListBy.status, name: ESortCardsListBy.status },
        ]}
        value={state.main.sortBySelectValue || ''}
        onChange={(value: string): void => sortCardsList(value)}
      />
      <MySelect
        defaultValue={'show'}
        options={[
          { value: EShowCardCount.twenty, name: EShowCardCount.twenty },
          { value: EShowCardCount.ten, name: EShowCardCount.ten },
          { value: EShowCardCount.five, name: EShowCardCount.five },
        ]}
        value={state.main.showCardCountSelectValue || ''}
        onChange={(value: string): void => changeShowCardCount(value)}
      />
      <hr />
      {!state.main.cardsListState.isLoaded && <strong>Loading...</strong>}
      {state.main.cardsListState.error && <strong>{state.main.cardsListState.error}</strong>}
      {state.main.cardsListState.isLoaded && (
        <>
          <CardsList
            dataList={state.main.cardsListState.data.results!}
            rootClasses={'homepage__cards-area'}
          />
          <MyButton
            disabled={!state.main.cardsListState.data.info?.prev}
            onClick={() => changePageOfShowedCards(false)}
          >
            prev page
          </MyButton>
          <MyButton
            disabled={!state.main.cardsListState.data.info?.next}
            onClick={() => changePageOfShowedCards(true)}
          >
            next page
          </MyButton>
        </>
      )}
    </div>
  );
};
