import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchField from 'components/searchField';

describe('test searchField', () => {
  it('searchField have label', () => {
    render(<SearchField passingSearchStateToParent={() => {}} />);
    const label = screen.getByLabelText(/Search field$/i);
    expect(label).toBeInTheDocument();
  });

  it('searchField match snapshot', () => {
    // const searchField = renderer
    //   .create(<SearchField passingSearchStateToParent={() => {}} />)
    //   .toJSON();
    // const searchField = shallow(<SearchField passingSearchStateToParent={() => {}} />);
    const searchField = render(<SearchField passingSearchStateToParent={() => {}} />);
    expect(searchField).toMatchSnapshot();
  });
});
