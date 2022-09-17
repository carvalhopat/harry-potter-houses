import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Table from '../../../components/Table'
import {mockedList, invertedMockedList, mockedCategories} from '../../mocks/Table/mockedList'
import React from 'react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const useRouterMock = useRouter as jest.MockedFunction<any>;

it('should show a message saying no results where found when list is empty', async () => {
  useRouterMock.mockReturnValue({
    query: { termType: 'name', sort: 'asc', sortType: 'name' },
    isReady: true,
    push: jest.fn(),
  });

  render(<Table categories={{}} list={[]} />)

  expect(screen.getByRole('heading')).toHaveTextContent('No matching results found.')
})

it('should render table with given categories and list', async () => {
  useRouterMock.mockReturnValue({
    query: { termType: 'name', sort: 'asc', sortType: 'name' },
    isReady: true,
    push: jest.fn(),
  });

  render(<Table categories={mockedCategories} list={mockedList} />)

  expect(screen.findAllByRole('thead')).toBeInTheDocument;
  expect(screen.findAllByRole('tbody')).toBeInTheDocument
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('Alta Jaskolskipeggy@bartell.co1974-08-111Administrator2018-05-21waiting')
})

it('should render sorted list after changing router param sort', async () => {
  useRouterMock.mockReturnValue({
    query: { termType: 'name', sort: 'desc', sortType: 'year_of_experience' },
    push: jest.fn(),
  });

  const {rerender} = render(<Table categories={mockedCategories} list={mockedList} />)
  rerender(<Table categories={mockedCategories} list={invertedMockedList} />)

  expect(screen.getAllByRole('row')[1]).toHaveTextContent(`Miss Christoper O'Reillygloryborer@dare.co1993-03-1215Technician2018-02-12waiting`)
})