import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Table from '../../../components/Table'
import {mockedList, mockedCategories} from './mocks/mockedList'
import React from 'react';

 jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { termType: 'name', sort: 'desc', sortType: 'name' },
    isReady: true,
    push: jest.fn()
  }),
}));

it('loads and displays greeting', async () => {
  render(<Table categories={{}} list={[]} />)

  expect(screen.getByRole('heading')).toHaveTextContent('No matching results found.')
})

it('loads and displays greeting', async () => {
  render(<Table categories={mockedCategories} list={mockedList} />)

  expect(screen.findAllByRole('thead')).toBeInTheDocument;
  expect(screen.findAllByRole('tbody')).toBeInTheDocument
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('Alvin Satterfieldcornellbartell@connellyleannon.biz255Technician2018-07-02rejected')
})

it.only('loads and displays greeting', async () => {
  render(<Table categories={mockedCategories} list={mockedList} />)


  fireEvent.click(screen.getAllByTestId('sort-desc')[1])
  //const alo = await screen.findByTestId('select-option-name')
  //console.log(fireEvent.click(screen.getAllByTestId('sort-desc')[3]))
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('Alvin Satterfieldcornesfsdllbartell@connellyleannon.biz255Technician2018-07-02rejected')
})