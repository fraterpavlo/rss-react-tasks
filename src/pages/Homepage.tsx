import React, { useEffect, useState } from 'react';
import CreateCardForm from 'components/createCardForm';
import CardsList from 'components/cards-list';
import '../styles/pages/home-page.css';
import { ICardsDataState } from 'interfaces/pages/homePage';
import MyLazyTextInput from 'components/UI/myLazyTextInput';
import { getCharacters } from 'rickmortyapi';
import { CharacterFilter } from 'rickmortyapi/dist/interfaces';
import { Character } from 'rickmortyapi/dist/interfaces';
import MyModal from 'components/UI/myModal';
import MyButton from 'components/UI/myButton';

export const HomePage = () => {
  const [isVisibleCreateFormModal, setIsVisibleCreateFormModal] = useState(false);
  const [cardsData, setCardsData] = useState<ICardsDataState>({
    isLoaded: false,
    data: null,
    error: null,
  });

  async function fetchCharactersData(filters?: CharacterFilter) {
    const characters = await getCharacters(filters);
    console.log(characters);

    characters.status === 200
      ? setCardsData({
          isLoaded: true,
          data: characters.data,
          error: null,
        })
      : setCardsData({
          isLoaded: true,
          data: null,
          error: `ERROR! status:${characters.status}, message:${characters.statusMessage}`,
        });
  }

  async function onNameSearchInput(value: string) {
    await fetchCharactersData({ name: value });
  }

  useEffect(() => {
    fetchCharactersData();
  }, []);

  function createCard(newCardData: Character) {
    setCardsData({
      isLoaded: true,
      data: {
        info: cardsData.data?.info,
        results: cardsData.data ? [newCardData, ...cardsData.data.results!] : [newCardData],
      },
      error: cardsData.error,
    });
    setIsVisibleCreateFormModal(false);
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
      />
      <hr />
      {!cardsData.isLoaded && <strong>Loading...</strong>}
      {cardsData.error && <strong>{cardsData.error}</strong>}
      {cardsData.data && (
        <CardsList dataList={cardsData.data.results!} rootClasses={'homepage__cards-area'} />
      )}
    </div>
  );
};
