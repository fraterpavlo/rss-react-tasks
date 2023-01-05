import React from 'react';
import { render } from '@testing-library/react';
import Card from 'components/card';

const testCarData = {
  id: 999,
  name: 'Test card name',
  status: 'Test',
  species: 'Test',
  type: 'Test',
  gender: 'Test',
  origin: {
    name: 'Test',
    url: 'https://rickandmortyapi.com/api/location/64',
  },
  location: {
    name: 'Test',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/27'],
  url: 'https://rickandmortyapi.com/api/character/361',
  created: '2018-01-10T18:20:41.703Z',
};

describe('test card', () => {
  it('test card match snapshot', () => {
    const card = render(<Card cardData={testCarData} />);
    expect(card).toMatchSnapshot();
  });
});
