import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../../../components/SearchBar';
import React from 'react';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { termType: 'name', sort: 'asc', sortType: 'name' },
    isReady: true
  })
}));

it('should have status and name select options as filter types', async () => {
  render(<SearchBar />);

  const nameTermType = screen.getByTestId('select-option-name');
  const statusTermType = screen.getByTestId('select-option-status');

  expect(nameTermType).toBeInTheDocument;
  expect(statusTermType).toBeInTheDocument;
});

it('should have searched value typed in search input', async () => {
  render(<SearchBar />);

  const searchInput = screen.queryByPlaceholderText('Search...') as HTMLInputElement;
  fireEvent.change(searchInput, { target: { value: 'Lavonda Murazik' } });

  expect(searchInput.value).toBe('Lavonda Murazik');
});
