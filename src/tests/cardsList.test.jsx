import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardsList from 'components/cards-list';

describe('test cardsList', () => {
  let cardsDataList;
  beforeAll(() => {
    cardsDataList = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
        location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: { name: 'unknown', url: '' },
        location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        url: 'https://rickandmortyapi.com/api/character/2',
        created: '2017-11-04T18:50:21.651Z',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        url: 'https://rickandmortyapi.com/api/character/3',
        created: '2017-11-04T19:09:56.428Z',
      },
    ];
  });

  it('test cardsList match snapshot', () => {
    const cardsList = render(<CardsList dataList={cardsDataList} />);
    expect(cardsList).toMatchSnapshot();
  });

  it('test cardsList contain correct number of card', async () => {
    render(<CardsList dataList={cardsDataList} />);
    const cardsList = await screen.findAllByTestId('cardslist-item');
    expect(cardsList.length).toBe(cardsDataList.length);
  });

  it('test show modal detailed card after click of card', async () => {
    render(<CardsList dataList={cardsDataList} />);
    const cardOfRickSanchez = await screen.findByText('Rick Sanchez');
    fireEvent.click(cardOfRickSanchez);
    const modalDetailedCard = await screen.findByTestId('1');
    expect(modalDetailedCard).toBeInTheDocument();
  });
});
