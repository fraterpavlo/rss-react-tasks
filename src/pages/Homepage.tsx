import React, { useContext, useEffect, useState } from 'react';
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
import Context from 'utils/contexts/homePageContext';
import { EActionKind } from 'interfaces/utils/reducer/reducer';

export const HomePage = () => {
  const [isVisibleCreateFormModal, setIsVisibleCreateFormModal] = useState(false);
  // const defaultСardsListStateData = {
  //   info: {
  //     count: 0,
  //     pages: 1,
  //     next: null,
  //     prev: null,
  //   },
  //   results: [],
  // };

  const { dispatch, state } = useContext(Context)!;

  async function fetchCharactersData(filters?: CharacterFilter) {
    const characters = await getCharacters(filters);

    characters.status === 200
      ? dispatch({
          type: EActionKind.setCardsListState,
          payload: {
            isLoaded: true,
            data: characters.data,
            error: null,
          },
        })
      : dispatch({
          type: EActionKind.setCardsListState,
          payload: {
            isLoaded: true,
            data: state.cardsListState.data,
            error: `ERROR! status:${characters.status}, message:${characters.statusMessage}`,
          },
        });
  }

  async function onNameSearchInput(value: string) {
    dispatch({
      type: EActionKind.setSearchInputValue,
      payload: value,
    });
    await fetchCharactersData({ name: value });
  }

  useEffect(() => {
    if (!state.cardsListState.isLoaded) fetchCharactersData();
  }, []);

  function createCard(newCardData: Character) {
    dispatch({
      type: EActionKind.addCardToCardsListState,
      payload: newCardData,
    });
    setIsVisibleCreateFormModal(false);
  }

  function sortCardsList(sortBy: string) {
    if (!state.cardsListState.data.results || state.cardsListState.data.results?.length < 2) return;

    switch (sortBy) {
      case ESortCardsListBy.name:
      case ESortCardsListBy.gender:
      case ESortCardsListBy.status:
        dispatch({
          type: EActionKind.sortCardsListState,
          payload: sortBy,
        });
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
        dispatch({
          type: EActionKind.setShowCardCount,
          payload: count,
        });
        break;
      default:
        return;
    }
  }

  async function changePageOfShowedCards(isNextPageBtn: boolean) {
    const newPageDataURL = isNextPageBtn
      ? state.cardsListState.data.info?.next
      : state.cardsListState.data.info?.prev;

    if (!newPageDataURL) return;

    const newPageDataResponse = await fetch(newPageDataURL);
    // const json = await newPageDataResponse.json();

    newPageDataResponse.status === 200
      ? dispatch({
          type: EActionKind.setCardsListState,
          payload: {
            isLoaded: true,
            data: await newPageDataResponse.json(),
            error: null,
          },
        })
      : dispatch({
          type: EActionKind.setCardsListState,
          payload: {
            isLoaded: true,
            data: state.cardsListState.data,
            error: `ERROR! status:${newPageDataResponse.status}, message:${
              newPageDataResponse.statusText
            } + ${newPageDataResponse.text()}`,
          },
        });

    if (state.sortBySelectValue) sortCardsList(state.sortBySelectValue);
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
        defaultValue={state.searchInputValue ?? ''}
      />
      <MySelect
        defaultValue={'sort by'}
        options={[
          { value: ESortCardsListBy.name, name: ESortCardsListBy.name },
          { value: ESortCardsListBy.gender, name: ESortCardsListBy.gender },
          { value: ESortCardsListBy.status, name: ESortCardsListBy.status },
        ]}
        value={state.sortBySelectValue || ''}
        onChange={(value: string): void => sortCardsList(value)}
      />
      <MySelect
        defaultValue={'show'}
        options={[
          { value: EShowCardCount.twenty, name: EShowCardCount.twenty },
          { value: EShowCardCount.ten, name: EShowCardCount.ten },
          { value: EShowCardCount.five, name: EShowCardCount.five },
        ]}
        value={state.showCardCountSelectValue || ''}
        onChange={(value: string): void => changeShowCardCount(value)}
      />
      <hr />
      {!state.cardsListState.isLoaded && <strong>Loading...</strong>}
      {state.cardsListState.error && <strong>{state.cardsListState.error}</strong>}
      {state.cardsListState.isLoaded && (
        <>
          <CardsList
            dataList={state.cardsListState.data.results!}
            rootClasses={'homepage__cards-area'}
          />
          <MyButton
            disabled={!state.cardsListState.data.info?.prev}
            onClick={() => changePageOfShowedCards(false)}
          >
            prev page
          </MyButton>
          <MyButton
            disabled={!state.cardsListState.data.info?.next}
            onClick={() => changePageOfShowedCards(true)}
          >
            next page
          </MyButton>
        </>
      )}
    </div>
  );
};
