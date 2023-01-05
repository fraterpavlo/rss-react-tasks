import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CreateCardForm from 'components/createCardForm.tsx';
import { act } from 'react-test-renderer';

describe('test create card form', () => {
  it('with valid values', async () => {
    const mockCreateFunc = jest.fn();
    const { getByLabelText, getByRole } = render(<CreateCardForm />);

    await act(async () => {
      fireEvent.change(getByLabelText('name:'), { target: { value: 'test name' } });
      fireEvent.change(getByLabelText('gender:'), { target: { value: 'Male' } });
      fireEvent.change(getByLabelText('species:'), { target: { value: 'test species' } });
      fireEvent.change(getByLabelText('status:'), { target: { value: 'Alive' } });
      fireEvent.change(getByLabelText('origin:'), { target: { value: 'test origin' } });
      fireEvent.change(getByLabelText('location:'), { target: { value: 'test location' } });
      fireEvent.change(getByLabelText('created:'), { target: { value: '2022-10-20' } });
      fireEvent.change(getByLabelText('pick file:'), { target: { value: 'C:\\fakepath\\11.jpg' } });
    });

    await act(async () => {
      fireEvent.click(getByRole('button'));
    });

    expect(mockCreateFunc).toHaveBeenCalled();
  });
});
