import React, { useEffect, useState } from 'react';
import CardsList from 'components/cards-list';
import '../styles/pages/home-page.css';
import { ICardsDataState } from 'interfaces/pages/homePage';
import MyLazyTextInput from 'components/UI/myLazyTextInput';
import { getCharacters } from 'rickmortyapi';
import { CharacterFilter } from 'rickmortyapi/dist/interfaces';

export const HomePage = () => {
  const [cardsData, setCardsData] = useState<ICardsDataState>({
    isLoaded: false,
    data: null,
    error: null,
  });

  async function fetchCharactersData(filters?: CharacterFilter) {
    const characters = await getCharacters(filters);
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

  return (
    <div className="home-page__container" data-testid="home-page">
      <hr />
      <MyLazyTextInput
        onInputCallBack={onNameSearchInput}
        className={'home-page__search-input'}
        placeholder={'введите имя'}
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
