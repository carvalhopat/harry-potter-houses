import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../../../components/SearchBar'
import React from 'react';

 jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { termType: 'name', sort: 'asc', sortType: 'name' },
    isReady: true
  }),
}));

it('loads and displays greeting', async () => {
  const {container, debug} = render(<SearchBar />)

  expect(screen.findByTestId('select-option-name')).toBeInTheDocument;
  expect(screen.findByTestId('select-option-status')).toBeInTheDocument;
})
