import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from 'pages/Homepage.tsx';

// jest.mock('rickmortyapi');
// import { getCharacters } from 'rickmortyapi';
// const {getCharacters} = jest.requireActual('rickmortyapi');

const response = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=20',
    prev: 'https://rickandmortyapi.com/api/character/?page=18',
  },
  results: [
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
  ],
};
// const getCharacters = jest.fn().mockResolvedValue(response);
jest.mock('rickmortyapi', () => ({
  getCharacters: jest.fn(() => response),
}));

describe('test cardsList', () => {
  // let response;
  // beforeAll(() => {
  //   response = {
  //     info: {
  //       count: 826,
  //       pages: 42,
  //       next: 'https://rickandmortyapi.com/api/character/?page=20',
  //       prev: 'https://rickandmortyapi.com/api/character/?page=18',
  //     },
  //     results: [
  //       {
  //         id: 1,
  //         name: 'Rick Sanchez',
  //         status: 'Alive',
  //         species: 'Human',
  //         type: '',
  //         gender: 'Male',
  //         origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
  //         location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
  //         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //         url: 'https://rickandmortyapi.com/api/character/1',
  //         created: '2017-11-04T18:48:46.250Z',
  //       },
  //       {
  //         id: 2,
  //         name: 'Morty Smith',
  //         status: 'Alive',
  //         species: 'Human',
  //         type: '',
  //         gender: 'Male',
  //         origin: { name: 'unknown', url: '' },
  //         location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
  //         image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //         url: 'https://rickandmortyapi.com/api/character/2',
  //         created: '2017-11-04T18:50:21.651Z',
  //       },
  //       {
  //         id: 3,
  //         name: 'Summer Smith',
  //         status: 'Alive',
  //         species: 'Human',
  //         type: '',
  //         gender: 'Female',
  //         origin: {
  //           name: 'Earth (Replacement Dimension)',
  //           url: 'https://rickandmortyapi.com/api/location/20',
  //         },
  //         location: {
  //           name: 'Earth (Replacement Dimension)',
  //           url: 'https://rickandmortyapi.com/api/location/20',
  //         },
  //         image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  //         url: 'https://rickandmortyapi.com/api/character/3',
  //         created: '2017-11-04T19:09:56.428Z',
  //       },
  //     ],
  //   };
  //   // const getCharacters = jest.fn().mockResolvedValue(response);
  //   jest.mock('rickmortyapi', () => ({
  //     getCharacters: jest.fn(() => response),
  //   }));
  // });

  it('test HomePage fetch data and render cards', async () => {
    render(<HomePage />);
    const cards = await screen.findAllByTestId('cardslist-item');
    expect(cards.length).toBe(3);
    expect(getCharacters).toBeCalledTimes(1);
  });

  // it('test cardsList contain correct number of card', () => {
  //   render(<CardsList dataList={carsDataList} />);
  //   const cardsList = screen.getAllByAltText('car');
  //   expect(cardsList.length).toBe(carsDataList.length);
  // });
});
